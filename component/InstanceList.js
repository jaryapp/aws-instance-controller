import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import axios from 'axios';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import styles from '../styles/Instance.module.scss';
import Instance from './Instance';
import InstanceCreateModal from './InstanceCreateModal';

const cx = classNames.bind(styles);

export default function InstanceList() {
  const router = useRouter();
  const [openCreateModal, setOpenCreateModal] = useState(false);
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

  function hideCreateModal() {
    setOpenCreateModal(false);
  }

  function showCreateModal() {
    setOpenCreateModal(true);
  }

  return (
    <div className={cx('instance-list')}>
      <div className={cx('state-info')}>
        <div className={cx('state', 'running')} />{' '}
        <span className={cx('label')}>실행</span>
        <div className={cx('state', 'stopped')} />{' '}
        <span className={cx('label')}>중지</span>
        <div className={cx('state', 'terminated')} />{' '}
        <span className={cx('label')}>삭제됨</span>
      </div>
      {instanceList.map((instance) => (
        <Instance data={instance} />
      ))}
      <div className={cx('instance-box')}>
        <div
          className={cx('instance', 'create')}
          onClick={() => showCreateModal()}
        >
          <BsFillPlusCircleFill />
        </div>
      </div>
      {openCreateModal ? (
        <InstanceCreateModal closeModal={hideCreateModal} />
      ) : (
        ''
      )}
    </div>
  );
}
