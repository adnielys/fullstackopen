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

const Anecdote = ({anecdote, vote}) => {
  console.log('prom', vote)
  return (
    <div>
       <p>{anecdote}</p>
       <p>has {vote} votes</p>
    </div>
    
    )
}
// const Vote = ({vote}) => {
//   console.log('voto de la anecdota',vote)
//   return (
//       <p>has {vote} votes</p>
//   )
// }

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
    
    // 1.12 anecdotes
    const anecdotes = [
      'If it hurts, do it more often.',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      'The only way to go fast, is to go well.'
    ]

    
    const [selected, setSelected] = useState(0)
    const [current, setCurrent] = useState(0)
    const [votes, setVotes] = useState([...Array(anecdotes.length)].fill(0))
    const [maxAnecdote, setMaxAnecdote] = useState(0)
   

    const randomAnecdote = () =>{
      const indexRamdon = Math.floor(Math.random() * anecdotes.length);
      console.log("index",indexRamdon)
      setSelected(indexRamdon)
      setCurrent(votes[indexRamdon])
      console.log('Cambio la anecdota', votes)
      
    }

    const voteAnecdote = () =>{
      votes[selected] += 1
      setVotes(votes)
      setCurrent(votes[selected])
      const maximo = Math.max(...votes);
      console.log('max', maximo)
      setMaxAnecdote(votes.indexOf(maximo));
      console.log('index', votes.indexOf(maximo))
    }

    

    return (
      <div>
        
        <Header text='Give feedback'/>
        <Button onClick={increaseGood} text='Good'/> 
        <Button onClick={increaseNeutral} text='Neutral'/>
        <Button onClick={increaseBad} text='Bad'/>
        <br/>

        <Statistics good={good} neutral={neutral} bad={bad}/>
        
        <Header text="Anecdotes of the day"/>
        <Anecdote anecdote={anecdotes[selected]} vote={current}/>
        <Button onClick={randomAnecdote} text='Next Anecdote'/>
        <Button onClick={voteAnecdote} text='Vote'/> 

        <Header text="Anecdotes with most votes"/>
      
        <Anecdote anecdote={anecdotes[maxAnecdote]} vote={votes[maxAnecdote]}/>

      </div>
    )
}


export default App
