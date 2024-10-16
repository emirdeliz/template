import * as helpers from '@helpers';
import React, {
  ChangeEvent,
  useEffect,
  useState,
} from 'react';
import * as S from '../Input.style';
import { InputProps } from '../Input';

export const InputDate = ({
  id,
  value,
  dataTestId,
  onChange,
  ...props
}: InputProps) => {
  const [valueAsString, setValueAsString] = useState<string>('');

  useEffect(() => {
    const valueFormatted = helpers.formatDateAsDDMMYYYY(value as Date);
    valueFormatted && setValueAsString(valueFormatted);
  }, [value]);

  return (
    <S.Input
      {...props}
      id={String(id)}
      data-testid={dataTestId || ''}
      value={valueAsString}
      onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const valueFormatted = helpers.maskDate(e.target.value);
        setValueAsString(valueFormatted);

        const valueAsDate = helpers.parseStringDDMMYYYYToDate(valueFormatted);
        onChange &&
          onChange({
            target: { valueAsDate },
          } as ChangeEvent<HTMLInputElement>);
      }}
    />
  );
};