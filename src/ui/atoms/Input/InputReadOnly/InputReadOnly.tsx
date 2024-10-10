import { Title } from "../../Title/Title";
import { applyMaskMaybe, InputProps } from "../Input";
import * as S from "./InputReadOnly.style";

export const InputReadOnly = ({
  dataTestId,
  value,
  cpf,
  cnpj,
  rg,
  phone,
  barcode,
  countryState,
  currency,
  ...props
}: InputProps) => {
  return (
    <S.ReadOnly data-testid={dataTestId || ''}>
      <Title {...props} fs1 ellipsis>
        {applyMaskMaybe(value, {
          cpf,
          cnpj,
          rg,
          phone,
          barcode,
          countryState,
          currency,
        })}
      </Title>
    </S.ReadOnly>
  );
}