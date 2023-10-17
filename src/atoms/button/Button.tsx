import React from 'react';
import './button.css';
interface ButtonProps {
  /**
   * Which is the type of the button?
   */
  type?: 'primary' | 'secondary' | 'tertiary';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Is the button enabled?
   */
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Button = ({
  type = 'primary',
  size = 'medium',
  disabled = false,
  label,
  ...props
}: ButtonProps) => {


  return (
    <button
      type="button"
      disabled={disabled}
      className={['ph-button',
      `ph-button--${type}`,
      `ph-button--${size}`].join(' ')}
      {...props}
    >
      {label.toUpperCase()}
    </button>
  );
};


export { Button }