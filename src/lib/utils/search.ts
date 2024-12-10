export function normalizeSearchText(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ');
}

export function searchInText(searchTerms: string[], text: string): boolean {
  const normalizedText = normalizeSearchText(text);
  return searchTerms.every(term => 
    normalizeSearchText(term).split(' ').every(word => 
      normalizedText.includes(word)
    )
  );
}