import { ChatGPTAPI } from "chatgpt";

const postPrompt = async (req, res) => {
  try {
    const { message } = req.body;

    const api = new ChatGPTAPI({
      apiKey: process.env.OPEN_AI_KEY,
    });

    const gptResponse = await api.sendMessage(message);
    const parsedResult = JSON.parse(gptResponse?.text);

    res.status(200).json({
      status: 200,
      message: "success",
      data: { result: parsedResult },
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "INTERNAL_SERVER_ERROR",
      error,
      data: null,
    });
    console.log("Error in postPrompt, GPT.js:", error);
  }
};

export { postPrompt };
