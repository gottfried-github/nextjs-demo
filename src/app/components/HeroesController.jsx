'use client'

import { useState } from 'react'

import axios from 'axios'
import Heroes from './Heroes'

const HeroesController = ({ data }) => {
  const [_heroes, setHeroes] = useState(data.results)
  const [prevUrl, setPrevUrl] = useState(data.previous)
  const [nextUrl, setNextUrl] = useState(data.next)

  const handlePrevClick = async () => {
    if (!prevUrl) return

    const { data } = await axios.get(prevUrl)

    setHeroes(data.results)
    setPrevUrl(data.previous)
    setNextUrl(data.next)
  }

  const handleNextClick = async () => {
    if (!nextUrl) return

    const { data } = await axios.get(nextUrl)

    setHeroes(data.results)
    setPrevUrl(data.previous)
    setNextUrl(data.next)
  }

  return (
    <div className="flex flex-col min-w-96 m-auto p-4 gap-y-4 bg-white rounded shadow-lg">
      <Heroes heroes={_heroes} />
      <div className="flex justify-center gap-x-1.5">
        <button
          className={`py-1 px-2 bg-zinc-100 rounded${!prevUrl ? ' text-slate-400' : ''}`}
          disabled={!prevUrl}
          onClick={handlePrevClick}
        >
          Previous
        </button>
        <button
          className={`py-1 px-2 bg-zinc-100 rounded${!nextUrl ? ' text-slate-400' : ''}`}
          disabled={!nextUrl}
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default HeroesController
