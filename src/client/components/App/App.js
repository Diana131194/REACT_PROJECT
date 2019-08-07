import React from 'react';
import './App.scss';
import './App.css';
import '../OtherProfile/OtherProfile.scss'
import Gallery from '../Gallery';
import { connect } from 'react-redux';
import AppActions from './actions';
import GalleryActions from '../Gallery/actions';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Login from '../Login';
import Review from '../Review';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import Register from '../Register';
import OtherProfile from '../OtherProfile';
import SelfProperties from '../SelfProperties';
import { TabMenu } from 'primereact/tabmenu';
import {List} from 'immutable'
import picture from '../../fast-food.png';
import SelfProfile from '../SelfProfile';
import Restaurants from '../Restaurants';
import Profiles from '../Profiles';

const Header = {
  padding: "10px 20px",
  textAlign: "center",
  color: "black",
  fontSize: "45px"
}




class App extends React.Component {

constructor() {
  super();
  this.updateImgEventHandler = this.updateImgEventHandler.bind(this);
}

state = {
  imgs: List()
}

  componentDidUpdate(prevProps, prevState) {
    Object.entries(this.props).forEach(([key, val]) =>
      prevProps[key] !== val && console.log(`Prop '${key}' changed`)
    );
    Object.entries(this.state).forEach(([key, val]) =>
      prevState[key] !== val && console.log(`State '${key}' changed`)
    );
  }

  updateImgEventHandler(event){

        let fr = new FileReader();
        fr.onloadend = () => {
            let img = fr.result; 
            let images = [...(this.state.imgs), img]
            this.setState({
              imgs: new List(images)
            })
        };
        fr.readAsDataURL(event.target.files[0]);
    }

  render() {
   
    return (
      <div className="app-root">
        <BrowserRouter>  
        <div className="app-header">      
          <h2 style={Header}>Welcome to the Fast-Food Review Platform!</h2>
        
            <main>
              {this.props.children}
            </main>
            <div className="row">

              
            </div>
            <li><Link to="/">Home</Link></li>
            <Link to="/register">Register </Link>
            <Link to="/login">Login </Link>
            <Link to='/my_profile'>MyProfile </Link>
            <Link to="/restaurants">restaurants</Link>
            <Link to="/Profiles"> profiles</Link>
            {this.props.logged_in != '' ? <Link to='/' onClick={() =>this.props.updateLoginEventHandler('', '', '', new List()) }>Logout </Link> : null}
          </div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path='/my_profile' component={() => <SelfProfile userName={this.props.logged_in} 
                                                                          location={this.props.location_logged_in} 
                                                                          img={this.props.img_logged_in} 
                                                                          reviews={this.props.reviews_logged_in}
                                                       />} />
            <Route exact path="/restaurants" component={Restaurants} />
            <Route exact path="/profiles" component={Profiles} />
            
          </Switch>

           
           </BrowserRouter>
  
          
          

        </div>
            
        

    );
  }
}


const mapStateToProps = (state) => {
  console.log("from app map state ")
  console.log(state['app'].get('reviews_logged_in'))
  
  return {
      tag: state['app'].get('tag'),
      logged_in: state['app'].get('logged_in'),
      location_logged_in: state['app'].get('location_logged_in'),
      img_logged_in: state['app'].get('img_logged_in'),
      reviews_logged_in: state['app'].get('reviews_logged_in'),

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadImagesEventHandler: (tag) => {
      dispatch(GalleryActions.loadImagesAction(tag))
    },
    updateLoginEventHandler: (name, location, img, reviews) =>{
      dispatch(AppActions.updateLoginAction(name, location, img, reviews))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
