import Hero from './Hero'

const Heroes = ({ heroes }) => {
  return (
    <div>
      {heroes.map(hero => (
        <Hero key={hero.id} hero={hero} />
      ))}
    </div>
  )
}

export default Heroes
