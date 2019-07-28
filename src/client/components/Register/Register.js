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

    componentDidMount(){
        this.props.loadCitiesEventHandler();
    }
    render(){
        return (
            <div className="app-register">
                <h2 style={Header2}>not registerder?</h2>
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
                        placeholder="Location"
                        onChange={(e) => this.props.updateLocationEventHandler(e.value)}
                        completeMethod={(e) => this.props.suggestLocationsEventHandler(e)} 
                    />

                    <br/>
                    <label>Photo:  </label>
                    <input                       
                        type="file" 
                        name="search"
                        accept= "image/*"
                        onChange={(e) => this.props.updateImgEventHandler(e)} />
                    <br/>
                    <Button
                        type="submit"
                        label="Register"
                        className="p-button-raised p-button-rounded"
                        onClick={(e) => this.clickEventHandler(e, this.props)}
                    />

                </form>
            </div>
        )

    }


    

}

const mapStateToProps =(state) => {
    return {
        userName: state['register'].userName,
        password: state['register'].password,
        location: state['register'].location,
        img: state['register'].img,
        taken: state['register'].taken,
        locationSuggestions: state['register'].locationSuggestions
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

        clickEventHandler: (event) => {
            dispatch(RegisterActions.clickAction(event))
        },
        suggestLocationsEventHandler: (event) => {
            dispatch(RegisterActions.suggestLocationsAction(event))
        },
        loadCitiesEventHandler: () => {
            dispatch(RegisterActions.loadCitiesAction())
        },
        updateNameEventHandler: (name) => {
            dispatch(RegisterActions.updateNameAction(name))
        },
        updatePasswordEventHandler: (password) => {
            dispatch(RegisterActions.updatePasswordAction(password))
        },
        updateLocationEventHandler: (location) => {
            dispatch(RegisterActions.updateLocationAction(location))
        },
        updateImgEventHandler: (img) => {
            dispatch(RegisterActions.updateImgAction(img))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);












