import Container from '@/components/container'
import GameCard from '@/components/gameCard'
import Input from '@/components/input'
import { GameProps } from '@/utils/types/game'
import React from 'react'

async function getData(title: string) {
  try {
    const decodeTitle = decodeURI(title)
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`)
    return res.json()
  } catch (error) {
    return null
  }
}

export default async function Search({
  params: { title } }: {
    params: { title: string }
  }) {

  const game: GameProps[] = await getData(title)

  return (
    <main className='w-full text-black'>
      <Container>
        <Input />

        {!game && (
          <p>Esse jogo não foi encontrado. 😕</p>
        )}

        {game && (
          <div>
            <h1 className='text-xl text-black font-bold mb-5'>Veja o que encontramos na nossa lista:</h1>
            <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {game.map((item) => (
                <GameCard key={item.id} data={item} />
              ))}
            </section>
          </div>
        )}

      </Container>
    </main>
  )
}
