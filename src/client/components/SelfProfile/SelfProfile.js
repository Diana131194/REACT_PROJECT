import React, {Component} from 'react'
import SelfProperties from '../SelfProperties'
import Review from '../Review'
import { Button } from 'primereact/button';
import {Spinner} from 'primereact/spinner';
import { InputText } from 'primereact/inputtext';
import { List } from 'immutable'
import { connect } from 'react-redux';
import SelfProfileActions from './actions'

class SelfProfile extends Component {

    state = {
        bq: 0,
        sk: 0,
        clean: 0,
        dtq: 0,
        ds: 0,
        fq: 0,
        title: '',
        location: '',
        imgs: List() 
    }

    updateImgEventHandler(event){

        let fr = new FileReader();
        fr.onloadend = () => {
            let img = fr.result; 
            let new_imgs = [...(this.state.imgs.toArray()), img]   
            this.setState({
                ...state,
                imgs: new List(new_imgs)
            })    
        };
        fr.readAsDataURL(event.target.files[0]);

    }

    id = 0;

    render() {
        console.log(this.props)
        const reviews = this.props.reviews.map(review => {
            this.id++;
            return (
                <Review bq={review.bq} 
                        sk={review.sk} 
                        clean={review.clean} 
                        dtq={review.dtq} 
                        ds={review.ds} 
                        fq={review.fq} 
                        title={review.title}
                        location={review.location}
                        userName={this.props.userName}
                        imgs={review.imgs}
                        id={this.id}
                />
            )
        })

        if (this.props.userName != '') {
            return (
                <div>
                    <SelfProperties
                        userName={this.props.userName}
                        location={this.props.location}
                        img={this.props.img}
                    />
                    <h3>Reviews:</h3>
                    {reviews}
                    <br />
                    <Button
                        type="add-review"
                        label="Add Review"
                        className="p-button-raised p-button-rounded"
                        onClick={this.props.addReviewEventHandler}
                    />
                    {this.props.add_button && (
                        <React.Fragment>
                            <InputText
                                value={this.state.title}
                                onChange={(e) => this.setState({ title: e.value })}
                                placeholder="Restaurant Name"
                            />
                            <InputText
                                value={this.state.location}
                                onChange={(e) => this.setState({ location: e.value })}
                                placeholder="Restaurant Location"
                            />
                            <label>Bathroom Quality: </label>
                            <Spinner
                                value={this.state.bq}
                                onChange={(e) => this.setState({ bq: e.value })}
                                min={1}
                                max={5} />
                            <label>Staff Kindness: </label>
                            <Spinner
                                value={this.state.sk}
                                onChange={(e) => this.setState({ sk: e.value })}
                                min={1}
                                max={5} />
                            <label>Cleanliness: </label>
                            <Spinner
                                value={this.state.clean}
                                onChange={(e) => this.setState({ clean: e.value })}
                                min={1}
                                max={5} />
                            <label>Drive-thru quality: </label>
                            <Spinner
                                value={this.state.dtq}
                                onChange={(e) => this.setState({ dtq: e.value })}
                                min={0}
                                max={5} />
                            <label>Delivery Speed: </label>
                            <Spinner
                                value={this.state.ds}
                                onChange={(e) => this.setState({ ds: e.value })}
                                min={0}
                                max={5} />
                            <label>Food Quality </label>
                            <Spinner
                                value={this.state.fq}
                                onChange={(e) => this.setState({ fq: e.value })}
                                min={1}
                                max={5} />

                            <label>Add Image: </label>
                            <input
                                type="file"
                                name="search"
                                accept="image/*"
                                onChange={(e) => SelfProfile.updateImgEventHandler(e)} />
                            <br />
                            <Button
                                type="save-review"
                                label="Save Review"
                                className="p-button-raised p-button-rounded"
                                onClick={(e) => this.props.saveReviewEventHandler(this.props.userName, this.state)}
                            />
                        </React.Fragment>
                    )}
                </div>
            )
        }
        else {
            return <h1>You are not logged in, please login!</h1>
        }
            }
        
    
}

const mapStateToProps = (state, props) => {
    console.log("&&&&&&&&&&&")
    console.log(props)
    return {
        userName: props.userName,
        add_button: state['selfProfile'].add_button,
        location: props.location,
        img: props.img,
        reviews: new List([{bq: 1, sk: 2, clean: 2, dtq: 3, ds: 4, fq: 5, title: 'BBB', location: "beer sheva", imgs: new List()}])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateStateEventHandler: (userName) => {
            dispatch(SelfProfileActions.updateStateAction(userName))
        },
        addReviewEventHandler: () => {
            dispatch(SelfProfileActions.addReviewAction())
        },
        saveReviewEventHandler: (name, review) => {
            dispatch(SelfProfileActions.saveReviewAction(name, review))      
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SelfProfile);