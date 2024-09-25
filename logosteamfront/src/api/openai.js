import axios from "axios";

const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;

const openaiApi = axios.create({
  baseURL: "https://api.openai.com/v1/engines/davinci-codex/completions",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${openaiApiKey}`,
  },
});

export default openaiApi;
