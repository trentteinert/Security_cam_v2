'use client';
import React, { useState, useEffect } from 'react';
import cameras from './Cameras';
import Image from 'next/image';
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

function CameraGrid() {
  const [lastUpdate, setLastUpdate] = useState<number>(Date.now());
  const [cameraList, setCameraList] = useState<Camera[]>([]);
  const [selectedCamera, setSelectedCamera] = useState<Camera | null>(null);

  useEffect(() => {
    setCameraList(cameras.sort(() => 0.5 - Math.random()).slice(0, 12));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLastUpdate(Date.now());
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  const handleRefreshClick = () => {
    setCameraList(cameras.sort(() => 0.5 - Math.random()).slice(0, 12));
    setSelectedCamera(null);
  };

  const scrollToTop = (camera: Camera) => {
    setSelectedCamera(camera);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleCloseClick = () => {
    setSelectedCamera(null);
  };

  return (
    <div>
      <div className='flex align-middle w-[90%] mx-auto mt-4 mb-0 md:gap-10 gap-2'>
        <h1 className='font-bold sm:text-2xl text-lg leading-tight'>
          &quot;POST&quot; - NYC Security
        </h1>
        <div className='flex gap-4'>
          <button
            className='translate-y-[2px] px-2 rounded-md border hover:text-red-400 m-auto'
            onClick={handleRefreshClick}
          >
            Refresh
          </button>
          <Link
            href={'/info'}
            className='translate-y-[2px] px-2 rounded-md border hover:text-red-400 m-auto'
          >
            Info
          </Link>
        </div>
      </div>
      {selectedCamera && (
        <div className='relative lg:ml-[5%] m-auto lg:w-[60%] w-[95%]'>
          <img
            className='w-[100%] mx-auto p-2 px-0 pb-0 pt-3 object-cover object-left-top'
            src={`${selectedCamera.imageUrl}?t=${lastUpdate}`}
            alt='/'
          />
          <button
            className='absolute top-0 right-0 mt-3 leading-none text-xl font-bold text-white bg-gray-800 px-2 py-1'
            onClick={handleCloseClick}
          >
            X
          </button>
        </div>
      )}

      <ul className='grid sm:grids-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-[90%] mt-4 mx-auto'>
        {cameraList.map((camera) => (
          <div key={camera.id} className='container'>
            <div onClick={() => scrollToTop(camera)}>
              <img
                className='w-full md:h-[250px] lg:h-[350px] xl:h-[400px] object-cover object-left-top'
                src={`${camera.imageUrl}?t=${lastUpdate}`}
                alt={camera.name}
              />
            </div>
            <div className='camera-info'>
              <p className='font-bold text-lg'>{camera.area}</p>
              <h2 className='font-semibold text-sm'>{camera.name}</h2>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CameraGrid;
