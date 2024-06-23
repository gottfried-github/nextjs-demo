import { useMemo } from 'react'

import { truncate } from '@/utils/utils'
import Node from './Node'
import NodeGrid from './NodeGrid'
import CellInfo from './CellInfo'

const FilmNode = ({ data: { data, handles } }) => {
  const species = useMemo(() => truncate(data.species), [data.species])
  const starships = useMemo(() => truncate(data.starships), [data.starships])
  const vehicles = useMemo(() => truncate(data.vehicles), [data.vehicles])
  const characters = useMemo(() => truncate(data.characters), [data.characters])
  const planets = useMemo(() => truncate(data.planets), [data.planets])

  return (
    <Node targetHandle handles={handles}>
      <NodeGrid>
        <div>Title</div>
        <CellInfo>{data.title}</CellInfo>

        <div>Opening Crawl</div>
        <CellInfo>{data.opening_crawl}</CellInfo>

        <div>Director</div>
        <CellInfo>{data.director}</CellInfo>

        <div>Producer</div>
        <CellInfo>{data.producer}</CellInfo>

        <div>Release Date</div>
        <CellInfo>{data.release_date}</CellInfo>

        <div>Species</div>
        <div>
          <ul>
            {species.list.map(species => (
              <li key={species}>{species}</li>
            ))}
            {species.hasMore ? <li>...</li> : null}
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

        <div>Characters</div>
        <div>
          <ul>
            {characters.list.map(character => (
              <li key={character}>{character}</li>
            ))}
            {characters.hasMore ? <li>...</li> : null}
          </ul>
        </div>

        <div>Planets</div>
        <div>
          <ul>
            {planets.list.map(planet => (
              <li key={planet}>{planet}</li>
            ))}
            {planets.hasMore ? <li>...</li> : null}
          </ul>
        </div>
      </NodeGrid>
    </Node>
  )
}

export default FilmNode
