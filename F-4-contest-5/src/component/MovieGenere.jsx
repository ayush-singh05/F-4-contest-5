import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { movieGenere } from '../store/moviesSlice';

function MovieGenere({genere = []}) {
    const [genereItem,setGenere] = useState('');
    const dispatch = useDispatch()
    const searchByGenere = (gen) => {
        setGenere(gen);
        dispatch(movieGenere({value: gen}))
        console.log("Filter By:",gen);
    } 
    
  return (
    <div className=' flex justify-center items-center py-10 h-auto'>
    <div className='bg-slate-200 py-8 rounded-lg px-4   '>
    <h1 className='text-4xl mb-7'>Filter by Genere</h1>
        {
            genere.map((item,idx) => (
                <span key={idx} className='mx-2 bg-slate-300 px-2 py-2 font-medium rounded-md cursor-pointer hover:bg-slate-400 my-10' onClick={() => searchByGenere(item)} >{item}</span>
            ))
        }
        
        </div>
    </div>
  )
}

export default MovieGenere