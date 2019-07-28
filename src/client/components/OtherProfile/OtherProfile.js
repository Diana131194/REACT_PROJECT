import React from 'react'
import { Card } from 'primereact/card';
import { connect } from 'react-redux';
import  OtherProfileActions  from './actions'
import Gallery from '../Gallery'
import './OtherProfile.scss';


class OtherProfile extends React.Component {

    render () {
         
        const header = <img top='50px' alt="Card" src={this.props.img} />;

        const reviews = (this.props.reviews).map( review => {
            return (
                <div>
                    <h4>{review.title}</h4>
                        Bathroom Quality: {review.bq} out of 5<br/>
                        Staff Kindness: {review.sk} out of 5<br/>
                        Cleanliness: {review.clean} out of 5<br/>
                        Drive - thru quality: {review.dtq} out of 5<br/>
                        Delivery Speed: {review.ds} out of 5<br/>
                        Food Quality: {review.fq} out of 5<br/>
                        <br/>
                        { review.imgs.size ?
                         <React.Fragment>
                            Gallery:<br/>
                            <Gallery imgs={review.imgs}/>
                         </React.Fragment> 
                         : null
                        }
                </div>
              
            )
        })

        return (
            <div className="otherprofile-root">
                <Card className="center"
                    style = {{width: '450px', position: 'center'}}
                    header={header} 
                    title={this.props.userName}
                    subTitle={this.props.location}>
                    { reviews.size ?
                        <React.Fragment> 
                            <h3>Reviews:</h3>
                            {reviews} 
                        </React.Fragment> 
                        : <h4>No reviews yet!</h4>
                    }
                </Card> 
                <br/>   
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        userName: props.userName,
        location: props.location,
        reviews: props.reviews,
        img: props.img
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reviewClickHandle: (name) => {
            dispatch(OtherProfileActions.clickReviewAction(name))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(OtherProfile);