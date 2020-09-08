export const movieResults = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_MOVIES':
            return action.payload;

        default:
            return state;
    }
};

export const movieNominated = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_NOMINATIONS':
            return action.payload;

        default:
            return state;
    }
};