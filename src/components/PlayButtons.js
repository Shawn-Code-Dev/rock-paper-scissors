import React, {useState, useEffect} from "react";
import GameData from "./Data"
import playRound from "../hooks/playRound";

const Button = () => {
    const [moves, setMoves] = useState([])
    const [playerMove, setPlayerMove] = useState("")

    

    const [results, setResults] = useState([])

    useEffect(() => {
        setMoves(GameData)
        setResults("")
    }, [])

    useEffect(() => {
        const computerPlays = ["rock", "paper", "scissors"]
        const computerMove = () => computerPlays[Math.floor(Math.random() * computerPlays.length)]
        setResults(playRound(playerMove, computerMove()))
    },[playerMove])
    
    return(
        <div>
       {moves.map((move) => (
           <div>
                <button onClick={()=> setPlayerMove(move.name)} key={move.name}>{move.name}</button>
            </div>
        ))}
        <p>{results}</p>
        </div>
    )
}

export default Button;