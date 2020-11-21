import styles from "../styles/Menu.module.scss";
import classNames from "classnames/bind";
import { useRouter } from 'next/router'

const cx = classNames.bind(styles);

export default function Menu() {
  const router = useRouter()

  const menus = [
    {
      key: "/",
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
        return <div className={cx("menu") } onClick={()=>{router.push(menu.key)}}>{menu.label}</div>;
      })}
    </div>
  );
}
