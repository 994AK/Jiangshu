import {
  RecommendItem,
  RecommendInfo,
  RecommendCode,
  RecommendQRCode,
} from "../../style";

import { connect } from "react-redux";

//鼠标运动二维码显示
function RecommendMouse(QRCodemouseIn) {
  console.log(QRCodemouseIn);
  return (
    <RecommendQRCode>
      <div className={QRCodemouseIn ? "active" : "detail_wrap"}>
        <img
          src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png"
          alt=""
        />
      </div>
    </RecommendQRCode>
  );
}

function Recommended(props) {
  const { handleQCMouseEnter, handleQCMouseLeave } = props;
  const { list, QRCodemouseIn } = props;
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
          className="qrcode"
          src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png"
        />
        <div className="info">
          <div className="title">下载简书手机APP</div>
          <div className="desc">随时随地发现和创作内容</div>
        </div>
      </RecommendCode>
      {/* 鼠标运动进去显示二维码 */}

      {RecommendMouse(QRCodemouseIn)}
    </RecommendItem>
  );
}

const mapState = (state) => ({
  list: state.getIn(["home", "RecommendList"]),
  QRCodemouseIn: state.getIn(["home", "QRCodemouseIn"]),
});

const mapDispatch = (dispatch) => {
  return {
    handleQCMouseEnter() {
      const action = {
        type: "qc_enter",
      };
      dispatch(action);
    },
    handleQCMouseLeave() {
      const action = {
        type: "qc_leave",
      };
      dispatch(action);
    },
  };
};

export default connect(mapState, mapDispatch)(Recommended);
