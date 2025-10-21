import Image, { type StaticImageData } from 'next/image'

import nextjs from '@/public/nextjs.png'
import reactjs from '@/public/reactjs.png'
import nodejs from '@/public/nodejs.png'
import nestjs from '@/public/nestjs.png'
import typescript from '@/public/ts.webp'
import graphql from '@/public/graphql.png'
import git from '@/public/git.png'
import docker from '@/public/docker.png'
import gsap from '@/public/gsap.png'
import aws from '@/public/aws.png'
import tailwind from '@/public/tailwind.png'
import css from '@/public/css.png'
import eth from '@/public/eth.png'
import express from '@/public/express.png'
import fasitfy from '@/public/fasitfy.png'
import html from '@/public/html.png'
import jest from '@/public/jest.webp'
import mongodb from '@/public/mongodb.png'
import mysql from '@/public/mysql.png'
import postgresql from '@/public/postgresql.png'
import redis from '@/public/redis.png'
import sol from '@/public/sol.png'
import threejs from '@/public/threejs.webp'
import prisma from '@/public/prisma.png'
import typeorm from '@/public/typeorm.png'
import drizzle from '@/public/drizzle.png'

type ImageProps = {
  height?: number
  image: StaticImageData
  label: string
  width?: number
}

export default function Skills() {
  const Skills = ({ height = 50, image, label, width = 50 }: ImageProps) => <div className='w-max flex items-center justify-center flex-col'>
    <Image
      alt={label}
      src={image}
      height={height}
      width={width}
    />
    <p>{label}</p>
  </div>

  return <>
    <p className='text'>TECHNOLOGIES</p>

    <div className='grid grid-cols-7 gap-4 max-[630px]:grid-cols-6 max-[530px]:grid-cols-5 max-[460px]:grid-cols-4 max-[390px]:grid-cols-3 max-[330px]:grid-cols-2'>
      <Skills
        image={eth}
        label='Ethereum'
        width={30}
      />
      <Skills
        image={sol}
        label='Solidity'
      />
      <Skills
        image={nextjs}
        label='Next.js'
      />
      <Skills
        image={reactjs}
        label='React.js'
      />
      <Skills
        image={nodejs}
        label='Node.js'
      />
      <Skills
        image={nestjs}
        label='Nest.js'
      />
      <Skills
        image={typescript}
        label='Typescript'
      />
      <Skills
        image={graphql}
        label='Graphql'
      />
      <Skills
        image={git}
        label='Git'
      />
      <div className='ml-[-15px]'>
        <Skills
          image={docker}
          label='Docker'
          width={80}
        />
      </div>
      <Skills
        image={fasitfy}
        label='Fastify'
      />
      <Skills
        image={aws}
        label='AWS'
      />
      <Skills
        image={reactjs}
        label='React Native'
      />
      <Skills
        image={prisma}
        label='Prisma'
      />
      <Skills
        image={typeorm}
        label='TypeORM'
      />
      <Skills
        image={drizzle}
        label='Drizzle'
      />
      <div className='ml-[15px]'>
        <Skills
          image={css}
          label='CSS'
          width={40}
        />
      </div>
      <Skills
        image={express}
        label='Express.js'
      />
      <Skills
        image={gsap}
        label='Gsap'
      />
      <Skills
        image={html}
        label='HTML'
      />
      <Skills
        image={jest}
        label='Jest'
      />
      <Skills
        image={mongodb}
        label='Mongodb'
      />
      <Skills
        image={mysql}
        label='MySQL'
        width={60}
      />
      <Skills
        image={postgresql}
        label='PostgreSQL'
        width={40}
      />
      <Skills
        image={redis}
        label='Redis'
      />
      <Skills
        image={threejs}
        label='Three.js'
      />
      <div className='w-max flex items-center justify-center flex-col'>
        <Image
          alt='Tailwind CSS'
          src={tailwind}
          height={50}
          width={50}
          className='mt-[5px]'
        />
        <p className='mt-[10px]'>Tailwind CSS</p>
      </div>
    </div>
  </>
}
