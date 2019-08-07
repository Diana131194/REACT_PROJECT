import { SelfPropertiesActionsConstants } from './constants'
import initialState from '../../initialState'

const SelfPropertiesReducer = (state = initialState.selfProperties, action) => {
    switch(action.type) {

        case SelfPropertiesActionsConstants.UPDATE_NEW_NAME_SUCCESS:
            console.log("new name reducer")
            console.log(action.payload.newName)
            return {
                ...state,
                userName: action.payload.newName,
                editedName: ''
            }
        case SelfPropertiesActionsConstants.UPDATE_NEW_LOCATION_SUCCESS:
            return{
                ...state,
                location: action.payload.newLocation,
                editedLoaction: ''
            }

        default :
            return state
    }
}

export default SelfPropertiesReducer