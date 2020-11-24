import { useState, useEffect } from 'react';
import mainLayout from '../layout/main';
import Table from '../component/Table';
import axios from 'axios';

function ZonesPage() {
  const [head, setHead] = useState([
    'State',
    'OptInStatus',
    'RegionName',
    'ZoneName',
    'ZoneId',
    'GroupName',
    'NetworkBorderGroup',
    'ZoneType',
  ]);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get('/api/zone/list').then((res) => {
      setDatas(res.data.AvailabilityZones);
    });
  });

  return (
    <>
      <Table head={head} datas={datas}></Table>
    </>
  );
}

export default mainLayout(ZonesPage);
