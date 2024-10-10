import React, { ChangeEvent, useMemo } from 'react';
import * as helpers from '@helpers';
import * as S from '../Input.style';
import { applyMaskMaybe, InputProps } from '../Input';

const INPUT_TEXT_MAX_LENGTH_DEFAULT = 255;
const INPUT_CPF_MAX_LENGTH_DEFAULT = 14;
const INPUT_RG_MAX_LENGTH_DEFAULT = 12;
const INPUT_CNPJ_MAX_LENGTH_DEFAULT = 18;
const INPUT_PHONE_MAX_LENGTH_DEFAULT = 15;
const INPUT_BARCODE_MAX_LENGTH_DEFAULT = 55;

const getMaxLength = ({
  cpf,
  cnpj,
  rg,
  phone,
  barcode,
  maxLength,
}: InputProps) => {
  switch (true) {
    case cpf:
      return INPUT_CPF_MAX_LENGTH_DEFAULT;
    case cnpj:
      return INPUT_CNPJ_MAX_LENGTH_DEFAULT;
    case phone:
      return INPUT_PHONE_MAX_LENGTH_DEFAULT;
    case barcode:
      return INPUT_BARCODE_MAX_LENGTH_DEFAULT;
    case rg:
      return INPUT_RG_MAX_LENGTH_DEFAULT;
    default:
      return maxLength || INPUT_TEXT_MAX_LENGTH_DEFAULT;
  }
};

export const InputText = ({
  dataTestId,
  cpf,
  cnpj,
  rg,
  phone,
  barcode,
  currency,
  onChange,
  ...props
}: InputProps) => {
  const id = String(props.id || '');
  const maxLength = useMemo(() => getMaxLength(props), [props]);
  const value = useMemo(
    () => applyMaskMaybe(props.value, { cpf, cnpj, rg, phone, barcode, currency }),
    [cpf, cnpj, rg, phone, barcode, currency, props.value]
  );

  return (
    <S.Input
      {...props}
      id={id}
      maxLength={maxLength || INPUT_TEXT_MAX_LENGTH_DEFAULT}
      data-testid={dataTestId || ''}
      value={String(value)}
      onChange={(e) => {
        const eventMask = { ...e };
        if ((cpf || cnpj || phone || barcode) && eventMask.target) {
          const valueMask = currency ? e?.target.value.replace('.', '').replace(',', '')
            : helpers.getNumbersOfString(e?.target.value);
          eventMask.target.value = valueMask;
        }

        onChange &&
          onChange(
            eventMask as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          );
      }}
    />
  );
};