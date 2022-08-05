import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { pickRandom } from "../utils/utils";

const actionQuotes = [
  <>Work hard, stay <strong>strong</strong> 💪</>,
  <>Continuous improvement is better than delayed perfection — <i>Mark Twain</i></>,
  <>The harder you work, the better you get</>,
  <>Make it happen 😁</>
]

const pauseQutoes = [
  <>Relax, one step at a time 😴</>,
  <>Get some rest, you deserve it 😉</>,
  <>Have a break, have a Kit Kat 😋</>,
  <>You're doing very well!</>
]

export default (props) => {
  const stage = useSelector((state) => state.pomodoro.stage)
  const paused = useSelector((state) => state.pomodoro.paused)
  const [quote, setQuote] = useState(getQuote())

  function getQuote() {
    return stage === 0 ? pickRandom(actionQuotes) : pickRandom(pauseQutoes)
  }

  useEffect(() => {
    setQuote(getQuote())
  }, [stage])

  return (
    <p 
      style={{ 
        fontSize: '1.3rem',
        color: 'aliceblue' ,
        opacity: paused ? '0' : '1',
        transition: 'opacity .5s',
      }}>
      { quote }
    </p>
  )
}