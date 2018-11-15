// Helper functions to dispatch actions, optionally with payloads
import types from './types';
export const actionCreators = {
    add: (item) => {
        return {type: types.ADD, payload: item}
    },
    remove: (index) => {
        return {type: types.REMOVE, payload: index}
    }
}