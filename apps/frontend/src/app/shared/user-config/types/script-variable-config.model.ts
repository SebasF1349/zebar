import { z } from 'zod';

export const ScriptVariableConfigSchema = z.object({
  source: z.literal('script'),
  script_path: z.string(),
  script_args: z.string(),
  refresh_interval_ms: z.number(),
});

export type ScriptVariableConfig = z.infer<typeof ScriptVariableConfigSchema>;
