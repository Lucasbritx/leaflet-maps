'use client';

import dynamic from 'next/dynamic';
import "leaflet/dist/leaflet.css";

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default function Page() {
  return <Map />;
}