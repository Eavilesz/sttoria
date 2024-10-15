'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import disneyParty from '../../../public/video-tumbnails/disney-party.avif';
import bodaRuby from '../../../public/video-tumbnails/boda-ruby.avif';
import quinceIsabela from '../../../public/video-tumbnails/quince-isabela.avif';
import bodaMaria from '../../../public/video-tumbnails/boda-maria-jorge.avif';
import bodaLilian from '../../../public/video-tumbnails/boda-lilian-luis.avif';

const videos = [
  {
    id: 1,
    title: 'Quinceañera Camila',
    src: 'https://drive.google.com/file/d/1LQ4RuPaDQWuBXJAx6abIpCz3MOcH9JUT/preview',
    thumbnail: disneyParty,
  },
  {
    id: 2,
    title: 'Boda Ruby y Mauricio',
    src: 'https://drive.google.com/file/d/1KPSjP-I2dl-CCkGujqs64EFc9iwGouf0/preview',
    thumbnail: bodaRuby,
  },
  {
    id: 3,
    title: 'Quinceañera Isabela',
    src: 'https://drive.google.com/file/d/1BID5Tm51IOznvr9Q3iLl92Duo0xMtKZn/preview',
    thumbnail: quinceIsabela,
  },
  {
    id: 4,
    title: 'Boda María y Jorge',
    src: 'https://drive.google.com/file/d/1LYaipcCuRZRUtLejI3ZIwVKtio2c_R8U/preview',
    thumbnail: bodaMaria,
  },
  {
    id: 5,
    title: 'Boda Lilian y Luis',
    src: 'https://drive.google.com/file/d/1ave-qZm5iF81Qe4QVLVFSGfXPP1u3K6Z/preview',
    thumbnail: bodaLilian,
  },
];

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const VideoCard = ({ video, isSelected, onClick }) => (
    <div
      className={`flex p-4 hover:bg-slate-100/25 cursor-pointer border-y border-slate-100/20 ${
        isSelected ? 'bg-gray-200/30' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex-shrink-0 relative w-40 h-24">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-md"
          sizes="(max-width: 768) 100vw"
        />
      </div>
      <div className="ml-4 flex flex-col justify-center">
        <h3 className="text-sm font-medium text-lg text-gray-100">
          {video.title}
        </h3>
      </div>
    </div>
  );

  const VideoPlayer = ({ video }) => (
    <div className="bg-black flex flex-col h-full">
      <div className="flex-grow flex items-center justify-center">
        <iframe
          width="100%"
          height="100%"
          src={video.src}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className=" p-4">
        <h2 className="text-xl font-bold text-gray-900">{video.title}</h2>
      </div>
    </div>
  );

  const DesktopLayout = () => (
    <div className="flex h-screen mt-16">
      <div className="w-2/3">
        <VideoPlayer video={selectedVideo} />
      </div>
      <div className="w-1/3  overflow-y-auto">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            isSelected={selectedVideo.id === video.id}
            onClick={() => setSelectedVideo(video)}
          />
        ))}
      </div>
    </div>
  );

  const MobileLayout = () => (
    <div className="flex flex-col h-screen mt-16">
      <div className="h-1/2">
        <VideoPlayer video={selectedVideo} />
      </div>
      <div className="h-1/2 overflow-y-auto ">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            isSelected={selectedVideo.id === video.id}
            onClick={() => setSelectedVideo(video)}
          />
        ))}
      </div>
    </div>
  );

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
}
