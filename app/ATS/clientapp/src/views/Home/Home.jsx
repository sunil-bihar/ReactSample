import React, { useEffect, useState } from "react";
import PrimaryLayout from "components/Layout/PrimaryLayout";
import HomeAPI from "services/apis/HomeAPI";
// var htmlContent = require("./Home.html");

export default function Home() {
  const [HomeData, setHomeData] = useState([]);

  useEffect(() => {
    HomeAPI.getHomeData().then((response) => {
      console.log(response.data);
      setHomeData(response.data);
    });
  }, []);

  return (
    <>
      <PrimaryLayout title="Home Page">
        <p>UserName = {HomeData.userName}</p>
        <h1>Home Page Data</h1>
        <p>Name = {HomeData.name}</p>
        <p>Description = {HomeData.description}</p>
        <p>UserName = {HomeData.userName}</p>
      </PrimaryLayout>
    </>
  );
}
