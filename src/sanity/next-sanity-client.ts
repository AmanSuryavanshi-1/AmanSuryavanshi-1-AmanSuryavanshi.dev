import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ero5c9mt",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

