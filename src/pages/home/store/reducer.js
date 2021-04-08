import { fromJS } from "immutable";
import * as actionType from "./actionType";
const defaultState = fromJS({
  QRCokeIn: false, //二维码显示
  topicList: [], //热点
  articleList: [], // 文章
  RecommendList: [], // 推荐栏
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, active) => {
  console.log(active.list)
  switch (active.type) {
    case actionType.QC_ENTER:
      return state.set("QRCokeIn", true);
    case actionType.QC_LEAVE:
      return state.set("QRCokeIn", false);
    case actionType.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(active.topicList),
        articleList: fromJS(active.articleList),
        RecommendList: fromJS(active.RecommendList),
      });
    case actionType.ADD_HOME_LIST:
      return state.set("articleList", state.get("articleList").concat(active.list));
    
  

    default:
      return state;
  }
};
