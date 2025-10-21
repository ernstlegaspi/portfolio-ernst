import Link from 'next/link'
import { IconType } from 'react-icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

type SocialProps = {
  label: string
  link: string
  icon: IconType
  size?: number
}

export default function Socials() {
  const Social = ({ label, link, icon: Icon, size = 22 }: SocialProps) => {
    return <Link aria-label={label} href={link} target='_blank' rel='noreferrer'>
      <Icon size={size} />
    </Link>
  }

  return <>
    <div className='w-full h-[4px] bg-black/30 mt-2' />
    <div className='w-full h-[2px] mt-1 bg-black/30 mb-2' />

    <div className='gap-10 flex justify-center text-tb'>
      <Social
        label='View my projects on github.com/ernstlegaspi'
        link='https://github.com/ernstlegaspi'
        icon={FaGithub}
      />
      <Social
        label='View my LinkedIn on Ernst Legaspi'
        link='https://www.linkedin.com/in/ernst-danielle-legaspi-259547170/'
        icon={FaLinkedin}
      />
      <Social
        label='You can call me through phone with the number +639198231753'
        link='tel:+639198231753'
        icon={FaPhone}
        size={20}
      />
      <Social
        label='My email is legaspiernstdanielle@gmail.com'
        link='mailto:legaspiernstdanielle@gmail.com'
        icon={MdEmail}
      />
    </div>

    <div className='w-full h-[2px] bg-black/30 mt-2' />
    <div className='w-full h-[4px] bg-black/30 mt-1' />
  </>
}