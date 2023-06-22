import { persisted } from 'svelte-local-storage-store';
import { MODES } from './api';

export const mode = persisted('mode', MODES[0]);
