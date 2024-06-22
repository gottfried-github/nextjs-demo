import { useMemo } from 'react'

import { truncate } from '@/utils/utils'
import Node from './Node'
import NodeGrid from './NodeGrid'
import CellInfo from './CellInfo'

const HeroNode = ({ data: { data, handles } }) => {
  const films = useMemo(() => truncate(data.films), [data.films])
  const starships = useMemo(() => truncate(data.starships), [data.starships])
  const vehicles = useMemo(() => truncate(data.vehicles), [data.vehicles])

  return (
    <Node handles={handles}>
      <NodeGrid>
        <div>Name</div>
        <CellInfo>{data.name}</CellInfo>

        <div>Birth Year</div>
        <CellInfo>{data.birth_year}</CellInfo>

        <div>Gender</div>
        <CellInfo>{data.gender}</CellInfo>

        <div>Eye Color</div>
        <CellInfo>{data.eye_color}</CellInfo>

        <div>Hair Color</div>
        <CellInfo>{data.hair_color}</CellInfo>

        <div>Skin Color</div>
        <CellInfo>{data.skin_color}</CellInfo>

        <div>Height</div>
        <CellInfo>{data.height}</CellInfo>

        <div>Mass</div>
        <CellInfo>{data.mass}</CellInfo>

        <div>Species</div>
        <CellInfo>{data.species}</CellInfo>

        <div>Homeworld</div>
        <CellInfo>{data.homeworld}</CellInfo>

        <div>Films</div>
        <div>
          <ul>
            {films.list.map(film => (
              <li key={film}>{film}</li>
            ))}
            {films.hasMore ? <li>...</li> : null}
          </ul>
        </div>

        <div>Starships</div>
        <div>
          <ul>
            {starships.list.map(starship => (
              <li key={starship}>{starship}</li>
            ))}
            {starships.hasMore ? <li>...</li> : null}
          </ul>
        </div>

        <div>Vehicles</div>
        <div>
          <ul>
            {vehicles.list.map(vehicle => (
              <li key={vehicle}>{vehicle}</li>
            ))}
            {vehicles.hasMore ? <li>...</li> : null}
          </ul>
        </div>
      </NodeGrid>
    </Node>
  )
}

export default HeroNode
