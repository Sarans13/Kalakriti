import React from 'react'
import {Flex, Avatar} from "antd"
import Search from 'antd/es/transfer/search'
import {UserOutlined} from '@ant-design/icons';
import "../Styles/CustomHeader.css";


const CustomHeader = () => {
  return (
    <div>
      <Flex align='center' justify='end'>
        <Flex align='center' gap="3rem">
          <Search placeholder="Search Dashboard" allowClear />
          <Flex align='center' gap="10px">
            <Avatar icon={<UserOutlined />} />
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

export default CustomHeader