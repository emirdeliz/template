import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ProgressBar, ProgressBarProps } from '@atoms';

export default {
  title: 'Components/Atoms/ProgressBar',
  component: ProgressBar,
} as Meta;

const Template: StoryFn<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const ProgressBarSimple = Template.bind({});
ProgressBarSimple.args = {};
