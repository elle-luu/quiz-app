export const API_URLS = {
  science: "https://opentdb.com/api.php?amount=10&category=17&type=multiple",
  maths: "https://opentdb.com/api.php?amount=10&category=19&type=multiple",
  general_knowledge: "https://opentdb.com/api.php?amount=10&category=9&type=multiple",
  geography: "https://opentdb.com/api.php?amount=10&category=22&type=multiple",
};

export const fetchQuestions = async (category) => {
    const response = await fetch(API_URLS[category]);
    const data = await response.json();
    return data.results;
};