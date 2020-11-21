import classNames from "classnames/bind";
import axios from "axios";
import { useState } from "react";
import { TiDocumentText } from "react-icons/ti";
import Modal from "./Modal";
import styles from "../styles/Instance.module.scss";

const cx = classNames.bind(styles);

export default function Image({ data }) {

  const [openModal,setOpenModal] = useState(false)
  const [hover,setHover] = useState(false)

  function handleMouseHover(){
    setHover(!hover)
  }

  function hideDetail(){
    setOpenModal(false)
  }

  function showDetail(){
    setOpenModal(true)
  }

  const ImageName = data.Name

  var modalContents = [
    {
      label:"Architecture",
      value:data.Architecture
    },
    {
      label:"Description",
      value:data.Description
    },
    {
      label:"ImageId",
      value:data.ImageId
    },
    {
      label:"Name",
      value:data.Name
    },
    {
      label:"PlatformDetails",
      value:data.PlatformDetails
    },
    {
      label:"State",
      value:data.State
    }

  ]

  return (
    <div className={cx("instance-box")}>
      {openModal ? <Modal title={ImageName} contents={modalContents} closeModal={hideDetail} /> : ''}
      <div className={cx("instance")}
       onMouseEnter={handleMouseHover}
       onMouseLeave={handleMouseHover}
      >
 
        {
          hover  ?  <div className={cx("loading")}>

         <div className={cx("round")} onClick={()=>{showDetail()}}><TiDocumentText className={cx("detail")}/></div>

        </div> : ''
        }
     
        <div className={cx("title")}>
          {ImageName}
        </div>
        <div className={cx("desc")}>
          <div>{data.ImageId}</div>
          <div>{data.Description}</div>
          <div>{data.ImageType}</div>
          <div>{data.State}</div>
        </div>
      </div>
    </div>
  );
}
