import React, { useState } from "react";
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
  const [selectedMenu, setSelectedMenu] = useState("profile");
  return (
    <>
      <div className="pb-40 xs:hidden slg:block hidden">
        <Header />
        <PageTitleBar />
        <div className="grid grid-cols-16 gap-28 lg:px-40 px-20 mt-25">
          <div className="flex flex-col col-span-12">
            <div>
              <ProfileCard />
            </div>
            <div className="grid grid-cols-16 gap-20 mt-25">
              <div className="col-span-9">
                <BankCard />
                <BillingCard />
              </div>
              <div className="col-span-7">
                <ActivityCard />
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-4">
            <FamilyCard />
            <Invitation />
          </div>
        </div>
      </div>
      <div className="pb-40 xs:hidden md:block slg:hidden">
        <Header />
        <div className="grid grid-cols-16 gap-16 mt-40 px-20">
          <div className="col-span-10">
            <ProfileCard />
          </div>
          <div className="col-span-6">
            <FamilyCard />
          </div>
        </div>
        <div className="grid grid-cols-16 gap-16 mt-40 px-20">
          <div className="col-span-8">
            <BankCard />
          </div>
          <div className="col-span-8">
            <BillingCard />
          </div>
        </div>
        <div className="grid grid-cols-16 gap-16 mt-40 px-20">
          <div className="col-span-8">
            <ActivityCard />
          </div>
          <div className="col-span-8">
            <Invitation />
          </div>
        </div>
      </div>
      <div className="pb-40 xs:block md:hidden">
        <Header />
        <PageTitleBar />
        <MenuSelect
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
        <div className="px-20">
          {selectedMenu == "profile" && (
            <>
              <div>
                <FamilyCard />
              </div>
              <div className="mt-20">
                <ProfileCard />
              </div>
            </>
          )}
          {selectedMenu == "wallet" && (
            <>
              <div>
                <BankCard />
              </div>
            </>
          )}
          {selectedMenu == "activities" && (
            <>
              <div>
                <ActivityCard />
              </div>
            </>
          )}
          {selectedMenu == "invitation" && (
            <>
              <div className="mt-20">
                <Invitation />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
