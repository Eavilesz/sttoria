'use client';

import { useState } from 'react';
import Image from 'next/image';

// Sample video data (replace with your actual video data)
const videos = [
  {
    id: 1,
    title: 'Beautiful Wedding Ceremony',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: '/placeholder.svg',
  },
  {
    id: 2,
    title: 'Exciting Corporate Event',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: '/placeholder.svg',
  },
  {
    id: 3,
    title: 'Serene Nature Photoshoot',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: '/placeholder.svg',
  },
  {
    id: 4,
    title: 'Vibrant Street Photography',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: '/placeholder.svg',
  },
  {
    id: 5,
    title: 'Intimate Family Portraits',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: '/placeholder.svg',
  },
  {
    id: 6,
    title: 'Dramatic Landscape Timelapse',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: '/placeholder.svg',
  },
  {
    id: 7,
    title: 'Artistic Black and White Series',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: '/placeholder.svg',
  },
  {
    id: 8,
    title: 'Behind the Scenes: Studio Setup',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: '/placeholder.svg',
  },
  {
    id: 9,
    title: 'Golden Hour Portrait Session',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: '/placeholder.svg',
  },
  {
    id: 10,
    title: 'Urban Architecture Photography',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: '/placeholder.svg',
  },
];

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div className="flex h-screen bg-gray-100">
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
