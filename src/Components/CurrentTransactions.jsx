import React, { useEffect, useState } from "react";
import { List, Avatar, Image, Typography } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import ResolveModal from "./ResolveModal";

const CurrentTransactions = () => {
  // use state hooks to initialize current transactions ----------
  const [currentTransactions, setCurrentTransactions] = useState([]);
  const [userType, setUserType] = useState("");
  const [transactionId, setTransactionId] = useState("");

  // get userId from the url ----------------------------------------------------------------------
  const { userId } = useParams();

  // backend call ------------------------------------------------
  const handleFetchCurrentTransactions = async () => {
    try {
      const { data } = await axios.get(
        `https://kalakriti-backend-nfdm.onrender.com/transactions/current/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setCurrentTransactions(data.currentTransactions);
      console.log(data.currentTransactions);
      setUserType(data.userType);
    } catch (error) {
      console.error(
        error.response?.data?.message || "Error fetching transactions"
      );
    }
  };

  // call the function
  useEffect(() => {
    handleFetchCurrentTransactions();
  }, []);

  // render the type of info
  const renderTransactionDetails = (transaction) => {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {transaction.createdBy !== userId && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <strong>Created By:</strong>
            <p style={{ fontWeight: "normal", color: "#04a67d" }}>
              {transaction.createdByName}
            </p>
          </div>
        )}
        {transaction.customer !== "undefined" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <strong>Customer:</strong>
            <p style={{ fontWeight: "normal", color: "#04a67d" }}>
              {transaction.customerName}
            </p>
          </div>
        )}
        {transaction.createdFor !== userId && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <strong>Created For:</strong>
            <p style={{ fontWeight: "normal", color: "#04a67d" }}>
              {transaction.createdForName}
            </p>
          </div>
        )}
      </div>
    );
  };

  // for the modal form ------------------------------------------------
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "small" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "large",
        }}
      >
        <Typography.Title level={3} strong style={{ marginBottom: "0px" }}>
          Current Transactions
        </Typography.Title>
      </div>
      <List
        pagination={{ pageSize: 5 }}
        dataSource={currentTransactions}
        renderItem={(transaction, index) => (
          <List.Item key={index}>
            <List.Item.Meta
              avatar={
                transaction.images.length > 0 ? (
                  <Image
                    src={`https://kalakriti-backend-nfdm.onrender.com/${transaction.images[0].replace(
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
            {userType !== "Customer" && (
              <span>
                <button
                  onClick={() => {
                    setShowModal(true);
                    setTransactionId(transaction.transactionId);
                  }}
                >
                  Resolve
                </button>
              </span>
            )}
          </List.Item>
        )}
      />
      <ResolveModal
        showModal={showModal}
        setShowModal={setShowModal}
        userId={userId}
        transactionId={transactionId}
      />
    </div>
  );
};

export default CurrentTransactions;
