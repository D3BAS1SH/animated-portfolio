import React from 'react'

const Links = () => {
    const items=['Homepage','Services','Portfolio','Contact','About']
  return (
    <div className='link'>
        {
            items.map((item)=>{
                return<a href={`#${item}`} key={item}>{item}</a>
            })
        }
    </div>
  )
}

export default Links