import styles from "../styles/Instance.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Instance({ data }) {
  return (
    <div className={cx("instance-box")}>
      <div className={cx("instance")}>
        <div className={cx("title")}>
          {data.Tags.length ? data.Tags[0].Value : "Undefined"}
        </div>
        <div className={cx("desc")}>
          <div>i-0542cd4f7f4c527b0</div>
          <div>t2.micro</div>
          <div>54.160.73.86</div>
          <div>htcondor-security</div>
        </div>
      </div>
    </div>
  );
}
