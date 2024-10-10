import React, { useEffect } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Loading, LoadingProps, LoadingProvider, useLoading } from '@atoms';

export default {
  title: 'Components/Atoms/Loading',
  component: Loading,
} as Meta;

const GlobalWrapper = (props: LoadingProps) => {
  const { appendLoadingOnStack } = useLoading();

  useEffect(() => {
    appendLoadingOnStack();
  }, [appendLoadingOnStack]);

  return <Loading {...props} />;
};

const TemplateCircle: StoryFn<LoadingProps> = (args) => <Loading {...args} />;
export const LoadingCircle = TemplateCircle.bind({});
LoadingCircle.args = {
  circle: true,
};

const TemplateGlobal: StoryFn<LoadingProps> = (args) => (
  <LoadingProvider>
    <GlobalWrapper {...args} />
  </LoadingProvider>
);

export const LoadingGlobal = TemplateGlobal.bind({});
LoadingGlobal.args = {
  global: true,
};
