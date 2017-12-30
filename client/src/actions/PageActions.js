import { SET_CATEGORY } from '../constants/Page';

export function setCategory(category) {
    return {
        type: SET_CATEGORY,
        payload: category
    }
}