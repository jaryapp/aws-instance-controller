import classNames from 'classnames/bind';
import axios from 'axios';
import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { RiRestartLine } from 'react-icons/ri';
import { TiDocumentText } from 'react-icons/ti';
import Modal from './Modal';
import styles from '../styles/Instance.module.scss';

const cx = classNames.bind(styles);

export default function Instance({ data }) {
  const [openModal, setOpenModal] = useState(false);
  const [hover, setHover] = useState(false);
  const instanceState = data.State.Name;

  function handleMouseHover() {
    setHover(!hover);
  }

  function startInstance() {
    axios('/api/instance/start', {
      params: {
        instanceId: data.InstanceId,
      },
    });
  }

  function stopInstance() {
    axios('/api/instance/stop', {
      params: {
        instanceId: data.InstanceId,
      },
    });
  }

  function rebootInstance() {
    axios('/api/instance/reboot', {
      params: {
        instanceId: data.InstanceId,
      },
    });
  }

  function hideDetail() {
    setOpenModal(false);
  }

  function showDetail() {
    setOpenModal(true);
  }

  const instanceName = data.Tags.length ? data.Tags[0].Value : '-';
  const Security = data.SecurityGroups.length
    ? data.SecurityGroups[0].GroupName
    : '-';
  let modalContents = [];

  modalContents = [
    {
      label: 'Architecture',
      value: data.Architecture,
    },
    {
      label: 'ImageId',
      value: data.ImageId,
    },
    {
      label: 'InstanceId',
      value: data.InstanceId,
    },
    {
      label: 'InstanceType',
      value: data.InstanceType,
    },
    {
      label: 'LaunchTime',
      value: data.LaunchTime,
    },
    {
      label: 'PrivateDnsName',
      value: data.PrivateDnsName,
    },
    {
      label: 'PrivateIpAddress',
      value: data.PrivateIpAddress,
    },
    {
      label: 'PublicDnsName',
      value: data.PublicDnsName,
    },
    {
      label: 'PublicIpAddress',
      value: data.PublicIpAddress,
    },
    {
      label: 'State',
      value: data.State.Name,
    },
  ];

  // console.log(data);

  // const modalContents = data.map(item=>{
  //   console.log(item)

  // })

  return (
    <div className={cx('instance-box')}>
      {openModal ? (
        <Modal
          title={instanceName}
          contents={modalContents}
          closeModal={hideDetail}
        />
      ) : (
        ''
      )}
      <div
        className={cx('instance')}
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseHover}
      >
        {instanceState === 'pending' || instanceState === 'stopping' ? (
          <div className={cx('loading')}>
            <div className={cx('loader', instanceState)} />
          </div>
        ) : (
          ''
        )}
        {hover ? (
          <div className={cx('loading')}>
            {instanceState === 'stopped' ? (
              <div
                className={cx('round')}
                onClick={() => {
                  startInstance();
                }}
              >
                <FaPlay className={cx('play')} />
              </div>
            ) : (
              ''
            )}
            {instanceState === 'running' ? (
              <>
                <div
                  className={cx('round')}
                  onClick={() => {
                    stopInstance();
                  }}
                >
                  <FaPause className={cx('stop')} />
                </div>
                <div
                  className={cx('round')}
                  onClick={() => {
                    rebootInstance();
                  }}
                >
                  <RiRestartLine className={cx('reboot')} />
                </div>
              </>
            ) : (
              ''
            )}

            <div
              className={cx('round')}
              onClick={() => {
                showDetail();
              }}
            >
              <TiDocumentText className={cx('detail')} />
            </div>
          </div>
        ) : (
          ''
        )}

        <div className={cx('state', instanceState)} />
        <div className={cx('content')}>
          <div className={cx('title')}>{instanceName}</div>
          <div className={cx('desc')}>
            <div>{data.InstanceId}</div>
            <div>{data.InstanceType}</div>
            <div>{data.PrivateIpAddress}</div>
            <div>{Security}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
