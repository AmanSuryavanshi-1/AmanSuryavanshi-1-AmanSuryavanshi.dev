import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ero5c9mt",
  dataset: "production",
  apiVersion: "2023-10-01",
  useCdn: false,
});

