import * as actionType from "../action/actionType";
import { fromJS } from "immutable";

// immutable对象
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    spin:false,
    list:[],
    page:1, //页数
    totalPage:1
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state  = defaultState, active) => {
    switch (active.type) {
        case actionType.SEARCH_FOCUS:
            // immutable对象set方法,会结合之前immutable对象的值
            // 和设置前的值,返回一个全新的对象
            return state.set("focused",true)
        case actionType.SEARCH_BLUR:
            return state.set("focused",false)
        case actionType.CHANGE_LIST:
            return state.set("list",active.data).set("totalPage",active.totalPage);
        case actionType.MOUSE_ENTER:
            return state.set("mouseIn",true)
        case actionType.MOUSE_LEAVE:
            return state.set("mouseIn",false)
        case actionType.CHANGE_PAGE:
            return state.set("page",active.page)
        default:
            return state;
    }
};
