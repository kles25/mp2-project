import InProgress from "../inprogress/InProgress";
import "./historynavbar.css";
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CustomTabPanel from "../customtabpanel/CustomTabPanel";
import Completed from "../completed/Completed";
import ListAltIcon from '@mui/icons-material/ListAlt';



function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function HistoryNavbar() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="pages-row hn-section-content">
            <div className="pages-col-12">
                <div className="hn-header-holder">
                    <h3 className="hn-title">Recent Activities</h3>
                    <ListAltIcon />
                </div>
                <Tabs className="pages-row" value={value} onChange={handleChange}>
                    <Tab className="pages-col-6 hn-nav-links" label="In Progess" {...a11yProps(0)} />
                    <Tab className="pages-col-6 hn-nav-links" label="Completed" {...a11yProps(1)} />
                </Tabs>
            </div>
            <div className="pages-col-12">
                <CustomTabPanel value={value} index={0}>
                    <InProgress />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Completed />
                </CustomTabPanel>
            </div>
        </div>
    )
}

export default HistoryNavbar;
