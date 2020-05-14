const ADD_SETTINGS = 'ADD-SETTINGS';
const UPDATE_NEW_SETTINGS = 'UPDATE-NEW-SETTINGS';
let initialState = {
    newSettings: [
        {settings: 'Внешний вид'},
        {settings: 'Поисковая система'}
    ],
    newSettingsText: 'new settings...'
}
const settingsReducer = (state=initialState,action) => {
    switch(action.type) {
        case ADD_SETTINGS: {
            let newSettingsObj = {
                settings: state.newSettingsText
            }
            let stateCopy = {...state};
            stateCopy.newSettings = [...state.newSettings];
            stateCopy.newSettings.push(newSettingsObj);
            stateCopy.newSettingsText = '';
            return stateCopy;
        }
        case UPDATE_NEW_SETTINGS: {
            let stateCopy = {...state};
            stateCopy.newSettingsText = action.settingsText ;
            return stateCopy;
        }
        default: {
            return state;
        }
    }
}
export let addSettingsCreator = () => {
    return {
        type: 'ADD-SETTINGS'
    }
}
export let updateNewSettingsTextCreator = (settingsText) => {
    return {
        type: 'UPDATE-NEW-SETTINGS',
        settingsText:  settingsText
    }
}
export default settingsReducer;