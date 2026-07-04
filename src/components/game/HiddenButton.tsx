import React, { ReactNode } from 'react';
import { useHiddenButtons } from '../../hooks/useHiddenButtons';

interface Props {
  id: string;
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const HiddenButton: React.FC<Props> = ({ id, children, style, className }) => {
  const { checkButton, flags } = useHiddenButtons();
  const isFound = flags[`hidden_${id}`];

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = checkButton(id);
    if (msg) {
      // Could show a toast or alert here
      alert(msg);
    }
  };

  if (isFound) {
    return <span className={`anim-sparkle ${className || ''}`} style={style}>{children}</span>;
  }

  return (
    <span 
      onClick={handleClick}
      className={className}
      style={{ cursor: 'pointer', ...style }}
    >
      {children}
    </span>
  );
};

export default HiddenButton;
