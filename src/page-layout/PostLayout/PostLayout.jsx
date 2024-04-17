import styles from "./PostLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const PostLayout = ({cardList}) => {
  return (
    <div className={cx("container")}>
      {cardList}
    </div>
  );
};
