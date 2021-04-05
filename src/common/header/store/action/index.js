// Header头部action
import * as actionType from "./actionType";
import {fromJS} from "immutable"
import axios from "axios"

const changeList = (data) => ({
    type:actionType.CHANGE_LIST,
    data:fromJS(data),//普通数组转移成符合数组的格式
    totalPage:Math.ceil(data.length / 10) //显示多少条
})

export const getInputSearchFocus = () => ({
  //返回action
  type: actionType.SEARCH_FOCUS,
});

export const getInputSearchBlur = () => ({
    //返回action
    type:actionType.SEARCH_BLUR,
  });

export const MouseEnter =() => ({
    type:actionType.MOUSE_ENTER,
})

export const MouseLeave = () => ({
    type:actionType.MOUSE_LEAVE,
})

export const changePage = (page) => ({
    type:actionType.CHANGE_PAGE,
    page
})

export const getList = () => {
    return (dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            const data = res.data;
            dispatch(changeList(data.data))
        }).catch((err)=>{
            console.log("error"+err)
        })
    }
}