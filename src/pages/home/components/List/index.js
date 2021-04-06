/* eslint-disable jsx-a11y/alt-text */
import { ListItem, ListInfo } from "../../style";
import { connect } from "react-redux";
function List(props) {
  const { list } = props;
  return (
    <div>
      {list.map((item) => (
        <ListItem key={item.get('id')}>
          <img
            className="pic"
            src={item.get('imgUrl')}
            alt=""
          />
          <ListInfo>
            <h3 className="title">{item.get('title')}</h3>
            <p className="desc">{item.get('desc')}</p>
          </ListInfo>
        </ListItem>
      ))}
    </div>
  );
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
});

export default connect(mapState, null)(List);
