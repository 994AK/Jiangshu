import { useEffect } from "react";
import { connect } from "react-redux";
import { actionCreat } from "./store";
import { List, Recommended, Topic, Writer } from "./components"; //组件化
import { HomeWrapper, HomeLeft, HomeRight } from "./style"; //CSS

function Home(props) {
  useEffect(() => {
    props.changeHomeData(); //后台请求
  }, [props]);

  return (
    <div>
      <HomeWrapper>
        <HomeLeft>
          {/* 背景图片 */}
          <div className="banner-img"></div>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommended />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    </div>
  );
}

const mapDispatch = (dispatch) => ({
  changeHomeData(){
    const action = actionCreat.getHomeInfo();    
    dispatch(action);
  },
});

export default connect(null, mapDispatch)(Home);
