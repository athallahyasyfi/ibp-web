import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemas } from "./sanity/schemas";

export default defineConfig({
  name: "ibp-studio",
  title: "PT. IDEAA BUDI PERKASA CMS",

  // Credentials with fallbacks
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "mock-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  basePath: "/studio",

  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: "2026-06-04" }),
  ],

  schema: {
    types: schemas,
  },
});
