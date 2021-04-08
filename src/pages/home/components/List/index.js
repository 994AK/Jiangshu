/* eslint-disable jsx-a11y/alt-text */
import { ListItem, ListInfo, LoadMore } from "../../style";
import { connect } from "react-redux";
import { actionCreat } from "../../store"; //异步的action

function List(props) {
  const { list, getMoreLink } = props;
  return (  
    <div>
      {list.map((item) => (
        <ListItem key={item.get("id")}>
          <img className="pic" src={item.get("imgUrl")} alt="" />
          <ListInfo>
            <h3 className="title">{item.get("title")}</h3>
            <p className="desc">{item.get("desc")}</p>
          </ListInfo>
        </ListItem>
      ))}
      <LoadMore onClick={getMoreLink}>更多文字</LoadMore>
    </div>
  );
}

const mapState = (state) => ({
  list: state.getIn(["home", "articleList"]),
});
const mapDispatch = (dispatch) => ({
  getMoreLink() {
    dispatch(actionCreat.getMoreLink());
  },
});

export default connect(mapState, mapDispatch)(List);
