import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { baseurl } from "../../Service/validate_and_api";
import bell from "../../assets/bell.svg";
import { RingLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const NotificationComponent = (props) => {
  const [showNotification, setshowNotification] = useState(false);
  const [notificationloader, setnotificationloader] = useState(false);
  const [notification, setnotification] = useState([]);
  const [notificationnoitem, setnotificationnoitem] = useState(false);
  const fetchNotification = () => {
    setshowNotification(!showNotification);
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
  };
  // close notification and buttons
  let showNotificationRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!showNotificationRef.current.contains(e.target)) {
        setshowNotification(false);
      }
    });
    return () => {
      document.removeEventListener("mousedown", (e) => {
        if (!showNotificationRef.current.contains(e.target)) {
          setshowNotification(false);
        }
      });
    };
  }, []);
  const navigate = useNavigate();
  return (
    <div className="float-right  items-center" ref={showNotificationRef}>
      <img
        onClick={() => navigate("/mobileviewofnotification")}
        src={bell}
        alt=""
        className="object-contain w-[1.6rem] sm:w-[2.3rem] md:w-[2.5rem]  lg:hidden"
      />
      <span
        onClick={() => fetchNotification()}
        className=" text-[#009186]  cursor-pointer hidden lg:flex py-2  "
      >
        <img
          src={bell}
          alt=""
          className="object-contain w-[1.6rem] mxl:w-[2rem] mr-3"
        />
        <p className="font-semibold mxl:text-xl">Notifications</p>
      </span>
      {/* not className is for shadow */}
      {/* top-[10rem] */}
      {showNotification ? (
        <div
          className={
            notificationloader
              ? `absolute bg-[#D1DEE3] not flex justify-center items-center  h-[26rem] w-[24rem] z-[20] right-11 rounded-[11.8392px] px-4 py-2 overflow-y-auto`
              : notificationnoitem
              ? `absolute bg-[#D1DEE3] not flex justify-center items-center  h-[26rem] w-[24rem] z-[20] right-11 rounded-[11.8392px] px-4 py-2 overflow-y-auto`
              : notification.length !== 0
              ? "absolute bg-[#D1DEE3] not flex flex-col pt-10  h-[26rem] w-[24rem] z-[20] top-[7.2rem] right-11 rounded-[11.8392px] px-4 py-2 overflow-y-auto"
              : "hidden"
          }
        >
          <p className="text-[#262626] text-sm font-semibold ml-8 absolute top-0 left-2  mt-5">
            Notifications
          </p>
          {notificationloader ? (
            <RingLoader />
          ) : notificationnoitem ? (
            <p className="text-center font-medium text-[#009186] italic  ">
              .....No Notification
            </p>
          ) : (
            notification.map((notification, index) => (
              <div
                key={index}
                className="flex text-xs justify-around items-center mt-5"
              >
                <div className="h-3 w-3 bg-[#00913E] rounded-full"></div>
                <div className="border-b-2 w-[19rem] border-[#175873] leading-[2]">
                  {notification.detail}:{notification.receiver}
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NotificationComponent;
