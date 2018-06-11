import {CREATE} from './action-types'

export const start = (matrix) => ({
    type: CREATE,
    data: matrix,
});