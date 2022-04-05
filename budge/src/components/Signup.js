import React from "react"
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
            <div>
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
            <button onClick={logout}>Signout</button>
        </div>
    )
}