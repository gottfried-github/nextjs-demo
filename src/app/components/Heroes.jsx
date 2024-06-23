import Hero from './Hero'

const Heroes = ({ heroes }) => {
  return (
    <div className="flex flex-col gap-y-2">
      {heroes.map(hero => (
        <Hero key={hero.id} hero={hero} />
      ))}
    </div>
  )
}

export default Heroes
