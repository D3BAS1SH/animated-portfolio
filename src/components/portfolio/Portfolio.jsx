import './portfolio.scss'

const items=[
    {id:1,
    title:'React Commerce',
    img:"",
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium expedita ullam error voluptates! Provident earum vel tenetur minus perferendis nesciunt quisquam quis sequi quidem, repellendus delectus similique quo debitis doloribus!",
},
    {id:2,
    title:'Next.js Commerce',
    img:"",
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium expedita ullam error voluptates! Provident earum vel tenetur minus perferendis nesciunt quisquam quis sequi quidem, repellendus delectus similique quo debitis doloribus!",
},
    {id:3,
    title:'Vanilla JS Commerce',
    img:"",
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium expedita ullam error voluptates! Provident earum vel tenetur minus perferendis nesciunt quisquam quis sequi quidem, repellendus delectus similique quo debitis doloribus!",
},
    {id:4,
    title:'Music App Commerce',
    img:"",
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium expedita ullam error voluptates! Provident earum vel tenetur minus perferendis nesciunt quisquam quis sequi quidem, repellendus delectus similique quo debitis doloribus!",
},
]

const Single=({Item})=>{
    return <section>
        {Item.title}
    </section>
}

const Portfolio = () => {
  return (
    <div className='portfolio'>
        {
            items.map(Item=>(<Single Item={Item} key={Item.id}/>))
        }
    </div>
  )
}

export default Portfolio