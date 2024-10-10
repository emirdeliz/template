import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Input } from '@atoms';
import { FormGroup, FormGroupChildrenProps } from '@molecules';

export default {
  title: 'Components/molecules/FormGroup',
  component: FormGroup,
} as Meta;

const Template: StoryFn<FormGroupChildrenProps> = (args) => {
  const id = String(args.label).replace(/\s/g, '_');
  return <FormGroup {...args} target={id} />;
};

export const FormGroupSimple = Template.bind({});
FormGroupSimple.args = {
  label: 'Entre com o nome',
  children: <Input id="Entre_com_o_nome" value="" onChange={() => {}} />,
};

export const FormGroupTextArea = Template.bind({});
FormGroupTextArea.args = {
  label: 'Entre com a descrição',
  children: (
    <Input.TextArea id="Entre_com_a_descrição" value="" onChange={() => {}} />
  ),
};
