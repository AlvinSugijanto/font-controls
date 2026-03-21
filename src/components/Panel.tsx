import React, { useRef } from "react";
import Draggable from "react-draggable";

interface PanelProps {
  title: string;
  draggable?: boolean;
  position?: { x: number; y: number };
  children: React.ReactNode;
  headerActions?: React.ReactNode;
}

export const Panel: React.FC<PanelProps> = ({
  title,
  draggable = true,
  position: initialPosition = { x: 20, y: 20 },
  children,
  headerActions,
}) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".font-controls-header"
      disabled={!draggable}
      defaultPosition={initialPosition}
      bounds="parent"
    >
      <div ref={nodeRef} className="font-controls-panel">
        <div className="font-controls-header">
          <h3 className="font-controls-title">{title}</h3>
          {headerActions && (
            <div className="font-controls-header-actions">{headerActions}</div>
          )}
        </div>
        <div className="font-controls-content">{children}</div>
      </div>
    </Draggable>
  );
};
