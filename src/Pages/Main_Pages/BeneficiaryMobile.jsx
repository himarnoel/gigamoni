import React, { useEffect, useState } from "react";
import DashNav from "../../Components/DashBoardComponents/DashNav";
import bell from "../../assets/bell.svg";
import { BiTransfer } from "react-icons/bi";
import caller from "../../assets/Dashboard/caller.svg";
import axios from "axios";
import { baseurl } from "../../Service/validate_and_api";
import { toast } from "react-toastify";
import { RingLoader } from "react-spinners";
const BeneficiaryMobile = () => {
  const [data, setdata] = useState([]);
  const [load, setload] = useState(false);
  const safeDocument = typeof document !== "undefined" ? document : {};
  const { body } = safeDocument;
  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
    const val = localStorage.getItem("LoggedIntoken");
    if (!val) {
      navigate("/login");
    } else {
      setload(true);
      axios
        .get(`${baseurl}/transactions/beneficiary/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem("LoggedIntoken")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setload(false);
          setdata(res.data);
        })
        .catch((e) => {
          console.log(e);
          setload(false);
          toast.error("An error occurred");
        });
    }
  }, []);
  return (
    <div className="font-poppins ">
      <div
        className={
          load
            ? "absolute top-0   bg-[#262626]/[0.8]   z-[90] h-screen w-full flex  justify-center items-center text-3xl"
            : "hidden"
        }
      >
        <RingLoader color="#009186" size={90} />
      </div>{" "}
      <DashNav class="fixed top-0 w-full z-[30] " />
      <div className="px-2 xss:px-4 xs:px-6 pt-20">
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
            src={bell}
            alt=""
            className="object-contain w-[1.6rem] sm:w-[2.3rem] md:w-[2.5rem] "
          />
        </div>
        <p className="text-center mt-10">Beneficiaries</p>
        <div className="mt-4 bg-[#DAF2F1] w-full h-[25rem] rounded-lg px-4  overflow-y-auto ">
          {data.map((item, i) => (
            <div className="w-full border-2 border-[#009186] border-solid min-h-[5rem] rounded-lg mt-5 px-2 pt-5 bg-white  pb-3">
              <p className="text-xs font-semibold text-[#175873]">
                {item.fullName}
              </p>
              <div className="flex text-[#262626] text-xs mt-5">
                <p className="mr-5">{item.bankName}</p>
                <p className="">{item.id}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeneficiaryMobile;
