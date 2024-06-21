'use client'

import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import ReactFlow from 'reactflow'
import 'reactflow/dist/style.css'

import HeroNode from './HeroNode'

const nodeTypes = {
  hero: HeroNode,
}

const Hero = ({ nodes, edges }) => {
  // const nodes = [{ id: '0', type: 'hero', position: { x: 0, y: 0 }, data: { hero } }]
  // const edges = []

  // return <ReactFlow nodeTypes={nodeTypes} nodes={nodes} edges={edges} />

  console.log('Hero, nodes:', nodes)

  return <div>test</div>
}

export default Hero
