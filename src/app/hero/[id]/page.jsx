import axios from 'axios'

import Hero from './components/Hero'

const HeroController = async ({ params }) => {
  const { data: hero } = await axios.get(`http://sw-api.starnavi.io/people/${params.id}`)

  return <Hero hero={hero} />
}

export default HeroController
