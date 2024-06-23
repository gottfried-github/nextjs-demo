import { render, screen } from '@testing-library/react'

import { mockReactFlow } from './Hero.ReactFlowMock'
import mockData from './Hero.data'
import Hero from './Hero'

beforeEach(mockReactFlow)

test('displays data', async () => {
  render(<Hero hero={mockData} />)

  expect(await screen.findByText(mockData.name)).toBeVisible()
  expect(await screen.findByText(mockData.filmsFeatured[5].title)).toBeVisible()

  const jediStarfighterStarshipNodes = await screen.findAllByText(
    mockData.filmsFeatured[5].starshipsRidden[0].name
  )

  expect(jediStarfighterStarshipNodes).toHaveLength(2)
  jediStarfighterStarshipNodes.forEach(node => {
    expect(node).toBeVisible()
  })
})
