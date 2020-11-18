import {FETCH_POSTS, FETCH_USER} from "../common/env";
import jsonPlaceholder from "../service/jsonPlaceholder";
import _ from "lodash";

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({type: FETCH_POSTS, payload: response.data});
}

export const fetchUser = (id) => (dispatch) => {
    _fetchUser(id, dispatch);
}
// fetchUser fonksiyonunu lodash ile baska bir mantikla yazdim
// cunku ilk versiyonda her post icin bu method istek atiyor yani bir kullanicinin birden fazla postu olabilir ve hepsini bulmak icin tek tek yeni istek atiyor
// bu yuzden ben memoize ile atilan istekleri cache'liyorum ve ayni id'li kullanicilar icin yeni istek attirmiyorum
//  her id icin bir istek
// iste memoize'in amaci bu :)
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: FETCH_USER, payload: response.data});
});