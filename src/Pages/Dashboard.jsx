import React, { useState } from "react";

const Dashboard = () => {
  const [first, setfirst] = useState("");
  return (
    <div className="pt-64 px-36">
      <div class="relative z-0 w-full mb-5">
        <select
          name="select"
          value={first}
          onChange={(e) => setfirst(e.target.value)}
          required
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        >
          <option value="" selected disabled hidden></option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
        </select>
        <label
          for="select"
          class="absolute duration-300 top-2   -z-1 origin-0 text-gray-500"
        >
          Select an option
        </label>
        <span class="text-sm text-red-600 hidden" id="error">
          Option has to be selected
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
