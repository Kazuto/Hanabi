import { Client, TextChannel } from 'discord.js';

export default async (client: Client) => {
  if (client.user === null || client.user.tag === null) return;

  const { DISCORD_BOT_DEV_CHANNEL_ID: channelId } = process.env;

  if (channelId === undefined) return;

  console.info(`Discord bot ready. Logged in as ${client.user.tag}! 🚀`);

  const channel: TextChannel = client.channels.cache.get(
    channelId
  ) as TextChannel;

  if (!channel) return;

  await channel.send(`Tadaima mina-san!`);
};
