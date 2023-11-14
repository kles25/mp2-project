import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../config/Firebase";
import { useState } from "react";


const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(auth?.currentUser?.email)

    const SignIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err)
        }
    };

    const SignOut = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err)
        }
    };

    return (
        <div>
            <input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" type="Password" onChange={(e) => setPassword(e.target.value)} />

            <button onClick={SignIn}> Login </button>
            <button onClick={SignOut}> Logout </button>
        </div>
    )
}

export default AdminLogin;