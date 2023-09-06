import React, { FC, InputHTMLAttributes } from 'react';

import { BoxInputText } from './input-text.style';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  children?: React.ReactNode;
}

const InputText: FC<InputProps> = React.forwardRef((props: InputProps, ref: any) => {
  return (
    <>
      <BoxInputText type="text" ref={ref} {...props}></BoxInputText>
    </>
  );
});

InputText.displayName = 'InputText';

export default InputText;
