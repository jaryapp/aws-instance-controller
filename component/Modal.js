import classNames from "classnames/bind";
import styles from "../styles/Modal.module.scss";
import {CgClose  } from "react-icons/cg";

const cx = classNames.bind(styles);

export default function Modal({title, contents,closeModal}){

    return <div className={cx("black-box")} onClick={()=>{closeModal()}}>
        <div className={cx("modal")}>
            <div className={cx("close")}><CgClose/></div>
            <div className={cx("title")}>{title}</div>
            <table cellpadding="5" cellspacing="0" border="1" align="center">
                {
                    contents.map(data=>{
                        return (<tr>
                        <td>{data.label}</td>
                        <td>{data.value ? data.value : '-'}</td>
                    </tr>)
                    })
                }
            
            </table>
        </div>
    </div>
}