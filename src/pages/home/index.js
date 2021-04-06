/* 小组件 */
import { List, Recommended, Topic, Writer } from "./components";
/* CSS样式 */
import { HomeWrapper, HomeLeft, HomeRight } from "./style";

function Home() {
  return (
    <div>
      <HomeWrapper>
        <HomeLeft>
          {/* 背景图片 */}
          <div className="banner-img" ></div>
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

export default Home;
