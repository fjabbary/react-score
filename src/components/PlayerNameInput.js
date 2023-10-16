import React, { useState } from 'react'

function PlayerNameInput({ setPlayerName, playerNumber, playerName }) {
    const [toggleDisabled, setToggleDisable] = useState(false);


    return (
        <div className="form-group w-50 mb-2">
            <label htmlFor="input">{playerNumber}</label>
            <input type="text" value={playerName} className="form-control" id="input" onChange={(e) => setPlayerName(e.target.value)} disabled={toggleDisabled} onBlur={() => setToggleDisable(true)} />

            <button onClick={() => setToggleDisable(false)} className="btn btn-primary btn-sm mt-2">Edit</button>
        </div>
    )
}

export default PlayerNameInput