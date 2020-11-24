import { useState, useEffect } from 'react';
import mainLayout from '../layout/main';
import Table from '../component/Table';
import axios from 'axios';

function RegionsPage() {
  const [head, setHead] = useState(['Endpoint', 'RegionName', 'OptInStatus']);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get('/api/region/list').then((res) => {
      setDatas(res.data.Regions);
    });
  });

  return (
    <>
      <Table head={head} datas={datas}></Table>
    </>
  );
}

export default mainLayout(RegionsPage);
