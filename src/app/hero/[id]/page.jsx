import { getResourceById } from '@/api/resources'

import Hero from './components/Hero'

export const revalidate = 3600

const HeroController = async ({ params }) => {
  const hero = await getResourceById('people', params.id)

  const filmsFeatured = []

  for (const filmId of hero.films) {
    const film = await getResourceById('films', filmId)

    const starshipsRidden = []

    // get the intersection of starships in the hero and the film
    const filmStarships = film.starships.filter(starship => hero.starships.includes(starship))

    for (const starshipId of filmStarships) {
      const starship = await getResourceById('starships', starshipId)

      starshipsRidden.push(starship)
    }

    filmsFeatured.push({ ...film, starshipsRidden })
  }

  return (
    <Hero
      hero={{
        ...hero,
        filmsFeatured,
      }}
    />
  )
}

export default HeroController
