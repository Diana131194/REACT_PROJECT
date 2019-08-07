import React, {Component} from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { connect } from 'react-redux';
import SelfPropertiesActions from './actions'


class SelfProperties extends Component{

    state = {
        editedName: '',
        editedLocation: ''
    }
    
    render() {
        const header = <img alt="Card" src={this.props.img} />;
        const footer = <span>
                        <InputText placeholder="New name" value={this.state.editedName} onChange={(e) => this.setState({ editedName: e.target.value })} /><br/>
                        <Button label="Edit name" onClick={() => this.props.editNameEventHandler(this.props.userName, this.state.editedName)} /><br />
                        <InputText placeholder="New Location" value={this.state.editedLocation} onChange={(e) => this.setState({ editedLocation: e.target.value })} /><br />
                        <Button label="Edit location" onClick={() => this.props.editLocationEventHandler(this.state.editedLocation, this.props.userName)} /> <br />
                       </span>;
        return (
        <div className="left">
            <Card className="left"
                style={{ width: '450px', position: 'left' }}
                header={header}
                footer={footer}
                title={this.props.userName}
                subTitle={this.props.location}>
            </Card>  
                       
        </div>
        )
    }

}

const mapStateToProps = (state, props) => {
    return {
        userName: props.userName,
        location: props.location,
        img: props.img
    }
}

const mapDispatchToProps = (dispatch) => {
    return {      
        editNameEventHandler: (oldName, newName) => {
            dispatch(SelfPropertiesActions.editNameAction(oldName, newName))
        },
        editLocationEventHandler: (newLocation, userName) => {
            dispatch(SelfPropertiesActions.editLocationAction(newLocation, userName))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SelfProperties);