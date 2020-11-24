import classNames from 'classnames/bind';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from '../styles/Modal.module.scss';
import { CgClose } from 'react-icons/cg';
import configStyles from '../styles/config.module.scss';

const cx = classNames.bind(styles);
const cxConfig = classNames.bind(configStyles);

export default function Modal({ closeModal }) {
  const [tag, setTag] = useState();
  const [imageId, setImageId] = useState();
  const [securityGroupId, setSecurityGroupId] = useState();

  const [securityGroups, setSecurityGroups] = useState([]);
  const [images, setImages] = useState([]);

  function createInstance() {
    axios('/api/instance/create', {
      params: {
        imageId,
        securityGroupId,
        tag,
      },
    }).then(() => {
      closeModal();
    });
  }

  useEffect(() => {
    axios.get('/api/security/list').then((res) => {
      setSecurityGroups(
        res.data.SecurityGroups.map((item) => {
          return {
            label: item.GroupName,
            value: item.GroupId,
          };
        }),
      );
    });
    axios.get('/api/image/list').then((res) => {
      setImages(
        res.data.Images.map((item) => {
          return {
            label: item.Name,
            value: item.ImageId,
          };
        }),
      );
    });
  }, []);

  useEffect(() => {
    if (images.length) setImageId(images[0].value);
  }, [images]);

  useEffect(() => {
    if (securityGroups.length) setSecurityGroupId(securityGroups[0].value);
  }, [securityGroups]);

  function handleChange(event) {
    setTag(event.target.value);
  }

  function imageChange(event) {
    console.log(event.target.value);
    setImageId(event.target.value);
  }

  function securityChange(event) {
    console.log(event.target.value);
    setSecurityGroupId(event.target.value);
  }

  return (
    <div className={cx('black-box')}>
      <div className={cx('modal')}>
        <div className={cx('close')}>
          <CgClose
            onClick={() => {
              closeModal();
            }}
          />
        </div>
        <div className={cx('title')}>인스턴스 생성</div>
        <h3>인스턴스명</h3>
        <input
          type="text"
          placeholder="Slave"
          value={tag}
          onChange={handleChange}
        />
        <h3>이미지</h3>
        <select value={imageId} onChange={imageChange}>
          {images.map((item) => (
            <option value={item.value}>{item.label}</option>
          ))}
        </select>
        <h3>보안그룹</h3>
        <select value={securityGroupId} onChange={securityChange}>
          {securityGroups.map((item) => (
            <option value={item.value}>{item.label}</option>
          ))}
        </select>
        <div align="center">
          <button
            type="button"
            className={cxConfig('button')}
            onClick={createInstance}
          >
            생성
          </button>
        </div>
      </div>
    </div>
  );
}
