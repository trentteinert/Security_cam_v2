'use client';
import React, { useState, useEffect } from 'react';
import cameras from './Cameras';
import Link from 'next/link';

interface Camera {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  area: string;
  isOnline: string;
  imageUrl: string;
}

function FullScreenCamera({ playId }: any) {
  const [lastUpdate, setLastUpdate] = useState<number>(Date.now());
  const [selectedCamera, setSelectedCamera] = useState<Camera>(
    cameras[playId - 1]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLastUpdate(Date.now());
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  const handleRefreshClick = () => {
    setLastUpdate(Date.now());
  };

  return (
    <div className='bg-black h-screen'>
      <div className=''></div>
      <div className=' h-fit'>
        <img
          className='bg-red-400 h-fit md:h-[100vh] w-[100%] md:w-fit px-0 pb-0 object-cover object-left-top'
          src={`${selectedCamera.imageUrl}?t=${lastUpdate}`}
          alt={selectedCamera.name}
        />
        <div className='absolute w-fit h-[20px] md:h-[30px] translate-y-[-20px] md:translate-y-[-30px] p-2 py-0 text-white bg-black md:text-xl text-sm font-bold'>
          Camera {playId}: {selectedCamera.area} - {selectedCamera.name}
        </div>
      </div>
    </div>
  );
}

export default FullScreenCamera;
