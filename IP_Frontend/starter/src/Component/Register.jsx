import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [user, setUser] = useState({
        name: ``,
        email: ``,
        password: ``
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const register = async (e) => {
        e.preventDefault();
        const { name, email, password } = user;
        if (name && email && password) {
            const res = await axios.post(`https://cors-anywhere.herokuapp.com/http://ec2-34-206-125-202.compute-1.amazonaws.com:4000/register`, user);
            alert(res.data.message);
            return;
        }
        alert(`Invalid input`);
    }

    return (
        <>
            <h3>Create new account</h3>
            <p>
                Already have an account?&nbsp;<Link to="/login">Sign In</Link>
            </p>
            <form onSubmit={register}>
                <input type="text" id="create-account-pseudo" name="name" value={user.name} onChange={handleChange} placeholder="FullName" />
                <br />
                <input type="email" id="create-account-first-name" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
                <br />
                <input type="password" id="create-account-email" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
                <br />
                <button type="submit">
                    Register
                </button>
            </form>
        </>
    );
}

export default Register;