import OpenAI from "openai";
import { OPENAPI_KEY } from "./constants";

const openaiConfig = new OpenAI({
	apiKey: OPENAPI_KEY,
	dangerouslyAllowBrowser: true,
});

export default openaiConfig;
