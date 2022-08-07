if (!process.env["DISCORD_BOT_ID"]) throw new Error("DISCORD_BOT_ID is not set");
if (!process.env["COUNTR_API_ENDPOINT"]) throw new Error("COUNTR_API_ENDPOINT is not set");
if (!process.env["BOTBLOCK_KEYS"]) throw new Error("BOTBLOCK_KEYS is not set");

export const botId = process.env["DISCORD_BOT_ID"];
export const endpoint = process.env["COUNTR_API_ENDPOINT"];
export const keys = JSON.parse(process.env["BOTBLOCK_KEYS"]) as Record<string, string>;
