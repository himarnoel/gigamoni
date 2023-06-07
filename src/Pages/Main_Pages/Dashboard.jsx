import React, { useEffect, useRef, useState } from "react";
import DashNav from "../../Components/DashBoardComponents/DashNav";
import bell from "../../assets/bell.svg";
import caller from "../../assets/Dashboard/caller.svg";
import { GrSearch } from "react-icons/gr";
import search from "../../assets/search.svg";
import { RiArrowDownSLine } from "react-icons/ri";
import card from "../../assets/carddash.png";
import { BiTransfer } from "react-icons/bi";
import cardformobilescreen from "../../assets/Dashboard/mobilecard.svg";
import axios from "axios";
import { baseurl } from "../../Service/validate_and_api";
import { BsFillCalendar2Fill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import { RiCloseCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { RingLoader, SyncLoader } from "react-spinners";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [first, setfirst] = useState("");
  const [loaderror, setloaderror] = useState(false);
  const [norecenttrans, setnorecenttrans] = useState(false);
  const [load, setload] = useState(false);
  const [trans, Settrans] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [showNotification, setshowNotification] = useState(false);
  const [showBeneficiarieslist, setshowBeneficiarieslist] = useState(false);
  const [showTransactionList, setshowTransactionList] = useState(true);
  const [beneficiarieslist, setbeneficiarieslist] = useState([]);
  const [date, setdate] = useState(false);
  const [openDate, setopenDate] = useState(false);
  const [buttons, setbuttons] = useState(false);
  const [beneficiaries, setbeneficiaries] = useState(false);
  const [beneficiariesOverlay, setbeneficiariesOverlay] = useState(false);
  const [notification, setnotification] = useState([]);
  const [notificationnoitem, setnotificationnoitem] = useState(false);
  const [norecentbeneficiaryoverlay, setnorecentbeneficiaryoverlay] =
    useState(false);
  const [loader, setloader] = useState(false);
  const [loaderrorbeneficiaryoverlay, setloaderrorbeneficiaryoverlay] =
    useState(false);
  const [notificationloader, setnotificationloader] = useState(false);

  const navigate = useNavigate();
  const safeDocument = typeof document !== "undefined" ? document : {};
  const { body } = safeDocument;

  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
    const val = localStorage.getItem("LoggedIntoken");
    if (!val) {
      navigate("/login");
    } else {
      localStorage.removeItem("transactiondata");
      localStorage.removeItem("savedBeneficiary");
      localStorage.removeItem("Send");
      setload(true);
      axios
        .get(`${baseurl}/transactions/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem("LoggedIntoken")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          Settrans(res.data);
          setload(false);
          setloaderror(false);
          if (res.data.length == 0) {
            setnorecenttrans(true);
          }
        })
        .catch((e) => {
          console.log(e);
          setloaderror(true);
          setload(false);
          if (e.response.data.detail == "Invalid token.") {
            localStorage.removeItem("LoggedIntoken");
            toast.warning("Session expired  login again", {
              toastId: 1,
            });
            navigate("/login");
          }
        });
    }
  }, []);
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
  const blockScroll = () => {
    window.scrollTo({ top: 0, left: 0 });
    body.style.overflow = "hidden";
  };
  const allowScroll = () => {
    body.style.overflow = "";
  };
  const showBeneficiaries = () => {
    setbuttons(false);
    blockScroll();
    setbeneficiariesOverlay(true);
    setloader(true);

    axios
      .get(`${baseurl}/transactions/beneficiary/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("LoggedIntoken")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setloader(false);
        if (res.data.length == 0) {
          setnorecentbeneficiaryoverlay(true);
        } else {
          setbeneficiarieslist(res.data);
        }
      })
      .catch((e) => {
        console.log(e);
        setloaderrorbeneficiaryoverlay(true);
        setloader(false);
        if (e.response.data.detail == "Invalid token.") {
          localStorage.removeItem("LoggedIntoken");
          toast.warning("Session expired  login again", {
            toastId: 1,
          });
          navigate("/login");
        } else {
          toast.error("An error occurred");
        }
      });
  };
  const mobileShowBeneficiaries = () => {
    setbuttons(false);
    navigate("/beneficiary");
  };
  const newReceiver = () => {
    setbuttons(false);
    navigate("/pending");
  };
  const closeBeneficiarises = () => {
    setbeneficiariesOverlay(false);
    allowScroll();
  };
  const fetchTransaction = () => {
    setnorecenttrans(false);
    setshowBeneficiarieslist(false);
    setshowTransactionList(true);
    if (trans.length == 0) {
      axios
        .get(`${baseurl}/transactions/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem("LoggedIntoken")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          Settrans(res.data);
          setload(false);
          setloaderror(false);
          if (res.data.length == 0) {
            setnorecenttrans(true);
          }
        })
        .catch((e) => {
          console.log(e);
          setloaderror(true);
          setload(false);
          if (e.response.data.detail == "Invalid token.") {
            localStorage.removeItem("LoggedIntoken");
            toast.warning("Session expired  login again", {
              toastId: 1,
            });
            navigate("/login");
          } else {
            toast.error("An error occurred");
          }
        });
    }
  };

  const transactionDetail = (item) => {
    console.log(item);
    localStorage.setItem("transactiondata", JSON.stringify(item));
    if (item.status == "Pending" || item.status == "Incomplete") {
      navigate("/pending");
    } else if (item.status == "Update") {
      navigate("/update", { state: item });
    } else if (item.status == "In Progress") {
      if (item.paymentMethod == "Bank Transfer") {
        navigate("/banktransfer", { state: item });
      } else {
        navigate("/cardpayment", { state: item });
      }
    }
  };
  const fetchBeneficiaries = () => {
    setload(true);
    setnorecenttrans(false);
    setshowTransactionList(false);
    setshowBeneficiarieslist(true);
    if (beneficiarieslist.length == 0) {
      axios
        .get(`${baseurl}/transactions/beneficiary/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem("LoggedIntoken")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setbeneficiarieslist(res.data);
          setloaderror(false);
          setload(false);
          if (res.data.length == 0) {
            setnorecenttrans(true);
          }
        })
        .catch((e) => {
          console.log(e);
          setloaderror(true);
          setload(false);
          if (e.response.data.detail == "Invalid token.") {
            localStorage.removeItem("LoggedIntoken");
            toast.warning("Session expired  login again", {
              toastId: 1,
            });
            navigate("/login");
          } else {
            toast.error("An error occurred");
          }
        });
    }
  };

  const searchTransaction = (val) => {
    Settrans([]);
    setload(true);
    axios
      .get(`${baseurl}/transactions/?search=${val}`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("LoggedIntoken")}`,
        },
      })
      .then((res) => {
        console.log(res);
        Settrans(res.data);
        setload(false);
      })
      .catch((e) => {
        console.log(e);
        setload(false);
        if (e.response.data.detail == "Invalid token.") {
          localStorage.removeItem("LoggedIntoken");
          toast.warning("Session expired  login again", {
            toastId: 1,
          });
          navigate("/login");
        } else {
          toast.error("An error occurred");
        }
      });
  };
  const beneficiaryToPending = (item) => {
    const data = {
      receiverName: item.fullName,
      receiverBankName: item.bankName,
      receiverBankAddress: item.bankAddress,
      receiverEmail: item.email,
      receiverSwiftCode: item.swiftCode,
      receiverPhone: item.phoneNumber,
      receiverCountry: item.country,
      receiverIban: item.iban,
      receiverAcctNo: item.acctNo,
      receiverAcctName: item.acctName,
    };
    body.style.overflow = "";
    localStorage.setItem("savedBeneficiary", JSON.stringify(data));
    navigate("/pending");
  };
  // close notification and buttons
  let showNotificationRef = useRef();
  let showButtonsRef = useRef();

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

  useEffect(() => {
    const performer = (e) => {
      if (!showButtonsRef.current.contains(e.target)) {
        setbuttons(false);
      }
    };
    document.addEventListener("mousedown", performer);

    return () => {
      document.removeEventListener("mousedown", performer);
    };
  }, []);

  const GoToTransaction = (value) => {
    let id = value.split(" ")[0];
    console.log(id);
  };


  return (
    <div className="font-poppins bg-[#F8F8FF] overflow-y-hidden ">
      <div
        // onClick={() => closeBeneficiarises()}
        className={
          beneficiariesOverlay
            ? `absolute h-screen  w-full top-0 bg-[#262626]/[0.8] z-[90] sm:flex items-center justify-center hidden`
            : "hidden"
        }
      >
        <div
          className={`relative 
          ${
            loader
              ? "flex justify-center items-center"
              : norecentbeneficiaryoverlay
              ? "flex justify-center items-center"
              : loaderrorbeneficiaryoverlay
              ? "flex justify-center items-center"
              : ""
          }
          xl:w-[30rem] mxl:w-[40rem] sm:h-[30rem] sm:w-[30rem] md:h-[35rem] md:w-[33rem] mxl:h-[40rem]  xl:h-[29rem] bg-[#DAF2F1] rounded-lg px-3 flex  flex-col py-4 mxl:py-10`}
        >
          <RiCloseCircleFill
            onClick={() => closeBeneficiarises()}
            className="absolute top-3 right-4 cursor-pointer text-[#009186] text-xl "
          />
          <p className="text-[#262626] font-semibold text-center   text-lg mt-5 absolute top-3 right-0 left-0 ">
            Beneficiaries
          </p>
          {loader ? (
            <RingLoader />
          ) : norecentbeneficiaryoverlay ? (
            <p className="text-yellow-500 font-semibold ">No beneficiary</p>
          ) : loaderrorbeneficiaryoverlay ? (
            <p className="text-red-500 font-semibold">An error occurred</p>
          ) : (
            <div className="   h-[86%]  overflow-auto mt-5 px-8 bg-">
              {beneficiarieslist.map((item, i) => (
                <div
                  onClick={() => beneficiaryToPending(item)}
                  key={i}
                  className="h-[6rem] cursor-pointer  border-2 border-[#009186] rounded-lg bg-white mt-5 text-base  justify-between pt-5 pb-3 px-2 flex flex-col"
                >
                  <p className="text-[#175873] font-semibold">
                    {item.fullName}
                  </p>
                  <div className="flex font-[#262626] text-xs">
                    <p className="mr-4">{item.bankName}</p>
                    <p>{item.acctNo}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <DashNav class="fixed top-0 w-full z-[30]" />
      <div className="2xl:px-[10rem] xl:px-[5rem]  px-2 xss:px-4 xs:px-6 sm:px-10 md:px-20   flex flex-col justify-center items-center gap-y-8 pb-8   lg:px-10 mt-20 mxl:pt-20">
        <div
          className="float-right self-end items-center"
          ref={showNotificationRef}
        >
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

          {showNotification ? (
            <div
              className={
                notificationloader
                  ? "absolute bg-[#D1DEE3] not flex justify-center items-center  h-[26rem] w-[24rem] z-[20] top-[7.2rem] right-11 rounded-[11.8392px] px-4 py-2 overflow-y-auto"
                  : notificationnoitem
                  ? "absolute bg-[#D1DEE3] not flex justify-center items-center  h-[26rem] w-[24rem] z-[20] top-[7.2rem] right-11 rounded-[11.8392px] px-4 py-2 overflow-y-auto"
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
                    onClick={() => GoToTransaction(notification.detail)}
                    key={index}
                    className="flex text-xs justify-around items-center mt-5 cursor-pointer"
                  >
                    <div className="h-3 w-3 bg-[#00913E] rounded-full"></div>
                    <div className="border-b-2 w-[19rem] border-[#175873] leading-[2] ">
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
        <div className="w-full lg:hidden flex justify-between items-center mt-10">
          {" "}
          <button className="sm:py-2 py-1 px-10 text-sm sm:w-[20rem] lg:w-full  mxl:py-[12px] mxl:text-xl  flex    mxl:mt-[6rem] justify-center items-center text-[#009186]    rounded-lg border-2 border-[#009186]  ">
            Customer Support
            <img
              src={caller}
              alt=""
              className="ml-2 w-[1.8rem] sm:w-[2rem] mxl:w-[2.8rem]"
            />
          </button>
          <img
            onClick={() => navigate("/mobileviewofnotification")}
            src={bell}
            alt=""
            className="object-contain w-[1.6rem] sm:w-[2.3rem] md:w-[2.5rem] "
          />
        </div>

        <div className="flex  lg:flex-row flex-col-reverse w-full justify-between mxl:pt-20">
          <div className=" mt-10 lg:w-[27rem] xl:w-[34rem]">
            <span className="flex justify-between sm:justify-start">
              <p
                onClick={() => fetchTransaction()}
                className={
                  showTransactionList
                    ? `text-[#175873] font-medium text-sm sm:text-base cursor-pointer`
                    : "text-[#009186] font-medium text-xs sm:text-sm cursor-pointer"
                }
              >
                Recent Transactions
              </p>
              <p
                onClick={() => fetchBeneficiaries()}
                className={
                  showBeneficiarieslist
                    ? `text-[#175873] font-medium sm:ml-[10rem] lg:ml-[5rem] text-sm sm:text-base cursor-pointer`
                    : `text-[#009186] font-medium sm:ml-[10rem] lg:ml-[5rem] text-xs sm:text-sm cursor-pointer`
                }
              >
                Beneficiaries
              </p>
            </span>

            <div className="flex items-center mt-5 lg:mt-8 sm:w-full  justify-between lg:w-fit">
              <div className="relative  ">
                <input
                  onChange={(e) => searchTransaction(e.target.value)}
                  type="text"
                  className="w-[12rem] sm:w-[26rem] lg:w-fit  pl-3 lg:pr-[5rem] xl:pr-[10rem] py-3 text-sm placeholder:text-[#87ACA3] placeholder:text-xs rounded-[8px] border-[2px] focus:outline-none border-[#009186] focus:border-[#009186]  border-solid
            "
                  placeholder="Search transcations"
                />
                <img
                  src={search}
                  alt=""
                  className="object-contain w-[1.3rem] absolute inset-y-3 right-[1.2rem]"
                />
              </div>
              <div
                className={showTransactionList ? "relative lg:ml-8" : "hidden"}
              >
                <DatePicker
                  open={openDate}
                  className="w-[5rem] xs:w-[7rem] sm:w-[8rem] md:w-[10rem] lg:w-full px-2  py-3 text-sm placeholder:text-[#87ACA3] placeholder:text-xs rounded-[8px] border-[2px] focus:outline-none border-[#009186] focus:border-[#009186]  border-solid"
                  placeholderText="Date range"
                  selected={startDate}
                  onInputClick={() => setopenDate(!openDate)}
                  onChange={(date) => setStartDate(date)}
                  onClickOutside={() => setopenDate(!openDate)}
                />
                <BsFillCalendar2Fill
                  onClick={() => setopenDate(!openDate)}
                  className="text-[#009186] inset-y-4 absolute right-3 bg-white"
                />
              </div>
              <div
                className={
                  showBeneficiarieslist ? "relative lg:ml-12" : "hidden"
                }
              >
                <button
                  onClick={() => navigate("/singlebeneficiaryadd")}
                  className={
                    "w-[5rem] xs:w-[7rem] sm:w-[8rem] md:w-[10rem] lg:w-[8rem] px-2  py-3 text-sm placeholder:text-[#87ACA3] placeholder:text-xs rounded-[8px] border-[2px] focus:outline-none border-[#009186] focus:border-[#009186]  border-solid"
                  }
                >
                  Add
                </button>
              </div>
            </div>

            <div
              className={
                showBeneficiarieslist
                  ? `bg-[#DAF2F1] ${
                      load
                        ? "flex items-center justify-center"
                        : loaderror
                        ? "flex items-center justify-center"
                        : norecenttrans
                        ? "flex items-center justify-center"
                        : ""
                    }  overflow-auto rounded-lg w-full h-[20rem] sm:h-[30rem] lg:h-[22.6rem] mxl:h-[42.8rem] mt-8 pr-20 pl-4 border-[#009186]`
                  : "hidden"
              }
            >
              {load ? (
                <RingLoader className="text-[#009186] " />
              ) : loaderror ? (
                <p className="text-red-500 font-semibold">An error occurred</p>
              ) : norecenttrans ? (
                <p className="text-yellow-500 font-semibold ">No beneficiary</p>
              ) : (
                beneficiarieslist.map((item, i) => (
                  <div
                    key={i}
                    onClick={() =>
                      navigate("/singlebeneficiaryedit", { state: item })
                    }
                    className="rounded-lg lg:py-1 lg:px-[0.24rem] cursor-pointer  flex flex-col justify-center gap-y-4 border-2 border-[#009186] text-sm mt-8 bg-[#F8F8FF] px-3  xl:px-3   py-1 min-h-[12rem] sm:min-h-[7rem]"
                  >
                    <p className="text-[#175873] font-semibold">
                      {item.acctName}
                    </p>
                    <div className="flex w-full lg:w-[20rem] justify-between text-[#262626]">
                      <p className="">{item.bankName}</p>
                      <p className="s">{item.acctNo}1234567</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div
              className={
                showTransactionList
                  ? `bg-[#DAF2F1] ${
                      load
                        ? "flex items-center justify-center"
                        : loaderror
                        ? "flex items-center justify-center"
                        : norecenttrans
                        ? "flex items-center justify-center"
                        : ""
                    }  overflow-auto rounded-lg w-full h-[20rem] sm:h-[30rem] lg:h-[22.6rem] mxl:h-[42.8rem] mt-8 px-4 border-[#009186]`
                  : "hidden"
              }
            >
              {/*  */}
              {load ? (
                <RingLoader className="text-[#009186] " />
              ) : loaderror ? (
                <p className="text-red-500 font-semibold">An error occurred</p>
              ) : norecenttrans ? (
                <p className="text-yellow-500 font-semibold">
                  No recent transaction
                </p>
              ) : (
                trans.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => transactionDetail(item)}
                    className="rounded-lg lg:py-1 lg:px-[0.24rem] cursor-pointer mb-5 flex flex-col justify-between border-2 border-[#009186] text-sm mt-8 bg-[#F8F8FF] px-3  xl:px-3  py-1 min-h-[12rem] sm:min-h-[7rem]"
                  >
                    <span className="hidden sm:flex items-center justify-between mt-2">
                      <p className=" text-[#175873] text-xs">
                        {item.transactionCreatedDate}
                      </p>
                      <p className="text-[#175873] font-semibold">
                        {item.receiverBankName}, {item.receiverCountry}
                      </p>
                      <p className="text-[#175873] font-semibold">
                        ${item.amountReceived}
                      </p>
                    </span>
                    <div className="hidden  sm:flex  w-full justify-between items-center ">
                      <p className="text-xs">{item.receiverBankName}</p>
                      <p className="text-xs">{item.transactionID}</p>
                      {/* Dummy values to help design */}
                      <p className="text-[#F8F8FF]">12345678901234</p>
                      {/* Dummy values to help design */}
                    </div>
                    <span className="hidden sm:flex text-xs justify-between items-center">
                      <p
                        className={
                          item.status == "In Progress"
                            ? `text-[#FBBC05]`
                            : item.status == "Completed"
                            ? `text-[#00913E]`
                            : item.status == "Update"
                            ? `text-[#D80010]`
                            : "text-[#5D5FEF]" //Pending
                        }
                      >
                        {item.status}
                      </p>
                      <p className="text-[#262626] ">{item.paymentMethod}</p>
                      <p className="text-[#009186] ">see more</p>
                    </span>
                    {/* FOR MOBILE SCREEN */}
                    <span className="text-[#175873] flex sm:hidden mt-3">
                      {item.transactionCreatedDate}
                    </span>
                    <span className="text-[#175873] font-semibold flex sm:hidden  justify-between">
                      <p>Lorem Ipsum University, London </p>
                      <p> ${item.amountReceived}</p>
                    </span>
                    <span className="flex sm:hidden text-xs justify-between text-[#262626]">
                      <p className="ss">{item.receiverBankName}</p>
                      <p>{item.transactionID}</p>
                      <p className="text-white text-xs">Cw224</p>
                    </span>
                    <span className="flex sm:hidden justify-between text-xs">
                      <p
                        className={
                          item.status == "In Progress"
                            ? `text-[#FBBC05]`
                            : item.status == "Completed"
                            ? `text-[#00913E]`
                            : item.status == "Update"
                            ? `text-[#D80010]`
                            : "text-[#5D5FEF]" //Pending
                        }
                      >
                        {item.status}
                      </p>
                      <p className="ss">{item.paymentMethod}</p>
                      <p className="text-white text-xs">Card Payment</p>
                    </span>
                    <p className="flex sm:hidden text-[#009186] text-xs">
                      see more
                    </p>
                    {/* The end for the Mobile screen */}
                  </div>
                ))
              )}
            </div>
          </div>
          {/* for the second part */}
          <div className="mt-10 ">
            <div className="relative  z-[10] w-full h-[12rem] sm:h-[14rem]  md:h-[15rem] mxl:w-[35rem] lg:h-[9.9rem] mxl:h-[15rem] flex sm:items-center justify-between rounded-2xl sm:rounded-3xl bg-[#87ACA3] pl-3 sm:pl-8 lg:pl-5">
              <span className=" sm:w-[18rem] lg:w-[16rem] mxl:w-[18rem] mt-5 sm:mt-0">
                <p className="text-white text-sm sm:text-lg lg:text-sm sm:font-medium mxl:text-lg ">
                  International transactions has never been easier
                </p>
                <button
                  onClick={() => setbuttons(!buttons)}
                  className="px-[1rem] py-[0.6rem]   sm:px-[3rem] sm:py-[0.7rem] lg:px-[2rem] lg:py-[0.6rem] mt-8 text-xs sm:mt-6 sm:text-sm rounded-lg text-white bg-[#009186] flex items-center"
                >
                  Send Money
                  <RiArrowDownSLine className="text-xl ml-2 " />
                </button>
                <div
                  ref={showButtonsRef}
                  className={
                    buttons
                      ? ` duration-700 ease-in-out  bg-[#F8F8FF] shadow h-[8rem] sm:h-[9rem] sm:mb-[-9rem] md:h-[10rem] md:mb-[-10rem] xl:h-[9rem]   xl:mb-[-9rem] mxl:mb-[-12.9rem]  sm:w-[17rem]  mxl:h-[13rem] mxl:w-[17rem] flex justify-around flex-col px-4  rounded-lg left-1  `
                      : " hidden "
                  }
                >
                  <button
                    onClick={() => showBeneficiaries()}
                    className="px-[1rem] hidden sm:block py-[0.5rem] text-xs sm:text-base sm:py-[0.6rem]  md:py-[0.5rem] lg:py-[0.5rem] mxl:py-[0.8rem] w-full  rounded-lg text-[#009186] border-2 font-semibold border-[#009186]"
                  >
                    Saved Beneficiary
                  </button>
                  {/* Mobile */}
                  <button
                    onClick={() => mobileShowBeneficiaries()}
                    className="px-[1rem] sm:hidden py-[0.5rem] text-xs sm:text-base sm:py-[0.6rem]  md:py-[0.5rem] lg:py-[0.5rem] mxl:py-[0.8rem] w-full  rounded-lg text-[#009186] border-2 font-semibold border-[#009186]"
                  >
                    Saved Beneficiary
                  </button>
                  <button
                    onClick={() => newReceiver()}
                    className="px-[1rem] py-[0.5rem] text-xs sm:text-base sm:py-[0.6rem]  md:py-[0.5rem] lg:py-[0.5rem] mxl:py-[0.8rem] w-full  rounded-lg text-[#009186] border-2 font-semibold border-[#009186]"
                  >
                    New Receiver
                  </button>
                </div>
              </span>
              <img
                src={card}
                alt=""
                className="object-contain sm:block hidden  sm:w-[17rem] md:w-[18rem] lg:w-[12rem] mxl:w-[18rem]  mxl:mt-[-2.7rem]  sm:mt-[-2.4rem]  md:mt-[-2.7rem] lg:mt-[-1.6rem] mr-[-0.3rem]"
              />
              <img
                src={cardformobilescreen}
                alt=""
                className="sm:hidden object-contain w-[10rem] mt-[1rem]"
              />
            </div>
            <div className="bg-[#C4C4C4] px-3 sm:px-6  mt-10 rounded-lg h-[15rem]  sm:h-[15rem] lg:h-[13rem]  mxl:h-[16rem] mxl:mt-[6rem] py-2 mxl:py-5 relative">
              <div className="w-full px-4">
                <div className=" mx-auto sm:mx-0 sm:w-full text-[#707070] font-semibold bg-white py-3 sm:py-4 lg:py-3 text-center flex justify-center items-center rounded-lg mt-4 lg:mt-3">
                  FX Rates Today
                </div>
              </div>
              <div className=" flex items-center justify-between mt-5 sm:mt-6   lg:mt-4 mxl:mt-8">
                <span className="flex ">
                  <span className="relative z-0">
                    <select
                      type="text"
                      id="sendingcurrency"
                      value="NGN"
                      className={
                        " font-poppins pl-1 sm:pl-3 pb-0 h-[52px] w-[3.8rem] sm:w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#707070]   rounded-[6px] border-solid border-[#F8F8FF] border-[2px] sm:border-[4px] rounded-r-none  sm:border-r-2 border-r-2 appearance-none   focus:outline-none focus:ring-0 focus:border-[#F8F8FF]"
                        //placeholder=" "
                      }
                      placeholder="receivingcountry"
                    >
                      <option value="NGN" disabled>
                        NGN
                      </option>
                    </select>
                    <RiArrowDownSLine className="pointer-events-none cursor-pointer text-xl sm:text-4xl absolute  inset-y-7  sm:inset-y-5 right-0 flex items-center pr-1 sm:px-2 text-[#707070]" />
                  </span>
                  <input
                    type="number"
                    id="sendamount"
                    placeholder="00000"
                    disabled
                    className={
                      " font-poppins spin-button-none  pl-1 sm:pl-3 pb-0 h-[52px] w-[3.5rem] sm:w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#707070] text-[#707070]  rounded-[6px] border-solid border-[#F8F8FF] border-[2px] sm:border-[4px] rounded-l-none border-l-0 sm:border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186]"
                    }
                  />
                </span>
                <BiTransfer className="text-3xl text-[#F8F8FF] mt-4 sm:mt-6" />
                <span className="flex ">
                  <span className="relative z-0">
                    <select
                      type="text"
                      id="sendingcurrency"
                      value="NGN"
                      className={
                        " font-poppins pl-1 sm:pl-3 pb-0 h-[52px] w-[3.8rem] sm:w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#707070]   rounded-[6px] border-solid border-[#F8F8FF] border-[2px] sm:border-[4px] rounded-r-none border-r-2 sm:border-r-2 appearance-none   focus:outline-none focus:ring-0 focus:border-[#F8F8FF]"
                        //placeholder=" "
                      }
                      placeholder="receivingcountry"
                    >
                      <option value="NGN" disabled>
                        NGN
                      </option>
                    </select>
                    <RiArrowDownSLine className="pointer-events-none cursor-pointer text-xl sm:text-4xl absolute  inset-y-7  sm:inset-y-5 right-0 flex items-center pr-1 sm:px-2 text-[#707070]" />
                  </span>
                  <input
                    type="number"
                    id="sendamount"
                    placeholder="00000"
                    disabled
                    className={
                      " font-poppins spin-button-none  pl-1 sm:pl-3 pb-0 h-[52px] w-[3.5rem] sm:w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#707070] text-[#707070]  rounded-[6px] border-solid border-[#F8F8FF] border-[2px] sm:border-[4px] rounded-l-none border-l-0 sm:border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186]"
                    }
                  />
                </span>
              </div>
              <div className="bg-[#175873] text-[#F8F8FF] py-3 px-6 lg:py-2  lg:px-5 font-medium  text-sm mxl:px-10 mxl:py-4  rounded-b-lg rounded-tl-lg  absolute right-0 bottom-0">
                COMING SOON
              </div>
            </div>

            <button className="py-2  hidden  mxl:py-[12px] mxl:text-xl  lg:flex text-sm   mxl:mt-[6rem] justify-center items-center text-[#009186] mt-9   rounded-lg border-2 border-[#009186] w-full ">
              Customer Support
              <img src={caller} alt="" className="ml-2 mxl:w-[2.8rem]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
