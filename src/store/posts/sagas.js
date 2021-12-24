import {takeEvery, put, call} from 'redux-saga/effects'
import { FETCH_POST, REQUEST_POST } from '../types'
import {hideLoader, showLoader} from "../app/actions";

export function* sagaWatcher(){
    yield takeEvery(REQUEST_POST, sagaWorker)
}

function* sagaWorker(){
    try{
    yield put(showLoader())
    const payload = yield call(fetchPosts)
    yield put({type: FETCH_POST, payload})
    yield put(hideLoader())
 
    } catch(error){
        console.log(error)
    }
}

async function fetchPosts() {
    await new Promise((resolve)=> {
        setTimeout(()=>{
            resolve()
        }, 2000)
    })
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    const json = await response.json()
    return json
}