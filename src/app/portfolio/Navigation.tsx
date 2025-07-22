import React from 'react'
import Logo from './Logo';

const Navigation = () => {

    const [state,setState] = React.useState(false);



  return (
    <div className='bg-[#FFFFFF14] rounded-[24px] fixed top-4 left-4 right-4 z-50 max-w-[600px] mx-auto'>
        <nav className='flex justify-between items-center p-4'>
            <Logo/>
            <ul className='flex space-x-6'>
            <li className='text-white hover:text-gray-300 cursor-pointer'>Work</li>
            <li className='text-white hover:text-gray-300 cursor-pointer'>About</li>
            <li className='text-white hover:text-gray-300 cursor-pointer'>Let's talk</li>
            </ul>
            <div className='text-white text-lg font-semibold'>
            {state ? (
                <CloseIcon size={24} color="#666" onClick={() => setState(false)} />
            ) : (   
                <MenuIcon onClick={() => setState(true)} />
            )}
            </div>
        </nav>
    </div>
  )
}

export default Navigation



const MenuIcon = ({ onClick=()=>{}}:{ onClick?: () => void }) => {
  return (
    <div
      className="framer-lddrrb"
      data-framer-name="Menu"
      data-highlight="true"
      tabIndex={0}
      style={{ opacity: 1 }}
      onClick={onClick}
    >
      <div
        className="framer-1yxrggj"
        data-framer-name="Bottom"
        style={{
          backgroundColor: 'rgb(102, 102, 102)',
          borderRadius: '10px',
          transform: 'none',
          opacity: 1,
          height: '4px',
          width: '24px',
          margin: '4px 0',
        }}
      />
      <div
        className="framer-18kz7kl"
        data-framer-name="Top"
        style={{
          backgroundColor: 'rgb(102, 102, 102)',
          borderRadius: '10px',
          transform: 'none',
          opacity: 1,
          height: '4px',
          width: '24px',
          margin: '4px 0',
        }}
      />
    </div>
  );
};





const CloseIcon = ({ size = 24, color = '#666', onClick = () => {} }:{size?: number, color?: string ,onClick?: () => void}) => {
  const barStyle = {
    backgroundColor: color,
    borderRadius: '10px',
    width: `${size}px`,
    height: `${size / 8}px`,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transformOrigin: 'center',
    transition: 'transform 0.3s ease',
  };

  return (
    <div
      onClick={onClick}
      className="relative"
      role="button"
      tabIndex={0}
      style={{
        width: size,
        height: size,
        opacity: 1,
        position: 'relative',
      }}
    >
      <div
        style={{
          ...barStyle,
          transform: 'translate(-50%, -50%) rotate(-45deg)',
        } as React.CSSProperties}
      />
      <div
        style={{
          ...barStyle,
          transform: 'translate(-50%, -50%) rotate(45deg)',
        } as React.CSSProperties}
      />
    </div>
  );
};





