import { useState,useEffect } from "react";
import classNames from "classnames/bind";
import styles from "../styles/Instance.module.scss";
import Instance from "./Instance";
import axios from "axios";
import { BsFillPlusCircleFill } from "react-icons/bs";

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

  function createInstance(){
    axios("/api/instance/create",{params:{
      imageId:"ami-0ef8e5a4ac5934a2e"
    }})
  }

  return (
    <div className={cx("instance-list")}>
      {instanceList.map((instance) => (
        <Instance data={instance}  />
      ))}
      <div className={cx("instance-box")}><div className={cx("instance","create")} onClick={()=>createInstance()}><BsFillPlusCircleFill/></div></div>

    </div>
  );
}
