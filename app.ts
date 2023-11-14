import dotenv from 'dotenv';
dotenv.config();

import client from './modules/client';

import {
  onReady,
  onGuildMemberAdd,
  onGuildMemberRemove,
  onMessageCreate,
} from './events';

onReady(client);

onGuildMemberAdd(client);

onGuildMemberRemove(client);

onMessageCreate(client);

client.login(process.env.DISCORD_TOKEN);
