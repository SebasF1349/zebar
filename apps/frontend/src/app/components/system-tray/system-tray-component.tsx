import { createMemo } from 'solid-js';

import defaultTemplate from './system-tray-component.njk?raw';
import { createTemplateElement } from '~/shared/template-parsing';
import { SystemTrayComponentConfig } from '~/shared/user-config';

// TODO: Implement `SystemTrayComponent`.
export function SystemTrayComponent(props: {
  config: SystemTrayComponentConfig;
}) {
  const bindings = createMemo(() => {
    return {
      variables: {},
    };
  });

  return createTemplateElement({
    bindings,
    config: () => props.config,
    defaultTemplate: () => defaultTemplate,
  });
}