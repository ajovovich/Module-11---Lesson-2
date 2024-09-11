import { useState } from 'react'
import MoviesList from './MoviesList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <MoviesList />
    </>
  )
}

export default App
