import React from 'react';
import PropTypes from 'prop-types';

/**
 * 自定义Button组件
 * @param {Object} props - 组件属性
 * @param {string} props.type - 按钮类型 (primary, secondary, danger, success)
 * @param {string} props.size - 按钮大小 (small, medium, large)
 * @param {boolean} props.disabled - 是否禁用
 * @param {boolean} props.outline - 是否为轮廓按钮
 * @param {boolean} props.rounded - 是否圆角
 * @param {boolean} props.fullWidth - 是否占满宽度
 * @param {function} props.onClick - 点击事件处理函数
 * @param {React.ReactNode} props.children - 按钮内容
 */
const Button = ({
  type = 'primary',
  size = 'medium',
  disabled = false,
  outline = false,
  rounded = false,
  fullWidth = false,
  onClick,
  children,
  ...rest
}) => {
  // 基础样式类
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors duration-300 focus:outline-none';
  
  // 类型样式
  const typeClasses = {
    primary: outline 
      ? 'border border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white'
      : 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: outline 
      ? 'border border-gray-500 text-gray-500 bg-transparent hover:bg-gray-500 hover:text-white'
      : 'bg-gray-500 text-white hover:bg-gray-600',
    danger: outline 
      ? 'border border-red-500 text-red-500 bg-transparent hover:bg-red-500 hover:text-white'
      : 'bg-red-500 text-white hover:bg-red-600',
    success: outline 
      ? 'border border-green-500 text-green-500 bg-transparent hover:bg-green-500 hover:text-white'
      : 'bg-green-500 text-white hover:bg-green-600',
  };
  
  // 大小样式
  const sizeClasses = {
    small: 'text-xs py-1 px-2',
    medium: 'text-sm py-2 px-4',
    large: 'text-base py-3 px-6',
  };
  
  // 圆角样式
  const roundedClasses = rounded ? 'rounded-full' : 'rounded';
  
  // 宽度样式
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // 禁用样式
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  // 组合所有样式
  const classes = `
    ${baseClasses} 
    ${typeClasses[type]} 
    ${sizeClasses[size]} 
    ${roundedClasses} 
    ${widthClasses} 
    ${disabledClasses}
  `;
  
  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
