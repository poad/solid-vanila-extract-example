import type { Meta } from 'storybook-solidjs';
import { Component, JSX } from 'solid-js';
import Counter from '../components/Counter';

export const CounterComponent: Component = (): JSX.Element => <Counter />;
const meta: Meta<typeof Counter> = {
  component: Counter,
};

export default meta;
