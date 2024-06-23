'use client'

import { useEffect } from 'react'

const ErrorHandler = ({ error, reset }) => {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div className="flex h-screen">
      <div className="flex flex-col m-auto gap-y-2">
        <div>Something went wrong</div>
        <button className="py-1 px-2 bg-zinc-100 rounded" onClick={reset}>
          Try again
        </button>
      </div>
    </div>
  )
}

export default ErrorHandler
