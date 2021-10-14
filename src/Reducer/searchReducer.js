const initState = {
    searchWord : 'indian'
}


const searchReducer = (state = initState.searchWord, action) => {
    switch(action.type) {
       
        case 'SEARCH_WORD' :
            return state + action.payload;

        default :
          return state;    
    } 
}

export default searchReducer