const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let inizialState = {
        postData: [
            { id: 1, message: 'Hi kek', likeCount: '14' },
            { id: 2, message: 'Its my first post', likeCount: '5' },
        ],
        newPostText: 'AG_inc'
};

const profileReduser = (state = inizialState, action) => {

    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 14,
            };
            debugger;
            let stateCopy = {...state};
            stateCopy.postData = {...state.postData};
            debugger;
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy ={...state};
            
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    
    }
}

export default profileReduser;
