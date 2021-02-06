import React, { FC } from 'react';
import * as svg from '@/components/NationIcon/svg';

type NationIconType = keyof typeof svg;
interface INationIconProps {
  name: NationIconType;
  className?: string;
  style?: React.CSSProperties;
}

const NationIcon: FC<INationIconProps> = ({ name, className, style }) => {
  return React.createElement(svg[name], { className, style });
};

export default NationIcon;
