import { useMemo } from 'react'

import { truncate } from '@/utils/utils'
import Node from './Node'
import NodeGrid from './NodeGrid'
import CellInfo from './CellInfo'

const StarshipNode = ({ data: { data } }) => {
  const films = useMemo(() => truncate(data.films), [data.films])
  const pilots = useMemo(() => truncate(data.pilots), [data.pilots])

  return (
    <Node targetHandle>
      <NodeGrid>
        <div>Name</div>
        <CellInfo>{data.name}</CellInfo>

        <div>Model</div>
        <CellInfo>{data.model}</CellInfo>

        <div>Starship Class</div>
        <CellInfo>{data.starship_class}</CellInfo>

        <div>Manufacturer</div>
        <CellInfo>{data.manufacturer}</CellInfo>

        <div>Const in Credits</div>
        <CellInfo>{data.cost_in_credits}</CellInfo>

        <div>Length</div>
        <CellInfo>{data.length}</CellInfo>

        <div>Crew</div>
        <CellInfo>{data.crew}</CellInfo>

        <div>Passengers</div>
        <CellInfo>{data.passengers}</CellInfo>

        <div>Max Atmosphering Speed</div>
        <CellInfo>{data.max_atmosphering_speed}</CellInfo>

        <div>Hyperdrive Rating</div>
        <CellInfo>{data.hyperdrive_rating}</CellInfo>

        <div>MGTL</div>
        <CellInfo>{data.MGLT}</CellInfo>

        <div>Cargo Capacity</div>
        <CellInfo>{data.cargo_capacity}</CellInfo>

        <div>Consumables</div>
        <CellInfo>{data.consumables}</CellInfo>

        <div>Films</div>
        <CellInfo>
          <ul>
            {films.list.map(film => (
              <li key={film}>{film}</li>
            ))}
            {films.hasMore ? <li>...</li> : null}
          </ul>
        </CellInfo>

        <div>Pilots</div>
        <CellInfo>
          <ul>
            {pilots.list.map(pilot => (
              <li key={pilot}>{pilot}</li>
            ))}
            {pilots.hasMore ? <li>...</li> : null}
          </ul>
        </CellInfo>
      </NodeGrid>
    </Node>
  )
}

export default StarshipNode
