const specialCases: Record<string, string> = {
  tshirt: "T-shirt",
};

export const formatSegment = (segment: string) => {
  const clean = decodeURIComponent(segment).replace(/-\d+$/, "");
  if (specialCases[clean]) return specialCases[clean];

  return clean.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};
