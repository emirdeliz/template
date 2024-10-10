import * as helpers from '@helpers';
import { FontSizeProps, MarginProps, PaddingProps } from '@theme';
import React, {
  ChangeEvent,
  ClipboardEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  useMemo,
} from 'react';
import { Flex, FormControl } from '..';
import * as S from './Input.style';
import { InputText } from './InputText/InputText';
import { InputReadOnly } from './InputReadOnly/InputReadOnly';
import { InputNumber } from './InputNumber/InputNumber';
import { InputDate } from './InputDate/InputDate';
import { InputTextArea } from './InputTextArea/InputTextArea';

export interface InputProps
  extends FormControl,
    FontSizeProps,
    PaddingProps,
    MarginProps {
  rg?: boolean;
  cpf?: boolean;
  cnpj?: boolean;
  currency?: boolean;
  phone?: boolean;
  barcode?: boolean;
  placeholder?: string;
  before?: ReactNode;
  after?: ReactNode;
  number?: boolean;
  textarea?: boolean;
  date?: boolean;
  maxLength?: number;
  minLength?: number;
  alignCenter?: boolean;
  password?: boolean;
  id?: string | number;
  dataTestId?: string | number;
  readOnly?: boolean;
  transparent?: boolean;
  countryState?: boolean;
  onClick?: (e: MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onPaste?: (e: ClipboardEvent) => void;
  onKeyDown?: (e: KeyboardEvent) => void;
}

export const applyMaskMaybe = (
  value: string | number | Date | null | undefined | boolean,
  { cpf, cnpj, currency, barcode, phone, rg, countryState }: InputProps
) => {
  if (value === undefined) {
    return '';
  }
  const valueAsString = String(value);
  switch (true) {
    case cpf:
      return helpers.maskCPF(valueAsString);
    case cnpj:
      return helpers.maskCNPJ(valueAsString);
    case phone:
      return helpers.maskPhone(valueAsString);
    case barcode:
      return helpers.maskBarcode(valueAsString);
    case rg:
      return helpers.maskRG(valueAsString);
    case countryState:
      return helpers.maskCountryState(valueAsString);
    case currency:
      return helpers.maskMoney(valueAsString);
    default:
      return valueAsString;
  }
};

export const Input = ({
  number,
  textarea,
  date,
  after,
  before,
  readOnly,
  transparent,
  ...props
}: InputProps) => {
  const input = useMemo(() => {
    switch (true) {
      case readOnly:
        return <InputReadOnly {...props} />;
      case number:
        return <InputNumber {...props} />;
      case date:
        return <InputDate {...props} />;
      case textarea:
        return <InputTextArea {...props} />;
      default:
        return <InputText {...props} />
    }
  }, [number, textarea, date, readOnly, props]);

  return (
    <S.Container transparent={transparent}>
      {before && <Flex.Center ml2>{before}</Flex.Center>}
      {input}
      {after && <Flex.Center mr2>{after}</Flex.Center>}
    </S.Container>
  );
};

Input.Number = (props: InputProps) => <Input {...props} number />;
Input.Phone = (props: InputProps) => <Input {...props} phone />;
Input.Cpf = (props: InputProps) => <Input {...props} cpf />;
Input.Cnpj = (props: InputProps) => <Input {...props} cnpj />;
Input.Barcode = (props: InputProps) => <Input {...props} barcode />;
Input.TextArea = (props: InputProps) => <Input {...props} textarea />;
