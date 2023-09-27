import React from 'react';
import { Table } from 'antd';

import {Ranking} from "../../../../dataMockup/listRanking"

const columns = [
  {
    title: '#',
    dataIndex: 'rankList',
    key: 'rankList', 
    width: 50
  },
  {
    title: 'User ID',
    dataIndex: 'userName',
    key: 'userName',
    align: 'center' 
  },
  {
    title: 'Fantasy point',
    dataIndex: 'userPoint',
    key: 'userPoint',
    align: 'center'
  },
];
const App = () => <Table columns={columns} dataSource={Ranking} pagination={false} scroll={{ y: 350 }}/>;
export default App;