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
import Restaurant from '../Restaurant';


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
          
          <Dropdown
            value={this.props.tag}
            onChange={this.props.updateTagEventHandler}
            options={this.props.tags}
            placeholder="search..."
            editable={true}
          />
          <Button
            label="Search"
            className="p-button-raised p-button-rounded"
            onClick={() => this.props.loadImagesEventHandler(this.props.tag)}
          />
            <main>
              {this.props.children}
            </main>
            <div className="row">

              
            </div>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to='/my_profile'>My Profile</Link>
          </div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path='/my_profile' component={() => <SelfProfile userName={this.props.logged_in} 
                                                                          location={this.props.location_logged_in} 
                                                                          img={this.props.img_logged_in} 
                                                                          reviews={this.props.reviews_logged_in}
                                                       />} />
          </Switch>

           
           </BrowserRouter>
  
          
          

        </div>
            
        

    );
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  
  return {
      tag: state['app'].get('tag'),
      tags: state['app'].get('tags').toArray(),
      logged_in: state['app'].get('logged_in'),
      location_logged_in: state['app'].get('location_logged_in'),
      img_logged_in: state['app'].get('img_logged_in'),
      reviews_logged_in: state['app'].get('reviews_logged_in'),

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      loadTagsEventHandler: () => {
          dispatch(AppActions.loadTagsAction());
      },
    updateTagEventHandler: (e) => {
      dispatch(AppActions.updateTagAction(e.value));
    },
    loadImagesEventHandler: (tag) => {
      dispatch(GalleryActions.loadImagesAction(tag))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
