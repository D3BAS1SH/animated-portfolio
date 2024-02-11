import React from 'react'

const Links = () => {
  const MainList=['Homepage','Services','Portfolio','Contact']
  return (
    <div className='links'>
      {
        MainList.map(Item=>{
          return <a href={`#${Item}`} key={Item}>{Item}</a>;
        })
      }
    </div>
  )
}

export default Links