import { config } from 'dotenv';
config();

import client from './core/client.ts';
import { Events, GuildMember, Message, PartialGuildMember } from 'discord.js';

import {
  onReady,
  onGuildMemberAdd,
  onGuildMemberRemove,
  onMessageCreate,
} from './events/index.ts';

client.once(Events.ClientReady, async () => await onReady(client));

client.on(
  Events.GuildMemberAdd,
  async (member: GuildMember) => await onGuildMemberAdd(client, member)
);

client.on(
  Events.GuildMemberRemove,
  async (member: GuildMember | PartialGuildMember) =>
    await onGuildMemberRemove(client, member)
);

client.on(
  Events.MessageCreate,
  async (message: Message) => await onMessageCreate(message)
);

client.login(process.env.DISCORD_TOKEN);
