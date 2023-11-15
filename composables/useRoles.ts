import { GuildMember } from 'discord.js';

export const isAdmin = async function (member: GuildMember): Promise<boolean> {
  const { DISCORD_ADMIN_ROLE_ID: adminRoleId } = process.env;

  if (adminRoleId === undefined) return false;

  return [...member.roles.cache.keys()].includes(adminRoleId);
};

export const notAdminError =
  'Dieser Befehl kann nur von Administratoren ausgeführt werden.';
