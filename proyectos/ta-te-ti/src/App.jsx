import { useState } from 'react'
import './App.css'

//Turnos
const youTurns = {
  X: "X",
  O: 'O'
}

const winnerCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return(
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )





}
function App() {
  //Dibujamos el tablero
  const [board, setBoard] = useState(Array(9).fill(null))
  //Cambio de turnos
  const [turn, setTurn] = useState(youTurns.X)
  //Ganador
  const [winner, setWinner] = useState(null) //Utilizamos null para decir que no hay ganador (el cuadrado no se completo) y false, para cuando haya un empate (el tablero se completo)
  const checkWinner = (boardToCheck) => {
    for(const combo of winnerCombos){
      const [a, b, c] = combo

      if(boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]){
          return boardToCheck[a]
        }
    }
    return null 
  }

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

      {
         winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false ? 'Empate' : `¡Ganó!`
                }
              </h2>

              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
         )
      }
    </main>
  )
}

export default App
