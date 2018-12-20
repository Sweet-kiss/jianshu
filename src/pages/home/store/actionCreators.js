import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeDate = (result) => ({
	type: constants.CHANGE_HOME_DATE,
	topicList: result.topicList,
  recommendList: result.recommendList,
  articleList: result.articleList
})

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARICLE_LIST,
  list: fromJS(list),
  nextPage
})

export const getHomeInfo = ()=> {
  return (dispatch)	=> {
      axios.get('/api/home.json').then((res)=>{
        const result = res.data.data;
        dispatch(changeHomeDate(result));
      })  	
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
      axios.get('/api/homeList.json?'+page).then((res)=>{
        const result = res.data.data;
        dispatch(addHomeList(result, page+1));
      }) 
  }
}

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show

})