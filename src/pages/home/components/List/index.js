/* eslint-disable jsx-a11y/alt-text */
import { ListItem, ListInfo, LoadMore } from "../../style";
import { connect } from "react-redux";
import { actionCreat } from "../../store"; //异步的action

function List(props) {
  const { list, page,getMoreLink } = props;
  return (  
    <div>
      {list.map((item,index) => (
        <ListItem key={index}>
          <img className="pic" src={item.get("imgUrl")} alt="" />
          <ListInfo>
            <h3 className="title">{item.get("title")}</h3>
            <p className="desc">{item.get("desc")}</p>
          </ListInfo>
        </ListItem>
      ))}
      <LoadMore onClick={()=>getMoreLink(page)}>更多文字</LoadMore>
    </div>
  );
}

const mapState = (state) => ({
  list: state.getIn(["home", "articleList"]),
  page: state.getIn(["home","articlePage"])
});
const mapDispatch = (dispatch) => ({
  getMoreLink(page) {
    dispatch(actionCreat.getMoreLink(page));
  },
});

export default connect(mapState, mapDispatch)(List);
