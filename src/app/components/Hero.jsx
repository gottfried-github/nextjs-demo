import Link from 'next/link'

const Hero = ({ hero }) => {
  return (
    <div>
      <Link href={`/hero/${hero.id}`}>{hero.name}</Link>
    </div>
  )
}

export default Hero
