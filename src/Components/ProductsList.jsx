// imports ----------------------------------------------------------------------------------------
import React, { useEffect, useState } from "react";
import { Card, Flex, Image, Typography, Button } from "antd";
import SampleImage from "../Images/SampleImage.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookNow from "./BookNow";
const { Meta } = Card;

const ProductsList = () => {
  // use state hook to define the fetched data ----------------------------------------------------
  const [planner, setPlanner] = useState("");
  const [vendor, setVendor] = useState("");
  const [userType, setUserType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // get userId from the url ----------------------------------------------------------------------
  const { userId } = useParams();

  // backend call ---------------------------------------------------------------------------------
  const handlefetchPlannerAndVendors = async () => {
    try {
      const { data } = await axios.get(
        `https://kalakriti-backend-nfdm.onrender.com/fetch-users/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setUserType(data.userType);
      if (data.interiorDesigners) setPlanner(data.interiorDesigners);
      if (data.workers) setVendor(data.workers);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  useEffect(() => {
    handlefetchPlannerAndVendors();
  }, []);

  // handle the book now click to book someone -----------------------------------------------------
  const handleBookNowClick = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  return (
    <>
      {planner.length > 0 && (
        <>
          <Flex align="center" justify="space-between">
            <Typography.Title level={3} strong style={{ marginBottom: "0px" }}>
              View Designers In Your Area
            </Typography.Title>
          </Flex>
          <Flex align="center" gap="large" className="innerFlex">
            {planner.map((ele) => (
              <Card key={ele._id} className="plannerCard" hoverable>
                <Image
                  src={SampleImage}
                  alt="PlannerImage"
                  style={{ width: "130px" }}
                />
                <Meta title={ele.firstName} style={{ marginTop: "2rem" }} />
                {userType === 'Worker/Carpenter'? (
                  <Button onClick={() => window.location.href = `tel:${planner.phone}`}>
                    Contact 
                  </Button>
                ) : (
                  <Button onClick={() => handleBookNowClick(ele._id)}>
                    Book Now
                  </Button>
                )}
              </Card>
            ))}
          </Flex>
        </>
      )}
      {vendor.length > 0 && (
        <>
          <Flex align="center" justify="space-between">
            <Typography.Title level={3} strong style={{ marginBottom: "0px" }}>
              View Craftsman In Your Area
            </Typography.Title>
          </Flex>
          <Flex align="center" gap="large" className="innerFlex">
            {vendor.map((ele) => (
              <Card key={ele._id} className="plannerCard" hoverable>
                <Image
                  src={SampleImage}
                  alt="PlannerImage"
                  style={{ width: "130px" }}
                />
                <Meta title={ele.firstName} style={{ marginTop: "2rem" }} />
                <Button onClick={() => handleBookNowClick(ele._id)}>
                    Book Now
                  </Button>
              </Card>
            ))}
          </Flex>
          <BookNow showModal={showModal} setShowModal={setShowModal} selectedId={selectedId} userType={userType}/>
        </>
      )}
    </>
  );
};

export default ProductsList;
