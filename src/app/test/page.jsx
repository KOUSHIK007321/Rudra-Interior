import Video from 'next-video';
// import myVideo from '/videos/vid1.mp4'; // The import automatically handles the asset metadata

export default function Page() {
  return <Video src='/videos/vid1.mp4' controls />;
}
