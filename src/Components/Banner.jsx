import React from 'react'
import {Card,Flex, Typography} from 'antd';

const Banner = () => {
  return (
    <Card>
        <Flex>
            <Flex>
                <Typography.Title style={{color : "#04a67d"}}>
                    Welcome Sarans!!
                </Typography.Title>
            </Flex>
        </Flex>
    </Card>
  )
}

export default Banner