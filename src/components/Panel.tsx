import React, { useState } from "react";
import Draggable from "react-draggable";

interface PanelProps {
  title: string;
  collapsed?: boolean;
  draggable?: boolean;
  position?: { x: number; y: number };
  children: React.ReactNode;
}

export const Panel: React.FC<PanelProps> = ({
  title,
  collapsed: initialCollapsed = false,
  draggable = true,
  position: initialPosition = { x: 20, y: 20 },
  children,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(initialCollapsed);

  return (
    <Draggable
      handle=".font-controls-header"
      disabled={!draggable}
      defaultPosition={initialPosition}
      bounds="parent"
    >
      <div className="font-controls-panel">
        <div className="font-controls-header">
          <h3 className="font-controls-title">{title}</h3>
          <button
            className={`font-controls-toggle ${isCollapsed ? "collapsed" : ""}`}
            onClick={() => setIsCollapsed(!isCollapsed)}
            type="button"
            aria-label={isCollapsed ? "Expand" : "Collapse"}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
        {!isCollapsed && (
          <div className="font-controls-content">{children}</div>
        )}
      </div>
    </Draggable>
  );
};
