import React, { useEffect } from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import { useState } from "react";
import { FastField } from "formik";
import axios from "axios";
import { baseurl } from "../../Service/validate_and_api";
import { RingLoader } from "react-spinners";

const MobileNotification = () => {
  const [notification, setnotification] = useState([]);
  const [notificationnoitem, setnotificationnoitem] = useState(false);
  const [notificationloader, setnotificationloader] = useState(false);
  useEffect(() => {
    setnotificationloader(true);
    axios
      .get(`${baseurl}/transactions/notifications/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("LoggedIntoken")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setnotification(res.data);
        setnotificationloader(false);
        if (res.data.length == 0) {
          setnotificationnoitem(true);
        }
      })
      .catch((e) => {
        console.log(e);
        setnotificationloader(false);
      });
  }, []);

  return (
    <div className="font-poppins">
      <NavBar />
      <div className="w-full lg:hidden mt-24   px-2 xss:px-4 xs:px-6 sm:px-10 md:px-8">
        <button className="bg-[#87ACA3]  text-[#262626] h-10 px-12 font-poppins  rounded-lg font-semibold">
          Back
        </button>
        <div className="text-center text-lg text-[#262626] mt-10 font-poppins font-semibold">
          Notifications
        </div>
        <div className="flex justify-center ">
          {notificationloader ? (
            <RingLoader className="mt-20" />
          ) : notificationnoitem ? (
            <p className="text-center font-medium text-[#009186] italic  mt-20">
              No Notification
            </p>
          ) : (
            notification.map((notification, index) => (
              <div className="flex text-xs xss:text-sm justify-around items-center mt-5">
                <div className="h-3 w-3 bg-[#00913E] rounded-full"></div>
                <div className="border-b-2 pb-3 w-[19rem] border-[#175873] leading-[2]">
                  <p>{notification.detail}</p>
                  <p> {notification.receiver}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileNotification;
