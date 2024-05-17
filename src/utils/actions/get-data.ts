export async function getHomeData() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/664770665589bea8ace01865?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`
    );

    if (!response.ok) {
      throw new Error("Failed to get home data");
    }

    return response.json();
  } catch (error) {
    throw new Error("Failed to get home data: " + error);
  }
}
