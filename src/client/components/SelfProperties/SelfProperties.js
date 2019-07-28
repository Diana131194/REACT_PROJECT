import React, {Component} from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { connect } from 'react-redux';
import SelfPropertiesActions from './actions'


class SelfProperties extends Component{
    
    render() {
        const header = <img alt="Card" src={this.props.img} />;
        const footer = <span>
                            <InputText placeholder="New Username" value={this.props.editedName} onChange={(e) => this.props.editedNameEventHandler(e.target.value)} />
                            <Button label="Edit Username" style={{ marginRight: '.25em' }} onClick={() => this.props.editNameEventHandler(this.props.editedName)} />
                            <InputText placeholder="New Location" value={this.props.editedLocation} onChange={(e) => this.props.editedLocationEventHandler(e.target.value)} />
                            <Button label="Edit location" style={{ marginRight: '.25em' }} onClick={() => this.props.editLocationEventHandler(this.props.editedLocation)}  />
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
        img: props.img,
        editedName: state['selfProperties'].editedName,
        editedLocation: state['selfProperties'].editedLocation
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
        editNameEventHandler: (name) => {
            dispatch(SelfPropertiesActions.editNameAction(name))
        },
        editLocationEventHandler: (location) => {
            dispatch(SelfPropertiesActions.editlocationAction(location))
        },
        editedNameEventHandler: (name) => {
            dispatch(SelfPropertiesActions.editedNameAction(name))
        },
        editedLocationEventHandler: (location) => {
            dispatch(SelfPropertiesActions.editedLocationAction(location))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SelfProperties);