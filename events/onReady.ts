import { TextChannel } from 'discord.js/typings';
import useUpdateStats from '../composables/useUpdateStats';

export default (client) =>
  client.on('ready', () => {
    console.info(`Discord bot ready. Logged in as ${client.user.tag}! 🚀`);

    const channel: TextChannel = client.channels.cache.get(
      process.env.DISCORD_BOT_DEV_CHANNEL_ID
    ) as TextChannel;

    if (!channel) return;

    channel.send(`Tadaima mina-san!`);

    useUpdateStats(client);
  });
