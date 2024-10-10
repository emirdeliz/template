import React, { useEffect, useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { StepProgressBar, StepProgressBarProps } from '@molecules';

export default {
  title: 'Components/Molecules/StepProgressBar',
  component: StepProgressBar,
} as Meta;

const Template: StoryFn<StepProgressBarProps> = ({ steps, ...args }: StepProgressBarProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(
    args.currentIndex || 0
  );
  useEffect(() => {
    const timer = setInterval(() => {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex > steps.length - 1 ? 0 : newIndex);
    }, 3000);
    return () => clearTimeout(timer);
  }, [steps.length, currentIndex]);
  return (
    <StepProgressBar {...args} currentIndex={currentIndex} steps={steps} />
  );
};

export const StepProgressBarSimple = Template.bind({});
StepProgressBarSimple.args = {
  currentIndex: 3,
  steps: [
    { title: 'Bem-vindo' },
    { title: 'Cadastre-se' },
    { title: 'Confirmação de celular' },
    { title: 'Confirmação de e-mail' },
    { title: 'Conectar administradora' },
  ],
};

export const StepProgressBarCheckFromProp = Template.bind({});
StepProgressBarCheckFromProp.args = {
  currentIndex: 2,
  steps: [
    { title: 'Bem-vindo', checked: false },
    { title: 'Cadastre-se', checked: false },
    { title: 'Confirmação de celular' },
    { title: 'Confirmação de e-mail' },
    { title: 'Conectar administradora' },
  ],
};

export const StepProgressBarOutlined = Template.bind({});
StepProgressBarOutlined.args = {
  currentIndex: 2,
  outlined: true,
  steps: [
    { title: 'Bem-vindo', checked: false },
    { title: 'Cadastre-se', checked: false },
    { title: 'Confirmação de celular' },
    { title: 'Confirmação de e-mail' },
    { title: 'Conectar administradora' },
  ],
};
