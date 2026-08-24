import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0e1116",
    theme_color: "#0e1116",
    lang: siteConfig.language,
    icons: [
      {
        src: "/images/logo/png/threadflow-app-icon-256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/images/logo/png/threadflow-app-icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
