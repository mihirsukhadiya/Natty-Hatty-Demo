import React from "react";
import ActivityCard from "../Components/ActivityCard";
import BankCard from "../Components/BankCard";
import BillingCard from "../Components/BillingCard";
import FamilyCard from "../Components/FamilyCard";
import Header from "../Components/Header";
import Invitation from "../Components/Invitation";
import MenuSelect from "../Components/MenuSelect";
import PageTitleBar from "../Components/PageTitleBar";
import ProfileCard from "../Components/ProfileCard";

const HomePage = () => {
  return (
    <>
      <Header />
      <PageTitleBar />
      <MenuSelect />
      {/* <div className="mt-35 px-20">
        <FamilyCard />
      </div>
      <div className="mt-15 px-20">
        <ProfileCard />
      </div> */}
      {/* <div className="mt-15 px-20">
        <BankCard />
      </div> */}
      {/* <div className="mt-15 px-20">
        <ActivityCard />
      </div> */}
      <div className="mt-15 px-20">
        <Invitation />
      </div>
      {/* <div className="mt-26 px-40 flex">
        <div className="h-full">
          <ProfileCard />
          <div className="flex mt-20 h-full">
            <div className="h-full">
              <BankCard />
              <BillingCard />
            </div>
            <ActivityCard />
          </div>
        </div>
        <div className="h-full">
          <FamilyCard />
          <Invitation />
        </div>
      </div> */}
    </>
  );
};

export default HomePage;
