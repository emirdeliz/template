import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Flex, Icon, IconProps } from '@atoms';

export default {
  title: 'Components/Atoms/Icon',
  component: Icon,
} as Meta;

const Template: StoryFn<IconProps> = (args) => {
  return (
    <>
      <Flex alignCenter justifyCenter>
        <Icon {...args} xs />
      </Flex>
      <Flex alignCenter justifyCenter mt2>
        <Icon {...args} sm />
      </Flex>
      <Flex alignCenter justifyCenter mt2>
        <Icon {...args} nm />
      </Flex>
    </>
  );
};

export const IconCheckGreen = Template.bind({});
IconCheckGreen.args = {
  check: true,
  green: true,
};

export const IconUploadRed = Template.bind({});
IconUploadRed.args = {
  upload: true,
  red: true,
};

export const IconCheckCircledGreen = Template.bind({});
IconCheckCircledGreen.args = {
  check: true,
  circled: true,
  green: true,
};

export const IconPdfDoubleCircledGreen = Template.bind({});
IconPdfDoubleCircledGreen.args = {
  pdfDouble: true,
  circled: true,
  green: true,
};
