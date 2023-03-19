const chatGptHelper = require("./helper.js");

const chat = async (req, res, next) => {
  try {
    const response = await chatGptHelper.getChatGptResponse()
    res.json({message: response.data.choices[0].message});
  } catch (error) {
    console.log("Something went wrong!🥲 :" + error);
    res.status(500).json({ error: "Something went wrong!🥲" });
  }
};

module.exports = {
  chat,
};
