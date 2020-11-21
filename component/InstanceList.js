import { useState,useEffect } from "react";
import classNames from "classnames/bind";
import styles from "../styles/Instance.module.scss";
import Instance from "./Instance";
import axios from "axios";

const cx = classNames.bind(styles);

export default function InstanceList() {

  const [instanceList,setInstanceList] = useState([])
  const [refresh,setRefresh] = useState(0)

  useEffect(()=>{
    axios.get('/api/instance/list').then(res=>{
      const instances = res.data.Reservations.map(
        (reservation) => reservation.Instances.map((instance) => instance)[0]
      );
      setInstanceList(instances)
      setTimeout(()=>{
        setRefresh(refresh+1)
      },100)
    })

  },[refresh])

  return (
    <div className={cx("instance-list")}>
      {instanceList.map((instance) => (
        <Instance data={instance}  />
      ))}
    </div>
  );
}
