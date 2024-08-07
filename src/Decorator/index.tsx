import React from 'react';
import withCustomStyle from './Decorator-style';

interface MyComponentProps {
  content: string;
}

function MyComponent({ content }: MyComponentProps) {
  return <div>{content}</div>;
}

const MyComponentWithStyle = withCustomStyle(MyComponent, {
  radius: 'rounded-lg',
  bgColor: 'bg-blue-500',
  size: 'p-6'
});

export default MyComponentWithStyle;
