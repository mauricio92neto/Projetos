export const getTokenFromApi = async () => {
  const apiUrl = 'https://opentdb.com/api_token.php?command=request';
  const getToken = await fetch(apiUrl);
  const data = await getToken.json();
  return data;
};

export const getQuestionsFromApi = async (token) => {
  const apiUrl = `https://opentdb.com/api.php?amount=5&token=${token}`;
  const data = await fetch(apiUrl);
  const questions = await data.json();
  return questions;
};
