import { MetadataRoute } from "next";
import { projectsData } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sys-trol.com";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/services/automation-consultancy",
    "/services/trading",
    "/projects",
    "/clients",
    "/careers",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.9 : 0.8,
  }));

  const projectRoutes = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
