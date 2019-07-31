import React , {Component} from 'react'
import { RadioButton } from 'primereact/radiobutton';
import { SelectButton } from 'primereact/selectbutton';
import { Button } from 'primereact/button';
import { connect } from 'react-redux';

class Restaurant extends Component {

    state = {
        stars: ['1', '2', '3', '4', '5'],
        star: '',
        isTopic: false,
        button: ''
    }

    render(){
        return (
            <div>
                <Card className="center"
                    style = {{width: '400px', position: 'center'}}
                    title={this.props.title}
                    subTitle={this.props.location}>
                    { this.props.reviews.size ?
                        <React.Fragment> 
                            <label>Show reviews by: </label>
                            <RadioButton value="from newest" onChange={(e) => this.setState({button: e.value})} checked={this.state.button === 'from newest'} />
                            <RadioButton value="from oldest" onChange={(e) => this.setState({ button: e.value })} checked={this.state.button === 'from oldest'} />
                            <RadioButton value="since last week" onChange={(e) => this.setState({ button: e.value })} checked={this.state.button === 'since last week'} />
                            <RadioButton value="since last month" onChange={(e) => this.setState({ button: e.value })} checked={this.state.button === 'since last month'} />
                            <RadioButton value="since last year" onChange={(e) => this.setState({ button: e.value })} checked={this.state.button === 'since last year'} />
                            <RadioButton value="Bathroom Quality" onChange={(e) => this.setState({ button: e.value, isTopic: true })} checked={this.state.button === 'Bathroom Quality'} />
                            <RadioButton value="Staff Kindness" onChange={(e) => this.setState({ button: e.value, isTopic: true })} checked={this.state.button === 'Staff Kindness'} />
                            <RadioButton value="Cleanliness" onChange={(e) => this.setState({ button: e.value, isTopic: true })} checked={this.state.button === 'Cleanliness'} />
                            <RadioButton value="Drive-thru quality" onChange={(e) => this.setState({ button: e.value, isTopic: true })} checked={this.state.button === 'Drive-thru quality'} />
                            <RadioButton value="Delivery Speed" onChange={(e) => this.setState({ button: e.value, isTopic: true })} checked={this.state.button === 'Delivery Speed'} />
                            <RadioButton value="Food Quality" onChange={(e) => this.setState({ button: e.value, isTopic: true })} checked={this.state.button === 'Food Quality'} />
                            { this.state.isTopic ?
                                <React.Fragment> 
                                <label>Select the minimum stars for the search: </label>
                                <br/>
                                <SelectButton value={this.state.star} options={this.state.stars} onChange={(e) => this.setState({ star: e.value })}></SelectButton>
                                <h3>Reviews:</h3>
                                </React.Fragment>
                                : null }
                            <Button
                                label="Search"
                                className="p-button-raised p-button-rounded"
                                onClick={() => this.props.searchReviewsEventHandler(this.state.button, this.state.star)}
                            />
                            {this.props.reviews} 
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

const mapDispatchToProps = (dispatch) => {
    return {
        searchReviewsEventHandler: (button, star) => {
            dispatch(RestauranrActions.searchReviewsAction(button, star))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);