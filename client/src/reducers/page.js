import lessons from '../lessons';
import { SET_CATEGORY } from '../constants/Page';

const initialState = {
    category: 'reactjs',
    articles: lessons
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORY:
            return {...state, category: action.payload};

        default:
            return state;
    }
}