import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) => (  
  <button onClick={onClick}>
    {text}
  </button>
)

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
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {(good - bad)/(good + neutral + bad) }</p>
      <p>positive {(good)*100/(good + neutral + bad) }</p>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)