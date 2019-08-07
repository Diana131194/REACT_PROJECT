
import React, {Component} from 'react';
import {Dialog} from 'primereact/components/dialog/Dialog';
import {Panel} from 'primereact/panel';
//import {CarService} from '../service/CarService';
import {DataView, DataViewLayoutOptions} from "primereact/dataview";
import {Button} from "primereact/button";
import {Dropdown} from "primereact/dropdown";
import { connect } from 'react-redux';
import ProfilesActions from './actions'
import { AutoComplete } from 'primereact/autocomplete';
import { ScrollPanel } from 'primereact/scrollpanel';
//import Profile from "../Profile"
//import {Profile} from '../../../server/model/profile'

class Profiles extends Component {

    constructor() {
        super();
        
        this.state = {
           // profiles: [],
           // layout: 'list',
            selectedCar: null, 
            userFilter: "",
            visible: false,
            sortKey: null,
            sortOrder: null
        }
        
        
        //this.carservice = new CarService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
    }

    componentDidMount() {
            this.props.fetchProfilesEventHandler();
       // this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
        
       
    }

    componentDidUpdate(prevProps, prevState) {
        Object.entries(this.props).forEach(([key, val]) =>
            prevProps[key] !== val && console.log(`Prop '${key}' changed`)
        );
        Object.entries(this.state).forEach(([key, val]) =>
            prevState[key] !== val && console.log(`State '${key}' changed`)
        );
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

    renderListItem(profile) {
        return (
            
            <div className="p-grid" style={{padding: '2em', borderBottom: '1px solid #d9d9d9'}}>
                <div className="p-col-4 p-md-1">
                           <img style={{width: '100px'}} src={profile.img}/>       
                   
               </div>
                <div className="p-col-4 p-md-6 car-details">
                    <div className="p-grid">
                        <div className="p-col-1 p-sm-6">name:</div>
                        <div className="p-col-1 p-sm-6">{profile.userName}</div>

                        <div className="p-col-1 p-sm-6">city:</div>
                        <div className="p-col-1 p-sm-6">{profile.location}</div>

                
                    </div>
                </div>

                <div className="p-col-4 p-md-1 search-icon" style={{marginTop:'40px'}}>
                    
                    <Button icon="pi pi-search" onClick={(e) => {
                        {this.setState({ selectedCar: profile, visible: true});
                            this.props.fetchUsersReviews(profile.userName)}
                    }
                    }></Button>
                    
                    </div>
            </div>
                
        );
    }

    renderGridItem(profile) {
        console.log("test")
        return (
            <div style={{ padding: '.5em' }} className="p-col-12 p-md-3">
                
                <Panel header={profile.name} style={{ textAlign: 'center' }}>
                 { //  <img src={'showcase/resources/demo/images/car/${car.brand}.png'} alt={profile.name} />
                 }
                    <div className="profile-detail">{profile.name}</div>
                    <hr className="ui-widget-content" style={{ borderTop: 0 }} />
                    {
                    <Button icon="pi pi-search" onClick={(e) => {this.setState({ selectedCar: profile, visible: true });
                                                                this.props.fetchUsersReviews(profile.name)}}></Button>
                    }
                </Panel>
                
                
            </div>
        );
    }

    itemTemplate(profile, layout) {
        if (!profile) {
            console.log("shouldnt be here")
            
            return null;
        }
        if(String(profile.userName).includes(this.state.userFilter)){
        if (layout === 'list')
            return this.renderListItem(profile);
        else if (layout === 'grid')
            return this.renderGridItem(profile);
        }else{
            return null
        }
    }

    usersReviews(){
        return (this.props.current_reviews ? (this.props.current_reviews.map(review => {
        return (
            <div>
                <h4>{review.title + '-' + review.location}</h4>
                Bathroom Quality: {review.bq} out of 5<br />
                Staff Kindness: {review.sk} out of 5<br />
                Cleanliness: {review.clean} out of 5<br />
                Drive - thru quality: {review.dtq} out of 5<br />
                Delivery Speed: {review.ds} out of 5<br />
                Food Quality: {review.fq} out of 5<br />
                <br />
                {review.imgs.size ?
                    <React.Fragment>
                        Gallery:<br />
                        <Gallery imgs={review.imgs} />
                    </React.Fragment>
                    : null
                }
            </div>
        )
    })) : [])}


    renderCarDialogContent() {
        console.log("another test")
        if (this.state.selectedCar) {
            return (
                <Profile/>
            );
        }
        else {
            return null;
        }
    }

    renderHeader() {
        const sortOptions = [
            {label: 'By Name Acending', value: 'userName'},
            {label: 'By Name Decending', value: '!userName'},
            {label: 'By country Acending', value: 'location'},
            {label: 'By country Decending', value: '!location'}
        ];

        return (
            <div className="p-grid">
                <div className="p-col-6" style={{textAlign: 'left'}}>
                    <Dropdown options={sortOptions} value={this.state.sortKey} placeholder="Sort By" onChange={this.onSortChange} />
                </div>
                <div className="p-col-6" style={{textAlign: 'right'}}>
                    <AutoComplete value={this.state.userFilter} onChange={(e)=> this.setState({userFilter: e.value })}></AutoComplete>



                </div>
                {/*
                
                    <DataViewLayoutOptions layout={this.props.layout} onChange={(e) => this.props.changeLayoutEventHandler(e.value)} />
                </div>
                */}
            </div>
        );
    }

    render() {
        const header = this.renderHeader();
        
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Profiles</h1>
                        <p>DataView displays data in grid or list layout with pagination, sorting and filtering features.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    {console.log("when creating dataview!!!!")}
                    <DataView value={this.props.profiles} layout={this.props.layout} header={header} 
                            itemTemplate={this.itemTemplate} paginatorPosition={'both'} paginator={false} rows={4} 
                            sortOrder={this.state.sortOrder} sortField={this.state.sortField} />
                    
                        <Dialog header="User's Review"        
                            visible={this.state.visible} maximizable ={true} style={{ width: '50vw' }} modal={true} onHide={() => this.setState({visible: false})}>
                            <ScrollPanel style={{ width: '100%', height: '200px' }}>    
                                 { this.usersReviews() }
                            </ScrollPanel>      
                        </Dialog>
                    
                   
                    
                       
                   
                    

            
                </div>

     
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        profiles: state['profiles'].profiles,
        layout: state['profiles'].layout,
        selectedCar: state['profiles'].selectedCar, 
        visible: state['profiles'].visible,
        sortKey: state['profiles'].sortKey,
        sortOrder: state['profiles'].sortOrder,
        current_reviews: state['profiles'].current_reviews
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProfilesEventHandler: () => {
            dispatch(ProfilesActions.fetchAllProfilesAction())
        },
        changeLayoutEventHandler: (layout) => {
            dispatch(ProfilesActions.changeLayoutAction(layout))
        },
        changeSortKeyEventHandler: (sortKey) => {
            dispatch(ProfilesActions.fetchAllProfilesAction(sortKey))
        },
        pickProfileEventHandler: (profile) => {
            dispatch(ProfilesActions.pickProfileAction(sortKey))
        },
        fetchUsersReviews: (userName) => {
            console.log("in fetch users reviews dispatch")
            dispatch(ProfilesActions.fetchUsersReviewsAction(userName))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);

