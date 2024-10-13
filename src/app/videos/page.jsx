'use client';

import { useState } from 'react';
import Image from 'next/image';
import disneyParty from '../../../public/video-tumbnails/disney-party.avif';
import bodaRuby from '../../../public/video-tumbnails/boda-ruby.avif';
import quinceIsabela from '../../../public/video-tumbnails/quince-isabela.avif';
import bodaMaria from '../../../public/video-tumbnails/boda-maria-jorge.avif';
import bodaLilian from '../../../public/video-tumbnails/boda-lilian-luis.avif';

const videos = [
  {
    id: 1,
    title: 'Quinceañera al estilo Disney',
    src: 'https://drive.google.com/file/d/1LQ4RuPaDQWuBXJAx6abIpCz3MOcH9JUT/preview',
    thumbnail: disneyParty,
  },
  {
    id: 2,
    title: 'Boda Ruby',
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

  return (
    <div className="flex h-screen bg-gray-100 mt-16">
      {/* Video player */}
      <div className="w-2/3 bg-black flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          <iframe
            width="100%"
            height="100%"
            src={selectedVideo.src}
            title={selectedVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="bg-white p-4">
          <h2 className="text-xl font-bold text-gray-900">
            {selectedVideo.title}
          </h2>
        </div>
      </div>

      {/* Scrollable video list */}
      <div className="w-1/3 bg-white overflow-y-auto">
        {videos.map((video) => (
          <div
            key={video.id}
            className={`flex p-4 hover:bg-gray-100 cursor-pointer ${
              selectedVideo.id === video.id ? 'bg-gray-200' : ''
            }`}
            onClick={() => setSelectedVideo(video)}
          >
            <div className="flex-shrink-0 relative w-40 h-24">
              <Image
                src={video.thumbnail}
                alt={video.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="ml-4 flex flex-col justify-center">
              <h3 className="text-sm font-medium text-gray-900">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
