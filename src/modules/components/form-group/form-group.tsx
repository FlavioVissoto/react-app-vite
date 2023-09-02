import { FC, FormHTMLAttributes } from 'react';

import { FormGroupContainer, FormGroupTitle } from './form-group.style';

export interface FormGroupProps extends FormHTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: React.ReactNode;
  labelFor?: string;
}

export const FormGroup: FC<FormGroupProps> = (props: FormGroupProps) => {
  return (
    <FormGroupContainer>
      {props.title && <FormGroupTitle htmlFor={props.labelFor}>{props.title}</FormGroupTitle>}
      {props.children}
    </FormGroupContainer>
  );
};
