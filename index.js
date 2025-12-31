import { Client, GatewayIntentBits } from "discord.js";
import express from "express";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("clientReady", () => {
  console.log("บอทออนไลน์แล้ว");
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content === "!ping") {
    message.reply("pong");
  }
});

client.login(process.env.TOKEN);

// กันบอทหลับ
const app = express();
app.get("/", (req, res) => {
  res.send("bot running");
});
app.listen(3000);