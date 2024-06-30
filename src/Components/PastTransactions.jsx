import React, { useEffect, useState } from "react";
import { List, Avatar, Typography, Flex, Image } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";

const PastTransactions = () => {
  // use state hooks to initialize current transactions ----------
  const [PastTransactions, setPastTransactions] = useState([]);
  const [userType, setUserType] = useState("");

  // get userId from the url ----------------------------------------------------------------------
  const { userId } = useParams();

  // backend call ------------------------------------------------
  const handleFetchPastTransactions = async () => {
    try {
      const { data } = await axios.get(
        `https://kalakriti-backend-nfdm.onrender.com/transactions/past/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setPastTransactions(data.pastTransactions);
      setUserType(data.userType);
    } catch (error) {
      console.error(
        error.response?.data?.message || "Error fetching transactions"
      );
    }
  };

  // call the function
  useEffect(() => {
    handleFetchPastTransactions();
  }, []);

  // render the type of info
  const renderTransactionDetails = (transaction) => {
    return (
      <Flex vertical>
        {transaction.createdBy !== userId && (
          <Flex>
            <Typography.Text strong> Created By: </Typography.Text>
            {transaction.createdByName}
          </Flex>
        )}
        {transaction.customer !== "undefined" && (
          <Flex>
            <Typography.Text strong> Customer: </Typography.Text>
            {transaction.customerName}
          </Flex>
        )}
        {transaction.createdFor !== userId && (
          <Flex>
            <Typography.Text strong> Created For: </Typography.Text>
            {transaction.createdForName}
          </Flex  >
        )}
      </Flex>
    );
  };

  return (
    <Flex vertical gap="small">
      <Flex align="center" justify="space-between" gap="large">
        <Typography.Title level={3} strong style={{ marginBottom: "0px" }}>
          Past Transactions
        </Typography.Title>
      </Flex>
      <List
        pagination={{ pageSize: 5 }}
        dataSource={PastTransactions}
        renderItem={(transaction, index) => (
          <List.Item key={index}>
            <List.Item.Meta
              avatar={
                transaction.images.length > 0 ? (
                  <Image
                    src={`http://localhost:5500/${transaction.images[0].replace(
                      /\\/g,
                      "/"
                    )}`}
                    width={"40px"}
                    height={"40px"}
                    style={{ borderRadius: "50%" }}
                  />
                ) : (
                  <Avatar icon="user" />
                )
              }
              title={renderTransactionDetails(transaction)}
              description={transaction.description}
            />
            <span>Resolved</span>
          </List.Item>
        )}
      />
    </Flex>
  );
};

export default PastTransactions;
