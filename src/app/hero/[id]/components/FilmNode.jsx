import { v4 as uuidv4 } from 'uuid'
import { Handle, Position } from 'reactflow'

const FilmNode = ({ data }) => {
  return (
    <>
      <Handle type="target" id={uuidv4()} position={Position.Left} />
      <div>{'film'}</div>
      {data.handles.map(handle => (
        <Handle key={handle.id} type="source" id={handle.id} position={Position.Right} />
      ))}
    </>
  )
}

export default FilmNode
