import Image from 'next/image'

import us from '@/public/us.webp'

export default function About() {
  return <div className='w-full'>
    <p className='text'>ABOUT ME</p>

    <Image
      alt='Us'
      src={us}
      className='
        w-full h-[565px] object-contain max-[560px]:mt-[-35px]
        max-[500px]:mt-[-65px]
        max-[460px]:mt-[-85px]
        max-[420px]:mt-[-105px]
        max-[360px]:mt-[-135px]
      '
    />

    <p className='
      mt-2 text-justify max-[560px]:mt-[-30px]
      max-[500px]:mt-[-55px]
      max-[460px]:mt-[-75px]
      max-[420px]:mt-[-95px]
      max-[360px]:mt-[-115px]
    '>
      Hello, World! I'm Ernst Legaspi — A Full Stack Developer with 5 years of experience who loves to develop high performance and optimized applications with user experience in mind.
    </p>

    <p className='mt-2'>I have 2 dogs, a Golden Retriever and a Saint Bernard. I love to take them on evening walks, this helps me to refresh my mind also.</p>
  </div>
}
