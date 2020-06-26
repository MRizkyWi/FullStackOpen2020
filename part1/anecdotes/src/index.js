import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) =>{
  return (
    <div>
      <button onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

function indexMax(arr) {
  let max = arr[0]
  let idxMax = 0;

  for (var i = 1; i < arr.length; i++){
    if (arr[i] > max){
      max = arr[i]
      idxMax = i
    }
  }
  return idxMax
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * 6))
  }

  const voteAnecdote = () => {
    let copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>has {points[selected]} votes </p>
      <Button onClick={voteAnecdote} text="vote"/>
      <Button onClick={nextAnecdote} text="next anecdote"/>
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[indexMax(points)]}
      <p>has {points[indexMax(points)]} </p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
);