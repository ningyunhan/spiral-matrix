import {CREATE} from './action-types'

export function create(state=[], action) {
    switch(action.type) {
        case CREATE:
            return action.data;
        default:
            return state;
    }
}