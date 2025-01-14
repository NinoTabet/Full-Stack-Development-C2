import { useState } from "react";
import Test from "../Test";

const Forms = () =>{

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`Name: ${name}\nEmail: ${email}`);

        //api call
        //const body = {name, email}
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">
                    Name: 
                </label>
                <input
                    type='text' 
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">
                    Email: 
                </label>
                <input
                    type='email' 
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type='submit'>Submit</button>
        </form>
            <Test />
        </>
    );

}

export default Forms;