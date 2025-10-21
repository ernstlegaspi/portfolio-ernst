import dynamic from 'next/dynamic'

import Socials from './Socials'
import About from './About'

const Projects = dynamic(() => import('./Projects'))
const Skills = dynamic(() => import('./Skills'))
const Experience = dynamic(() => import('./Experience'))

export default function Magazine() {
  return <>
    <div className='bg-[#edeae1] h-[800px] w-[600px] absolute z-[2] ml-[4px] mt-[4px] rounded max-[650px]:w-[95%] max-[650px]:mx-auto max-[650px]:ml-0 max-[650px]:mt-[-20px]'></div>
    <div className='bg-[#d0cbbb] h-[800px] w-[600px] absolute z-[1] ml-[8px] mt-[8px] rounded max-[650px]:w-[95%] max-[650px]:mx-auto max-[650px]:ml-0 max-[650px]:mt-[-40px]'></div>
    <div className='bg-[#d7d6db] h-[800px] w-[600px] flex relative z-10 rounded max-[650px]:w-[95%] max-[650px]:mx-auto'>
      <div className='bg-[#fdfcf8] h-[800px] w-[600px] bshadow rounded p-4 pt-0 overflow-y-scroll'>
        <h1 className='text-tb text-[70px] font-bold text-center max-[650px]:text-[50px] max-[460px]:text-[30px]'>ERNST LEGASPI</h1>

        <Socials />
        <About />
        <Projects />
        <Skills />
        <Experience />
      </div>
    </div>
  </>
}
