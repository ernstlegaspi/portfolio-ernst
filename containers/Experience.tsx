import Image from 'next/image'

import allworld from '@/public/allworld.webp'
import jblanton from '@/public/jblanton.webp'
import vooks from '@/public/vooks.webp'
import switchConnect from '@/public/switchconnect.webp'
import Link from 'next/link'

export default function Experience() {
  const CompanyLabel = ({ label, link }: { label: string, link: string }) => {
    return <Link href={link} className='underline' target='_blank' rel='noreferrer'>
      {label}
    </Link>
  }

  return <div className='w-full pb-10 text-tb'>
    <p className='text'>EXPERIENCE</p>

    <p className='text-[20px] font-bold'>
      <CompanyLabel
        label='VOOKS'
        link='https://www.vooks.com/'
      />
    </p>
    <p className='font-bold'>Full Stack Developer</p>
    <p className='mb-2'>April 2025 - October 2025</p>

    <div className='flex max-[590px]:flex-col'>
      <Image
        alt='Vooks'
        src={vooks}
        className='w-[350px] h-[250px] max-[590px]:w-full max-[590px]:h-[320px] max-[460px]:h-[290px]'
      />

      <p className='flex-1 ml-4 text-justify mt-[-5px] max-[590px]:ml-0 max-[590px]:mt-4'>My day-to-day job here on Vooks is to implement application features, not just on mobile, but on web also. I also do bugs and error fixing for the whole application.</p>
    </div>

    <div className='flex items-end w-full flex-col mb-2 max-[590px]:items-start'>
      <p className='text-[20px] font-bold mt-8'>
        <CompanyLabel
          label='J. BLANTON PLUMBING'
          link='https://jblantonplumbing.com/'
        />
      </p>
      <p className='font-bold'>Full Stack Developer</p>
      <p>February 2024 - February 2025</p>
    </div>

    <div className='flex flex-row-reverse max-[590px]:flex-col'>
      <Image
        alt='Jblanton'
        src={jblanton}
        className='w-[350px] h-[250px] max-[590px]:w-full max-[590px]:h-[320px] max-[460px]:h-[290px]'
      />

      <p className='flex-1 mr-4 text-justify mt-[-5px] max-[590px]:mt-4'>In J. Blanton, I have develop their main website, maintain and optimized page speed. I handle all the frontend and backend features of the website. I have also develop internal application for the company.</p>
    </div>

    {/* game dev */}
    <p className='text-[20px] font-bold mt-8'>
      <CompanyLabel
        label='Switch Connect AU'
        link='https://www.switchconnect.com.au/'
      />
    </p>
    <p className='font-bold'>Game Developer</p>
    <p className='mb-2'>March 2023 - September 2023</p>

    <div className='flex max-[590px]:flex-col'>
      <Image
        alt='SwitchConnectAU'
        src={switchConnect}
        className='w-[350px] h-[250px] max-[590px]:w-full max-[590px]:h-[320px] max-[460px]:h-[290px]'
      />

      <p className='flex-1 ml-4 text-justify mt-[-5px] max-[590px]:ml-0 max-[590px]:mt-4'>Here in SwitchConnect, I was a Game Developer. I implemented different kind of game logics, also implemented block chain on the game since the game is about Open World Blockchain.</p>
    </div>

    <div className='flex items-end w-full flex-col mb-2 max-[590px]:items-start'>
      <p className='text-[20px] font-bold mt-8'>
        <CompanyLabel
          label='ALLWorld SEO'
          link='https://allworldseodigitalmarketingsolutions.com/'
        />
      </p>
      <p className='font-bold'>Full Stack Developer</p>
      <p>March 2019 - April 2022</p>
    </div>

    <div className='flex flex-row-reverse max-[590px]:flex-col'>
      <Image
        alt='ALLWorld'
        src={allworld}
        className='w-[350px] h-[250px] max-[590px]:w-full max-[590px]:h-[320px] max-[460px]:h-[290px]'
      />

      <p className='flex-1 mr-4 text-justify mt-[-5px] max-[590px]:mt-4'>My career started here at ALLWorld. I was the only developer here. Here in ALLWorld, I talk directly to all the clients that we handle. We discuss the features and designs for the application.</p>
    </div>
  </div>
}
