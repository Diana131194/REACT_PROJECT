import React , {Component} from 'react'

class Restaurant extends Component {

    render(){
        return (
            <div>
                <Card className="center"
                    style = {{width: '400px', position: 'center'}}
                    title={this.props.title}
                    subTitle={this.props.location}>
                    { this.props.reviews.size ?
                        <React.Fragment> 
                            <h3>Reviews:</h3>
                            {reviews} 
                        </React.Fragment> 
                        : <h4>No reviews yet!</h4>
                    }
                </Card> 
            </div>
        )
    }

}

const mapStateToProps = (state, props) => {
    return {
        reviews: props.reviews,
        title: props.title,
        location: props.location
    }
}

export default Restaurant