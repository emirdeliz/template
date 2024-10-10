import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { RadioForm, RadioFormProps } from '@organisms';

export default {
  title: 'Components/Organisms/RadioForm',
  component: RadioForm,
} as Meta;

const Template: StoryFn<RadioFormProps> = (args: RadioFormProps) => {
  const [value, setValue] = useState<string | number>();
  return <RadioForm {...args} value={value} onChange={(v) => setValue(v)} />;
};

export const RadioFormSimple = Template.bind({});
RadioFormSimple.args = {
  options: [
    { label: 'Pagar hoje', value: 1 },
    { label: 'Agendar para', value: 2 },
  ],
};

export const RadioFormRow = Template.bind({});
RadioFormRow.args = {
  directionRow: true,
  options: [
    { label: 'Pagar hoje', value: 1 },
    { label: 'Agendar para', value: 2 },
  ],
};
