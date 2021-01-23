import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";
import sidebarReduser from "./sidebar-reduser";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'


let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Hi kek', likeCount: '14' },
                { id: 2, message: 'Its my first post', likeCount: '5' },
            ],
            newPostText: 'AG_inc'

        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Service BMW' },
                { id: 2, name: 'Service Nissan' },
                { id: 3, name: 'Danya' },
                { id: 4, name: 'Ilya' },
                { id: 5, name: 'Lamba' },
                { id: 6, name: 'Kekes' },
            ],
            messagesData: [
                { id: 1, message: 'Check' },
                { id: 2, message: 'All good' },
                { id: 3, message: 'Rofl' },
                { id: 4, message: 'LOL' },
                { id: 5, message: 'Lamba' },
                { id: 6, message: 'Ferra' },
            ],
            newMessageBody: ''

        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('state is change')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 14,
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },


    dispatch(action) {
        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReduser(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }

}


export const addPostActionCreater = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreater = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}


export const sendMessageCreater = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreater = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}




export default store;
window.store = store;
