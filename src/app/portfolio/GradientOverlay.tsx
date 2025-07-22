/* eslint-disable prettier/prettier */
import React from 'react'

const GradientOverlay = () => {
    return (
        <>
            {/* Gradient overlays */}
            <div
                className="absolute inset-0"
                style={{
                    top: '-3.3%',
                    background: 'linear-gradient(180deg, rgba(5,18,24,0.00) 0%, #051218 95.52%)'
                }}
            />
            <div
                className="absolute top-0 left-0 w-full"
                style={{
                    height: '13.8%',
                    opacity: 0.74,
                    background: 'linear-gradient(180deg, #081822 0%, rgba(8,24,34,0.00) 100%)'
                }}
            />
        </>
    )
}

export default GradientOverlay