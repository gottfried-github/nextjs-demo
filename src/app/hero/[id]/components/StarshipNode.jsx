import { v4 as uuidv4 } from 'uuid'
import { Handle, Position } from 'reactflow'

const FilmNode = ({ data }) => {
  return (
    <>
      <Handle type="target" id={uuidv4()} position={Position.Left} />
      <div>{'starship'}</div>
    </>
  )
}

export default FilmNode
