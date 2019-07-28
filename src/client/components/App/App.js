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
    const reviews = [{title: "McDonalds", bq: 1, sk: 1, clean: 3, dtq: 4, ds: 0, fq: 5 }, {title: "BBB", bq: 2, sk: 3, clean: 4, dtq: 5, ds: 1, fq: 3}]
    return (
      <div className="app-root">
        <div className="app-header">
          <BrowserRouter>
        
          <Link to="/">Home</Link>
          <br/>
          <Link to="/login">Login</Link>
          
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

              <Switch>
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
            </BrowserRouter>
          </div>
  
          <Register />

        </div>
            
        

    );
  }
}


const mapStateToProps = (state) => {
  return {
      tag: state['app'].get('tag'),
      tags: state['app'].get('tags').toArray()
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
