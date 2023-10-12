import type { Meta } from 'storybook-solidjs';
import { Component, JSX } from 'solid-js';

import App from '../App';

export const HomePage: Component = (): JSX.Element => <App />;
const meta: Meta<typeof App> = {
  component: App,
};

export default meta;
