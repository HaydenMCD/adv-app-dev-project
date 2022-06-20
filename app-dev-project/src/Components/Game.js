import React, { useRef, useState } from "react";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { auth, db } from "../firebase";
import { Form, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Game = ({ game }) => {
  const playerIds = [];
  const passwordRef = useRef();
  const [isError, setIsError] = useState(null);
  const history = useHistory();
  const playerDocs = game.players.forEach((ex) => {
    playerIds.push(ex);
  });

  function joinGame() {
    setIsError(false);
    if (passwordRef.current.value == game.password) {
      setIsError(false);
      console.log("correct password");
      if (playerIds.includes(auth.currentUser.uid)) {
        console.log("User is already in the game");
      } else {
        updateDoc(doc(db, "Games", game.id), {
          players: arrayUnion(auth.currentUser.displayName),
        });
        console.log("User has Joined the game");
        history.replace(`/game/${game.id}`)
      }
    } else {
      setIsError("incorrect password");
      console.log(isError)
    }
  }

  return (
    <>
      {!game.gameOver && (
        <div className="game">
          <div className="gameName">{game.gameName}</div>
          <div className="gamePlayers">
            <div>Players: </div>
            {playerIds.map((playerId) => {
              return (
                // Change this to display name.
                <p key={playerId}>{playerId}</p>
              );
            })}
          </div>

          <Form>
            <Form.Group id="game-name">
              <Form.Label>Password:</Form.Label>
              <Form.Control ref={passwordRef} required />
              {isError && <Alert variant="danger">{isError}</Alert>}
            </Form.Group>
          </Form>
          <button onClick={joinGame}>Join</button>
        </div>
      )}
    </>
  );
};

export default Game;
