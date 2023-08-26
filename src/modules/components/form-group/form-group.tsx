import { FC, FormHTMLAttributes } from 'react';

import { FormGroupContainer, FormGroupTitle } from './form-group.style';

export interface FormGroupProps extends FormHTMLAttributes<HTMLFormElement> {
  title?: string;
  children?: React.ReactNode;
}

export const FormGroup: FC<FormGroupProps> = (props: FormGroupProps) => {
  return (
    <FormGroupContainer>
      {props.title && <FormGroupTitle>{props.title}</FormGroupTitle>}
      {props.children}
    </FormGroupContainer>
  );
};
