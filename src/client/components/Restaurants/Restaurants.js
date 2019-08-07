
import React, {Component} from 'react';
import {Dialog} from 'primereact/components/dialog/Dialog';
import {Panel} from 'primereact/panel';
//import {CarService} from '../service/CarService';
import {DataView, DataViewLayoutOptions} from "primereact/dataview";
import {Button} from "primereact/button";
import {Dropdown} from "primereact/dropdown";
import { connect } from 'react-redux';
import RestaurantsActions from './actions'
import Restaurant from "../Restaurant"
import { ScrollPanel } from 'primereact/scrollpanel';
import { AutoComplete } from 'primereact/autocomplete';
//import {Restaurant} from '../../../server/model/restaurant'

class Restaurants extends Component {

    constructor() {
        super();
        
        this.state = {
           // restaurants: [],
           // layout: 'list',
            selectedCar: null, 
            visible: false,
            sortKey: null,
            sortOrder: null,
            userFilter: ''
        }
        
        
        //this.carservice = new CarService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
    }

    componentDidMount() {
        console.log("im in restaurants mount")
            this.props.fetchRestaurantsEventHandler();
          
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

    renderListItem(restaurant) {
        console.log("render List: ")
        console.log(restaurant);
        return (
            
            <div className="p-col-12" style={{padding: '2em', borderBottom: '1px solid #d9d9d9'}}>
                <div className="p-col-12 p-md-3">
                    {//               <img src={'showcase/resources/demo/images/car/${restaurant.brand}.png'} alt={restaurant.name}/>       
                    }
               </div>
                <h2>{restaurant.name + ' - ' + restaurant.city}</h2>

                <div className="p-col-12 p-md-1 search-icon" style={{marginTop:'40px'}}>
                    
                    <Button icon="pi pi-search" onClick={(e) => {
                        this.setState({ selectedCar: restaurant, visible: true});
                        this.props.fetchRestaurantReviews(restaurant.name, restaurant.city)
                                   }
                }></Button>
                    
                    </div>
            </div>
                
        );
    }

    renderGridItem(restaurant) {
        console.log("test")
        return (
            <div style={{ padding: '.5em' }} className="p-col-12 p-md-3">
                
                <Panel header={restaurant.name} style={{ textAlign: 'center' }}>
                 { //  <img src={'showcase/resources/demo/images/car/${car.brand}.png'} alt={restaurant.name} />
                 }
                    <div className="restaurant-detail">{restaurant.name}</div>
                    <hr className="ui-widget-content" style={{ borderTop: 0 }} />
                    {
                    //<Button icon="pi pi-search" onClick={(e) => this.setState({ selectedCar: restaurant, visible: true })}></Button>
                    }
                </Panel>
                
                
            </div>
        );
    }

    itemTemplate(restaurant, layout) {
        if (!restaurant) {
            console.log("shouldnt be here")
            console.log(layout)
            console.log(restaurant)
            return null;
        }
        if (String(restaurant.name).toLowerCase().startsWith(this.state.userFilter.toLowerCase()) || String(restaurant.city).toLowerCase().startsWith(this.state.userFilter.toLowerCase())) {
            if (layout === 'list')
                return this.renderListItem(restaurant);
            else if (layout === 'grid')
                return this.renderGridItem(restaurant);
        } else { return null }
    }

    id = 0;

    renderCarDialogContent() {
        
        const restaurant_reviews = this.props.current_reviews? (this.props.current_reviews.map(review => {
            this.id++
            return (
                <div>
                    <h4>{review.title}</h4>
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
                            <Gallery imgs={review.imgs} 
                                     id={this.id}/>
                        </React.Fragment>
                        : null
                    }
                </div>
            )
        })) : []
        console.log("another test")
        if (this.state.selectedCar) {
            return restaurant_reviews
        }
        else {
            return null;
        }
    }

    renderHeader() {
        const sortOptions = [
            {label: 'By Name Acending', value: 'name'},
            {label: 'By Name Decending', value: '!name'},
            {label: 'By city Acending', value: 'name'},
            {label: 'By city Decending', value: 'name'}
        ];

        return (
            <div className="p-grid">
                <div className="p-col-6" style={{textAlign: 'left'}}>
                    <Dropdown options={sortOptions} value={this.state.sortKey} placeholder="Sort By" onChange={this.onSortChange} />
                </div>
                <div className="p-col-6" style={{ textAlign: 'right' }}>
                    <AutoComplete value={this.state.userFilter} onChange={(e) => this.setState({ userFilter: e.value })}></AutoComplete>

                </div>
            </div>
        );
    }

    render() {
        const header = this.renderHeader();
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Restaurants</h1>
                        <p>DataView displays data in grid or list layout with pagination, sorting and filtering features.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    {console.log("when creating dataview")}
                    {console.log(this.props.restaurants)}
                    <DataView value={this.props.restaurants} layout={this.props.layout} header={header} 
                            itemTemplate={this.itemTemplate} paginatorPosition={'both'} paginator={false} rows={4} 
                            sortOrder={this.state.sortOrder} sortField={this.state.sortField} />
                    
                    <Dialog header="Restuarant"        
                         visible={this.state.visible} width="225px" modal={true} onHide={() => this.setState({visible: false})}>
                        <ScrollPanel style={{ width: '100%', height: '200px' }}> 
                          {this.renderCarDialogContent()}    
                        </ScrollPanel> 
                    </Dialog> 
                    

            
                </div>

     
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    console.log(state.restaurants)
    return {
        restaurants: state['restaurants'].restaurants,
        layout: state['restaurants'].layout,
        selectedCar: state['restaurants'].selectedCar, 
        visible: state['restaurants'].visible,
        sortKey: state['restaurants'].sortKey,
        sortOrder: state['restaurants'].sortOrder,
        current_reviews: state['restaurants'].current_reviews
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRestaurantsEventHandler: () => {
            dispatch(RestaurantsActions.fetchAllRestaurantsAction())
        },
        changeLayoutEventHandler: (layout) => {
            dispatch(RestaurantsActions.changeLayoutAction(layout))
        },
        changeSortKeyEventHandler: (sortKey) => {
            dispatch(RestaurantsActions.fetchAllRestaurantsAction(sortKey))
        },
        pickRestaurantEventHandler: (restaurant) => {
            dispatch(RestaurantsActions.pickRestaurantAction(sortKey))
        },
        fetchRestaurantReviews: (name, location) => {
            dispatch(RestaurantsActions.fetchRestaurantReviewsAction(name, location))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);

