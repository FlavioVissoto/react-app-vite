import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

import { color } from '../../../styles/theme/colors.theme';
import { BoxButton } from './button.style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  color: color;
  name: string;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const ctx = useFormContext();
  return (
    <>
      <BoxButton {...props} {...ctx?.register(props.name)}></BoxButton>
    </>
  );
};

export default Button;
