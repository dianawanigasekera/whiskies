import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';
import {FETCH_POSTS, fetchPostsFailure, fetchPostsSuccess} from "./postsAction";


const postUrl = 'https://jsonplaceholder.typicode.com/posts';

export function fetchPostsEpic(action$) {
    return action$
        .ofType(FETCH_POSTS)
        .switchMap(() => {
            return ajax
                .getJSON(postUrl)
                .map(data => data)
                .map(posts => posts.map(post => ({
                    id: post.id,
                    title:post.title,
                    body: post.body
                })))


        })
        .map(posts => fetchPostsSuccess(posts))
        .catch(error=> Observable.of(fetchPostsFailure(error.message)))
}
export const rootEpic = combineEpics(fetchPostsEpic);

