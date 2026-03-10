const BASE_URL = "https://the-trivia-api.com/v2/questions";

const CATEGORY_MAP = {
  science: "science",
  maths: "mathematics",
  general_knowledge: "general_knowledge",
  geography: "geography",
};

export async function fetchQuestions(category) {
  const apiCategory = CATEGORY_MAP[category];
  if (!apiCategory) throw new Error(`Unknown category: "${category}"`);

  const res = await fetch(`${BASE_URL}?categories=${apiCategory}&limit=10`);
  if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

  const data = await res.json();
  if (!Array.isArray(data) || data.length === 0) throw new Error("No questions returned.");

  // Return raw API fields — no renaming
  return data;
}