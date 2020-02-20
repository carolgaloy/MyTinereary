import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            email: this.state.email, 
            password: this.state.password
        }

        axios.post('./login', user)
        .then(res => {
            console.log(res);
            if (res.statusText === 'OK'){
                console.log('ok');
            }
        });

        this.setState({
            email: '',
            password: ''
        })

    }

    render() {
        return (
            <div className='extraMarginTop extraMarginSides'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <input 
                            name='email'
                            type='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                            />
                    </label>
                    <label>
                        Password:
                        <input 
                            name='password'
                            type='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                            />
                    </label>
                    <input type='submit' value='Log In' className='submit'/>
                </form>
                <p>Not registered? Click <Link to='/signin'>here</Link> to create a new account</p>
            </div>
        )
    }
}

export default Login;
