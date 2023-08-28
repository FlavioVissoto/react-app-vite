import { FC, InputHTMLAttributes } from 'react';

import { SizeType } from '../../styles/theme/size.theme';
import { BoxCheckbox, CheckboxContainer, Label } from './checkbox.style';

export interface CheckboxPropsType extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  themeSize: SizeType;
}

export const Checkbox: FC<CheckboxPropsType> = (props: CheckboxPropsType) => {
  return (
    <CheckboxContainer>
      <BoxCheckbox type="checkbox" {...props} id={props.id} />
      <Label htmlFor={props.id}>{props.label}</Label>
    </CheckboxContainer>
  );
};
