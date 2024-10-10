import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Switch, SwitchProps } from '@molecules';

export default {
  title: 'Components/Molecules/Switch',
  component: Switch,
} as Meta;

const Template: StoryFn<SwitchProps> = (args) => {
  const [selected, setSelected] = useState<boolean>(false);
  return <Switch {...args} {...{ selected, onChange: setSelected }} />;
};

export const SwitchSimple = Template.bind({});
SwitchSimple.args = {};
