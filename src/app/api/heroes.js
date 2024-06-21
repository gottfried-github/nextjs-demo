import { cache } from 'react'
import axios from 'axios'

const getHeroes = cache(async () => {
  const { data: heroesData } = await axios.get('http://sw-api.starnavi.io/people')

  return heroesData
})

export default getHeroes
