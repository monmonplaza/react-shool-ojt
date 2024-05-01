import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import Header from "../../../partials/Header";
import Navigation from "../../../partials/Navigation";
import {
  LiaEdit,
  LiaHistorySolid,
  LiaKeySolid,
  LiaTrashAltSolid,
} from "react-icons/lia";
import { PiArchive } from "react-icons/pi";
import { LiaEnvelope } from "react-icons/lia";

const Student = () => {
  return (
    <section className="flex">
      <Navigation />
      <main className="w-[calc(100%-250px)]">
        <Header />
        <div className="flex">
          <div className="main-wrapper px-4 py-3 w-3/4">
            <div className="flex justify-between items-center">
              <h1>Database</h1>
              <form action="" className="relative">
                <input
                  type="text"
                  placeholder="Search Student"
                  className="p-1 px-3 pl-10 outline-none bg-secondary border border-stone-800 rounded-md placeholder:text-white placeholder:opacity-20"
                />
                <CiSearch className="absolute top-1 left-2 z-20 text-white opacity-20 text-2xl " />
              </form>
            </div>

            <div className="tab flex items-center justify-between mt-8 border-b border-line mb-8">
              <ul className="flex space-x-10">
                <li className="tab-link active">
                  <Link to="#">Student</Link>
                </li>
                <li className="tab-link ">
                  <Link to="#">Teacher</Link>
                </li>
                <li className="tab-link ">
                  <Link to="#">Staff</Link>
                </li>
              </ul>

              <button className="flex gap-2 items-center btn btn--accent">
                <FiPlus />
                Plus
              </button>
            </div>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th className="w-[150px]">Name</th>
                    <th className="w-[80px]">Class</th>
                    <th className="w-[80px]">Age</th>
                    <th className="w-[80px]">Gender</th>
                    <th className="w-[80px]">Email</th>
                    <th className="w-[100px]">Action</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="w-[150px]">
                      <button className="bg-transparent text-accent">
                        Loverboy DeMesa
                      </button>
                    </td>
                    <td>Science 4</td>
                    <td>7</td>
                    <td>Male</td>
                    <td>loverboy.demesa@gmail.com</td>
                    <td className="table-action">
                      <ul>
                        <li>
                          <button>
                            <LiaEdit />
                          </button>
                        </li>
                        <li>
                          <button>
                            <PiArchive />
                          </button>
                        </li>

                        <li>
                          <button>
                            <LiaHistorySolid />
                          </button>
                        </li>

                        <li>
                          <button>
                            <LiaTrashAltSolid />
                          </button>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="information w-1/4 overflow-hidden p-10 bg-secondary min-h-[calc(100vh-65px)]">
            <div className="text-center mb-8">
              <img
                src="https://via.placeholder.com/100x100"
                alt=""
                className="size-[100px] object-cover mx-auto rounded-full mb-4"
              />
              <h3 className="mb-1">Robert Fox</h3>
              <p className="opacity-50 text-xs">Science 7 Student</p>

              <ul className="flex justify-center gap-5 mt-5">
                <li>
                  <button className="text-2xl">
                    <LiaKeySolid />
                  </button>
                </li>
                <li>
                  <button className="text-2xl">
                    <LiaEnvelope />
                  </button>
                </li>
              </ul>
            </div>
            <h5 className="mb-3">About</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              impedit consequatur dicta unde voluptatum exercitationem beatae
              mollitia provident iste quidem.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <ul>
                <li>
                  <h5 className="mb-3">Age</h5>
                </li>
                <li>
                  <p>17</p>
                </li>
              </ul>

              <ul>
                <li>
                  <h5 className="mb-3">Gender</h5>
                </li>
                <li>
                  <p>Male</p>
                </li>
              </ul>

              <ul>
                <li>
                  <h5 className="mb-3">Birthday</h5>
                </li>
                <li>
                  <p>2 January 2003</p>
                </li>
              </ul>

              <ul>
                <li>
                  <h5 className="mb-3">Address</h5>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Student;
