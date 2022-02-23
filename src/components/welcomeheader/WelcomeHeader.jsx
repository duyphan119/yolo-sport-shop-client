import {BsPhone} from "react-icons/bs"
import "./welcomeheader.scss";
const WelcomeHeader = () => {
  return (
    <div className="welcomeheader">
      <div className="welcomeheader__left">
        Chào mừng bạn đến với YOLO SPORT - Thương hiệu thời trang thể thao thiết
        kế uy tín tại Việt Nam
      </div>
      <div className="welcomeheader__right">
         <div className="welcomeheader__right-icon">
            <BsPhone/>
         </div>
         <span>Hotline Mua Hàng: 0939 029 818</span>
      </div>
    </div>
  );
};

export default WelcomeHeader;
