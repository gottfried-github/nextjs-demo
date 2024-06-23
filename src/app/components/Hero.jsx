import Link from 'next/link'

const Hero = ({ hero }) => {
  return (
    <Link className="py-1 px-2 bg-zinc-100 rounded" href={`/hero/${hero.id}`}>
      {hero.name}
    </Link>
  )
}

export default Hero
