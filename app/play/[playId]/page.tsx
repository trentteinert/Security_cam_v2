import FullScreenCamera from '@/app/components/FullScreenCamera';

interface PageProps {
  params: {
    playId: string;
  };
}

export default function Home({ params }: PageProps) {
  return (
    <main className='body'>
      <FullScreenCamera playId={params.playId} />
    </main>
  );
}
