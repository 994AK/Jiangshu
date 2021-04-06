import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  margin: 30px 0 0 15px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
    background-image: url("//w.wallhaven.cc/full/x8/wallhaven-x88o53.jpg");
    background-size: cover;
  }
`;

export const HomeRight = styled.div`
  float: right;
  width: 300px;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  background: #f7f7f7;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
    margin-bottom: 18px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const RecommendItem = styled.div`
  position: relative;
  margin-top: 27px;
`;

export const RecommendInfo = styled.a`
  padding-bottom: 4px;
  min-height: 228px;
  .icon {
    width: 100%;
    min-height: 50px;
    margin-bottom: 4px;
    border-radius: 5px;
  }
`;

export const RecommendCode = styled.a`
  display: inline-block;
  margin-top: 5px;
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;
  .qrcode {
    width: 64px;
    height: 64px;
    opacity: 0.85;
    vertical-align: middle;
    border: 0;
  }
  .info {
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    .tite {
      font-size: 15px;
      color: #333;
    }
    .desc {
      margin-top: 7px;
      font-size: 13px;
      color: #999;
    }
  }
`;
export const RecommendQRCode = styled.div`
  position: absolute;
  top: 40px;
  left: 20%;
  border-radius: 6px;
  .detail_wrap {
    transition: all 1s ease-in;
    opacity: 0;
  }
  .active {
    transition: all 0.5s ease-in;
    opacity: 1;
  }
`;
/* 三角形 */
export const Recommendtriangle = styled.div``;
