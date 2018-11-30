import {getArticlesRequest} from '../api/api.js';

//creando los type
export const GET_ARTICLES_ATTEMPT = 'GET_ARTICLES_ATTEMPT'
export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS'
export const GET_ARTICLES_FAILURE = 'GET_ARTICLES_FAILURE'
export const SET_ARTICLES = 'SET_ARTICLES'


//creando acciones (action creator) 
const getArticlesAttempt = () => ({ type: GET_ARTICLES_ATTEMPT })
const getArticlesSuccess = () => ({ type: GET_ARTICLES_SUCCESS })
const getArticlesFailure = (failMessage) => ({ type: GET_ARTICLES_FAILURE, failMessage })

const setArticles = (articles) => ({ type: SET_ARTICLES, articles })

//llamada asyncrona(thunk)
const getArticles = ()=> (dispatch) => {
    
    dispatch(getArticlesAttempt())
    return getArticlesRequest().then(({response,error})=>{
        if (response) {
            dispatch(getArticlesSuccess())
            dispatch(setArticles(response.data))
            return Promise.resolve(response.data)
          } else {
            dispatch(getArticlesFailure(error))
            return Promise.reject(error)
          }
    })
}


export const actions ={
    getArticles,
    getArticlesAttempt,
    getArticlesSuccess,
    getArticlesFailure
}


const ARTICLES_ACTION_HANDLERS ={
    [SET_ARTICLES]: (state,action)=>({ ...state, articles: action.articles}) 
}

export const initialState ={
    articles:[]
}

export default function articlesReducer(state = initialState, action) {
    const handler = ARTICLES_ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
  }
