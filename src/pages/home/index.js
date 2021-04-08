import {useEffect} from "react";
import {connect} from "react-redux";
import {actionCreat} from "./store";
import {List, Recommended, Topic, Writer} from "./components"; //组件化
import {HomeWrapper, HomeLeft, HomeRight, BackTop} from "./style"; //CSS

function Home(props) {
    const {changeHomeData, showScroll, changeScrollTopShow} = props;


    useEffect(() => {
        changeHomeData(); //后台请求
        bindEvents(); //添加scrollToP_event
    },[showScroll]);

    function handleScrollTop() {
        let erval = setInterval(() => {
            let scrollTop = document.documentElement.scrollTop
            window.scrollTo(0, scrollTop - 100);
            if (scrollTop === 0) {
                clearInterval(erval)
            }
        }, 1000 / 60)
    }

    function bindEvents() {
        window.addEventListener("scroll", changeScrollTopShow)
    }

    function RemoveEvents() {
        window.removeEventListener("scroll", changeScrollTopShow)
    }

    return (
        <div>
            <HomeWrapper>
                <HomeLeft>
                    {/* 背景图片 */}
                    <div className="banner-img"></div>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommended/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>

            {showScroll ? <BackTop onClick={handleScrollTop}>顶部</BackTop> : null}

        </div>
    );
}

const mapState = (state) => ({
    showScroll: state.getIn(["home", "showScroll"])
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreat.getHomeInfo());
    },
    changeScrollTopShow() {
        (document.documentElement.scrollTop > 100)
            ? dispatch(actionCreat.toggleTopShow(true))
            : dispatch(actionCreat.toggleTopShow(false))
    }
});

export default connect(mapState, mapDispatch)(Home);
