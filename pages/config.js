import { useState } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import mainLayout from '../layout/main';

import styles from '../styles/config.module.scss';

const cx = classNames.bind(styles);

function ConfigPage() {
  const [config, setConfig] = useState();
  const router = useRouter();

  function sendConfig() {
    axios
      .post('/api/config', {
        config,
      })
      .then((res) => {
        router.push('/');
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleChange(event) {
    setConfig(event.target.value);
  }

  const sample = `[default]
aws_access_key_id=XXXXX
aws_secret_access_key=XXXXX
aws_session_token=XXXXX
  `;

  return (
    <div className={cx('config')}>
      <h1 className={cx('title')}>토큰 설정</h1>
      <textarea
        rows="10"
        cols="100"
        value={config}
        onChange={handleChange}
        placeholder={sample}
      />
      <button type="button" className={cx('button')} onClick={sendConfig}>
        제출
      </button>
    </div>
  );
}

export default mainLayout({ Page: ConfigPage });
