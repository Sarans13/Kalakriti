import React from 'react'
import {Flex} from 'antd'
import CurrentTransactions from './CurrentTransactions';
import PastTransactions from './PastTransactions';

const SideContent = () => {
  return (
    <Flex vertical gap="2.3rem" className='sideContent'>
      <CurrentTransactions />
      <PastTransactions />
    </Flex>
  )
}

export default SideContent