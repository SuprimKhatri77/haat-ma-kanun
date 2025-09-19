// lib/api.ts
export async function fetchStreamToken(userId: string): Promise<string> {
  const res = await fetch("/api/stream", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Failed to fetch Stream token");
  }

  const data = await res.json();
  return data.token;
}
