import React, { useState } from 'react';
//import AppBar from '@material-ui/core/AppBar';
//import Tab  from '@material-ui/core/Tab';
import Todolist from './Todolist';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const TabApp = () => {

    return (
        <div>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Home" key="1">
                    welcome to home!
                    </TabPane>
                <TabPane tab="My todos" key="2">
                    <Todolist />
                </TabPane>
            </Tabs>
        </div>
    );
}

export default TabApp;