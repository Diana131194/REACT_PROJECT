import { SelfPropertiesActionsConstants } from './constants'
import initialState from '../../initialState'

const SelfPropertiesReducer = (state = initialState.selfProperties, action) => {
    switch(action.type) {

        case SelfPropertiesActionsConstants.UPDATE_EDITED_NAME:
            return {
                ...state,
                editedName: action.userName
            }
        case SelfPropertiesActionsConstants.UPDATE_EDITED_LOCATION:
            return {
                ...state,
                editedLoaction: action.location
            }
        case SelfPropertiesActionsConstants.UPDATE_NAME_SUCCESS:
            let temp = state.editedName
            return {
                ...state,
                userName: tepm,
                editedName: ''
            }
        case SelfPropertiesActionsConstants.UPDATE_LOCATION_SUCCESS:
            let temp2 = state.editedLoaction
            return{
                ...state,
                location: temp2,
                editedLoaction: ''
            }

        default :
            return state
    }
}

export default SelfPropertiesReducer