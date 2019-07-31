import { RegisterActionsConstants } from './constants'
import initialState from '../../initialState'
import {json} from './cities'
import { List } from 'immutable'

const RegisterReducer = (state = initialState.register, action) =>{
    console.log("action type: " + action.type)
    switch (action.type){

        case RegisterActionsConstants.LOAD_CITIES:
           
            let cities = json.map((city) => {
                return city.english_name
            })
            return {
                ...state,
                locations: new List(cities)
            }
        case RegisterActionsConstants.SUGGEST_LOCATIONS:
            let results = state.locations.filter((location) => {
                return location.toLowerCase().startsWith(action.payload.event.query.toLowerCase());
            });
            console.log("the suggestions are: " + results)
            return {
                ...state,
                locationSuggestions: results.toArray()
            }
        
        case RegisterActionsConstants.UPDATE_PASSWORD:
            console.log("password!!!!")
            return {
                ...state,
                password: action.payload.password
            }
    
        case RegisterActionsConstants.UPDATE_LOCATION:
            let results2 = (state.locations).filter((loc) => {
                let str1 = loc.toLowerCase();
                let str2 = action.payload.location.toLowerCase();
                return str1.startsWith(str2);
            })

            return {
                ...state,
                locationSuggestions: results2.toArray(),
                location: action.payload.location
            }
        case RegisterActionsConstants.UPDATE_IMG:
            let fr = new FileReader();
            //let newState = {}
            fr.onloadend = () => {
                let img = fr.result;
                return {
                    ...state,
                    img: img
                }         
            };
            fr.readAsDataURL(action.payload.event.target.files[0]);
            //return newState

        case RegisterActionsConstants.UPDATE_NAME_SUCCESS:
           if (action.payload.res === true){
               return {
                   ...state,
                   userName: action.payload.userName,
                   taken: true
               }
            }
           else {
             return {
                 ...state,
                 userName: action.payload.userName,
                 taken: false
             }
          }

        case RegisterActionsConstants.CLICK_SUCCESS:
           return {
               ...state,
               userName: '',
               password: '',
               location: ''
           }
        
        default: //otherwise state is lost!
            return state;
    }
}

export default RegisterReducer