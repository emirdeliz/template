import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Alert, AlertProps } from '@molecules';

export default {
  title: 'Components/Molecules/Alert',
  component: Alert,
} as Meta;

const Template: StoryFn<AlertProps> = (args: AlertProps) => {
  return <Alert {...args} />;
};

export const AlertSimple = Template.bind({});
AlertSimple.args = {
  children:
    'Todos os dias os arquivos de retorno podem ser atualizados. Você receberá uma notificação.',
};

const TemplateInfo: StoryFn<AlertProps> = (args: AlertProps) => {
  return <Alert.Info {...args} />;
};

export const AlertInfo = TemplateInfo.bind({});
AlertInfo.args = {
  children:
    'Todos os dias os arquivos de retorno podem ser atualizados. Você receberá uma notificação.',
};
