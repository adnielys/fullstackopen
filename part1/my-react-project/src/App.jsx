import React from 'react'
import { useState } from 'react'

const StatisticLine = ({text,value}) => <tr><td>{text}</td><td>{value}</td></tr>


const Statistics = ({good,neutral,bad}) => {
  const total = (bad + good + neutral)
  const average = total> 0 ? (total/3).toFixed(2) : 0
  console.log('satitics'+ total)

  const positive =  total > 0 ? (good*100/total).toFixed(2) + "%" : 0
  if (total > 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={good}/>
            <StatisticLine text="neutral" value={neutral}/>
            <StatisticLine text="bad" value={bad}/>
            <StatisticLine text="total" value={total}/>
            <StatisticLine text="average" value={average}/>
            <StatisticLine text="positive" value={positive}/> 
          </tbody>
        </table>
        
      </div>
    )
  }else{
    return(
        <div>
          <strong><p>Statistics</p></strong>
        <p>No feedback Give</p>
      </div>
  )
    
  }
  
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text} </button>

const Header = ({text}) => <h1>{text}</h1>



const App = () => {


    // 1.6: unicafe, paso 1
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    console.log('rendering...', good)
    const increaseGood = () => {
      const updatedGood = good + 1
      console.log('increasing Good', updatedGood)
      setGood(updatedGood)
    }
  
    
    console.log('rendering...', neutral)
    const increaseNeutral = () => {
      const updatedNeutral = neutral + 1
      console.log('increasing Neutral,', updatedNeutral)
      setNeutral(updatedNeutral)
    }

     
    console.log('rendering...', bad)
    const increaseBad = () => {
      const updatedBad = bad + 1
      console.log('increasing bad', updatedBad)
      setBad(updatedBad)
    }

    

  return (
    <div>
      
      <Header text='Give feedback'/>
      <Button onClick={increaseGood} text='Good'/> 
      <Button onClick={increaseNeutral} text='Neutral'/>
      <Button onClick={increaseBad} text='Bad'/>
      <br/>

      <Statistics good={good} neutral={neutral} bad={bad}/>
      
     
     
    </div>
  )
}


export default App
