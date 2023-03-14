{/* <form
                onSubmit={formik.handleSubmit}
                className="bg-[#F8F8FF] rounded-lg pl-5 pr-10 p py-8 w-[28rem] mxl:w-[32rem] gap-y-4  mb-8 xl:gap-y-3
            mxl:gap-y-10
            mx-auto mt-[1.2rem] text-[#262626] grid"
              >
                <p>Transaction Details</p>
                <div className="relative z-0 mt-0">
                  <input
                    type="text"
                    id="name"
                    className={
                      formik.errors.name && formik.touched.name
                        ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                        : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    }
                    placeholder=" "
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    for="name"
                    className={
                      formik.errors.name && formik.touched.name
                        ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    }
                  >
                    Name
                  </label>
                  {formik.errors.name && formik.touched.name ? (
                    <p className="text-red-500 text-xs font-poppins">
                      {formik.errors.name}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="relative z-0 ">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={
                      formik.errors.email && formik.touched.email
                        ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                        : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    }
                    placeholder=" "
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    for="email"
                    className={
                      formik.errors.email && formik.touched.email
                        ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    }
                  >
                    Email
                  </label>
                  {formik.errors.email && formik.touched.email ? (
                    <p className="text-red-500 text-xs font-poppins">
                      {formik.errors.email}
                    </p>
                  ) : (
                    ""
                  )}
                </div>{" "}
                <div className="relative z-0 ">
                  <input
                    type="text"
                    id="phonenumber"
                    className={
                      formik.errors.phonenumber && formik.touched.phonenumber
                        ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                        : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    }
                    placeholder=" "
                    onChange={formik.handleChange}
                    value={formik.values.phonenumber}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    for="phonenumber"
                    className={
                      formik.errors.phonenumber && formik.touched.phonenumber
                        ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    }
                  >
                    Phone number
                  </label>
                  {formik.errors.phonenumber && formik.touched.phonenumber ? (
                    <p className="text-red-500 text-xs font-poppins">
                      {formik.errors.phonenumber}
                    </p>
                  ) : (
                    ""
                  )}
                </div>{" "}
                <div className="relative z-0 ">
                  <select
                    type="text"
                    id="country"
                    className={
                      formik.errors.country && formik.touched.country
                        ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                        : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      //placeholder=" "
                    }
                    onChange={formik.handleChange}
                    value={formik.values.country}
                    onBlur={formik.handleBlur}
                    placeholder="country"
                  >
                    <option value=""></option>

                    <option value="Nigeria">Nigeria</option>
                  </select>
                  <label
                    for="country"
                    className={
                      formik.errors.country && formik.touched.country
                        ? "absolute text-xs xl:text-base mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-4 scale-5 top-9   peer-focus:top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-aria-selected:scale-100 peer-aria-selected:scale-200 peer-aria-selected:translate-y-14 peer-focus:scale-[0.6] peer-focus:-translate-y-6"
                        : "absolute text-xs xl:text-base mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-4 scale-5 top-9   peer-focus:top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-aria-selected:scale-100 peer-aria-selected:scale-200 peer-aria-selected:translate-y-14 peer-focus:scale-[0.6] peer-focus:-translate-y-6"
                    }
                  >
                    Country
                  </label>
                  <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-0 right-0 flex items-center px-2 text-[#262626]" />
                  {formik.errors.country && formik.touched.country ? (
                    <p className="text-red-500 text-xs font-poppins">
                      {formik.errors.country}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="relative z-0 ">
                  <select
                    type="text"
                    id="receivingcountry"
                    className={
                      formik.errors.receivingcountry &&
                      formik.touched.receivingcountry
                        ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                        : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      //placeholder=" "
                    }
                    onChange={formik.handleChange}
                    value={formik.values.receivingcountry}
                    onBlur={formik.handleBlur}
                    placeholder="receivingcountry"
                  >
                    <option value=""></option>

                    <option value="Nigeria">Nigeria</option>
                  </select>
                  <label
                    for="receivingcountry"
                    className={
                      formik.errors.receivingcountry &&
                      formik.touched.receivingcountry
                        ? "absolute text-xs xl:text-base mxl:text-sm font-poppins text-red-500 duration-300 transform -translate-y-4 scale-5 top-9   peer-focus:top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-aria-selected:scale-100 peer-aria-selected:scale-200 peer-aria-selected:translate-y-14 peer-focus:scale-[0.6] peer-focus:-translate-y-6"
                        : "absolute text-xs xl:text-base mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-4 scale-5 top-9   peer-focus:top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-aria-selected:scale-0 peer-aria-selected:translate-y-14 peer-focus:scale-[0.6] peer-focus:-translate-y-6"
                    }
                  >
                    Receiving Country
                  </label>
                  <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-0 right-0 flex items-center px-2 text-[#262626]" />
                  {formik.errors.receivingcountry &&
                  formik.touched.receivingcountry ? (
                    <p className="text-red-500 text-xs font-poppins">
                      {formik.errors.receivingcountry}
                    </p>
                  ) : (
                    ""
                  )}
                </div>{" "}
                <p className="text-sm font-medium mt-3">Amount</p>
                <div className="flex justify-between items-center mt-2">
                  <span>
                    <p className="text-[#175873] text-[0.59rem] ">
                      They Receive
                    </p>
                    <span className="flex ">
                      <span className="relative z-0">
                        <select
                          type="text"
                          id="sendingcurrency"
                          className={
                            formik.errors.sendingcurrency &&
                            formik.touched.sendingcurrency
                              ? " font-poppins  pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#009186]   rounded-[6px] border-solid border-red-500 border-[4px] rounded-r-none appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186]"
                              : " font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#009186]   rounded-[6px] border-solid border-[#009186] border-[4px] rounded-r-none appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186]"
                            //placeholder=" "
                          }
                          onChange={formik.handleChange}
                          value={formik.values.sendingcurrency}
                          onBlur={formik.handleBlur}
                          placeholder="receivingcountry"
                        >
                          <option value="USD" selected>
                            USD
                          </option>

                          <option value="Pounds">Pounds</option>
                        </select>
                        <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-5 right-0 flex items-center px-2 text-[#009186]" />
                      </span>
                      <input
                        type="number"
                        id="sendamount"
                        placeholder="00000"
                        className={
                          formik.errors.sendamount && formik.touched.sendamount
                            ? " font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#009186] text-[#009186]  rounded-[6px] border-solid border-red-500 border-[4px] rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186]"
                            : " font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#009186] text-[#009186]  rounded-[6px] border-solid border-[#009186] border-[4px] rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186]"
                        }
                        onChange={formik.handleChange}
                        value={formik.values.sendamount}
                        onBlur={formik.handleBlur}
                      />
                    </span>
                  </span>
                  <BiTransfer className="text-3xl text-[#009186] mt-6" />
                  <span>
                    <p className="text-[#175873] text-[0.59rem] ">
                      Local Currency
                    </p>
                    <span className="relative z-0 ">
                      {" "}
                      <select
                        type="text"
                        id="reciveingcurrency"
                        className={
                          formik.errors.reciveingcurrency &&
                          formik.touched.reciveingcurrency
                            ? " font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade text-sm  mt-3 bg-transparent text-[#009186]   rounded-[6px] border-solid border-red-500 border-[4px]  appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                            : " font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade text-sm  mt-3 bg-transparent  text-[#009186]   rounded-[6px] border-solid border-[#009186] border-[4px]  appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                        
                        }
                        onChange={formik.handleChange}
                        value={formik.values.reciveingcurrency}
                        onBlur={formik.handleBlur}
                        placeholder="receivingcountry"
                      >
                        <option value="NGN" selected>
                          NGN
                        </option>

                        <option value="Pounds">Pounds</option>
                      </select>
                      <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-2 right-0 flex items-center px-2 text-[#009186]" />
                    </span>
                  </span>
                 
                </div>
                <button
                  type="submit"
                  className="  text-[#F8F8FF] rounded bg-[#009186] w-full mt-0 py-2"
                >
                  continue
                </button>
              </form> */}