import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { LinkCalendar, LinkCalendarProps } from '@organisms';

export default {
  title: 'Components/Organisms/LinkCalendar',
  component: LinkCalendar,
} as Meta;

const Template: StoryFn<LinkCalendarProps> = (args: LinkCalendarProps) => {
  const [date, setDate] = useState<Date>();
  return <LinkCalendar {...args} value={date} onChange={setDate} />;
};

export const LinkCalendarSimple = Template.bind({});
LinkCalendarSimple.args = {};
