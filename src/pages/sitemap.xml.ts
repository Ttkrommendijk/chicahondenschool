import type { APIRoute } from "astro";
import { dienstenIndexPage, serviceList } from "../data/diensten";
import { site } from "../data/site";

const staticRoutes = [
  "/",
  "/contact/",
  "/over/",
  "/reviews/",
  "/privacy/",
  "/algemene-voorwaarden/",
  ...dienstenIndexPage.categories.map((category) => category.href),
  ...serviceList.map((service) => service.href),
];

const uniqueRoutes = [...new Set(staticRoutes)];

export const GET: APIRoute = () => {
  const urls = uniqueRoutes
    .map((path) => {
      const loc = new URL(path, site.url).toString();
      return `<url><loc>${loc}</loc></url>`;
    })
    .join("");

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
