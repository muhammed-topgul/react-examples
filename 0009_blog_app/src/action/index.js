import {FETCH_POSTS, FETCH_USER} from "../common/env";
import jsonPlaceholder from "../service/jsonPlaceholder";
import _ from "lodash";

// OVERFETCH ICIN IKI FARKLI COZUM

// 1- COZUM
export const fetchPostsAndUsers = () => async (dispatch, getState) => {

    await dispatch(fetchPosts());

    // 1. yol
    // const uniqueUserIds = _.uniq(_.map(getState().posts, 'userId'));
    //
    // // fetchUser fonksiyonunu bu methodun icinde cagirmis oldum
    // // bu yuzden UserHeader componentinde cagirmama gerek kalmadi
    // uniqueUserIds.forEach(id => dispatch(fetchUser(id)));

    // 2. yol
    _.chain(getState().posts) // getState redux' ta ki tum verileri alir (redux' ta ki butun postlar)
        .map('userId') // (donen postlari userId post seklinde map' le)
        .uniq()// (benzersiz yap)
        .forEach(uniqueId => dispatch(fetchUser(uniqueId))) // (benzersiz id' ler uzerinden gec ve her biri icin user bul)
        .value() // (bunlarin calismasi icin gerekli trigger)
}

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({type: FETCH_POSTS, payload: response.data});
}

export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: FETCH_USER, payload: response.data});
};

// 2- COZUM
// export const fetchUser = (id) => (dispatch) => {
//     _fetchUser(id, dispatch);
// }
// // fetchUser fonksiyonunu lodash ile baska bir mantikla yazdim
// // cunku ilk versiyonda her post icin bu method istek atiyor yani bir kullanicinin birden fazla postu olabilir ve hepsini bulmak icin tek tek yeni istek atiyor
// // bu yuzden ben memoize ile atilan istekleri cache'liyorum ve ayni id'li kullanicilar icin yeni istek attirmiyorum
// //  her id icin bir istek
// // iste memoize'in amaci bu :)
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({type: FETCH_USER, payload: response.data});
// });