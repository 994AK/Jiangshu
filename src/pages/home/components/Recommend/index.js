import {
  RecommendItem,
  RecommendInfo,
  RecommendCode,
  RecommendQRCode,
} from "../../style";
//action文件
import { action } from "../../store";
import { connect } from "react-redux";

//鼠标运动二维码显示
function RecommendMouse(QRCokeIn) {
  return (
    <RecommendQRCode>
      <div className={QRCokeIn ? "active" : "detail_wrap"}>
        <img src="//img-blog.csdnimg.cn/20210408100156265.png" alt="" />
      </div>
    </RecommendQRCode>
  );
}

function Recommended(props) {
  const { handleQCMouseEnter, handleQCMouseLeave } = props; //事件
  const { list,  QRCokeIn } = props; //参数
  return (
    <RecommendItem>
      {/* 图片标签 */}
      {list.map((item) => (
        <RecommendInfo key={item.get("id")} href={item.get("href")}>
          <img className="icon" src={item.get("imgUrl")} alt="" />
        </RecommendInfo>
      ))}
      {/* 二维码 */}
      <RecommendCode
        onMouseEnter={handleQCMouseEnter}
        onMouseLeave={handleQCMouseLeave}
      >
        <img
          alt=""
          className="arcade"
          src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png"
        />
        <div className="info">
          <div className="title">下载简书手机APP</div>
          <div className="desc">随时随地发现和创作内容</div>
        </div>
      </RecommendCode>
      {/* 鼠标运动进去显示二维码 */}
      {RecommendMouse(QRCokeIn)}
    </RecommendItem>
  );
}

const mapState = (state) => ({
  list: state.getIn(["home", "RecommendList"]),
  QRCokeIn: state.getIn(["home", "QRCokeIn"]),
});

const mapDispatch = (dispatch) => {
  return {
    handleQCMouseEnter() {
      dispatch(action.getQcEnter());
    },
    handleQCMouseLeave() {
      dispatch(action.getQcLeave());
    },
  };
};

export default connect(mapState, mapDispatch)(Recommended);
