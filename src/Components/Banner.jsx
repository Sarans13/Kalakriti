// Imports -----------------------------------------------------------
import React, { useEffect, useState } from 'react'
import {Card,Flex, Typography} from 'antd';
import { useParams } from 'react-router-dom';
import axios from "axios";

const Banner = () => {
  // use state hook to define the fetched data -----------------------
  const [name, setName] = useState("");

  // get userId from the url -----------------------------------------
  const { userId } = useParams();

  // backend call ----------------------------------------------------
  const handlefetchUserName = async () => {
    try {
      const { data } = await axios.get(
        `https://kalakriti-backend-nfdm.onrender.com/userFirstName/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setName(data);
    } catch (error) {
      console.error(error.response.data.message);
    }  
  };

  useEffect(() => {
    handlefetchUserName();
  }, [])
  

  return (
    <Card>
        <Flex>
            <Flex>
                <Typography.Title style={{color : "#04a67d"}}>
                    Welcome {name}
                </Typography.Title>
            </Flex>
        </Flex>
    </Card>
  )
}

export default Banner