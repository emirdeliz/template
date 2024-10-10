import {
  formatDateAsDDMMYYYY,
  formatNumberAsCurrency,
  formatDateAsDDMMYYYYAndTime,
  formatStringOrNumberAsCnpj,
} from '@helpers';
import { GenericObject } from '@types';
import {
  TableColumnProps,
  TableProps,
  TableSort,
  TableSortProps,
} from '../../Table';

export const buildDataSource = <T>({ columns, dataSource }: TableProps<T>) => {
  const result = dataSource?.map((dataSourceItem: T, index: number) => {
    const rowKey = index;
    const resultCol = columns?.reduce(
      (keysValue: T, column: TableColumnProps<T>) => {
        const { key } = column;
        const value = (dataSourceItem as T)[key];
        const valueFormatMaybe = formatValueMaybe(
          column,
          value as GenericObject
        );
        return {
          ...keysValue,
          [`${String(key)}Formatted`]: valueFormatMaybe,
        };
      },
      {} as T
    );
    return { ...dataSourceItem, ...resultCol, key: rowKey };
  });

  return result;
};

export const sortTableValues = <T>({
  columns,
  dataSource,
  sorterColumnStatus,
  sorterColumnIndex,
}: TableProps<T> & TableSortProps) => {
  const column = columns?.[sorterColumnIndex || 0];
  const { key, sorterKey } = column || ({} as TableColumnProps<T>);

  const result =
    [...(dataSource || [])].sort((a: T, b: T) => {
      const valueA = a[sorterKey || key] as GenericObject;
      const valueB = b[sorterKey || key] as GenericObject;

      const compareResult = compareSortValuesByType<T>(
        valueA,
        valueB,
        column,
        sorterColumnStatus
      );
      return compareResult;
    }) || ([] as Array<T>);
  return result;
};

const compareSortValuesByType = <T>(
  valueA?: GenericObject,
  valueB?: GenericObject,
  column?: TableColumnProps<T>,
  sorterColumn?: TableSort
) => {
  if (valueA === undefined || valueB === undefined || !sorterColumn) {
    return 0;
  }

  const { cnpj, currency, date, dateAndTime, bool, num } = column || {};
  const isSortAsc = sorterColumn === TableSort.ASC;

  switch (true) {
    case bool:
    case currency:
    case cnpj:
    case num: {
      return isSortAsc
        ? Number(valueA) - Number(valueB)
        : Number(valueB) - Number(valueA);
    }
    case date:
    case dateAndTime: {
      return isSortAsc
        ? new Date(String(valueA)).getTime() -
            new Date(String(valueB)).getTime()
        : new Date(String(valueB)).getTime() -
            new Date(String(valueA)).getTime();
    }
    default: {
      const valueAUpperCase = String(valueA).toUpperCase();
      const valueBUpperCase = String(valueB).toUpperCase();

      return isSortAsc
        ? valueAUpperCase.localeCompare(valueBUpperCase)
        : valueBUpperCase.localeCompare(valueAUpperCase);
    }
  }
};

const formatValueMaybe = <T>(
  column: TableColumnProps<T>,
  value?: string | number | Date
) => {
  if (value === undefined || value === null) {
    return '-';
  }

  const { cnpj, currency, date, dateAndTime } = column;
  switch (true) {
    case cnpj:
      return formatStringOrNumberAsCnpj(String(value));
    case currency:
      return formatNumberAsCurrency(Number(value));
    case date:
      return formatDateAsDDMMYYYY(String(value));
    case dateAndTime:
      return formatDateAsDDMMYYYYAndTime(String(value));
  }
  return `${value}`;
};
