import React from "react"
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { AutoComplete } from 'primereact/autocomplete';
import { json } from './cities';
import { Password } from 'primereact/password';
import Navbar from 'react-bootstrap/Navbar';
import RegisterActions from './actions'
import { connect } from 'react-redux';
import './Register.scss';


export const Header2 = {
    padding: "10px 20px",
    textAlign: "center",
    color: "black",
    fontSize: "45px"
}

const Header3 = {
    padding: "10px 20px",
    textAlign: "center",
    color: "navy",
    fontSize: "25px"
}

const Header4 = {
    padding: "10px 20px",
    textAlign: "center",
    color: "black",
    fontSize: "20px"
}


class Register extends React.Component {

    state = {
        img : ''
    }

    componentDidMount(){
        this.props.loadCitiesEventHandler();
    }
    render(){
        return (
            <div className="app-register">
                <h2 style={Header2}>not registered?</h2>
                <h3 style={Header3}>register now!</h3>
                <form>                    
                   <InputText
                        value={this.props.userName}
                        onChange={(e) => this.props.updateNameEventHandler(e.target.value)}
                        placeholder="Username"
                    />
                    <div>{this.props.taken ? <h2 style={{ color: "red", fontSize: "15px"}}>The user name is taken</h2> : null}</div>
                    <Password 
                        placeholder="password"
                        value={this.props.password} 
                        onChange={(e) => this.props.updatePasswordEventHandler(e.target.value)} 
                    />
                    <br/>
                    <AutoComplete 
                        value={this.props.location}
                        scrollHeight="100px"
                        placeholder="Location"
                        onChange={(e) => this.props.updateLocationEventHandler(e.target.value)}
                        suggestions= {this.props.locationSuggestions}
                        completeMethod={() => this.props.suggestLocationsEventHandler(this.props.location)} 
                    />

                    <br/>
                    <label>Photo:  </label>
                    <input                       
                        type="file" 
                        name="search"
                        accept= "image/*"
                        onChange={(e) => {let fr = new FileReader();
                                    //let newState = {}
                                    fr.onloadend = () => {
                                        let img = fr.result;
                                        this.setState({img})      
                                    };
                                    fr.readAsDataURL(e.target.files[0]);}} />
                    <br/>
                    <Button
                        type="submit"
                        label="Register"
                        className="p-button-raised p-button-rounded"
                        onClick={(e) => this.props.clickEventHandler(e, this.props, this.state.img)}
                    />

                </form>
            </div>
        )

    }


    

}

const mapStateToProps =(state) => {
    console.log(state['register'].userName)
    console.log(state['register'].password)

    return {
        userName: state['register'].userName,
        password: state['register'].password,
        location: state['register'].location,
        taken: state['register'].taken,
        locationSuggestions: state['register'].locationSuggestions
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

        clickEventHandler: (event, data, img) => {
            dispatch(RegisterActions.clickAction(event, data, img))
        },
        suggestLocationsEventHandler: (location) => {
            console.log("the location in suggest is : " + location)
            dispatch(RegisterActions.suggestLocationsAction(location))
        },
        loadCitiesEventHandler: () => {
            dispatch(RegisterActions.loadCitiesAction())
        },
        updateNameEventHandler: (userName) => {
            dispatch(RegisterActions.updateNameAction(userName))
        },
        updatePasswordEventHandler: (password) => {
            dispatch(RegisterActions.updatePasswordAction(password))
        },
        updateLocationEventHandler: (location) => {
            console.log("the update location is : " + location)
            dispatch(RegisterActions.updateLocationAction(location))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);












