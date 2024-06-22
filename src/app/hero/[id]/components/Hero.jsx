'use client'

import { useMemo } from 'react'
import Dagre from '@dagrejs/dagre'
import ReactFlow, { Controls } from 'reactflow'
import 'reactflow/dist/style.css'

import HeroNode from './HeroNode'
import FilmNode from './FilmNode'
import StarshipNode from './StarshipNode'

const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}))

const layOutNodes = (nodes, edges) => {
  g.setGraph({ rankdir: 'LR', ranksep: 800, nodesep: 800 })

  edges.forEach(edge => g.setEdge(edge.source, edge.target))
  nodes.forEach(node => g.setNode(node.id, node))

  Dagre.layout(g)

  return {
    nodes: nodes.map(node => {
      const { x, y } = g.node(node.id)
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

const Hero = ({ nodes, edges }) => {
  const graphLaidOut = useMemo(() => layOutNodes(nodes, edges), [nodes, edges])

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
