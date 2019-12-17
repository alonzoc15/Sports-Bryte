const initState = {
    bars: [
        {id: '1', title: 'Twin Peaks', content: 'blah blah blah'},
        {id: '2', title: 'Moondogs', content: 'blah blah blah'},
        {id: '3', title: 'Bench Warmers Sports Grill', content: 'blah blah blah'},
        {id: '3', title: 'Taco Mac', content: 'blah blah blah'}
    ]
}

const barReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_BAR':
            console.log('created bar', action.bar);
            return state;
        case 'CREATE_BAR_ERROR':
            console.log('create bar error', action.err);
            return state;
        default:
            return state;
    }
}

export default barReducer;