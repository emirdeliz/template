import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Fade, FadeProps } from '@atoms';

export default {
  title: 'Components/Atoms/Fade',
  component: Fade,
} as Meta;

const Template: StoryFn<FadeProps> = (args) => <Fade {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  children: 'Hello world!',
};
