import { useState,useEffect } from "react";
import classNames from "classnames/bind";
import styles from "../styles/Instance.module.scss";
import Image from "./Image";
import axios from "axios";

const cx = classNames.bind(styles);

export default function ImageList() {

  const [imageList,setImageList] = useState([])
  const [refresh,setRefresh] = useState(0)

  useEffect(()=>{
    axios.get('/api/image/list').then(res=>{
        // console.log(res.data)
    //   const images = res.data.map(
    //     (reservation) => reservation.Instances.map((instance) => instance)[0]
    //   );
    console.log(res.data)
      setImageList(res.data.Images)
      setTimeout(()=>{
        setRefresh(refresh+1)
      },100)
    })

  },[refresh])

  return (
    <div className={cx("instance-list")}>
      {imageList.map((image) => (
        <Image data={image}  />
      ))}
    </div>
  );
}
