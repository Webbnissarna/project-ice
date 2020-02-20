import React from 'react';

export default function Box({ bgColor, fgColor, padding, children }) {
    return (
        <div style={{ backgroundColor: bgColor, color: fgColor, padding: padding}}>
            {children}
        </div>
    )
}