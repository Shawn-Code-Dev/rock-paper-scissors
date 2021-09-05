import React, {useState, useEffect} from "react";
import GameData from "./Data"
import playRound from "../hooks/playRound";

const Button = () => {
    const [moves, setMoves] = useState([])
    const [playerMove, setPlayerMove] = useState("")
    const computerPlays = ["rock", "paper", "scissors"]
    const computerMove = () => computerPlays[Math.floor(Math.random() * computerPlays.length)]

    const [results, setResults] = useState([])

    useEffect(() => {
        setMoves(GameData)
        setResults("")
    }, [])

    useEffect(() => {
        setResults(playRound(playerMove, computerMove()))
    })
    
    return(
        <div>
       {moves.map((move) => (
                <button onClick={()=> setPlayerMove(move.name)} key={move.name}>{move.name}</button>
        ))}
        <p>{results}</p>
        </div>
    )
}

export default Button;