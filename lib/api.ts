export async function showServices(pdata: string) {
  const response = await fetch(`/api/services?day=${pdata}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const result = await response.json();
  if (result.error) {
    console.log(result.error);
    throw new Error("Failed to Get API");
  }
  return result;
}
