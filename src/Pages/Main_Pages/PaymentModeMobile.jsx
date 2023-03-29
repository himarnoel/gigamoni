import React from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import img1 from "../../assets/overlayimage/one.svg";
import img2 from "../../assets/overlayimage/vector.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { RingLoader } from "react-spinners";
import { useState } from "react";
import axios from "axios";
import { baseurl } from "../../Service/validate_and_api";
const PaymentModeMobile = () => {
  let location = useLocation();
  console.log(location.state);
  const navigate = useNavigate();
  const [load, setload] = useState(false);
  const payWithTransfer = () => {
    setload(true);

    axios
      .post(
        `${baseurl}/transactions/`,
        {
          beneficiary: false,
          receiverName: location.state.receivername,
          receiverEmail: location.state.emailAddress,
          receiverPhone: location.state.phoneNumber,
          receiverAcctName: location.state.accountName,
          receiverAcctNo: location.state.accountNumber,
          receiverBankName: location.state.bankName,
          receiverBankAddress: location.state.bankAddress,
          receiverIban: location.state.iban,
          receiverSwiftCode: location.state.swiftCode,
          receiverCountry: location.state.receivingCountry,
          currencySent: location.state.sendingcurrency,
          currencyReceived: location.state.receivingcurrency,
          amountReceived: location.state.amountReceived,
          description: location.state.tractionDescription,
          paymentMethod: "payWithTransfer",
        },
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("LoggedIntoken")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);

        setload(false);
        navigate("/dashboard");
      })
      .catch((e) => {
        setload(false);
        console.log(e);
      });
  };

  const payWithCard = () => {
    setload(true);

    axios
      .post(
        `${baseurl}/transactions/`,
        {
          beneficiary: false,
          receiverName: location.state.receivername,
          receiverEmail: location.state.emailAddress,
          receiverPhone: location.state.phoneNumber,
          receiverAcctName: location.state.accountName,
          receiverAcctNo: location.state.accountNumber,
          receiverBankName: location.state.bankName,
          receiverBankAddress: location.state.bankAddress,
          receiverIban: location.state.iban,
          receiverSwiftCode: location.state.swiftCode,
          receiverCountry: location.state.receivingCountry,
          currencySent: location.state.sendingcurrency,
          currencyReceived: location.state.receivingcurrency,
          amountReceived: location.state.amountReceived,
          description: location.state.tractionDescription,

          paymentMethod: "payWithCard",
        },
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("LoggedIntoken")}`,
          },
        }
      )
      .then((res) => {
        setload(false);
        navigate("/dashboard");
      })
      .catch((e) => {
        setload(false);
        console.log(e);
      });
  };
  return (
    <div className="flex lg:hidden justify-between h-screen font-poppins">
      <NavBar />
      <div
        className={
          load
            ? "absolute top-0   bg-[#262626]/[0.8]   z-[90] h-screen w-full flex  justify-center items-center text-3xl"
            : "hidden"
        }
      >
        <RingLoader color="#009186" size={90} />
      </div>

      <div className="bg flex-auto ">
        <div className="w-full pt-12 flex justify-center items-center h-screen px-10 ">
          <div className="bg-[#F8F8FF] h-[25rem] sm:h-[50rem] md:h-[60rem] rounded-[11.8392px] text-xs mxl:text-sm w-full py-8 px-4 sm:px-14  font-semibold">
            <p className="text-center text-base  sm:text-lg">
              Select Mode Of Payment
            </p>
            <div
              onClick={() => payWithTransfer()}
              className="flex pl-3 pb-3 mt-10 md:mt-20 mxl:mt-14 items-center border-b border-[#87ACA3] text-[#000000] font-medium"
            >
              {" "}
              <img src={img2} alt="" className="sm:w-[2.5rem] object-contain" />
              <p className="ml-4  sm:text-lg">Pay with Bank Transfer</p>
            </div>
            <div
              onClick={() => payWithCard()}
              className="flex pl-3 pb-3 mt-10 md:mt-20 mxl:mt-12 items-center border-b border-[#87ACA3] text-[#000000] font-medium"
            >
              {" "}
              <img src={img1} alt="" className="sm:w-[2.5rem] object-contain" />
              <p className="ml-4  sm:text-lg">Pay with debit card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModeMobile;
