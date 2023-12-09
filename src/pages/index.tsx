import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Link from 'next/link';

import Image from 'next/image';
import deved from '../../public/icon.png';
import certification from '../../public/certification.png';
import software from '../../public/software.png';
import projects from '../../public/projects.png';
import web1 from '../../public/web1.png';
import web2 from '../../public/web2.png';
import web3 from '../../public/web3.png';
import web7 from '../../public/web7.png';
import web9 from '../../public/web9.jpg';
import web8 from '../../public/web8.jpg';

import { useState } from 'react';




export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Jhojans Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white'>developed by</h1>
            <ul className='flex items-center'>

              <li><BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white'/></li>

            </ul>
          </nav>
          <div className='text-center p-4 '>
            <h2 className='text-4xl py-2 text-green-500 font-medium md:text-6xl dark:text-white'>Jhojans Mosquera Castillo</h2>
            <h3 className='text-2xl py-4 font-medium md:text-3xl dark:text-white'>Web developer</h3>
            <p className='text-md py-5 leading-6 text-gray-800 md:text-xl max-w-4xl mx-auto dark:text-white'>I am a Telecommunications Engineer 
            interested mainly in technology, software development and languages English and French. I work as a Front-end developer, 
            focused on improving aesthetics and an efficient UI/UX.

            I&apos;ve worked in the Infrastructure TI field being in charge of platforms like Kaspersky, Cloudflare, IONOS, WordPress, Moodle, AWS, GoDaddy, Linode, namecheap, Zoho, Github, o365 Admin, Azure.

  Also, I&apos;ve been in charge of cybersecurity tasks like:
- Email analysis in Microsoft Defender using different apps like any.run, virustotal, etc.
- Vulnerability remediation in websites: CORS, XSS, Headers, Hijacking, etc.
- Maintaining the correct infrastructure for ISO 27001 and 9001.
- GoPhish Campaigns.

            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            {/* <AiFillTwitterCircle /> */}
            <Link href="https://www.linkedin.com/in/jhojans-mosquera-castillo-73b0a1224/"><AiFillLinkedin /></Link>
            <Link href="https://github.com/Janz07"></Link>
            <AiFillGithub />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-green-400  to-white-200 rounded-full py-6 w-60 h-60 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={deved} layout='fill' objectFit='cover' alt='' />
          </div>
        </section>
        <section>
          <div className='text-center'>
            <h3 className='text-3xl pt-8 font-medium my-10 dark:text-white'>About me</h3>
            <p className='text-md py-5 leading-6 text-gray-800 md:text-xl max-w-4xl mx-auto dark:text-white'>I consider myself 
            a disciplined, autonomous and diligent person, which has allowed me to develop qualities that have led me to learn office 
            automation tools, development and language skills over the years.
            </p>

          </div>
          <div className='lg:flex gap-10 place-content-evenly '>
            <div className='text-center shadow-lg p-10 rounded-xl my-10   dark:bg-white'>
              <Image className='mx-auto' src={certification} alt=''width={200} height={200} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Education / Skills</h3>
              <p className='text-800 py-1 max-w-xs mx-auto'>Techinal baccalaureate Residential facilities at Laureano Gómez</p>
              <p className='text-800 py-1 max-w-xs mx-auto'>(Bachelor Degree) Engineering of Telecommunications at 
                <Link href="https://ucc.edu.co/">
                <span className='text-green-400'> Universidad Cooperativa de Colombia</span>
                </Link>
              </p>
              <p className='text-800 py-1 max-w-xs mx-auto'>English Level (C1)
                <Link href="https://www.efset.org/cert/q9DNCx">
                <span className='text-green-400'> EF Certificate</span>
                </Link>
              </p>
              <p className='text-800 py-1 max-w-xs mx-auto'>Spanish - Native</p>
              <p className='text-800 py-1 max-w-xs mx-auto'>French - Intermediate</p>

            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image className='mx-auto' src={software} alt='' width={200} height={200} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Technologies</h3>
              <p className='text-800 py-1'>HTML</p>
              <p className='text-800 py-1'>CSS</p>
              <p className='text-800 py-1'>JavaScript</p>
              <p className='text-800 py-1'>PHP</p>
              <p className='text-800 py-1'>WordPress</p>
              <p className='text-800 py-1'>Ecommerce</p>
              <p className='text-800 py-1'>React JS</p>
              <p className='text-800 py-1'>Next JS - Tailwind</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image className='mx-auto' src={projects} alt='' width={200} height={200} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Projects</h3>
              <Link href="https://janz07.github.io/Delicious/">
                <p className='text-800 py-1 hover:text-green-400'>Delicious</p>
              </Link>
              <Link href="https://github.com/Janz07/higlot">
                <p className='text-800 py-1 hover:text-green-400'>Higlot</p>
              </Link>
              <Link href="https://cryptoapp.jhojans.com/">
                <p className='text-800 py-1 hover:text-green-400'>Cryptoapp</p>
              </Link>
              <Link href="https://tic-tac-toe.jhojans.com/">
                <p className='text-800 py-1 hover:text-green-400'>Tic-Tac-Toe</p>
              </Link>

            </div>
          </div>
        </section>
        <section>
          <div className=' text-center my-10'>
            <h3 className='text-3xl py-8 font-medium dark:text-white'>Portofolio</h3>
            <p className='text-md py-5 leading-6 text-gray-800 md:text-xl max-w-4xl mx-auto dark:text-white'>
            I have been part in companies such as freelance. Working with Wordpress and Woocommerce, creating 
            and modifying pages/templates in their child component; for this, applying knowledge in Frontend such as HTML, 
            CSS and JS. I have used PHP in the implementation of forms and sessions.
            </p>
          </div>
        </section>
        <div className='flex flex-col gap-10 pt-10 pb-10 lg:flex-row lg:flex-wrap lg:pb-40'>
          <div className='basis-1/3 flex-1'>
            <Link href="https://eqcompanyco.com/">
              <Image src={web9} className='rounded-lg object-cover' width={100} height={100} layout= 'responsive' alt='' />
            </Link>
          </div>
          <div className='basis-1/3 flex-1'>
            <Link href="http://fraktalprefabricados.com/">
              <Image src={web8} className='rounded-lg object-cover' width={100} height={100} layout= 'responsive' alt='' />              
            </Link>
          </div>
          <div className='basis-1/3 flex-1'>
              <Image src={web7} className='rounded-lg object-cover' width={100} height={100} layout= 'responsive' alt='' />              
          </div>
        </div>
      </main>
    </div>
  )
}
