import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

function Square(props) {
  return <TouchableOpacity style={game.square} onPress={props.click}>
    <Text style={game.squareText}>{props.value}</Text>
    </TouchableOpacity>
}

const App = () => {
  const [player, setPlayer] = useState('X')
  const [squares, setSquares] = useState(Array(9).fill(null));
  const togglePlayer = () => setPlayer(player === 'X' ? 'O' : 'X')
  const checkWin = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let index of lines) {
      const xVictory = squares[index[0]] === 'X' && squares[index[1]] === 'X' && squares[index[2]] === 'X'
      const oVictory = squares[index[0]] === 'O' && squares[index[1]] === 'O' && squares[index[2]] === 'O'
      if (xVictory || oVictory) {
        alert(`o jogador ${player} venceu`)
        setSquares(Array(9).fill(null))
        break
      } else if (squares.every(item => item !== null)) {
        alert('deu empate, ninguem venceu')
        setSquares(Array(9).fill(null))
        break
      }
    }
  }
  const play = N => {
    if (squares[N] === null) {
      let squaresCopy = squares
      squaresCopy[N] = player
      setSquares(squaresCopy)
      checkWin()
      togglePlayer()
    }
  }
  return <View style={game.boardContainer}>
  <View style={game.boardRow}>
  <Square value={squares[0]} click={() => play(0)}/>
  <Square value={squares[1]} click={() => play(1)}/>
  <Square value={squares[2]} click={() => play(2)}/>
  </View>
  <View style={game.boardRow}>
  <Square value={squares[3]} click={() => play(3)}/>
  <Square value={squares[4]} click={() => play(4)}/>
  <Square value={squares[5]} click={() => play(5)}/>
  </View>
  <View style={game.boardRow}>
  <Square value={squares[6]} click={() => play(6)}/>
  <Square value={squares[7]} click={() => play(7)}/>
  <Square value={squares[8]} click={() => play(8)}/>
  </View>
</View>
}


const game = StyleSheet.create({
  boardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffec7e',
    height: '100%',
  },
  boardRow: {
    flexDirection: 'row'
  },
  square: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    backgroundColor: '#3a2412',
    borderColor: '#dd5800',
    borderWidth: 3
  },
  squareText: {
    fontSize: 55,
    color: '#ffec7e',
  }
})

export default App;