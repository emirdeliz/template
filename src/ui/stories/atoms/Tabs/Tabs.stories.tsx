import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Flex, TabItemProps, Tabs, TabsProps } from '@atoms';
import styled from 'styled-components';

export default {
  title: 'Components/Atoms/Tabs',
  component: Tabs,
} as Meta;

const tabsMock = [
  { id: '1', title: 'Tab 1', active: true },
  { id: '2', title: 'Tab 2', active: false },
  { id: '3', title: 'Tab 3', active: false },
  { id: '4', title: 'Tab 4', active: false },
  { id: '5', title: 'Tab 5', active: false },
];

const Container = styled.div`
  width: 500px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const Template: StoryFn<TabsProps> = () => {
  const [tabs, setTabs] = useState<Array<TabItemProps>>(tabsMock);
  return (
    <Container>
      <Tabs
        tabs={tabs}
        onClick={(tab) => {
          setTabs(tabsMock.map((t) => {
            return t.id === tab.id ? ({ ...t, active: true }) : ({ ...t, active: false })
          }))
        }}
      />
      <Flex alignStart justifyStart wFull>
        {tabs.filter((tab) => tab.active).map((tab) => (
          <div key={tab.id}>{tab.title}</div>
        ))}
      </Flex>
    </Container>
  );
};

export const TabsSimple = Template.bind({});
