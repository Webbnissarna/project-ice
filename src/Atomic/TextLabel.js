import React from 'react';

export default function TextLabel({ text, fontSize, fontFamily }) {
    return (
        <div style={{fontSize: fontSize, fontFamily: fontFamily ?? 'Lucida Console'}}>
            {text}
        </div>
    ) ;
}