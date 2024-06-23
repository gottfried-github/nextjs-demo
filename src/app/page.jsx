import { getResource } from '@/api/resources'
import HeroesController from './components/HeroesController'

export const revalidate = 3600

const HeroesServerController = async () => {
  const data = await getResource('people')

  return (
    <main className="flex min-h-screen bg-slate-50">
      <HeroesController data={data} />
    </main>
  )
}

export default HeroesServerController
