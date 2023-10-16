import React, { useState } from 'react'
import ScoreList from './ScoreList'
import PlayerNameInput from './PlayerNameInput';

function Main() {
    const [playerOneName, setPlayerOneName] = useState("");
    const [playerTwoName, setPlayerTwoName] = useState("");

    const [playerOneScores, setPlayerOneScores] = useState([]);
    const [playerTwoScores, setPlayerTwoScores] = useState([]);

    function handleReset() {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Are you sure you want to reset the game?') === true) {
            setPlayerOneName("")
            setPlayerTwoName("")
            setPlayerOneScores([])
            setPlayerTwoScores([])
        }
    }

    return (
        <div className="container bg-light mt-5 py-5 px-3">
            <h1 className="text-center">Score Board</h1>
            <div className="text-center">
                <img src="https://image.made-in-china.com/43f34j00HkuWqwpmfZUh/Plastic-Premium-Waterproof-Poker-Size-Playing-Cards-Perfect-for-Party-and-Game.jpg" alt="" className="mb-4" />
            </div>
            <div className="text-center">
                <button onClick={handleReset} className="btn btn-warning mt-3">Reset Game</button>
            </div>


            <div>
                <PlayerNameInput playerName={playerOneName} setPlayerName={setPlayerOneName} playerNumber="Player 1" />
                <PlayerNameInput playerName={playerTwoName} setPlayerName={setPlayerTwoName} playerNumber="Player 2" />
                <hr />
                <div className="d-flex score-list-container">
                    <ScoreList playerName={playerOneName} playerScores={playerOneScores} setPlayerScores={setPlayerOneScores} />
                    <ScoreList playerName={playerTwoName} playerScores={playerTwoScores} setPlayerScores={setPlayerTwoScores} />
                </div>
            </div>

        </div>
    )
}

export default Main