import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) => (  
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad

  if (all === 0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={(good-bad)/all}/>
          <Statistic text="positive" value={(good)*100/(all)}/>
        </tbody>   
      </table>
      
    </div>
  )
}

const Statistic = ({text, value}) => (<tr><td>{text}</td><td>{value}</td></tr>)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onGoodClick = () => setGood(good + 1)

  const onNeutralClick = () => setNeutral(neutral + 1)

  const onBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={onGoodClick} text="good"/>
      <Button onClick={onNeutralClick} text="neutral"/>
      <Button onClick={onBadClick} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)