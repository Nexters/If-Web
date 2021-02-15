import React, { FC } from 'react';
import * as svg from '@/components/FeatureIcon/svg';

type FeatureIconType = keyof typeof svg;
interface IFeatureIconProps {
  name: FeatureIconType;
  className?: string;
  style?: React.CSSProperties;
}

const FeatureIcon: FC<IFeatureIconProps> = ({
  name,
  className,
  style,
}: IFeatureIconProps) => {
  return React.createElement(svg[name], { className, style });
};

export default React.memo(FeatureIcon);
