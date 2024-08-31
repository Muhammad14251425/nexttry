import { H2, H3, Span } from '@/libs/motion'
import React from 'react'

const About5 = () => {
  return (
    <div className='bg-[#561D25] py-14'>
      <div className='max-w-7xl mx-auto text-center'>
        <H2
          initial={{ y: 90, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, }}
          viewport={{ once: true }}
          className='text-7xl font-semibold text-white' >Our Core Values</H2>
        <H3
          initial={{ y: 90, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='text-[#ED3224] text-5xl mt-7 tracking-[10px] font-bold shadow-black'
          style={{ textShadow: '1px 1px 0 #ffffff, -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff' }}
        >T.H.R.E.E-U</H3>
        <div className='text-left text-5xl mt-10 font-bold space-y-3 text-[#ED3224]'>
          {/* <H3 className=''>T <span className='text-white tracking-widest text-3xl font-semibold'>ransparency</span> <span className='font-semibold text-3xl tracking-wider'>→  Being honest in our communication.</span></H3> */}

          <H3 className="flex items-center">
            {/* T with bounce effect from left */}
            <Span
              className="text-[#ED3224] text-5xl font-bold"
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 20, duration: 0.5 }}
            >
              T
            </Span>

            {/* ransparency with bounce effect from right */}
            <Span
              className="text-white tracking-widest text-3xl font-semibold ml-2"
              initial={{ x: '100vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25, duration: 0.6 }}
            >
              ransparency
            </Span>

            {/* →  Being honest in our communication. with custom animation */}
            <Span
              className="font-semibold text-2xl tracking-wider ml-4"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Custom easing for a modern, smooth effect
              }}
            >
              → Being honest in our communication.
            </Span>
          </H3>

          <H3 className="pl-20 flex items-center">
            <Span
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 20, duration: 0.5 }}
              className="text-[#ED3224] text-5xl font-bold"
            >
              H
            </Span>
            <Span
              initial={{ x: '100vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25, duration: 0.6 }}
              className="text-white tracking-widest text-3xl font-semibold ml-2"
            >
              umility
            </Span>
            <Span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-semibold text-2xl tracking-wider ml-4"
            >
              → Humble in our achievements.
            </Span>
          </H3>

          <H3 className="pl-40 flex items-center">
            <Span
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 20, duration: 0.5 }}
              className="text-[#ED3224] text-5xl font-bold"
            >
              R
            </Span>
            <Span
              initial={{ x: '100vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25, duration: 0.6 }}
              className="text-white tracking-widest text-3xl font-semibold ml-2"
            >
              eliability
            </Span>
            <Span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-semibold text-2xl tracking-wider ml-4"
            >
              → Establishing trust with our clients.
            </Span>
          </H3>

          <H3 className="pl-60 flex items-center">
            <Span
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 20, duration: 0.5 }}
              className="text-[#ED3224] text-5xl font-bold"
            >
              E
            </Span>
            <Span
              initial={{ x: '100vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25, duration: 0.6 }}
              className="text-white tracking-widest text-3xl font-semibold ml-2"
            >
              xcellence
            </Span>
            <Span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-semibold text-2xl tracking-wider ml-4"
            >
              → Delivering exceptional services to our clients.
            </Span>
          </H3>

          <H3 className="pl-80 flex items-center">
            <Span
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 20, duration: 0.5 }}
              className="text-[#ED3224] text-5xl font-bold"
            >
              E
            </Span>
            <Span
              initial={{ x: '100vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25, duration: 0.6 }}
              className="text-white tracking-widest text-3xl font-semibold ml-2"
            >
              mpathy
            </Span>
            <Span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-semibold text-2xl tracking-wider ml-4"
            >
              → Looking after our own.
            </Span>
          </H3>

          <H3 className="pl-[400px] flex items-center">
            <Span
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 20, duration: 0.5 }}
              className="text-[#ED3224] text-5xl font-bold"
            >
              U
            </Span>
            <Span
              initial={{ x: '100vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25, duration: 0.6 }}
              className="text-white tracking-widest text-3xl font-semibold ml-2"
            >
              nwavering
            </Span>
            <Span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-semibold text-2xl tracking-wider ml-4"
            >
              → Executing with firm determination.
            </Span>
          </H3>
        </div>
      </div>
    </div>
  )
}

export default About5