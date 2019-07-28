import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { connect } from 'react-redux';

class Login extends React.Component{

    state = {
        userName: '',
        password: ''
    }
    
    render(){
        return (
            <div className="login">
                    <MuiThemeProvider>
                        <div>
                            <AppBar
                                title="Login"
                            />
                        <InputText
                            value={this.props.userName}
                            onChange={(e) => this.props.updteNameEventHandler(e.target.value)}
                            placeholder="User name"
                        />  
                        <br/>
                        <Password
                            placeholder="password"
                            value={this.props.password}
                            onChange={(e) => this.props.updatePasswordEventHandler(e.target.value)}
                        />
                        <br/>
                        <Button
                            type="submit"
                            label="Submit"
                            className="p-button-raised p-button-rounded"
                            onClick={(e) => this.props.loginButtonEventHandler(e, this.props.userName, this.props.password)}
                        />
            
                        </div>
                    </MuiThemeProvider>
            </div>
        )
        
    }  

};

const mapStateToProps = (state) => {
    return {
        userName: state['login'].userName,
        password: state['login'].password
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updteNameEventHandler: (name) => {
            dispatch(LoginActions.updateNameAction(name))
        },
        updatePasswordEventHandler: (password) => {
            dispatch(LoginActions.updatePasswordAction(password))
        },
        loginButtonEventHandler: (event, name, password) => {
            dispatch(LoginActions.loginButtonAction(event, name, password))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);