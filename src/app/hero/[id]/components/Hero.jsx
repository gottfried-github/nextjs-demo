'use client'

import { useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Dagre from '@dagrejs/dagre'
import ReactFlow, { Controls } from 'reactflow'
import 'reactflow/dist/style.css'

import HeroNode from './HeroNode'
import FilmNode from './FilmNode'
import StarshipNode from './StarshipNode'

const dagreGraph = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}))

const layOutNodes = (nodes, edges) => {
  dagreGraph.setGraph({ rankdir: 'LR', ranksep: 800, nodesep: 800 })

  edges.forEach(edge => dagreGraph.setEdge(edge.source, edge.target))
  nodes.forEach(node => dagreGraph.setNode(node.id, node))

  Dagre.layout(dagreGraph)

  return {
    nodes: nodes.map(node => {
      const { x, y } = dagreGraph.node(node.id)
      return { ...node, position: { x, y } }
    }),
    edges,
  }
}

const nodeTypes = {
  hero: HeroNode,
  film: FilmNode,
  starship: StarshipNode,
}

const Hero = ({ hero }) => {
  /* construct the graph for ReactFlow */
  const graph = useMemo(() => {
    const nodes = []
    const edges = []

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

    for (const film of hero.filmsFeatured) {
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

      for (const starship of film.starshipsRidden) {
        // create a React Flow handle for each starship
        const handleStarship = { id: uuidv4() }
        nodeFilm.data.handles.push(handleStarship)

        // create a node for each starship and connect it to the film node
        const nodeStarship = {
          id: uuidv4(),
          type: 'starship',
          position: { x: 600, y: 0 },
          data: { data: starship },
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

    return { nodes, edges }
  }, [hero])

  const graphLaidOut = useMemo(() => layOutNodes(graph.nodes, graph.edges), [graph])

  return (
    <ReactFlow
      nodeTypes={nodeTypes}
      nodes={graphLaidOut.nodes}
      edges={graphLaidOut.edges}
      style={{
        background: 'rgb(248, 250, 252)',
      }}
    >
      <Controls />
    </ReactFlow>
  )
}

export default Hero
