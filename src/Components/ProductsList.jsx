import React from 'react'
import data from "../data.json"
import {Card, Flex, Image, Typography, Button} from "antd"

const {Meta} = Card;

const ProductsList = () => {
  return (
    <>
    <Flex align='center' justify='space-between'>
        <Typography.Title level={3} strong style={{marginBottom : '0px'}}>View Designers In Your Area</Typography.Title>
    </Flex>
    <Flex align='center' gap="large" className='innerFlex'>
        {data.data[0].planner.map((ele) => (
            <Card key={ele.id} className='plannerCard' hoverable >
                <Image src={ele.image} alt="PlannerImage" style={{ width : "130px"}}/>
                <Meta  title={ele.name} style={{marginTop : "2rem"}} />
                <Button onClick={()=>console.log(ele.id)}>Book Now</Button>
            </Card>
        ))}
    </Flex>
    </>
  )
}

export default ProductsList