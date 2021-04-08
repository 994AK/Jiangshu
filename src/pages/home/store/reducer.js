import {fromJS} from "immutable";
import * as actionType from "./actionType";

const defaultState = fromJS({
    QRCokeIn: false, //二维码显示
    topicList: [], //热点
    articleList: [], // 文章
    RecommendList: [], // 推荐栏
    articlePage: 1, //页数
    showScroll: false,
});

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        RecommendList: fromJS(action.RecommendList),
    });
}

const addArticleList = (state, action) => {
    return state.merge({
        "articleList": state.get("articleList").concat(action.list),
        "articlePage": action.nextPage,
    })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.QC_ENTER:
            return state.set("QRCokeIn", true);
        case actionType.QC_LEAVE:
            return state.set("QRCokeIn", false);
        case actionType.CHANGE_HOME_DATA:
            return changeHomeData(state, action)
        case actionType.ADD_HOME_LIST:
            return addArticleList(state, action)
        case actionType.TOGGLE_SCROLL:
            return state.set("showScroll", action.show)
        default:
            return state;
    }
};
