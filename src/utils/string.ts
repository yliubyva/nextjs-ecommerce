const specialCases: Record<string, string> = {
  tshirt: "T-shirt",
};

export const formatSegment = (segment: string) => {
  const clean = decodeURIComponent(segment).replace(/-\d+$/, "");
  if (specialCases[clean]) return specialCases[clean];

  return firstLetterToUpperCase(clean.replace(/-/g, " "));
};

export const firstLetterToUpperCase = (word: string) => {
  return word.replace(/\b\w/g, (w) => w.toUpperCase());
};
