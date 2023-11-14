import { TextChannel, GuildMember, Role } from 'discord.js/typings';

export const isAdmin = async function (
  channel: TextChannel,
  member: GuildMember
): Promise<boolean> {
  return channel.guild.roles
    .fetch(process.env.DISCORD_BOT_ADMIN_ROLE_ID)
    .then((role: Role) => {
      return member.roles.cache.has(role.name);
    });
};

export const notAdminError =
  'Dieser Befehl kann nur von Administratoren ausgeführt werden.';
