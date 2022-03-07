
import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import Auth from '../../services/Auth'
import './index.css'

const Login = () => {
    let history = useHistory();
    const [error, setError] = useState(null)
    const [datos, setDatos] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {email, password} = datos
        const {status, message} = await Auth.login({email, password});
        if (status === 'success') {
            history.push("/dashboards"); 
        }
        if (message) setError(message)
    }

    return (
        <form onSubmit={handleSubmit} >
            {error && <span> Warning! &nbsp; {error}</span>}
            <div>
                <h1>Login</h1>
                <input 
                    type='email' 
                    placeholder='Email' 
                    name='email'
                    onChange={handleInputChange} 
                />
                <input 
                    type='password' 
                    placeholder='password' 
                    name='password'
                    onChange={handleInputChange} 
                />
                
                <Link to='/register'>Register</Link>
                <button type='submit'><span>Login</span></button>
            </div>
        </form>
    )

}

export default Login;