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
aws_access_key_id=ASIAY5KPK6Q66LUQK7UN
aws_secret_access_key=oZ+Pl7OLDBiyX0n950rhZdXik0PkyGm3L0eqnnnm
aws_session_token=FwoGZXIvYXdzEE4aDJo04akf6rws7k6ZYSLCAUm28qrWquXChNrAXr/23w4BWbggMnqg6xmqnn5pPITIXpyor4EzatXvQxKXjEU6tjBz0IAWHPMjuQHrWgVlbU01CM+v9jsUqB3LMwhTGbONOkqCLgndYunPeJtuSHFNKbN+xMJkanwMO1hcPvFgqDPO40e5vTskj0r5TEcLFuz7+pwIyTtc8LCPKR4W8KOlFagA3f3jVLior0BKQ2dclA/5mRytaefTX7YQoCvR5I3Ug/2UgXdTjyAFBfxp5cqDKpEUKJPq7P0FMi1O/61q4SO7T4ItcvhW0gZ6e6eMUeYKcdsSOpqFyANAxwG+ZytHr8C6N7hleyo=
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

export default mainLayout(ConfigPage);
