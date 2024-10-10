import * as helpers from '@helpers';
import React, {
  ChangeEvent,
  ClipboardEvent,
  useMemo,
} from 'react';
import * as S from '../Input.style';
import { InputProps } from '../Input';

const INPUT_NUMBER_MAX_LENGTH_DEFAULT = 12;

export const InputNumber = ({
  value,
  maxLength,
  dataTestId,
  onChange,
  onPaste,
  onKeyDown,
  ...props
}: InputProps) => {
  const id = useMemo(() => String(props.id), [props.id]);
  return (
    <S.Input
      {...props}
      id={id}
      value={String(value)}
      maxLength={maxLength || INPUT_NUMBER_MAX_LENGTH_DEFAULT}
      data-testid={dataTestId || ''}
      onKeyDown={onKeyDown}
      onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const eventAsNumber = {
          ...e,
          target: {
            ...e?.target,
            value: e.target.value
              ? helpers.getNumbersOfString(e.target.value)
              : '',
          },
        } as ChangeEvent<HTMLInputElement>;

        if (onChange) {
          onChange(eventAsNumber);
        }
      }}
      onPaste={(e) => {
        if (!onPaste) {
          return;
        }
        e.preventDefault();
        const pastedData = e.clipboardData.getData('Text');
        const evenPastAsNumber = {
          ...e,
          clipboardData: {
            ...e.clipboardData,
            getData: (_v: string) => helpers.getNumbersOfString(pastedData),
          },
        };
        onPaste(evenPastAsNumber as ClipboardEvent);
      }}
    />
  );
};