import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <div className='flex align-middle w-[90%] mx-auto mt-4 mb-0 gap-10'>
        <Link href={'./'} className='font-bold text-2xl leading-none'>
          &quot;POST&quot; - NYC Security
        </Link>
      </div>
      <main className='align-middle w-[90%] mx-auto mt-4 mb-0'>
        <p className='text-sm translate-x-1'>May 5th, 2023</p>
        <p className='text-sm translate-x-1'>by ______-______</p>
        <div className='pt-4'>
          <p className='text-sm sm:w-[400px] text-justify'>
            &quot;POST&quot; is a thought-provoking project that delves into the
            network of nearly 1000 security cameras dispersed across all five
            boroughs of NYC. Through the lens of these cameras, the project
            explores the impact of surveillance on personal movement and
            creativity within the urban landscape, as well as the psychological
            and emotional effects on individuals. Inspired by the film
            &quot;Those Who Jump&quot; and incorporating similar techniques, the
            project provides a broader context to the viewer, highlighting the
            inherent voyeuristic nature of surveillance. The project raises
            critical questions about the ethics of surveillance and the
            implications of bringing a camera into private spaces. By
            scrutinizing the contradictions within our urban surroundings,
            &quot;POST&quot; encourages viewers to reflect on their own
            experiences and provokes essential questions about personal freedom
            and societal control.
          </p>
        </div>
      </main>
      <Link
        className='flex align-middle w-[90%] font-bold mx-auto mt-10 mb-0'
        href={'./'}
      >
        &#60; Back
      </Link>
    </div>
  );
}
