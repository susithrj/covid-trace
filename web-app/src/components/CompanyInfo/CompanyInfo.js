import React, { Component, useEffect, useState } from 'react'
import { Layout, Card, Tabs } from 'antd';
import Navbar from '../UiElements/Navbar/Navbar';
import BottomFooter from '../UiElements/BottomFooter';
import CompanyInfoDetails from './CompanyTabs/CompanyInfoDetails';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { compose } from 'redux'
import BusInfoDetails from './CompanyTabs/BusInfoDetails';
import VehicleInfoDetails from './CompanyTabs/VehicleInfoDetails';
import TrainInfoDetails from './CompanyTabs/TrainInfoDetails';
const { TabPane } = Tabs;
const { Content } = Layout;



function CompanyInfo(props) {

    const [companyDetails, setCompanyDetails] = useState()
    const [selectedType, setSelectedType] = useState('')
    let component = null;

    useEffect(() => {
        console.log(props.user)
        console.log(props.history.location.state)
        //console.log(props.history.location.state)
        props.history.location.state && setCompanyDetails({
            ...props.history.location.state
        })
    }, [props.history.location.state.location_type])

    if (props.user == null) return <Redirect to='/signIn' />

    return (
        <div style={{ background: "#F2F2F2" }}>
            <Layout style={{ minHeight: "100vh" }}>
                <Navbar />
                <Content style={{ padding: '0 50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Card style={{ width: '950px', boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)', marginTop: "20px", height: "598px", position: "sticky" }}>
                        <Tabs tabPosition='left'>
                            <TabPane tab="Details" key="1">
                                {
                                    {
                                        'sc_location': <CompanyInfoDetails data = {props.history.location.state}/>,
                                        'sc_bus': <BusInfoDetails data = {props.history.location.state}/>,
                                        'sc_vehicle':<VehicleInfoDetails data = {props.history.location.state} />,
                                        'sc_train':<TrainInfoDetails data = {props.history.location.state}/>
                                    }[props.history.location.state.location_type]
                                }
                            </TabPane>
                            <TabPane tab="Tab 2" key="2">
                                Content of Tab 2
                            </TabPane>
                            <TabPane tab="Tab 3" key="3">
                                Content of Tab 3
                            </TabPane>
                        </Tabs>
                    </Card>
                </Content>
                <BottomFooter />
            </Layout>
        </div>
    )
}


const mapStateToProps = (state) => {
    //console.log(state)
    console.log(state)
    return ({
        ...state,
        user: state.auth.auth.user
    })
}

export default compose(
    connect(mapStateToProps),
)(CompanyInfo)

//export default CompanyInfo

//export default connect(mapStateToProps)(CompanyInfo)