import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import mocker from 'mocker-data-generator';
import { faker } from '@faker-js/faker';
import { Table, TableColumnProps, TableProps } from '@molecules';
import { GenericObject } from '@types';

export default {
  title: 'Components/Molecules/Table',
  component: Table,
} as Meta;

const condominiumMocker = {
  legalName: {
    faker: 'address.country()',
  },
  name: {
    faker: 'address.country()',
  },
  numberOfUnits: {
    faker: 'number.int()',
  },
  createdAt: {
    faker: 'date.past',
  },
  establishmentDate: {
    faker: 'date.past',
  },
  id: {
    faker: 'number.int({"min": 14233, "max": 102347})',
  },
};

const columns = [
  { key: 'legalName', label: 'Nome' },
  { key: 'name', label: 'Nome Fantasia' },
  { key: 'numberOfUnits', label: 'Número de Unidades', num: true },
  { key: 'createdAt', label: 'Data de Criação', dateAndTime: true },
  { key: 'establishmentDate', label: 'Data de Fundação', date: true },
  { key: 'id', label: 'Total Gasto', currency: true },
] as Array<TableColumnProps<GenericObject>>;

const dataSource = mocker().addGenerator('faker', faker) .schema('data', condominiumMocker, 100).buildSync()
  .data as Array<GenericObject>;

const Template: StoryFn<TableProps<GenericObject>> = (args) => {
  return (
    <Table<GenericObject>
      {...args}
      sortable
      dataSource={dataSource}
      columns={columns}
    />
  );
};

export const TableSimple = Template.bind({});
TableSimple.args = {};
TableSimple.parameters = {
  dataSource: dataSource || [],
  columns,
} as TableProps<GenericObject>;
