import { createClient } from "next-sanity";

//...

export const client = createClient({
  projectId: "uhk70a7q",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
});
