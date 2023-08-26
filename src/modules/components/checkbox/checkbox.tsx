import { FC, InputHTMLAttributes } from 'react';

import { BoxCheckbox, CheckboxContainer, Label } from './checkbox.style';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox: FC<CheckboxProps> = (props: CheckboxProps) => {
  return (
    <CheckboxContainer>
      <BoxCheckbox type="checkbox" {...props} id={props.id} />
      <Label htmlFor={props.id}>{props.label}</Label>
    </CheckboxContainer>
  );
};
