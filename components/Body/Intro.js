import { Carousel } from "react-bootstrap";
import Image from "next/image";

const Intro = ({ className }) => {
  return (
    <section className="intro">
      {/* <Carousel>
        <Carousel.Item> */}
      <Image
        src="/img/wallpaperflare.com_wallpaper.jpg"
        width={1600}
        height={800}
        className="opacity-3"
      />
      <div className="dialog">
        <h1 className="dialog__title">Caramen Sỉ Lẻ</h1>
        <h3 className="dialog__slogan">Bán lẻ cũng như bán buôn!</h3>
        <div className="dialog__separator"></div>
        <div className="dialog__action">
          <button className="dialog__action__btn">
            {"Đặt hàng".toUpperCase()}
          </button>
          <span className="dialog__action__or">hay</span>
          <button className="dialog__action__btn">
            {"Thực đơn".toUpperCase()}
          </button>
        </div>
      </div>

      {/* </Carousel.Item>
      </Carousel> */}
    </section>
  );
};

export default Intro;
