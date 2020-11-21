import classNames from "classnames/bind";
import axios from "axios";
import { useState } from "react";
import { FaPlay,FaPause } from "react-icons/fa";
import styles from "../styles/Instance.module.scss";

const cx = classNames.bind(styles);

export default function Instance({ data }) {

  const [hover,setHover] = useState(false)
  const instanceState = data.State.Name

  function handleMouseHover(){
    setHover(!hover)
  }

  function startInstance(){
    axios("/api/instance/start",{params:{
      instanceId:data.InstanceId
    }})
  }

  function stopInstance(){
    axios("/api/instance/stop",{params:{
      instanceId:data.InstanceId
    }})
 
  }

  return (
    <div className={cx("instance-box")}>
      <div className={cx("instance")}
       onMouseEnter={handleMouseHover}
       onMouseLeave={handleMouseHover}
      >
        {
          instanceState == 'pending' ||  instanceState == 'stopping'  ?  <div className={cx("loading")}>
          <div className={cx("loader",instanceState)}></div>
        </div> : ''
        }
        {
          hover  ?  <div className={cx("loading")}>
            {
              instanceState == 'stopped' ? <div className={cx("round")} onClick={()=>{startInstance()}}><FaPlay className={cx("play")}/></div> :''
            }
            {
              instanceState == 'running' ? <div className={cx("round")} onClick={()=>{stopInstance()}}><FaPause className={cx("stop")}/></div> :''
            }
        </div> : ''
        }
     
      <div className={cx("state",instanceState)}></div>

        <div className={cx("title")}>
          {data.Tags.length ? data.Tags[0].Value : "Undefined"}
        </div>
        <div className={cx("desc")}>
          <div>{data.InstanceId}</div>
          <div>t2.micro</div>
          <div>54.160.73.86</div>
          <div>htcondor-security</div>
        </div>
      </div>
    </div>
  );
}
