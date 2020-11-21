import styles from "../styles/Menu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Menu() {
  const menus = [
    {
      key: "instance",
      label: "인스턴스",
    },
    {
      key: "images",
      label: "이미지",
    },
    {
      key: "zones",
      label: "zones",
    },
    {
      key: "regions",
      label: "regions",
    },
  ];
  return (
    <div className={cx("menu-box")}>
      {menus.map((menu) => {
        return <div className={cx("menu")}>{menu.label}</div>;
      })}
    </div>
  );
}
