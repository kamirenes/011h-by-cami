import type { Meta, StoryObj } from '@storybook/react';
import FilterMultipleSelection from '../components/FilterMultiSelection/FilterMultiSelection';
import { ProductSize } from '../constants/products';

const meta: Meta<typeof FilterMultipleSelection> = {
  title: 'Components/FilterMultipleSelection',
  component: FilterMultipleSelection,
  tags: ['autodocs'],
  args: {
    title: 'Sizes',
    titleSize: 14,
    placeHolder: 'Select sizes',
    defaultValue: [],
    options: Object.values(ProductSize).map((size) => ({
      label: size,
      value: size,
    })),
    style: { width: 300 },
    onChange: (value: string[]) => console.log('Selected:', value),
  },
};

export default meta;
type Story = StoryObj<typeof FilterMultipleSelection>;

export const Default: Story = {};

export const WithPreselectedValues: Story = {
  args: {
    defaultValue: [ProductSize.M, ProductSize.L],
  },
};

export const CustomTitleSize: Story = {
  args: {
    title: 'Custom Size Title',
    titleSize: 18,
  },
};
