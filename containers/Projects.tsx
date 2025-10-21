import Image, { type StaticImageData } from 'next/image'
import { FaGithub } from 'react-icons/fa'

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

type StackProps = {
  className?: string
  height?: number
  image: StaticImageData
  label: string
  width?: number
}

export default function Projects() {
  const Stack = ({ className = 'ml-1', height = 30, image, label, width = 30 }: StackProps) => <div className='flex items-center bg-black/15 rounded p-1 px-2'>
    <Image
      alt={label}
      src={image}
      height={height}
      width={width}
    />
    <p className={className}>{label}</p>
  </div>

  const Repo = ({ label = 'Code', link }: { label?: string, link: string }) => <a
    href={link}
    target='_blank'
    rel='noreferrer a rel noopener - Google Search'
    className='flex items-center mt-3 text-white bg-tb rounded p-2 w-max cursor-pointer transition-all hover:bg-black'
  >
    <FaGithub />
    <p className='ml-2'>{label}</p>
  </a>

  const Lines = () => <>
    <div className='w-full h-[4px] bg-black/30 mt-2' />
    <div className='w-full h-[2px] mt-1 bg-black/30 mb-2' />
  </>

  const NFTMarketplace = () => <>
    <p className='font-medium text-[20px]'>NFT Marketplace</p>
    <p>A ERC-721 based NFT Marketplace where user can mint, list, buy/sell, and transfer tokens.</p>

    <Lines />

    <p>STACKS:</p>
    <div className='flex flex-wrap mt-2 gap-2'>
      <Stack
        height={20}
        width={20}
        label='Ethereum'
        image={eth}
      />

      <Stack
        className='ml-0'
        label='Solidity'
        image={sol}
      />

      <Stack label='Git' image={git} />

      <Stack label='Next.js' image={nextjs} />

      <Stack label='Node.js' image={nodejs} />

      <Stack label='Fastify' image={fasitfy} />

      <Stack label='Typescript' image={typescript} />

      <Stack label='MongoDB' image={mongodb} />

      <Stack label='Redis' image={redis} />

      <Stack label='HTML' image={html} />

      <Stack label='CSS' image={css} />

      <Stack label='Tailwind CSS' image={tailwind} />

      <Stack label='Jest' image={jest} />
    </div>

    <Repo link='https://github.com/ernstlegaspi/full-stack-nft-marketplace' />
  </>

  const StufyForge = () => <>
    <p className='font-medium text-[20px] mt-6'>StudyForge</p>
    <p>An application where it helps students to review, set timer on questions to appear again so that the know will remain fresh.</p>

    <Lines />

    <p>STACKS:</p>
    <div className='flex flex-wrap mt-2 gap-2'>
      <Stack label='Git' image={git} />

      <Stack label='Next.js' image={nextjs} />

      <Stack label='Node.js' image={nodejs} />

      <Stack label='Fastify' image={fasitfy} />

      <Stack label='Typescript' image={typescript} />

      <Stack label='MongoDB' image={mongodb} />

      <Stack label='Redis' image={redis} />

      <Stack label='HTML' image={html} />

      <Stack label='CSS' image={css} />

      <Stack label='Tailwind CSS' image={tailwind} />

      <Stack label='Jest' image={jest} />
    </div>

    <div className='flex gap-1'>
      <Repo label='Frontend' link='https://github.com/ernstlegaspi/studyforge-frontend' />
      <Repo label='Backend' link='https://github.com/ernstlegaspi/studyforge-backend' />
    </div>
  </>

  const TaskManagement = () => <>
    <p className='font-medium text-[20px] mt-6'>TaskManagement</p>
    <p>A minimal clone of Monday.com.</p>

    <Lines />

    <p>STACKS:</p>
    <div className='flex flex-wrap mt-2 gap-2'>
      <Stack label='Git' image={git} />

      <Stack label='Next.js' image={nextjs} />

      <Stack label='Typescript' image={typescript} />

      <Stack label='PostgreSQL' image={postgresql} />

      <Stack label='Prisma' image={prisma} />

      <Stack label='Redis' image={redis} />

      <Stack label='HTML' image={html} />

      <Stack label='CSS' image={css} />

      <Stack label='Tailwind CSS' image={tailwind} />

      <Stack label='Jest' image={jest} />
    </div>

    <Repo link='https://github.com/ernstlegaspi/task-management' />
  </>

  const Huddle = () => <>
    <p className='font-medium text-[20px] mt-6'>Huddle</p>
    <p>Here in Huddle, you can meet new people, become friends with same interests, like posts, and chat with people.</p>

    <Lines />

    <p>STACKS:</p>
    <div className='flex flex-wrap mt-2 gap-2'>
      <Stack label='Git' image={git} />

      <Stack label='React.js' image={reactjs} />

      <Stack label='Node.js' image={nodejs} />

      <Stack label='Express.js' image={express} />

      <Stack label='Typescript' image={typescript} />

      <Stack label='MongoDB' image={mongodb} />

      <Stack label='Redis' image={redis} />

      <Stack label='HTML' image={html} />

      <Stack label='CSS' image={css} />

      <Stack label='Tailwind CSS' image={tailwind} />

      <Stack label='Jest' image={jest} />
    </div>

    <Repo link='https://github.com/ernstlegaspi/huddle' />
  </>

  return <>
    <p className='text'>PROJECTS</p>
    <NFTMarketplace />
    <StufyForge />
    <TaskManagement />
    <Huddle />
  </>
}
