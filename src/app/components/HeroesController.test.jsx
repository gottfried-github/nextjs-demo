import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'

import axios from 'axios'
import HeroesController from './HeroesController'
import mockData from './HeroesController.data'
import Page from './HeroesController.page'

jest.mock('axios')

test('displays correct data', async () => {
  const user = userEvent.setup()
  render(<HeroesController data={mockData.page0} />)

  const page = new Page(screen)
  const mockAxiosGetNext = axios.get.mockResolvedValue({ data: mockData.page1 })

  expect(await screen.findByText(mockData.page0.results[0].name)).toBeVisible()

  const nextButton = await page.findNextButton()
  await user.click(nextButton)

  expect(await screen.findByText(mockData.page1.results[0].name)).toBeVisible()
})

test('pagination buttons are disabled when no following page', async () => {
  const user = userEvent.setup()
  render(<HeroesController data={mockData.page0} />)

  const page = new Page(screen)
  const mockAxiosGetNext = axios.get.mockResolvedValue({ data: mockData.page1 })

  const prevButton = await page.findPrevButton()

  expect(prevButton).toBeDisabled()

  const nextButton = await page.findNextButton()
  await user.click(nextButton)

  await waitFor(async () =>
    expect(await screen.findByText(mockData.page1.results[0].name)).toBeVisible()
  )

  expect(nextButton).toBeDisabled()
})

test('passes correct url to axios when pagination buttons are clicked', async () => {
  const user = userEvent.setup()
  render(<HeroesController data={mockData.page0} />)

  const page = new Page(screen)
  const mockAxiosGet = axios.get.mockResolvedValue({ data: mockData.page1 })

  const nextButton = await page.findNextButton()
  await user.click(nextButton)

  expect(mockAxiosGet).toHaveBeenCalledTimes(1)
  expect(mockAxiosGet).toHaveBeenCalledWith(mockData.page0.next)

  mockAxiosGet.mockClear()

  const prevButton = await page.findPrevButton()
  await user.click(prevButton)

  expect(mockAxiosGet).toHaveBeenCalledTimes(1)
  expect(mockAxiosGet).toHaveBeenCalledWith(mockData.page1.previous)
})
