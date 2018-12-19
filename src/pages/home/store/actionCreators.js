import axios from 'axios';
import * as constants from './constants';

const changeHomeDate = (result) => ({
	type: constants.CHANGE_HOME_DATE,
	topicList: result.topicList,
  recommendList: result.recommendList,
  articleList: result.articleList
})

export const getHomeInfo = ()=> {
  return (dispatch)	=> {
      axios.get('/api/home.json').then((res)=>{
        const result = res.data.data;
        dispatch(changeHomeDate(result));
      })  	
  }
}