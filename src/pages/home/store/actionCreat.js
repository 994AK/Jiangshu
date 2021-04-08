import axios from "axios";
import * as actionType from "./actionType";
import { fromJS } from "immutable";

const changeHomeData = (result) => ({
  type: actionType.CHANGE_HOME_DATA,
  RecommendList: result.RecommendList, //推荐栏
  articleList: result.articleList, //文章栏
  topicList: result.topicList, //热点栏
});

const addHomeList = (list,nextPage) => ({
  type: actionType.ADD_HOME_LIST,
  list:fromJS(list),
  nextPage
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get("/api/home.json").then((res) => {
      const result = res.data.data;
      //请求后端的数据
      dispatch(changeHomeData(result));
    });
  };
};

export const getMoreLink = (page) => {
  return (dispatch) => {
    axios.get("/api/homeList.json?page="+page).then((res) => {
      const result = res.data.data;
      dispatch(addHomeList(result,page+1));
    });
  };
};

export const toggleTopShow = (show) => ({
  type: actionType.TOGGLE_SCROLL,
  show
})
