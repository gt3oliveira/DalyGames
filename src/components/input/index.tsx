'use client'
import React, { FormEvent, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

export default function Input() {
  const router = useRouter()
  const [input, setInput] = useState("")

  async function handleSearch(event: FormEvent) {
    event.preventDefault()
    if(input === '') return;    
    router.push(`/game/search/${input}`)
  }

  return (
    <form 
      onSubmit={handleSearch} 
      className='w-full bg-slate-200 flex justify-between p-2 items-center gap-2 my-5 rounded-lg'
    >
      <input
        type="text"
        placeholder='Procurando algum jogo?...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='w-full bg-transparent outline-none'
      />

      <button type='submit'>
        <FiSearch size={24} color='#ea580c' />
      </button>
    </form>
  )
}
