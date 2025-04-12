import { ElementType, ReactNode } from 'react';
import { cn } from "../../lib/utils"

type HeadingProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  align?: 'left' | 'center' | 'right';
};

export const Heading = ({
  children,
  className,
  as: Component = 'h2',
  size = 'lg',
  weight = 'bold',
  align = 'left',
}: HeadingProps) => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
  }[size];

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  }[weight];

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  return (
    <Component
      className={cn(
        sizeClasses,
        weightClasses,
        alignClasses,
        'font-sans',
        className
      )}
    >
      {children}
    </Component>
  );
};
