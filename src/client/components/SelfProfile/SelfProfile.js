import React, {Component} from 'react'
import SelfProperties from '../SelfProperties'
import Review from '../Review'
import { Button } from 'primereact/button';
import {Spinner} from 'primereact/spinner';
import { InputText } from 'primereact/inputtext';

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

    componentDidMount() {
        this.props.updateStateEventHandler(this.props.match.params.profile_name);
    }

    render() {
        const reviews = this.props.reviews.map(review => {
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
                />
            )
        })
        return (
            <div>
            <SelfProperties 
                userName={this.props.userName} 
                location={this.props.location} 
                img={this.props.img}
            />
            <h3>Reviews:</h3>
            {reviews}
            <br/>
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
                    onChange={(e) => this.setState({title: e.value})}
                    placeholder="Restaurant Name"
                /> 
                <InputText
                    value={this.state.location}
                    onChange={(e) => this.setState({location: e.value})}
                    placeholder="Restaurant Location"
                /> 
                <label>Bathroom Quality: </label>
                <Spinner 
                    value={this.state.bq} 
                    onChange={(e) => this.setState({bq: e.value})} 
                    min={1} 
                    max={5} />
                <label>Staff Kindness: </label>
                <Spinner 
                    value={this.state.sk} 
                    onChange={(e) => this.setState({sk: e.value})} 
                    min={1} 
                    max={5} />
                <label>Cleanliness: </label>
                <Spinner 
                    value={this.state.clean} 
                    onChange={(e) => this.setState({clean: e.value})} 
                    min={1} 
                    max={5} />
                <label>Drive-thru quality: </label>
                <Spinner 
                    value={this.state.dtq} 
                    onChange={(e) => this.setState({dtq: e.value})} 
                    min={0} 
                    max={5} />
                <label>Delivery Speed: </label>
                <Spinner 
                    value={this.state.ds} 
                    onChange={(e) => this.setState({ds: e.value})} 
                    min={0} 
                    max={5} />
                <label>Food Quality </label>
                <Spinner 
                    value={this.state.fq} 
                    onChange={(e) => this.setState({fq: e.value})} 
                    min={1} 
                    max={5} />

                <label>Add Image: </label>
                <input                       
                        type="file" 
                        name="search"
                        accept= "image/*"
                        onChange={(e) => SelfProfile.updateImgEventHandler(e)} />
                <br/>
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
}

const mapStateToProps = (state, props) => {
    return {
        userName: state['selfProfile'].userName,
        location: state['selfProfile'].location,
        img: state['selfProfile'].img,
        reviews: state['selfProfile'].reviews,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateStateEventHandler: (name) => {
            dispatch(SelfProfileActions.updateStateAction(name))
        },
        addReviewEventHandler: () => {
            dispatch(SelfProfileActions.addReviewAction())
        },
        saveReviewEventHandler: (name, review) => {
            dispatch(SelfProfileActions.saveReviewAction(name, review))      
        }

    }
}


export default SelfProfile