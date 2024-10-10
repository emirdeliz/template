import React from 'react';
import * as S from '../Input.style';
import { InputProps } from '../Input';

const TEXT_AREA_MAX_LENGTH = 65_535;

export const InputTextArea = ({ maxLength, dataTestId, ...props }: InputProps) => {
  const id = String(props.id);
  return (
    <S.TextArea
      {...props}
      id={id}
      data-testid={dataTestId || ''}
      value={String(props.value)}
      maxLength={maxLength || TEXT_AREA_MAX_LENGTH}
    />
  );
};