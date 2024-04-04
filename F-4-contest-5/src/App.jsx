import { useState } from 'react'
import movies from './data/movies'
import './App.css'
import MoviesList from './component/MoviesList'
import MovieGenere from './component/MovieGenere'
import genres from './data/genres'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1 className='text-4xl font-semibold text-center mt-8'>Top 15 Movies Of All Time</h1>
    </div>
    <MovieGenere genere={genres}/>
    <MoviesList data={movies}/>
    </>
  )
}

export default App
