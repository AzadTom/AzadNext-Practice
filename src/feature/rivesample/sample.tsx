'use client';
import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';

export default function RiveSample() {
  const { rive, RiveComponent } = useRive({
    src: 'https://cdn.rive.app/animations/vehicles.riv',
    stateMachines: "bumpy",
    autoplay: false,
    layout: new Layout({
        fit:Fit.FitWidth,
        alignment:Alignment.Center,
    })
  });

  return (
    <RiveComponent
      className='w-full h-svh'
      onMouseEnter={() => rive && rive.play()}
      onMouseLeave={() => rive && rive.pause()}
    />
  );
}