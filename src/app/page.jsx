import axios from 'axios'

import Heroes from './components/Heroes'

const HeroesController = async () => {
  const { data: heroesData } = await axios.get('http://sw-api.starnavi.io/people')

  return (
    <main>
      <Heroes heroes={heroesData.results} />
    </main>
  )
}

export default HeroesController
