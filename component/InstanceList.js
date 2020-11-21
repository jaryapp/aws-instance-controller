import classNames from "classnames/bind";
import styles from "../styles/Instance.module.scss";
import Instance from "./Instance";
import test from "./test.json";

const cx = classNames.bind(styles);

// console.log(test.Reservations[0].Instances);

export default function InstanceList() {
  const instances = test.Reservations.map(
    (reservation) => reservation.Instances.map((instance) => instance)[0]
  );
  console.log(instances);
  return (
    <div className={cx("instance-list")}>
      {instances.map((instance) => (
        <Instance data={instance} />
      ))}
    </div>
  );
}
