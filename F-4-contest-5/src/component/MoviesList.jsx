import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function MoviesList({data=[]}) {
    const genreStatus = useSelector((state) => state?.movies?.value );
    console.log(genreStatus);
    useEffect(() => {

        console.log(genreStatus);
        
    },[genreStatus])
    
  
        return (
          <div className='flex justify-center items-center'>
              <table className='border-2'>
                  <thead>
                      <tr className='border-2 bg-slate-100 text-left text-xl'>
                          <th className='border-2 px-4 py-2'>Title</th>
                          <th className='border-2 px-4 py-2'>Genere</th>
                          <th className='border-2 px-4 py-2'>Year</th>
                      </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((item,idx) => (
                          <tr key={idx} className='border-2 font-normal'>
                              <td className='border-2 px-4 py-2 '>{item.title}</td>
                              <td className='border-2 px-4 py-2 '>{item.genre}</td>
                              <td className='border-2 px-4 py-2 '>{item.year}</td>
                          </tr>
                      ))
                    }
                    
                  </tbody>
              </table>
              
          </div>
        )
}

export default MoviesList