import { Tablr } from "../Tablr";

export default {
  title: 'UI/Tablr',
  component: Tablr,
  argTypes: {
    rows: { control: '' },
    headers: { control: '' }
  },
};

const Template = args => <Tablr {...args} />;

export const Default = Template.bind({});
Default.args = {
  rows: [
    ['This', 'is', 'just', 'a', 'test'],
    ['This', 'is', 'also', 'a', 'test'],
    ['Just', 'a', 'little', 'more', 'data'],
    ['Row', 'number', 'four', 'right', 'here'],
  ],
  headers: ['Col 1', 'Col 2', 'Col 3', 'Col 4', 'Col 5'],
};