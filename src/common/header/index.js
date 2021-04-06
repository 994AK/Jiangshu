import React, {useRef} from "react"
import {CSSTransition} from "react-transition-group"; //动画库
import {connect} from "react-redux";
import {
    Addition,
    Button,
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchInfo,
    SearchInfoItem,
    SearchInfoList,
    SearchInfoSan,
    SearchInfoSwitch,
    SearchInfoTitle,
    SearchWrapper,
} from "./style";
//action type
import {action} from "./store";


//state映射到组件中
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        mouseIn: state.getIn(["header", 'mouseIn']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']), //当前页数
        totalPage: state.getIn(['header', 'totalPage']),//总页数
    };
};

// 映射action dispacth
const mapDispathToProps = (dispatch) => {
    return {
        //对焦触发
        handleInputFocus(list) {
            //如果当前size为0 就需要请求
            (list.size === 0 ) && dispatch(action.getList());
            dispatch(action.getInputSearchFocus());
        },
        handleInputBlur() {
            dispatch(action.getInputSearchBlur());
        },
        handleMouseEnter() {
            dispatch(action.MouseEnter())
        },//鼠标移入热门搜索框
        handleMouseLeave() {
            dispatch(action.MouseLeave())
        }, //鼠标移出热门搜索框
        handleChangePage(page, totalPage, spinI) {
            //让icon spin图标转一转
            let originAngle = spinI.style.transform.replace(/[^0-9]/ig, "") * 1;
            spinI.style.transform = `rotate(${originAngle + 360}deg)`;
            // 当前页面 < 总页数
            page < totalPage ? dispatch(action.changePage(page + 1)) : dispatch(action.changePage(1))
        },//换一批
    };
};

function GetListArea(props) {
    //获取到i标签的DOM
    const spinI = useRef();

    const {
        focused, list, page, totalPage, mouseIn,  //值
        handleMouseEnter, handleMouseLeave, handleChangePage //事件
    } = props

    //换一批的逻辑
    const newList = list.toJS();//immutable加密的数组，转化为普通的数组
    const pageList = [];
    for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
            <SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>
        )
    }

    if (mouseIn || focused) {
        return (
            <SearchInfo
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <SearchInfoSan></SearchInfoSan>
                {/*热门搜索*/}
                <SearchInfoTitle>
                    热门搜索
                    {/*换一批*/}
                    <SearchInfoSwitch
                        onClick={() => handleChangePage(page, totalPage, spinI.current)}
                    >

                        <i ref={spinI} className="iconfont spin">&#xe606;</i>
                        <span className="huang">换一批</span>

                    </SearchInfoSwitch>
                </SearchInfoTitle>
                {/* 小标题 */}
                <SearchInfoList>
                    {pageList}
                </SearchInfoList>
            </SearchInfo>)
    } else {
        return null;
    }
}

const Header = (props) => {

    const {
        focused,
        list,
        handleInputFocus,
        handleInputBlur,
    } = props

    return (

        <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登陆</NavItem>
                <NavItem className="right">
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    {/* 动画库 */}
                    <CSSTransition in={focused} timeout={2000} classNames="my-node">
                        <NavSearch
                            className={focused ? "focused" : ""}
                            onFocus={()=>handleInputFocus(list)}
                            onBlur={handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <span className={focused ? "focused iconfont zoom" : "iconfont zoom"}>&#xe6b7;</span>
                    {/*搜索内容显示*/}
                    {
                        GetListArea(props)
                    }

                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="writting">
                    <span className="iconfont">&#xe62e;</span>
                    写文章
                </Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>)
}


export default connect(mapStateToProps, mapDispathToProps)(Header);
