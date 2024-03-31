import { Card } from "@mui/material";
import React from "react";
import accountIcon from "../../../../../public/portfolioImages/mdi_accountIcon.svg";
import mdisearchIcon from "../../../../../public/portfolioImages/mdi_feature-searchIcon.svg";
import preferencesIcon from "../../../../../public/portfolioImages/preferencesIcon.svg";
import searchIcon from "../../../../../public/portfolioImages/teenyicons_searchIcon.svg";
import usersIcon from "../../../../../public/portfolioImages/usersIcon.svg";
import feedbackIcon from "../../../../../public/portfolioImages/feedbackIcon.svg";
import eyeIcon from "../../../../../public/portfolioImages/eyeIcon.svg";
import starIcon from "../../../../../public/portfolioImages/starIcon.svg";
import Image from "next/image";
import Link from "next/link";

function Profile({ item }) {
  return (
    <div className="mb-2 mt-3 ">
      <Card
        className="border shadow-none py-9 px-3 lg:w-[96%] w-full"
        key={item.id}
      >
        <Link href={item.link} >
        <div className="shadow-sm w-9 h-9 border rounded-full flex justify-center items-center">
          <Image className="w-5 h-5"  src={item.imgsrc} alt="" />  

        </div>
          <p className="text-lg mb-3 mt-2 text-black">{item.title}</p>
          <p className="text-sm text-black text-start">{item.discription}</p>
        </Link>
      </Card>
    </div>
  );
}

function ProfileWrapper() {
  return (
    <div className="walletcard-wrapp mt-3">
      <h1 className="text-start text-black text-[24px] font-normal">Financials</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {ProfileData?.map((item, index) => (
          <Profile item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ProfileWrapper;


const ProfileData = [
    {
      id: 1,
      title: "Property Intro",
      discription: "View your tire progression and benefits",
      imgsrc: searchIcon,
      link: "",
    },
    {
      id: 2,
      title: "Account Information",
      discription: "Viewand manage your personal details",
      imgsrc: accountIcon,
      link: "/admin/profileInfo",
    },
    {
      id: 3,
      title: "Preferences",
      discription: "Customize Account",
      imgsrc: preferencesIcon,
      link: "/admin/preferences",
    },
    {
      id: 4,
      title: "How it works",
      discription: "Invite your friends and receive rewards",
      imgsrc: eyeIcon,
      link: "",
    },
    {
      id: 5,
      title: "Glossary",
      discription: "Share your thoughts request feature",
      imgsrc: mdisearchIcon,
      link: "",
    },
    {
      id: 6,
      title: "Refer a friend",
      discription: "Invite your friends and receive rewards",
      imgsrc: usersIcon,
      link: "",
    },
    {
      id: 7,
      title: "Submit Feedback",
      discription: "Share your thoughts request feature",
      imgsrc: feedbackIcon,
      link: "",
    },
    {
      id: 8,
      title: "Rate us",
      discription: "Your review matters to us",
      imgsrc: starIcon,
      link: "",
    },
  ];