import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Radio, RadioProps } from '@atoms';

export default {
  title: 'Components/Atoms/Radio',
  component: Radio,
} as Meta;

const Template: StoryFn<RadioProps> = (args: RadioProps) => {
  const [value, setValue] = useState<boolean>(true);
  return <Radio {...args} checked={value} onChange={(v) => setValue(v)} />;
};

export const RadioSimple = Template.bind({});
RadioSimple.args = {};
