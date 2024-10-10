import { StoryFn, Meta } from '@storybook/react';
import { YearSelect, YearSelectProps } from '@molecules';

export default {
  title: 'Components/Molecules/YearSelect',
  component: YearSelect,
} as Meta;

const Template: StoryFn<YearSelectProps> = (args: YearSelectProps) => {
  return <YearSelect {...args} onClick={() => {}} />;
};

export const YearSelectCurrentYear = Template.bind({});
YearSelectCurrentYear.args = {
  startDate: new Date(),
};

export const YearSelectLastYear = Template.bind({});
YearSelectLastYear.args = {
  startDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
};
