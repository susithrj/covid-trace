import React from 'react'
import enter from '../../../assets/enter.png'
import family from '../../../assets/family.png'
import { connect } from 'react-redux'
import { Layout, Typography, Avatar, Button, Row, Col } from 'antd';
import {UserOutlined,LogoutOutlined} from '@ant-design/icons';
import SignedLinks from './SignedLinks';
const { Header } = Layout;
const { Title, Text } = Typography;


function Navbar(props) {
    const { user } = props
    return (
        <div>
            <Header style={{ background: '#F9F9F9', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)', height: '60px', paddingTop: "5px", paddingLeft: "20px", display: "flex", alignItems: 'center' }}>
                <Row style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <Col xs={24} sm={24} md={16} >
                        <Avatar size="large" src={enter} style={{ float: 'left', marginBottom: '10px' }} />
                        <Title level={3} style={{ marginTop: "10px", marginLeft: '-10px' }}> SAFE CHECK IN</Title>
                    </Col>
                    {
                        (user)?<SignedLinks />:null
                    }
                    
                </Row>
            </Header>
            <Header style={{ background: 'rgba(29, 233, 182, 0.23)', height: '50px', display: 'flex', alignItems: "center", paddingLeft: "20px" }}>
                <Avatar size={35} src={family} style={{ float: 'left', }} />
                <Text style={{ color: "#626262", marginLeft: "5px", marginTop: "4px" }}>Safe Check-in & Checkout Voluntary Drive to Expose Potential Covid-19 Spread  |  Stay Home & Stay Safe</Text>
            </Header>
        </div>
    )
}

const mapStateToProps = (state)=>{
    //console.log(state)
    console.log(state)
    return {
        user: state.auth.auth.user
    }
}

export default connect(mapStateToProps)(Navbar)

