import React, { Component } from 'react'
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import ReviewActions from './actions';
import { connect } from 'react-redux';
import Gallery from '../Gallery'
import { Card } from 'primereact/card';


class Review extends Component {
    state = {
        bq: 0,
        sk: 0,
        clean: 0,
        dtq: 0,
        ds: 0,
        fq: 0 
    }

    componentDidMount(){
        this.setState({
            bq: this.props.bq,
            sk: this.props.sk,
            clean: this.props.clean,
            dtq: this.props.dtq,
            ds: this.props.ds,
            fq: this.props.fq,

        })
    }

    render() {
        const dummy = [ { label: 'Bathroom Quality:', tag: 'bq', save_tag: 'editbq' },
                        { label: 'Staff Kindness:', tag: 'sk', save_tag: 'editsk' },
                        { label: 'Cleanliness:', tag: 'clean', save_tag: 'editclean' },
                        { label: 'Drive - thru quality:', tag: 'dtq', save_tag: 'editdtq' },
                        { label: 'Delivery Speed:', tag: 'ds', save_tag: 'editds' },
                        { label: 'Food Quality:', tag: 'fq', save_tag: 'editfq' } ];

        const new_review = dummy.map(topic => {
            return(
            <div>
                <ln>{topic.label} { this.state[topic.tag] != null ? this.state[topic.tag] : 0} out of 5</ln>
                <Button
                    type="edit-review"
                    label="Edit"
                    className="p-button-raised p-button-rounded"
                    onClick={(e) => this.props.editEventHandler(topic.save_tag)}
                />

                {this.props[topic.save_tag] &&
                    <React.Fragment>
                        <div className='content-section implementation'>
                        <Rating
                            value={this.state[topic.tag]}
                            onChange={(e) => this.setState({[topic.tag]: e.value})}
                        />
                        </div>
                        <Button
                            type="save-review"
                            label="Save"
                            icon="pi pi-check"
                            className="p-button-raised p-button-rounded"
                            onClick={(e) => this.props.saveStarEventHandler(topic.save_tag, this.state[topic.tag], this.props.userName)}
                        />
                    </React.Fragment>
                }
            </div>)
        }
        )
        return (
          <div className="collection-item">  
              {!this.props.deleted &&
                <React.Fragment>
                <h2>{this.props.title + ' - ' + this.props.location}</h2>
                    {new_review}
                <br/> 
                <Gallery imgs={this.props.imgs}/>
                <Button
                    type="delete-review"
                    label="Delete Review"
                    className="p-button-raised p-button-rounded"
                    onClick={(e) => this.props.deleteEventHandler(this.props.title, this.props.userName)}
                />
                </React.Fragment>
              }
                   
          </div>)
    }
}

const mapStateToProps = (state, props) => {
    return {
        bq: props.bq,
        sk: props.sk,
        clean: props.clean,
        tq: props.tq,
        ds: props.ds,
        fq: props.fq,
        editbq: state['review'].editbq,
        editsk: state['review'].editsk,
        editclean: state['review'].editclean,
        editdtq: state['review'].editdtq,
        editds: state['review'].editds,
        editfq: state['review'].editfq,
        title: props.title,
        location: props.location,
        deleted: state['review'].deleted,
        imgs: props.imgs,
        date: props.date
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
       editEventHandler: (save_tag) => {
           dispatch(ReviewActions.editAction(save_tag))
       },  
       saveStarEventHandler: (save_tag, num) => {
           dispatch(ReviewActions.saveStarAction(save_tag, num))
       },
       deleteEventHandler: (title, userName) => {
           dispatch(ReviewActions.deleteAction(title, userName))
       }

   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Review);