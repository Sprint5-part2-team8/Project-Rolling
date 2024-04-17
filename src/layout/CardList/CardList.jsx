import { EmptyPostCard } from "sharing/EmptyPostCard/EmptyPostCard";
import styles from "./CardList.module.scss";
import classNames from "classnames/bind";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const cx = classNames.bind(styles);

export const CardList = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      console.log("target");
    }
  }, [inView]);

  return (
    <div className={cx("container")} ref={ref}>
      <EmptyPostCard />
    </div>
  );
};
