import { ElementType, ReactNode } from 'react';
import { cn } from '../../lib/utils';

type TextProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
};

export const Text = ({
  children,
  className,
  as: Component = 'span',
  size = 'md',
  weight = 'normal',
  align = 'left',
}: TextProps) => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  }[size];

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  }[weight];

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  return (
    <Component
      className={cn(
        'font-sans',
        sizeClasses,
        weightClasses,
        alignClasses,
        className
      )}
    >
      {children}
    </Component>
  );
};
