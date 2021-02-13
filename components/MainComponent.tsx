import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import NavigationBar from './NavigationBar';
import DefaultBody from './DefaultBody';

function MainComponent(props: any) {    
    return (
        <Grid>
            <Row size={90} style={{
                borderWidth: 5
            }}>
                <Col size={15}>
                    <NavigationBar props={props.navigation} />
                </Col>
                <Col size={85}>
                    <DefaultBody props={props.navigation} />
                </Col>
            </Row>
        </Grid>
    )
}

export default MainComponent

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        // padding: 8,
        height: "100%",

    },
})