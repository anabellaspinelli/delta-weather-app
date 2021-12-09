import React from 'react';
import cn from 'classnames';

interface ButtonProps {
  label: string;
  disabled?: boolean;
  className?: string;
  onClick: (event: React.MouseEvent) => void;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  className,
  type = 'button',
}) => {
  return (
    <button
      className={cn(
        'rounded-md bg-blue-100 hover:bg-blue-200 active:bg-blue-300 transition-colors duration-150 px-4 py-2',
        {
          'pointer-events-none text-blue-300': disabled,
          'text-blue-900': !disabled,
        },
        className
      )}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
