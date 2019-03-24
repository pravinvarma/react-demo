export default function courseReducer(state=[], action) {
    switch (action.type) {
        case 'CREATE_COURSE':
            return [...state, { ...action.course }] //in action we have type, course
    
        default:
            return state;
    }
}