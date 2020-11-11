import styles from "../styles/Instance.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Instance() {
  return (
    <div className={cx("instance-box")}>
      <div className={cx("instance")}>
        <div className={cx("title")}>Slave2 From AMI</div>
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
