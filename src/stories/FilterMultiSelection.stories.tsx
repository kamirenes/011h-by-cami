import type { Meta, StoryObj } from '@storybook/react';
import FilterMultipleSelection from '../components/FilterMultiSelection/FilterMultiSelection';
import { ProductSize } from '../constants/products';

const meta: Meta<typeof FilterMultipleSelection> = {
  title: 'Components/FilterMultipleSelection',
  component: FilterMultipleSelection,
  tags: ['autodocs'],
  args: {
    placeHolder: 'Selecciona una o varias opciones',
    options: Object.values(ProductSize).map((size) => ({
      label: size,
      value: size,
    })),
    defaultValue: [],
    style: { width: 300 },
  },
};

export default meta;
type Story = StoryObj<typeof FilterMultipleSelection>;

export const Default: Story = {
  args: {
    onChange: (value: string[]) => console.log('Selected:', value),
  },
};

export const PreSelected: Story = {
  args: {
    defaultValue: [ProductSize.M, ProductSize.L],
    onChange: (value: string[]) => console.log('Selected:', value),
  },
};
