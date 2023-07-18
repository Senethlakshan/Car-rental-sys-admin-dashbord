import React from "react";
import { FaHotjar, FaBolt } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen rounded-2xl p-2 ">
        <div>
        <div className="p-2">
        {/* top flex */}
        <div className="flex justify-between px-4 pt-4">
          <div>
            <h1>Good Morning</h1>
            <h1>Jef reves</h1>
          </div>
          <div>
            {/* search bar */}
            <div class="w-full p-4">
              <div class="flex items-center border rounded-md shadow-md">
                <input
                  type="text"
                  class="px-4 py-2 w-full focus:outline-none"
                  placeholder="Search..."
                />
                <button class="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Second top-cards */}
        <div className="mt-5">
          <table className="">
            <tbody>
              {/* First row with merged cells */}
              <tr>
                <td className="text-start font-bold " colSpan={2}>
                  <div className="flex item-center m-3">
                    <FaHotjar className="mr-2" /> Hot Collection
                  </div>
                </td>
              </tr>
              {/* Second row */}
              <tr>
                <td>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-1 bg-gradient-to-r from-rose-400 to-orange-300 rounded-xl mr-2 shadow">
                    {/* First part */}
                    <div className=" text-white p-4 rounded">
                      <h2 className="text-xl font-bold mb-2">Part 1</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer nec odio. Praesent libero. Sed cursus ante
                        dapibus diam.
                      </p>
                    </div>

                    {/* Second part */}
                    <div className=" text-white p-4 rounded">
                      <table class="border border-gray-500 w-full">
                        <tr>
                          <td class="border border-gray-500 px-4 py-2">
                            <div className="bg-green-400  p-5 rounded-2xl">
                              <div className="flex justify-center">
                                <div className="bg-slate-100 rounded-full p-5  ">
                                  <FaBolt className="text-black" />
                                </div>
                              </div>
                              <p className="text-center mt-1">1997 cc</p>
                            </div>
                          </td>
                          <td class="border border-gray-500 px-4 py-2">
                          <div className="bg-green-400  p-5 rounded-2xl">
                              <div className="flex justify-center">
                                <div className="bg-slate-100 rounded-full p-5  ">
                                  <FaBolt className="text-black" />
                                </div>
                              </div>
                              <p className="text-center mt-1">1997 cc</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="border border-gray-500 px-4 py-2">
                          <div className="bg-green-400  p-5 rounded-2xl">
                              <div className="flex justify-center">
                                <div className="bg-slate-100 rounded-full p-5  ">
                                  <FaBolt className="text-black" />
                                </div>
                              </div>
                              <p className="text-center mt-1">1997 cc</p>
                            </div>
                          </td>
                          <td class="border border-gray-500 px-4 py-2">
                          <div className="bg-green-400  p-5 rounded-2xl">
                              <div className="flex justify-center">
                                <div className="bg-slate-100 rounded-full p-5  ">
                                  <FaBolt className="text-black" />
                                </div>
                              </div>
                              <p className="text-center mt-1">1997 cc</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            colspan="2"
                            class="border border-gray-500 px-4 py-2 text-center"
                          >
                           
                            <p className="text-start"> Total run</p>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </td>
                <td>
                    {/* 2 cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-1 bg-gradient-to-r from-gray-200 to-gray-400 rounded-xl mr-2 shadow">
                    {/* First part */}
                    <div className=" text-white p-4 rounded">
                      <h2 className="text-xl font-bold mb-2">Part 1</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer nec odio. Praesent libero. Sed cursus ante
                        dapibus diam.
                      </p>
                    </div>

                    {/* Second part */}
                    <div className=" text-white p-4 rounded">
                      <table class="border border-gray-500 w-full">
                        <tr>
                          <td class="border border-gray-500 px-4 py-2">
                            <div className="bg-green-400  p-5 rounded-2xl">
                              <div className="flex justify-center">
                                <div className="bg-slate-100 rounded-full p-5  ">
                                  <FaBolt className="text-black" />
                                </div>
                              </div>
                              <p className="text-center mt-1">1997 cc</p>
                            </div>
                          </td>
                          <td class="border border-gray-500 px-4 py-2">
                          <div className="bg-green-400  p-5 rounded-2xl">
                              <div className="flex justify-center">
                                <div className="bg-slate-100 rounded-full p-5  ">
                                  <FaBolt className="text-black" />
                                </div>
                              </div>
                              <p className="text-center mt-1">1997 cc</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="border border-gray-500 px-4 py-2">
                          <div className="bg-green-400  p-5 rounded-2xl">
                              <div className="flex justify-center">
                                <div className="bg-slate-100 rounded-full p-5  ">
                                  <FaBolt className="text-black" />
                                </div>
                              </div>
                              <p className="text-center mt-1">1997 cc</p>
                            </div>
                          </td>
                          <td class="border border-gray-500 px-4 py-2">
                          <div className="bg-green-400  p-5 rounded-2xl">
                              <div className="flex justify-center">
                                <div className="bg-slate-100 rounded-full p-5  ">
                                  <FaBolt className="text-black" />
                                </div>
                              </div>
                              <p className="text-center mt-1">1997 cc</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            colspan="2"
                            class="border border-gray-500 px-4 py-2 text-center"
                          >
                            <p className="text-start"> Total run</p>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* table show table data  */}
        <div className="mt-5 ">
          <h1 className="mb-3 font-bold"> Regular collection</h1>
          <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Color
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">Silver</td>
                    <td class="px-6 py-4">Laptop</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4 text-right">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td class="px-6 py-4">White</td>
                    <td class="px-6 py-4">Laptop PC</td>
                    <td class="px-6 py-4">$1999</td>
                    <td class="px-6 py-4 text-right">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">Black</td>
                    <td class="px-6 py-4">Accessories</td>
                    <td class="px-6 py-4">$99</td>
                    <td class="px-6 py-4 text-right">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        </div>
    
    </div>
  );
};

export default HomePage;
