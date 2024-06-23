import { cache } from 'react'
import axios from '@/utils/axios'

export const getResource = cache(async url => {
  const { data } = await axios.get(url)

  return data
})

export const getResourceById = cache(async (url, id) => {
  const { data } = await axios.get(`${url}/${id}`)

  return data
})
