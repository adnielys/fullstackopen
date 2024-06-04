import React from 'react'
import { useState } from 'react'



const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Part = (props)=>{
  console.log(props)
  return(
    <div>
       <p>
         {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
   console.log(props.content)
   const content = props.content
  return (
    <div>
      <Part part={content[0].part} exercises={content[0].exercises}/>
      <Part part={content[1].part} exercises={content[1].exercises}/>
      <Part part={content[2].part} exercises={content[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
 
  const total = props.content.map(c => c.exercises).reduce((valorAnterior, valorActual) => {
    return valorAnterior + valorActual;
  }, 0);
  console.log(total)
    return (
      <div>
        <p>Number of exercises {total} </p>
      </div>
    )
  }



const App = () => {

  const course = 'Half Stack application development'
  const content = [
    { part: 'Fundamentals of React', exercises: 10},
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 },
  ]
 
  return (
    <div>
        
      <Header course={course} />
      <Content content = {content}/>
      <Total content={content} />
    </div>
  )
}


export default App
