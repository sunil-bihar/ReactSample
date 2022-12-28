import React, { useEffect, useState } from 'react';
import PrimaryLayout from 'components/Layout/PrimaryLayout';
import HomeAPI from 'services/apis/HomeAPI';
var htmlContent = require('./Home.html');

export default function Home() {
    const [HomeData, setHomeData] = useState([]);

    useEffect(() => {
        HomeAPI.getHomeData().then((response) => {
            console.log(response.data);
            setHomeData(response.data);
        })
    }, []);

    return (
        <>
            <PrimaryLayout title="Home Page">
                <p>UserName = {HomeData.userName}</p>
                <div key={Math.random()} dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </PrimaryLayout>
        </>
    );
};

