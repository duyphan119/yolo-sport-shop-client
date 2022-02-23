import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./categories.scss";
const Categories = () => {
  return (
    <section className="categories">
      <div className="categories__list">
        <div className="categories__list-item">
          <Link className="categories__list-item-link" to={`/`}>
            <span className="categories__sale">SALE 50%</span>
          </Link>
        </div>
        <div className="categories__list-item">
          <Link className="categories__list-item-link" to={`/`}>
            <span>ĐỒ NỮ</span>
            <div className="categories__list-item-link-icon">
              <BsChevronDown />
            </div>
          </Link>
          <div className="categories__list-child" >
            <div className="categories__list-child-item">
              <Link className="categories__list-child-item-link" to={`/`}>
                Áo khoác nữ
              </Link>
            </div>
            <div className="categories__list-child-item separate-top">
              <Link className="categories__list-child-item-link" to={`/`}>
                Áo có cổ nữ
              </Link>
            </div>
          </div>
        </div>
        <div className="categories__list-item">
          <Link className="categories__list-item-link" to={`/`}>
            <span>ĐỒ NAM</span>
            <div className="categories__list-item-link-icon">
              <BsChevronDown />
            </div>
          </Link>
        </div>
        <div className="categories__list-item">
          <Link className="categories__list-item-link" to={`/`}>
            <span>PHỤ KIỆN</span>
            <div className="categories__list-item-link-icon">
              <BsChevronDown />
            </div>
          </Link>
        </div>
        <div className="categories__list-item">
          <Link className="categories__list-item-link" to={`/`}>
            <span>KHUYẾN MÃI</span>
          </Link>
        </div>
        <div className="categories__list-item">
          <Link className="categories__list-item-link" to={`/`}>
            <span>YOLO BLOG</span>
          </Link>
        </div>
        <div className="categories__list-item">
          <Link className="categories__list-item-link" to={`/`}>
            <span>CỬA HÀNG</span>
          </Link>
        </div>
        <div className="categories__list-item">
          <Link className="categories__list-item-link" to={`/`}>
            <span>CHỌN SIZE</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
