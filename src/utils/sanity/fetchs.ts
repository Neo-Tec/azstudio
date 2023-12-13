import { client } from "./client";

const cacheConfig = {
  next: {
    revalidate: 1, // look for updates to revalidate cache every hour
  },
};

export async function getAboutMe() {
  const query = `
    *[_type == "aboutMe"][0] {
        name,
        date_of_birth,
        email,
        phone,
        address,
        zip_code,
      }`;

  const data = await client.fetch(query, cacheConfig);
  return data;
}
