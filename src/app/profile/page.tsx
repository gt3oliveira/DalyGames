import Container from '@/components/container'
import Image from 'next/image'
import React from 'react'

import userImg from 'public/user.png'
import { FaShareAlt } from 'react-icons/fa'
import FavoriteCard from './components/favorite'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "DalyGames - Meu perfil",
  description: "Perfil Gutsvao Tavares | DalyGames sua plataforma de jogos!"
}

export default function Profile() {
  return (
    <main className='w-full text-black'>
      <Container>
        <section
          className={`
            mt-8 mb-6 flex flex-col items-center justify-between relative gap-3 
            sm:flex-row
          `}
        >
          <div className={`
            flex flex-col w-full items-center gap-4 text-lg justify-center
            sm:flex-row sm:justify-normal
          `}>
            <Image 
              src={userImg} 
              alt='Image do Usuário'
              quality={100}
              className='rounded-full w-56 h-56 object-cover'              
            />
            <h1 className='text-2xl font-bold'>Gustavo Tavares</h1>
          </div>

          <div className={`
            flex items-center justify-center top-0 right-0 gap-3 mt-2
            sm:absolute
          `}>
            <button className='bg-gray-700 px-4 py-3 rounded-lg text-white'>
              Configurações
            </button>
            <button className='bg-gray-700 px-4 py-3 rounded-lg'>
              <FaShareAlt size={24} color="#fff" />
            </button>
          </div>
        </section>

        <section className={`
          flex flex-wrap gap-5 flex-col 
          md:flex-row
        `}>
          <div className={`flex-grow flex-wrap`}>
            <FavoriteCard />
          </div>

          <div className={`flex-grow flex-wrap`}>
            <FavoriteCard />
          </div>

          <div className={`flex-grow flex-wrap`}>
            <FavoriteCard />
          </div>
        </section>
      </Container>    
    </main>
  )
}
