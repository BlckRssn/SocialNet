const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'

let inizalState = {
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
};

const dialogsReduser = (state = inizalState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = '';
            state.messagesData.push({ id: 7, message: body });
            return state;
        default:
            return state;
    }

}
export default dialogsReduser;