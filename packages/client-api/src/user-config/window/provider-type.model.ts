import { z } from 'zod';

export const ProviderTypeSchema = z.enum([
  'active_window',
  'battery',
  'cpu',
  'date_time',
  'glazewm',
  'host',
  'ip',
  'memory',
  'network',
  'system_tray',
  'weather',
]);

export type ProviderType = z.infer<typeof ProviderTypeSchema>;