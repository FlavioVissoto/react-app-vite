import { ButtonHTMLAttributes, FC } from 'react';

import { color } from '../../styles/theme/colors.theme';
import { BoxButton } from './button.style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  color: color;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <>
      <BoxButton {...props}></BoxButton>
    </>
  );
};
