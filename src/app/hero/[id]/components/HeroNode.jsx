import { Handle, Position } from 'reactflow'

const HeroNode = ({ data: { data, handles } }) => {
  console.log('HeroNode, data.data:', data.data)

  return (
    <div className="flex">
      <div className="grid grid-cols-2">
        <div>Name</div>
        <div>{data.name}</div>

        <div>Birth Year</div>
        <div>{data.birth_year}</div>

        <div>Gender</div>
        <div>{data.gender}</div>

        <div>Eye Color</div>
        <div>{data.eye_color}</div>

        <div>Hair Color</div>
        <div>{data.hair_color}</div>

        <div>Skin Color</div>
        <div>{data.skin_color}</div>

        <div>Height</div>
        <div>{data.height}</div>

        <div>Mass</div>
        <div>{data.mass}</div>

        <div>Species</div>
        <div>{data.species}</div>

        <div>Homeworld</div>
        <div>{data.homeworld}</div>

        <div>Films</div>
        <div>
          <ul>
            {data.films.map(film => (
              <li key={film}>{film}</li>
            ))}
          </ul>
        </div>

        <div>Starships</div>
        <div>
          <ul>
            {data.starships.map(starship => (
              <li key={starship}>{starship}</li>
            ))}
          </ul>
        </div>

        <div>Vehicles</div>
        <div>
          <ul>
            {data.vehicles.map(vehicle => (
              <li key={vehicle}>{vehicle}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        {handles.map(handle => (
          <Handle
            style={{
              position: 'relative',
            }}
            key={handle.id}
            type="source"
            id={handle.id}
            position={Position.Right}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroNode
