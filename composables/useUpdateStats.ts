import { Guild } from 'discord.js/typings';

export default function (client) {
  const guild: Guild = client.guilds.cache.find(
    (guild) => guild.id === process.env.DISCORD_GUILD_ID
  ) as Guild;

  if (!guild.available) return;

  const channel = client.channels.cache.get(
    process.env.DISCORD_STATS_CHANNEL_ID
  );

  if (!channel) return;

  const userAmount = guild.memberCount;
  const channelName = `${process.env.DISCORD_STATS_CHANNEL_NAME} ${userAmount}`;

  channel.setName(channelName);
}
