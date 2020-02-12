import React, { Component } from 'react';
import '../App.css';
import { connect } from "react-redux";
import { createNewUser } from '../store/actions/registerAction.js';

class NewUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confPassword: '',
            photo: ''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            name: this.state.name, 
            email: this.state.email, 
            password: this.state.password, 
            photo: this.state.photo
        }

        this.props.createNewUser(user);

        this.setState({
            name: '',
            email: '',
            password: '',
            confPassword: '',
            photo: ''
        })
    }

    checkPassword = () => {
        if ((this.state.password !== '' && this.state.confPassword !== '') && this.state.password !== this.state.confPassword) {
            alert('Passwords do not match');
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='extraMarginTop extraMarginSides'>
                <label>
                    Name:
                    <input 
                        name='name'
                        type='text'
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                </label>
                <label>
                    Email (this will be your username):
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
                        onBlur={this.checkPassword}
                        />
                </label>
                <label>
                    Confirm password:
                    <input 
                        name='confPassword'
                        type='password'
                        value={this.state.confPassword}
                        onChange={this.handleChange}
                        onBlur={this.checkPassword}
                        />
                </label>
                <label>
                    Photo:
                    <input 
                        name='photo'
                        type='text'
                        value={this.state.photo}
                        onChange={this.handleChange}
                        />
                </label>
                <input type='submit' value='Submit' />
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};
  
export default connect(
    mapStateToProps,
	{ createNewUser }
)(NewUser);