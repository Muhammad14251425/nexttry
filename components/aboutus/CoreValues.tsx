import { H2, P } from '@/libs/motion';
import Image from 'next/image'
import React from 'react'

interface CoreValuesProps {
    imageurl: string;
    heading: string;
    body: string;
    numbering: number
    position: 'left' | 'right';
}


const CoreValues = ({ imageurl, heading, body, position, numbering }: CoreValuesProps) => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='relative'>
                <Image src={imageurl} height={800} width={800} alt='demo image' className='h-52 w-[420px] object-fill touch-none pointer-events-none' />
                <p className={`absolute ${position == 'right' && 'top-4 left-40'} ${position == 'left' && 'top-4 right-40'} text-2xl font-bold`}>0{numbering}</p>
                <H2
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{
                        opacity: 1,
                        transition: {
                            delay: numbering * 1.1,
                            type: 'spring',
                            stiffness: 20,
                            damping: 50
                        }
                    }}
                    className={`absolute ${position == 'right' && 'top-10 right-20'} ${position == 'left' && 'top-10 left-20'} text-base font-semibold`}>{heading}</H2>
                <P
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{
                        opacity: 1,
                        transition: {
                            type: 'spring',
                            stiffness: 20,
                            damping: 50
                        }
                    }}
                    className={`absolute max-w-52 font-semibold ${position == 'right' && 'top-[75px] right-0'} ${position == 'left' && 'top-[75px] '}`}>{body}</P>
            </div>
        </div>
    )
}

export default CoreValues