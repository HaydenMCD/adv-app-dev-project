import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, doc, collection } from "firebase/firestore";
import { Button } from "react-bootstrap";
import { useParams, Redirect } from "react-router-dom";


function GamePage({ isLoggedIn }) {
    const [game, setGame] = useState([]);
    const [players, setPlayers] = useState([]);
    const { gameId } =  useParams();
    let playersNamesArray = [];

    console.log(gameId)

    useEffect(() => {
        const gameRef = doc(db, "Games", gameId);
        onSnapshot(gameRef, (doc) => {
            setGame(doc.data(), doc.id);
            console.log(game)
        });

        const playersRef = collection(db, "Games", gameId, "players");
        onSnapshot(playersRef, (snapshot) => {
            let playersArray = [];
            snapshot.docs.forEach((doc) => {
                playersArray.push({ ...doc.data(), id: doc.id });
            });
            setPlayers(playersArray);
            return players;
        });
    }, []);

    players.map((players) => playersNamesArray.push(players.name));

    return (
        <div>
            <h1 data-testid="info-header">Welcome To {game.GameName}</h1>
            <div>
                <h4 className="playerNum">Number of players: {players.length}/4</h4>
            </div>
            <div className="headerAndMemberDiv">
                <h4 className="playerHeader">Players: </h4>
                <div className="memberDiv" data-testid="info-members">
                    {players.map((players) => (
                        <h4 className="member">{players.name},</h4>
                    ))}
                </div>
            </div>

            {players.length === 4 ?
                <Button variant="primary">
                    Start Game
                </Button>
                :
                <Button variant="primary" disabled>
                    Start Game
                </Button>
            }
        </div>
    );
}
export default GamePage;