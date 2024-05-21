export async function getHomeData() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/664770665589bea8ace01865?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`,
      { next: { revalidate: 120 } }
    );

    if (!response.ok) {
      throw new Error("Failed to get home data");
    }

    return response.json();
  } catch (error) {
    throw new Error("Failed to get home data: " + error);
  }
}

export async function getSubmenuData() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&read_key=${process.env.READ_KEY}&depth=1&props=slug,title`,
      { next: { revalidate: 120 } }
    );

    if (!response.ok) {
      throw new Error("Failed to get submenu data");
    }

    return response.json();
  } catch (error) {
    throw new Error("Failed to get submenu data: " + error);
  }
}

export async function getPageDataBySlug(slug: string) {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`;
  const queryParams = new URLSearchParams({
    query: JSON.stringify({
      slug: slug,
    }),
    props: "slug,title,content,metadata",
    read_key: process.env.READ_KEY as string,
  });
  const url = `${baseUrl}?${queryParams.toString()}`;

  try {
    const response = await fetch(url, { next: { revalidate: 120 } });

    if (!response.ok) {
      throw new Error("Failed to get page data");
    }

    return response.json();
  } catch (error) {
    throw new Error("Failed to get page data: " + error);
  }
}
