import { v4 as uuidv4 } from 'uuid'
import axios from '@/utils/axios'

import Hero from './components/Hero'

const HeroController = async ({ params }) => {
  const nodes = []
  const edges = []

  const { data: hero } = await axios.get(`people/${params.id}`)

  const nodeHero = { id: uuidv4(), data: hero }
  const handlesHero = []

  nodes.push({ node: nodeHero, handles: handlesHero })

  for (const filmId of hero.films) {
    const { data: film } = await axios.get(`films/${filmId}`)

    const handleFilm = { id: uuidv4() }
    handlesHero.push(handleFilm)

    const nodeFilm = { id: uuidv4(), data: film }
    const edgeFilm = {
      id: uuidv4(),
      source: nodeHero.id,
      target: nodeFilm.id,
      sourceHandle: handleFilm.id,
    }
    const handlesFilm = []

    nodes.push({ node: nodeFilm, handles: handlesFilm })
    edges.push({ edge: edgeFilm })

    const filmStarships = film.starships.filter(starship => hero.starships.includes(starship))

    for (const starshipId of filmStarships) {
      const { data: starship } = await axios.get(`starships/${starshipId}`)

      const handleStarship = { id: uuidv4() }
      handlesFilm.push(handleStarship)

      const nodeStarship = { id: uuidv4(), data: starship }
      const edgeStarship = {
        id: uuidv4(),
        source: nodeFilm.id,
        target: nodeStarship.id,
        sourceHandle: handleStarship.id,
      }

      nodes.push({ node: nodeStarship })
      edges.push({ edge: edgeStarship })
    }
  }

  return <Hero nodes={nodes} edges={edges} />
}

export default HeroController
