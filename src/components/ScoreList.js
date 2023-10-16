import React, { useState, useEffect } from 'react'

function ScoreList({ playerName, setPlayerScores, playerScores }) {

    const [playerScore, setPlayerScore] = useState(0)



    function addScore() {
        if (playerScore != 0) {
            setPlayerScores([...playerScores, { id: Math.random(), score: playerScore }])
            setPlayerScore('')
        }
    }

    function calculateSum() {
        const sum = playerScores.reduce((acc, item) => acc + item.score, 0)
        return sum;
    }

    function removeItem(id) {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Are you sure you want to delete the score?') === true) {
            setPlayerScores([...playerScores].filter(item => item.id !== id))
        }
    }


    return (
        <div className="mt-3 w-50">
            <h2 className="text-center">{playerName}  </h2>
            <div className="d-flex justify-content-center mb-4">
                <input type="number" className="form-control w-50 me-3" value={playerScore} onChange={(e) => setPlayerScore(Number(e.target.value))} />
                <button className="btn-sm btn btn-success" onClick={addScore}>Add</button>
            </div>

            {playerScores.length !== 0 && <ul className="list-group">
                {playerScores.map((item) => <li key={item.id} className="list-group-item d-flex "><span>{item.score}</span>  <span className="text-danger fw-bold" onClick={() => removeItem(item.id)}>X</span></li>)}
            </ul>}

            <h4 className={calculateSum() >= 62 ? "mt-3 text-success" : "mt-3"}> {calculateSum() < 62 ? 'Sum: ' + calculateSum() : 'Sum: ' + calculateSum() + "\n" + playerName + ' is Winner'}   </h4>

        </div>
    )
}

export default ScoreList