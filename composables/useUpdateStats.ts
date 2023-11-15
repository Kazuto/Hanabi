import { Guild, Client, VoiceChannel, TextChannel } from 'discord.js';

export default async function (client: Client) {
  const {
    DISCORD_GUILD_ID: guildId,
    DISCORD_STATS_CHANNEL_ID: channelId,
    DISCORD_STATS_CHANNEL_NAME: channelName,
  } = process.env;

  const guild: Guild = client.guilds.cache.find(
    (guild: Guild) => guild.id === guildId
  ) as Guild;

  if (!guild.available) return;

  if (channelId === undefined) return;

  const channel: VoiceChannel | TextChannel = client.channels.cache.get(
    channelId
  ) as VoiceChannel | TextChannel;

  if (!channel) return;

  await channel.setName(`${channelName ?? 'Users'} ${guild.memberCount}`);
}
