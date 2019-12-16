const initState = {
    sports: [
        {id: '1', title: 'Knicks at Bulls', content: 'blah blah blah'},
        {id: '2', title: 'Redskins at Giants', content: 'blah blah blah'},
        {id: '3', title: 'Rays at Yankees', content: 'blah blah blah'}
    ]
}

const sportReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_SPORT':
            console.log('created sport', action.sport);
            return state;
        case 'CREATE_SPORT_ERROR':
            console.log('create sport error', action.err);
            return state;
        default:
            return state;
    }
}

export default sportReducer;