import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const DashbordHome = () => {
    const data = [
        { name: "July", users: 200000000 },
        { name: "August", users: 150000000 },
        { name: "September", users: 100000000 },
        { name: "October", users: 500000000 },
      ];
  return (
    <div className=" mt-8 container ml-auto mr-auto px-6">
      <div className="flex justify-between container ">
        <p className="text-xl font-bold text-[#213446]">Overview</p>

        <div date-rangepicker className="flex items-center">
          <div class="relative cursor-pointer">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
              {/* <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg> */}
            </div>
            <input
              name="start"
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select date start"
            />
          </div>
          <span className="mx-4 text-gray-500">to</span>
          <div className="relative cursor-pointer">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              {/* <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg> */}
            </div>
            <input
              name="end"
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select date end"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 mt-6 gap-6">
        <div className="col-span-2 ">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-md p-2  border-t-2 border-[#0ee0a1]">
              <p className=" text-gray-400">Total Profit</p>

              <p className="mt-2 font-bold">
                <span> $95,595</span>{" "}
                <span className="ml-4 text-[#41c662]">+3.55%</span>
              </p>
            </div>
            <div className="bg-white shadow-md rounded-md p-2  border-b-2 border-[#0ee0a1]">
              <p className=" text-gray-400">Total Expenses</p>

              <p className="mt-2 font-bold">
                <span> $95,595</span>{" "}
                <span className="ml-4 text-[#41c662]">+3.55%</span>
              </p>
            </div>
            <div className="bg-white shadow-md rounded-md p-2  border-t-2 border-[#0ee0a1]">
              <p className=" text-gray-400">New Users</p>

              <p className="mt-2 font-bold">
                <span> $95,595</span>{" "}
                <span className="ml-4 text-[#e44848]">+3.55%</span>
              </p>
            </div>
          </div>




          <div className="mt-6 bg-white shadow-md rounded-md">
            <div style={{ textAlign: "center" }}>
      <h1 className="mt-10 text-xl font-bold">View User Graph</h1>
      <div className="grid md:grid-cols-2 mt-10 p-4 ml-auto mr-auto overflow-hidden">
        <div>
          <PieChart width={400} height={400}>
            <Pie
              dataKey="users"
              isAnimationActive={false}
              data={data}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </div>
        <div className="ml-auto mr-auto  m-2  overflow-hidden container ">
          <BarChart
            width={460}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
             
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
          </BarChart>
        </div>
      </div>
    </div>
          </div>
        </div>
        <div className="row-span-3 bg-white shadow-md rounded-md">
          <p className="text-2xl font-bold mb-1 mt-1 text-left ml-2 p-2">
            Top Selling Product
          </p>
          <hr />

          <div className="grid grid-cols-4 gap-2 py-auto p-2">
            <img
              src="https://templates.iqonic.design/datum/html/assets/images/products/1.jpg"
              alt=""
            />
            <p className="font-bold col-span-2 mt-4">
              Rockerz Bluetooth Headset
            </p>
            <p className="font-bold mt-4">$1,056</p>
          </div>
          <hr />
          <div className="grid grid-cols-4 gap-2 py-auto p-2">
            <img
              src="https://templates.iqonic.design/datum/html/assets/images/products/2.jpg"
              alt=""
            />
            <p className="font-bold col-span-2 mt-4">Wifi Security Camera</p>
            <p className="font-bold mt-4">$1,799</p>
          </div>
          <hr />
          <div className="grid grid-cols-4 gap-2 py-auto p-2">
            <img
              src="https://templates.iqonic.design/datum/html/assets/images/products/13.jpg"
              alt=""
            />
            <p className="font-bold col-span-2 mt-4">Stone Bluetooth Speaker</p>
            <p className="font-bold mt-4">$1,056</p>
          </div>
          <hr />
          <div className="grid grid-cols-4 gap-2 py-auto p-2">
            <img
              src="https://templates.iqonic.design/datum/html/assets/images/products/4.jpg"
              alt=""
            />
            <p className="font-bold col-span-2 mt-4">Ryzen 5 Hexa Core 5600H</p>
            <p className="font-bold mt-4">$1,056</p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default DashbordHome;
