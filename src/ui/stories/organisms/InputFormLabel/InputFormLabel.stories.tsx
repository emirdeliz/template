import { Meta, StoryFn } from '@storybook/react';
import { InputFormLabel, InputFormLabelFormProps } from '@organisms';
import React, { useState } from 'react';

export default {
  title: 'Components/Organisms/InputFormLabel',
  component: InputFormLabel,
} as Meta;

const TemplateInput: StoryFn<InputFormLabelFormProps> = (args: InputFormLabelFormProps) => {
  const [value, setValue] = useState<string>('');
  return (
    <InputFormLabel.Input
      {...args}
      value={value}
      onInputChange={(e) => setValue(e.target.value)}
    />
  );
};

export const InputFormLabelForm = TemplateInput.bind({});
InputFormLabelForm.args = {
  children: 'Fundo de reserva',
  placeholder: 'R$ 0,00',
  labelInfo: 'Obrigatório',
};
