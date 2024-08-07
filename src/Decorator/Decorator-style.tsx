import React from 'react';

interface DecoratorProps {
  radius?: string;
  bgColor?: string;
  size?: string;
}

function withCustomStyle<P>(
  WrappedComponent: React.ComponentType<P>,
  { radius = 'rounded-md', bgColor = 'bg-primary', size = 'p-3' }: DecoratorProps
): React.FC<P> {
  return (props: P) => (
    <div className={`${bgColor} ${radius} ${size}`}>
      <WrappedComponent {...props} />
    </div>
  );
}

export default withCustomStyle;
