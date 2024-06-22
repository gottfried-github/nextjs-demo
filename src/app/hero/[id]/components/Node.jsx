import { v4 as uuidv4 } from 'uuid'
import { Handle, Position } from 'reactflow'

const Node = ({ handles, targetHandle, children }) => {
  return (
    <div className="flex">
      {targetHandle ? <Handle type="target" id={uuidv4()} position={Position.Left} /> : null}
      <div>{children}</div>
      {handles?.length ? (
        <div className="flex flex-col gap-y-2">
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
      ) : null}
    </div>
  )
}

export default Node
