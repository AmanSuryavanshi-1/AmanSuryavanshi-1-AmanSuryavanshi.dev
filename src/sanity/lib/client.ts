import { createClient } from "next-sanity";

// Read-only client for general use
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  apiVersion: "2023-10-01",
  useCdn: false,
});

// Client with write token for mutations
export const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  apiVersion: "2023-10-01",
  token: process.env.NEXT_PUBLIC_SANITY_API_WRITE_TOKEN, // Changed to NEXT_PUBLIC prefix
  useCdn: false,
});

// Add error checking for the write token
if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET) {
  console.error("Sanity configuration error: Missing projectId or dataset.");
}

if (!process.env.NEXT_PUBLIC_SANITY_API_WRITE_TOKEN) {
  console.error("Sanity configuration error: Missing write token. View counts will not be updated.");
}
