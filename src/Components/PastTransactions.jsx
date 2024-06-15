import React from "react";
import { Flex, Typography, List, Avatar } from "antd";
import data from "../data.json";

const PastTransactions = () => {
  return (
    <Flex vertical gap="small">
      <Flex align="center" justify="space-between" gap="large">
        <Typography.Title level={3} strong style={{ marginBottom: "0px" }}>
          Past Transactions
        </Typography.Title>
      </Flex>
      <List
        pagination = {{pageSize : 2}}
        dataSource={data.data[0].transactions}
        renderItem={(user, Index) => (
          <List.Item>
            <List.Item.Meta avatar={<Avatar src={` `} />} title={user.name} description="Booked For consulation"></List.Item.Meta>
            <span>{user.orderTime}</span>
          </List.Item>
        )}
      />
    </Flex>
  );
};

export default PastTransactions;
