import React, { useEffect, useState, useCallback } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../firebase';
import Game from '../Components/Game';
import LoadingPage from '../Routes/LoadingPage';
import { useHistory } from 'react-router-dom';


const HomepageContent = ({ isLoggedIn, auth }) => {
    const [games, setGames] = useState([]);
    const [gamesReady, setGamesReady] = useState(false);
    const [loadError, setLoadError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory()

    const getGame = useCallback(async () => {
        let gamesArray = [];
        if (isLoggedIn) {
            const q = query(collection(db, 'Games'));
            await getDocs(q)
                .then((res) => {
                    res.forEach((doc) => {
                        gamesArray.push({ ...doc.data(), id: doc.id });
                    });
                    setLoadError(null);
                },
                    (error) => {
                        throw new error('Game Loading Error.')
                    })
                .catch((err) => {
                    console.log(err);
                    setLoadError(err.message);
                    console.log(loadError)
                })
            await setGames(gamesArray);
            games.length > 0 ? setGamesReady(true) : setGamesReady(false);
        } else {
            return history.replace('/login')
        }
    }, [games.length, loadError, setIsLoading, isLoggedIn]);

    useEffect(() => {
        setIsLoading(true)
        getGame().then((res) => {
            setIsLoading(false)
        }, (err) => {
            setLoadError(err.message)
        });
    }, [getGame]);

    return (
        <>
            {isLoading ? <LoadingPage /> :
                <div className='container'>
                    <div className='gameContainer'>
                        {games.map((game, index) => {
                            return (
                                <Game game={game} key={index} auth={auth} />
                            );
                        })}
                    </div>
                </div>
            }
        </>
    );
};

export default HomepageContent;