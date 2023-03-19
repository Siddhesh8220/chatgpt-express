const openai = require("../../config/chatGpt");

const getChatGptResponse = async () => {
  return openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "You needs help escaping?" }],
  });
};


module.exports = {
    getChatGptResponse
}