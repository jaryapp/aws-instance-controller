import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import axios from 'axios';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import styles from '../styles/Instance.module.scss';
import Instance from './Instance';

const cx = classNames.bind(styles);

export default function InstanceList() {
  const router = useRouter();
  const [instanceList, setInstanceList] = useState([]);
  const [refresh, setRefresh] = useState(0);

  const PRIORITY = {
    running: 1,
    pending: 2,
    stopped: 3,
    stopping: 4,
    terminated: 5,
  };

  useEffect(() => {
    axios
      .get('/api/instance/list')
      .then((res) => {
        const instances = res.data.Reservations.map(
          (reservation) => reservation.Instances.map((instance) => instance)[0],
        ).sort((a, b) => {
          return PRIORITY[a.State.Name] - PRIORITY[b.State.Name];
        });

        setInstanceList(instances);
        setTimeout(() => {
          setRefresh(refresh + 1);
        }, 100);
      })
      .catch((err) => {
        if (err) router.push('/config');
      });
  }, [refresh]);

  function createInstance() {
    axios('/api/instance/create', {
      params: {
        imageId: 'ami-034436dcfe8dc43de',
        securityGroupId: 'sg-013180122170bd49b',
      },
    });
  }

  return (
    <div className={cx('instance-list')}>
      {instanceList.map((instance) => (
        <Instance data={instance} />
      ))}
      <div className={cx('instance-box')}>
        <div
          className={cx('instance', 'create')}
          onClick={() => createInstance()}
        >
          <BsFillPlusCircleFill />
        </div>
      </div>
    </div>
  );
}
