import Node from './Node'

const FilmNode = ({ data: { data, handles } }) => {
  return (
    <Node targetHandle handles={handles}>
      <div>{'film'}</div>
    </Node>
  )
}

export default FilmNode
