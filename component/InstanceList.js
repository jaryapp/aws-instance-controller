import styles from "../styles/Instance.module.scss";
import classNames from "classnames/bind";
import Instance from "./Instance";
import test from "./test.json";

const cx = classNames.bind(styles);

export default function InstanceList() {
  return (
    <div className={cx("instance-list")}>
      <Instance />
      <Instance />
      <Instance />
      <Instance />
    </div>
  );
}
