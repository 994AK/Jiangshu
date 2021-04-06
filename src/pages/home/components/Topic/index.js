/* eslint-disable jsx-a11y/alt-text */
import { TopicWrapper, TopicItem } from "../../style";
import { connect } from "react-redux";
function Topic(props) {
  const { list } = props;
  return (
    <TopicWrapper>
      {list.map((item) => (
        <TopicItem key={item.get("id")}>
          <img className="topic-pic" src={item.get("imgUrl")} alt="" />
          {item.get("title")}
        </TopicItem>
      ))}
    </TopicWrapper>
  );
}

const mapState = (state) => ({
  /* reducer数据 */
  list: state.getIn(["home", "topicList"]),
});

export default connect(mapState, null)(Topic);
