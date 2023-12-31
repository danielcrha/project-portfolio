import React from "react";
import MangoAI from "../public/assets/projects/mangoaisaas.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const aisaas = () => {
  return (
    <div className='w-full '>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10' />
        <Image
          className='absolute z-1 bg-black/80'
          layout='fill'
          objectFit='cover'
          src={MangoAI}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Mango AI SaaS</h2>
          <h3>
            React / Next.js 13 / Typescript / Tailwind / MySQL / Prisma / Stripe
            / Clerk / Crisp
          </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 '>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p className='pt-4'>
            This Software-as-a-Service (SaaS) platform offers a versatile range
            of AI-driven capabilities. Users can engage in conversations with AI
            (OpenAI API), create images, videos, compose music, and even
            generate code. The platform seamlessly integrates with
            industry-leading services such as Clerk for user authentication,
            Stripe for payment processing (enabling Pro Plan upgrades), Prisma
            for database management, and Crisp for customer support. Built on
            the robust Next.js 13&apos;s App Router, the platform prioritizes
            responsiveness, efficiency, and user-centric design principles.
          </p>
          <button
            className='px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-200 '
            onClick={() =>
              window.open("https://ai-saas-rho-nine.vercel.app/", "_blank")
            }
          >
            Demo
          </button>
          <button className='px-8 py-2 mt-4'>Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Next.js 13
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Typescript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Tailwind CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                MySQL
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Prisma
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Stripe
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Clerk
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Crisp
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                OpenAI API
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default aisaas;
