export const DEFAULT_CONFIG_FILE = `atf.config.js`;
export const DEFAULT_WATCH_IGNORE = [/node_modules/, /\.test\./, /index\./, /^\.\w+/];

export const DEFAULT_SPEC = 'does things';

export const DESCRIBE_BLOCK_TEMPLATE = `import { <%= fileName %> } from './<%= fileName %>';

describe('<%= fileName %>', () => {
   <%= setSpecItems(specs, specTemplate) %>
});

`;

export const SPEC_BLOCK_TEMPLATE = `
it('<%= spec %>', () => {
  expect.hasAssertions();
});
`;
