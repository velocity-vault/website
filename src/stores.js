import { persisted } from 'svelte-local-storage-store';

export const mode = persisted('mode', 'KZT');
