import { TextChannel } from 'discord.js/typings';
import useUpdateStats from '../composables/useUpdateStats';

export default (client) =>
  client.on('guildMemberAdd', (member) => {
    const channel: TextChannel = member.guild.channels.cache.find(
      (channel) => channel.id === process.env.DISCORD_WELCOME_CHANNEL_ID
    ) as TextChannel;

    if (!channel) return;

    channel.send(`Welcome to the server, ${member}`);

    useUpdateStats(client);
  });
