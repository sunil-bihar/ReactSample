import React, { useEffect, useState } from 'react';
import PrimaryLayout from 'components/Layout/PrimaryLayout';
import HomeAPI from 'services/apis/HomeAPI';

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
                <h1>
                    Home Page
                </h1>
                <p>{HomeData.name}</p>
                <p>{HomeData.description}</p>
                <p>{HomeData.userName}</p>
            </PrimaryLayout>
        </>
    );
};