import React, { useRef } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useHistory } from "react-router-dom";

const CreateGameComponent = ({ authError, isLoggedIn, user, auth }) => {
    const nameRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, 'Games'), {
                gameName: nameRef.current.value,
                password: passwordRef.current.value,
                createdBy: auth.currentUser.displayName,
                joinable: true,
                gameOver: false,
                players: [{uid: auth.currentUser.uid, Displayname: auth.currentUser.displayName }]
            });
            console.log('Document written with ID: ', docRef.id);
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    }

    return (
        <Card className='d-felx align-items-center justify-content-center'>
            {isLoggedIn ? <Card.Body>
                <h2 className='text-center mb-4'>Create a game</h2>
                {authError && <Alert variant='danger'>{authError}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='game-name'>
                        <Form.Label>Game Name:</Form.Label>
                        <Form.Control ref={nameRef} required />
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type='password' ref={passwordRef} />
                    </Form.Group>
                    <Button className='w-100' type='submit'>
                        Create Game
                    </Button>
                </Form>
            </Card.Body> : <Card.Body> Please Login </Card.Body>}
        </Card>
    );
};

export default CreateGameComponent;
