import React, {useState, useEffect} from "react";
import GameData from "./Data"
import playRound from "../utilities/playRound";

const Button = () => {
    const [moves, setMoves] = useState([])

    const computerPlays = ["rock", "paper", "scissors"]
    const computerMove = () => computerPlays[Math.floor(Math.random() * computerPlays.length)]

    const [results, setResults] = useState([])

    useEffect(() => {
        setMoves(GameData)
        setResults("")
    }, [])
    
    return(
        <div>
       {moves.map((move) => (
           <div>
                <button onClick={()=> setResults(playRound(move.name, computerMove()))} key={move.name}>{move.name}</button>
            </div>
        ))}
        <p>{results}</p>
        </div>
    )
}

export default Button;