export async function showServices(pdata: string) {
  const response = await fetch(`/api/dayserv?day=${pdata}`, {
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

export async function fetchService(pdata: string) {
  const response = await fetch(`/api/services?id=${pdata}`, {
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
