import { fromJS } from "immutable";
const defaultState = fromJS({
  /* 鼠标移入显示二维码 */
  QRCodemouseIn: false,
  /* 热点 */
  topicList: [
    {
      id: 1,
      title: "社会的热点",
      imgUrl: "//pic.616pic.com/ys_b_img/00/44/76/IUJ3YQSjx1.jpg",
    },
    {
      id: 2,
      title: "社会的热点",
      imgUrl: "http://pic.616pic.com/ys_b_img/00/29/65/mnJlZhds2p.jpg",
    },
  ],
  /* 文章 */
  articleList: [
    {
      id: 1,
      title: "啊这，拯救了我",
      desc: "竟然偷偷干这样的事情..",
      imgUrl: "//w.wallhaven.cc/full/x8/wallhaven-x86eko.jpg",
    },
    {
      id: 2,
      title: "啊这，拯救了我",
      desc: "竟然偷偷干这样的事情..",
      imgUrl: "//w.wallhaven.cc/full/9m/wallhaven-9mxjp8.jpg",
    },
    {
      id: 3,
      title: "啊这，拯救了我",
      desc: "竟然偷偷干这样的事情..",
      imgUrl: "//w.wallhaven.cc/full/m9/wallhaven-m93jwk.jpg",
    },
    {
      id: 4,
      title: "啊这，拯救了我",
      desc: "竟然偷偷干这样的事情..",
      imgUrl: "//w.wallhaven.cc/full/28/wallhaven-28y7gg.jpg",
    },
  ],
  /* 推荐栏的图片 */
  RecommendList: [
    {
      id: 1,
      href: "#",
      imgUrl:
        "//cdn2.jianshu.io/assets/web/banner-s-daily-e6f6601abc495573ad37f2532468186f.png",
    },
    {
      id: 2,
      href: "#",
      imgUrl:
        "//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png",
    },
    {
      id: 3,
      href: "#",
      imgUrl:
        "//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png",
    },
    {
      id: 4,
      href: "#",
      imgUrl:
        "//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png",
    },
  ],
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, active) => {
  console.log(active);
  switch (active.type) {
    case "qc_enter":
      return state.set("QRCodemouseIn", true);
    case "qc_leave":
      return state.set("QRCodemouseIn",false);
    default:
      return state;
  }
};
