import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Calendar, CalendarProps } from '@molecules';

export default {
  title: 'Components/Molecules/Calendar',
  component: Calendar,
} as Meta;

const Template: StoryFn<CalendarProps> = (args: CalendarProps) => {
  const [date, setDate] = useState<Date>(args.value || new Date());
  return <Calendar {...args} value={date} onChange={setDate} />;
};

export const CalendarSimple = Template.bind({});
CalendarSimple.args = {};

const currentDate = new Date();

export const CalendarMinDate = Template.bind({});
CalendarMinDate.args = {
  value: new Date(currentDate.getFullYear(), currentDate.getMonth(), 14),
  minDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
};

export const CalendarMaxDate = Template.bind({});
CalendarMaxDate.args = {
  value: new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 14),
  maxDate: new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 17),
};
