import React, { FC } from 'react';
import * as svg from '@/components/LoginIcon/svg';

type LoginIconType = keyof typeof svg;
interface ILoginIconProps {
  name: LoginIconType;
  className?: string;
  style?: React.CSSProperties;
}

const LoginIcon: FC<ILoginIconProps> = ({
  name,
  className,
  style,
}: ILoginIconProps) => {
  return React.createElement(svg[name], { className, style });
};

export default LoginIcon;
