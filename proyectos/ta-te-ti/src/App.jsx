import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import Square from './Square'
import { youTurns} from './const'
import { checkWinner } from './board'
import { Winner } from './Winner'


function App() {
  //Dibujamos el tablero
  const [board, setBoard] = useState(Array(9).fill(null))
  //Cambio de turnos
  const [turn, setTurn] = useState(youTurns.X)
  //Ganador
  const [winner, setWinner] = useState(null) //Utilizamos null para decir que no hay ganador (el cuadrado no se completo) y false, para cuando haya un empate (el tablero se completo)


  const updateBoard = (index) => {
    if(board[index] || winner) return //Si la posicion donde clickeo, tiene algo, no hace nada. Si hay un ganador, no se puede clickear.

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === youTurns.X ? youTurns.O : youTurns.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
      confetti()
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(youTurns.X)
    setWinner(null)
  }

  return (
    <main className='board'>
      <h1>TA TE TI</h1>
      <button onClick={resetGame}>Empezar de cero</button>
      <section className='game'>
        {
          board.map((_, index) => {
            return(
              <Square 
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {board[index]}
              </Square> 
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === youTurns.X}>{youTurns.X}</Square>
        <Square isSelected={turn === youTurns.O}>{youTurns.O}</Square>
      </section>

      <Winner resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
