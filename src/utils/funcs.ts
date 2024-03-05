export const GET = async (endpoint: any) => {
  const res = await fetch(endpoint);
  const data = await res.json();
  return data;
};
