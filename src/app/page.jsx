import getHeroes from './api/heroes.js'
import Heroes from './components/Heroes'

export const revalidate = 3600

const HeroesController = async () => {
  const heroesData = await getHeroes()

  return (
    <main>
      <Heroes heroes={heroesData.results} />
    </main>
  )
}

export default HeroesController
