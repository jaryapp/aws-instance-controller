import classNames from 'classnames/bind';
import axios from 'axios';
import { useState } from 'react';
import styles from '../styles/Modal.module.scss';
import { CgClose } from 'react-icons/cg';
import configStyles from '../styles/config.module.scss';

const cx = classNames.bind(styles);
const cxConfig = classNames.bind(configStyles);

export default function Modal({ closeModal }) {
  const [tag, setTag] = useState();

  function createInstance() {
    axios('/api/instance/create', {
      params: {
        imageId: 'ami-034436dcfe8dc43de',
        securityGroupId: 'sg-013180122170bd49b',
        tag,
      },
    }).then(() => {
      closeModal();
    });
  }

  function handleChange(event) {
    setTag(event.target.value);
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
