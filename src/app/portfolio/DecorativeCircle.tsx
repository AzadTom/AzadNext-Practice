import React from 'react'

const DecorativeCircle = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Decorative Circle Group - perfectly centered and fits full screen */}
      <div
        className="absolute pointer-events-none opacity-25"
        style={{
          width: '100vmax',
          height: '100vmax',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Circle 1 - Largest */}
        <div 
          className="absolute rounded-full aspect-square animate-spin-slow-s"
          style={{ 
            left: '0%',
            top: '0%',
            width: '100%',
            background: 'linear-gradient(180deg, #0B1903 0%, rgba(11,25,3,0.00) 100%)',
            backdropFilter: 'blur(30px)',
            opacity: 0.4,
          }}
        >
          <div 
            className="absolute inset-0 rounded-full border"
            style={{
              borderColor: 'rgba(198,252,166,0.40)',
              boxShadow:
                '-1.2px -1.2px 1.2px #C6FCA6 inset, ' +
                '-6.2px 3.7px 39.7px rgba(198,252,166,0.58) inset, ' +
                '1.2px 1.2px 1.2px rgba(167,252,238,0.74) inset, ' +
                '6.2px 6.2px 6.2px rgba(157,255,212,0.27) inset',
            }}
          />
        </div>

        {/* Circle 2 */}
        <div 
          className="absolute rounded-full aspect-square animate-spin-slow-e"
          style={{ 
            left: '10%',
            top: '10%',
            width: '80%',
            background: 'linear-gradient(180deg, #0B1903 0%, rgba(11,25,3,0.00) 100%)',
            backdropFilter: 'blur(30px)',
            opacity: 0.4,
          }}
        >
          <div 
            className="absolute inset-0 rounded-full border"
            style={{
              borderColor: 'rgba(198,252,166,0.40)',
              boxShadow:
                '-1.2px -1.2px 1.2px #C6FCA6 inset, ' +
                '-6.2px 3.7px 39.7px rgba(198,252,166,0.58) inset, ' +
                '1.2px 1.2px 1.2px rgba(167,252,238,0.74) inset, ' +
                '6.2px 6.2px 6.2px rgba(157,255,212,0.27) inset',
            }}
          />
        </div>

        {/* Circle 3 */}
        <div 
          className="absolute rounded-full aspect-square animate-spin-slow-s"
          style={{ 
            left: '20%',
            top: '20%',
            width: '60%',
            background: 'linear-gradient(180deg, #0B1903 0%, rgba(11,25,3,0.00) 100%)',
            backdropFilter: 'blur(30px)',
            opacity: 0.4,
          }}
        >
          <div 
            className="absolute inset-0 rounded-full border"
            style={{
              borderColor: 'rgba(198,252,166,0.40)',
              boxShadow:
                '-1.2px -1.2px 1.2px #C6FCA6 inset, ' +
                '-6.2px 3.7px 39.7px rgba(198,252,166,0.58) inset, ' +
                '1.2px 1.2px 1.2px rgba(167,252,238,0.74) inset, ' +
                '6.2px 6.2px 6.2px rgba(157,255,212,0.27) inset',
            }}
          />
        </div>

        {/* Circle 4 - Smallest */}
        <div 
          className="absolute rounded-full aspect-square animate-spin-slow-e"
          style={{ 
            left: '30%',
            top: '30%',
            width: '40%',
            background: 'linear-gradient(180deg, #0B1903 0%, rgba(11,25,3,0.00) 100%)',
            backdropFilter: 'blur(30px)',
            opacity: 0.4,
          }}
        >
          <div 
            className="absolute inset-0 rounded-full border"
            style={{
              borderColor: 'rgba(198,252,166,0.40)',
              boxShadow:
                '-1.2px -1.2px 1.2px #C6FCA6 inset, ' +
                '-6.2px 3.7px 39.7px rgba(198,252,166,0.58) inset, ' +
                '1.2px 1.2px 1.2px rgba(167,252,238,0.74) inset, ' +
                '6.2px 6.2px 6.2px rgba(157,255,212,0.27) inset',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default DecorativeCircle
