import { v4 as uuidv4 } from 'uuid'
import axios from '@/utils/axios'

import Hero from './components/Hero'

const HeroController = async ({ params }) => {
  const nodes = []
  const edges = []

  const { data: hero } = await axios.get(`people/${params.id}`)

  /* construct the graph for ReactFlow */
  const nodeHero = {
    id: uuidv4(),
    type: 'hero',
    position: { x: 0, y: 0 },
    data: {
      data: hero,
      handles: [],
    },
  }

  nodes.push(nodeHero)

  for (const filmId of hero.films) {
    const { data: film } = await axios.get(`films/${filmId}`)

    // create a React Flow handle for each film
    const handleFilm = { id: uuidv4() }
    nodeHero.data.handles.push(handleFilm)

    // create a node for each film and connect it to the hero node
    const nodeFilm = {
      id: uuidv4(),
      type: 'film',
      position: { x: 300, y: 0 },
      data: { data: film, handles: [] },
    }
    const edgeFilm = {
      id: uuidv4(),
      source: nodeHero.id,
      target: nodeFilm.id,
      sourceHandle: handleFilm.id,
    }

    nodes.push(nodeFilm)
    edges.push(edgeFilm)

    // get the intersection of starships in the hero and the film
    const filmStarships = film.starships.filter(starship => hero.starships.includes(starship))

    for (const starshipId of filmStarships) {
      const { data: starship } = await axios.get(`starships/${starshipId}`)

      // create a React Flow handle for each starship
      const handleStarship = { id: uuidv4() }
      nodeFilm.data.handles.push(handleStarship)

      // create a node for each starship and connect it to the film node
      const nodeStarship = {
        id: uuidv4(),
        type: 'starship',
        position: { x: 600, y: 0 },
        data: starship,
      }
      const edgeStarship = {
        id: uuidv4(),
        source: nodeFilm.id,
        target: nodeStarship.id,
        sourceHandle: handleStarship.id,
      }

      nodes.push(nodeStarship)
      edges.push(edgeStarship)
    }
  }

  return <Hero nodes={nodes} edges={edges} />
}

export default HeroController
