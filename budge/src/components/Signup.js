import React from "react";
import { Form, Input, Button, Space } from 'antd-mobile'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";

export default function Signup() {

    const [registerEmail, setRegisterEmail] = React.useState("");
    const [registerPassword, setRegisterPassword] = React.useState("");
    const [loginEmail, setLoginEmail] = React.useState("");
    const [loginPassword, setLoginPassword] = React.useState("");
    const [user, setUser] = React.useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <div>
            <Form
                name='form'
                onFinish={() => { console.log("fi") }}
                footer={
                    <Button block onClick={login} color='success' size='large'>
                        Login
                    </Button>
                }
            >
                <Form.Header>Login</Form.Header>
                <Form.Item name='email' label='Email' >
                    <Input type='email' placeholder='Email' onChange={(email) => { setLoginEmail(email) }} />
                </Form.Item>
                <Form.Item name='password' label='Password' help='Not registered? We got you covered, click on the Signup button'>
                    <Input clearable type='password' placeholder='Password' onChange={(password) => { setLoginPassword(password) }} />
                </Form.Item>

            </Form>
            <h4>User: {user ? user.email : ""}</h4>
            <Button style={{width:'95%', margin:'0 auto', display:'block'}} onClick={logout} color='warning' size='large'>
                Logout
            </Button>
            {/* <div>
                <h1>Signup</h1>
                <input placeholder="Email" onChange={(event) => { setRegisterEmail(event.target.value) }}></input>
                <input placeholder="Password" onChange={(event) => { setRegisterPassword(event.target.value) }} ></input>
                <button onClick={register}>Submit</button>
            </div>
            <div>
                <h1>Login</h1>
                <input placeholder="Email" onChange={(event) => { setLoginEmail(event.target.value) }} ></input>
                <input placeholder="Password" onChange={(event) => { setLoginPassword(event.target.value) }} ></input>
                <button onClick={login}>Login</button>
            </div>

            <h4>User: {user ? user.email : ""}</h4>
            <button onClick={logout}>Signout</button> */}

        </div>
    )
}