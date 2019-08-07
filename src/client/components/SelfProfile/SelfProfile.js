
import React, { Component } from 'react';
import { Dialog } from 'primereact/components/dialog/Dialog';
import { Panel } from 'primereact/panel';
//import {CarService} from '../service/CarService';
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { connect } from 'react-redux';
import { InputText } from 'primereact/inputtext';
import { Rating } from 'primereact/rating';
import SelfProperties from '../SelfProperties'
import SelfProfileActions from './actions'
import Review from '../Review'
import Gallery from '../Gallery'
//import {Restaurant} from '../../../server/model/restaurant'

class SelfProfile extends Component {

    constructor() {
        super();

        this.state = {
            // restaurants: [],
            // layout: 'list',
            selectedCar: null,
            visible: false,
            edit_visible: false,
            sortKey: null,
            sortOrder: null,
            imgs: [],
            bq: 1,
            sk: 1,
            clean: 1,
            dtq: 0,
            ds: 0,
            fq: 1,
            title: '',
            location: '',
            selected_file: '',
            reviews: []
        }


        //this.carservice = new CarService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchReviewsEventHandler(this.props.userName);
        // this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
       
    }


    onSortChange(event) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.setState({
                sortOrder: -1,
                sortField: value.substring(1, value.length),
                sortKey: value
            });
        }
        else {
            this.setState({
                sortOrder: 1,
                sortField: value,
                sortKey: value
            });
        }
    }

    renderListItem(review) {
       
        return (

            <div className="p-col-12" style={{ padding: '2em', borderBottom: '1px solid #d9d9d9' }}>
                <div className="p-col-12 p-md-3">
                    {/*
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
                    */}
                    {//               <img src={'showcase/resources/demo/images/car/${restaurant.brand}.png'} alt={restaurant.name}/>       
                    }
                </div>

                <h2>{review.title + ' - ' + review.location}</h2>
                <div className="p-col-11 p-md-8 car-details">
                    <div className="p-grid">

                        <div className="p-col-2 p-sm-2">Bathroom Quality:</div>
                        <div className="p-col-2 p-sm-2"><Rating readonly={true} value={review.bq} /></div>

                        <div className="p-col-2 p-sm-2">Staff Kindness:</div>
                        <div className="p-col-2 p-sm-2"><Rating readonly={true} value={review.sk} /></div>

                        <div className="p-col-2 p-sm-2">Food Quality:</div>
                        <div className="p-col-2 p-sm-2"><Rating readonly={true} value={review.fq} /></div>

                        <div className="p-col-2 p-sm-2">Cleanliness</div>
                        <div className="p-col-2 p-sm-2"><Rating readonly={true} value={review.clean} /></div>

                        <div className="p-col-2 p-sm-2">Drive-thru quality:</div>
                        <div className="p-col-2 p-sm-2"><Rating readonly={true} value={review.dtq} /></div>

                        <div className="p-col-2 p-sm-2">Delivery Speed:</div>
                        <div className="p-col-2 p-sm-2"><Rating readonly={true} value={review.ds} /></div>
                        <h3>Gallery: </h3>
                        {review.imgs.length ?<div><br/> <Gallery imgs={review.imgs} /> </div>: <div><br/><p>There are no pictures in the gallery</p></div>}


                    </div>

                <div className="p-col-1 p-md-1 search-icon" style={{ marginTop: '40px' }}>

                    <div className="p-col-6" style={{ textAlign: 'center' }}>
                        <Button
                            type="add-review"
                            label="Edit Review"
                            className="p-button-raised p-button-rounded"
                                onClick={(e) => {
                                    this.setState({
                                        title: review.title, location: review.location, edit_visible: true, bq: review.bq,
                                        sk: review.sk,
                                        clean: review.clean,
                                        dtq: review.dtq,
                                        ds: review.ds,
                                        fq: review.fq,
                                         }) }}
                        />
                    
                        <Button label="Delete Review"
                                className="p-button-raised p-button-rounded" 
                                onClick={(e) => {
                                    console.log("click on delete")
                                    this.props.deleteReviewEventHandler(review.title, this.props.userName, review.location);
                                    this.setState({title: '', location: ''})
                                    this.props.fetchReviewsEventHandler(this.props.userName);                       
                                }
                                }>
                        </Button>
                        </div>

                </div>
                </div>
                </div>

        );
    }

    renderGridItem(review) {
        console.log("test")
        return (
            <div style={{ padding: '.5em' }} className="p-col-12 p-md-3">

                <Panel header={review.title} style={{ textAlign: 'center' }}>
                    { //  <img src={'showcase/resources/demo/images/car/${car.brand}.png'} alt={restaurant.name} />
                    }
                    <div className="review-detail">{review.name}</div>
                    <hr className="ui-widget-content" style={{ borderTop: 0 }} />
                    {
                        //<Button icon="pi pi-search" onClick={(e) => this.setState({ selectedCar: restaurant, visible: true })}></Button>
                    }
                </Panel>


            </div>
        );
    }

    itemTemplate(review, layout) {
        if (!review) {
            console.log("shouldnt be here")
            
            return null;
        }
        if (layout === 'list')
            return this.renderListItem(review);
        else if (layout === 'grid')
            return this.renderGridItem(review);
    }

    renderCarDialogContent() {
        console.log("another test")
        if (this.state.selectedCar) {
            return (
                <Review />
            );
        }
        else {
            return null;
        }
    }

    renderHeader() {
        const sortOptions = [
            { label: 'By Name Acending', value: 'name' },
            { label: 'By Name Decending', value: '!name' },
            { label: 'By city Acending', value: 'name' },
            { label: 'By city Decending', value: 'name' }
        ];

        return (
            <div className="p-grid">
                <div className="p-col-6" style={{ textAlign: 'left' }}>
                    <Dropdown options={sortOptions} value={this.state.sortKey} placeholder="Sort By" onChange={this.onSortChange} />
                </div>
                {
                    <div className="p-col-6" style={{ textAlign: 'right' }}>
                        <Button
                            type="add-review"
                            label="Add Review"
                            className="p-button-raised p-button-rounded"
                            onClick={(e) => { this.setState({ visible: true }) }}
                        />
                    </div>
                }
            </div>
        );
    }

    render() {
        console.log("render the self profile")
        const header = this.renderHeader();
        if (this.props.userName != '') {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>My Profile</h1>
                        <SelfProperties
                            userName={this.props.userName}
                            location={this.props.location}
                            img={this.props.img}
                        />
                    </div>
                </div>

                <div className="content-section implementation">
                    {console.log("when creating dataview")}
                    <DataView value={this.props.reviews} layout={this.props.layout} header={header}
                        itemTemplate={this.itemTemplate} paginatorPosition={'both'} paginator={false} rows={4}
                        sortOrder={this.state.sortOrder} sortField={this.state.sortField} />

                    <Dialog header="Add Review"
                        visible={this.state.visible} width="225px" modal={true} onHide={() => this.setState({ visible: false })}>
                        <br />
                        <InputText
                            value={this.state.title}
                            onChange={(e) => this.setState({ title: e.target.value })}
                            placeholder="Restaurant Name"
                        /><br />
                        <InputText
                            value={this.state.location}
                            onChange={(e) => this.setState({ location: e.target.value })}
                            placeholder="Restaurant Location"
                        /><br />
                        <label>Bathroom Quality: </label>
                        <Rating
                            value={this.state.bq}
                            onChange={(e) => this.setState({ bq: e.target.value })}
                            cancel={false}
                        />
                        <br />
                        <label>Staff Kindness: </label>
                        <Rating
                            value={this.state.sk}
                            onChange={(e) => this.setState({ sk: e.target.value })}
                            cancel={false}
                        />
                        <br />
                        <label>Cleanliness: </label>
                        <Rating
                            value={this.state.clean}
                            onChange={(e) => this.setState({ clean: e.target.value })}
                            cancel={false}
                        /><br />
                        <label>Drive-thru quality: </label>
                        <Rating
                            value={this.state.dtq}
                            onChange={(e) => this.setState({ dtq: e.target.value })}

                        /><br />
                        <label>Delivery Speed: </label>
                        <Rating
                            value={this.state.ds}
                            onChange={(e) => this.setState({ ds: e.target.value })}
                        /><br />
                        <label>Food Quality: </label>
                        <Rating
                            value={this.state.fq}
                            onChange={(e) => this.setState({ fq: e.target.value })}
                            cancel={false}
                        /><br />

                        <label>Add Image: </label>
                        <input
                            type="file"
                            name="search"
                            accept="image/*"
                            onChange={(e) => {
                                let fr = new FileReader();
                                fr.onloadend = () => {
                                    let img = fr.result;
                                    this.setState({
                                        ...(this.state),
                                        selected_file: img
                                    })
                                };
                                fr.readAsDataURL(event.target.files[0]);
                            }} />
                        <Button
                            type="save-review"
                            label="Upload"
                            className="p-button-raised p-button-rounded"
                            onClick={() => {
                                let new_imgs = [...(this.state.imgs), this.state.selected_file]
                                console.log("the imgs are: ")
                                console.log(new_imgs)
                                this.setState({
                                    ...(this.state),
                                    imgs: new_imgs
                                })
                            }}
                        />
                        <br />
                        <Button
                            type="save-review"
                            label="Save Review"
                            className="p-button-raised p-button-rounded"
                            onClick={(e) => {this.props.saveReviewEventHandler(this.props.userName, this.state);
                                             this.props.fetchReviewsEventHandler(this.props.userName);
                                            this.setState({
                                                    visible: false, bq: 1, sk: 1, clean: 1, dtq: 0, ds: 0, fq: 1, title: '', location: ''})}}
    />
                    </Dialog>

                    <Dialog header="Edit Review"
                        visible={this.state.edit_visible} width="225px" modal={true} onHide={() => this.setState({ edit_visible: false })}>
                        <br />
                        <label>Bathroom Quality: </label>
                        <Rating
                            value={this.state.bq}
                            onChange={(e) => this.setState({ bq: e.target.value })}
                            cancel={false}
                        />
                        <br />
                        <label>Staff Kindness: </label>
                        <Rating
                            value={this.state.sk}
                            onChange={(e) => this.setState({ sk: e.target.value })}
                            cancel={false}
                        />
                        <br />
                        <label>Cleanliness: </label>
                        <Rating
                            value={this.state.clean}
                            onChange={(e) => this.setState({ clean: e.target.value })}
                            cancel={false}
                        /><br />
                        <label>Drive-thru quality: </label>
                        <Rating
                            value={this.state.dtq}
                            onChange={(e) => this.setState({ dtq: e.target.value })}

                        /><br />
                        <label>Delivery Speed: </label>
                        <Rating
                            value={this.state.ds}
                            onChange={(e) => this.setState({ ds: e.target.value })}
                        /><br />
                        <label>Food Quality: </label>
                        <Rating
                            value={this.state.fq}
                            onChange={(e) => this.setState({ fq: e.target.value })}
                            cancel={false}
                        /><br />
                        <Button
                            type="save-review"
                            label="Save Review"
                            className="p-button-raised p-button-rounded"
                            onClick={(e) => { console.log("click edit title: " + this.state.title)
                                              console.log("click edit location: " + this.state.location)
                                             this.setState({edit_visible: false}); 
                                             this.props.editReviewEventHandler(this.props.userName, this.state);
                                             this.props.fetchReviewsEventHandler(this.props.userName)}}
                        />
                    </Dialog>



                </div>


            </div>
        );
        }
        else {
            return <h1>You are not logged in, please login!</h1>
        }
    }
}

const mapStateToProps = (state, props) => {
    return {
        userName: props.userName,
        add_button: state['selfProfile'].add_button,
        location: props.location,
        img: props.img,
        reviews: state['selfProfile'].reviews,
        layout: state['selfProfile'].layout,
        selectedCar: state['selfProfile'].selectedCar,
        visible: state['selfProfile'].visible,
        sortKey: state['selfProfile'].sortKey,
        sortOrder: state['selfProfile'].sortOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReviewsEventHandler: (userName) => {
            dispatch(SelfProfileActions.fetchReviewsAction(userName))
        },
        saveReviewEventHandler: (name, review) => {
            dispatch(SelfProfileActions.saveReviewAction(name, review))
        },
        deleteReviewEventHandler: (title, userName, location) => {
            console.log("im in delete handler!!!!")
            dispatch(SelfProfileActions.deleteAction(title, userName, location))
        },
        changeLayoutEventHandler: (layout) => {
            dispatch(SelfProfileActions.changeLayoutAction(layout))
        },
        editReviewEventHandler: (name, review) => {
            dispatch(SelfProfileActions.editReviewAction(name, review))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelfProfile);

