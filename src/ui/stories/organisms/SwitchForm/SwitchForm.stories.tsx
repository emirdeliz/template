import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SwitchForm, SwitchFormInputProps, SwitchFormProps } from '@organisms';

export default {
  title: 'Components/Organisms/SwitchForm',
  component: SwitchForm,
} as Meta;

const Template: StoryFn<SwitchFormProps> = (args: SwitchFormProps) => {
  const [selected, setSelected] = useState<boolean>(false);
  return <SwitchForm {...args} selected={selected} onChange={setSelected} />;
};

export const SwitchFormSimple = Template.bind({});
SwitchFormSimple.args = {
  children: 'Fundo de reserva',
};

export const SwitchFormRow = Template.bind({});
SwitchFormRow.args = {
  children: 'Fundo de reserva',
  row: true,
};

const TemplateInput: StoryFn<SwitchFormInputProps> = (args: SwitchFormInputProps) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  return (
    <SwitchForm.Input
      {...args}
      selected={selected}
      value={value}
      onChange={setSelected}
      onInputChange={(e) => setValue(e.target.value)}
    />
  );
};

export const SwitchFormInput = TemplateInput.bind({});
SwitchFormInput.args = {
  children: 'Fundo de reserva',
  placeholder: 'R$ 0,00',
};
