import { persisted } from 'svelte-local-storage-store';

export const mode = persisted('mode', 'KZT');

export const player_id  = persisted('player_id', null);
export const auth_token = persisted('auth_token', null);
