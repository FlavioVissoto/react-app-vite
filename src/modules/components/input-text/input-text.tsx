import { FC, InputHTMLAttributes } from 'react';

import { BoxInputText } from './input-text.style';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

export const InputText: FC<InputProps> = (props: InputProps) => {
  return (
    <>
      <BoxInputText type="text" {...props} />
    </>
  );
};
