import { call, put, takeLatest, all } from 'redux-saga/effects';
import { Posts } from '../action/constants';
import {
  fetchPostsSuccess,
  fetchPostsError,
  fetchSelectedById,
} from '../action/actions';
import { PostsAPI } from './API';

const postsApi = new PostsAPI();

function* getPosts(action) {
  yield takeLatest(Posts.fetchPosts, getPostsFromAPI);
}

function* getPostsFromAPI(action) {
  try {
    // call the api
    const data = yield call(postsApi.fetchPosts, { response: action.payload });

    // call the success action with data
    yield put(fetchPostsSuccess(data.data));
  } catch (e) {
    // call the error action with data
    yield put(fetchPostsError(e));
  }
}

export default function* rootSaga() {
  yield all([getPosts()]);
}
