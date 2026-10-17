import React, { useState } from 'react';
import './Folder.css';

const darkenColor = (hex, percent) => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split('')
      .map(c => c + c)
      .join('');
  }
  const num = parseInt(color.slice(0, 6), 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const Folder = ({ 
  color = '#D49A3D', 
  size = 1, 
  items = [], 
  className = '', 
  open: controlledOpen = undefined,
  defaultOpen = false,
  onToggle = null,
  folderWidth = undefined,
  folderHeight = undefined,
  badge = null
}) => {
  const maxItems = 3;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const [paperOffsets, setPaperOffsets] = useState(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));

  const folderBackColor = darkenColor(color, 0.1);
  const paper1 = darkenColor('#ffffff', 0.08);
  const paper2 = darkenColor('#ffffff', 0.04);
  const paper3 = '#ffffff';

  const handleClick = (e) => {
    e?.stopPropagation?.();
    const nextState = !isOpen;
    if (controlledOpen === undefined) {
      setInternalOpen(nextState);
    }
    if (onToggle) onToggle(nextState);
    if (!nextState) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperMouseMove = (e, index) => {
    if (!isOpen) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.12;
    const offsetY = (e.clientY - centerY) * 0.12;
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (e, index) => {
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const folderStyle = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor,
    '--paper-1': paper1,
    '--paper-2': paper2,
    '--paper-3': paper3,
    ...(folderWidth ? { '--folder-w': typeof folderWidth === 'number' ? `${folderWidth}px` : folderWidth } : {}),
    ...(folderHeight ? { '--folder-h': typeof folderHeight === 'number' ? `${folderHeight}px` : folderHeight } : {})
  };

  const folderClassName = `folder ${isOpen ? 'open' : ''}`.trim();
  const scaleStyle = { transform: `scale(${size})`, transformOrigin: 'top center' };

  return (
    <div style={scaleStyle} className={className}>
      <div
        className={folderClassName}
        style={folderStyle}
        onClick={handleClick}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick(e);
          }
        }}
        tabIndex={0}
        role="button"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close folder' : 'Open folder'}
      >
        <div className="folder__back">
          {papers.map((item, i) => (
            <div
              key={i}
              className={`paper paper-${i + 1}`}
              onMouseMove={e => handlePaperMouseMove(e, i)}
              onMouseLeave={e => handlePaperMouseLeave(e, i)}
              style={
                isOpen
                  ? {
                      '--magnet-x': `${paperOffsets[i]?.x || 0}px`,
                      '--magnet-y': `${paperOffsets[i]?.y || 0}px`
                    }
                  : {}
              }
            >
              {item}
            </div>
          ))}
          <div className="folder__front">
            {badge && (
              <div className="w-full h-full flex flex-col justify-between p-4 sm:p-5 text-white pointer-events-none select-none">
                {badge}
              </div>
            )}
          </div>
          <div className="folder__front right"></div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
