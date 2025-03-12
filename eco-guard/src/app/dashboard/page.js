"use client";
import React from "react";
import "/src/app/globals.css";
import Sidebar from "../components/sidebar";
import Headbar from "../components/headbar";
import Notification from "../components/notification";
import Room from "../components/room";
import AQI from "../components/aqi";
import WQI from "../components/wqi";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSensorData } from "../slices/sensorSlice";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { logout } from "../slices/authSlice";

export default function Dashboard() {
  const [notifications, setNotifications] = useState(false);
  const [activeRoomId, setActiveRoomId] = useState(1);

  const sensorData = useSelector((state) => state.sensor);
  const notificationData = useSelector((state) => state.notification);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  useEffect(() => {
    dispatch(fetchSensorData());
  }, [dispatch]);

  const handleClickNotifications = () => setNotifications(true);
  const handleClickDashboard = () => setNotifications(false);
  const handleClickLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  return (
    <div>
      {" "}
      {user ? (
        <div className="flex justify-center items-start  bg-[#E8F3FC]">
          <div>
            <Sidebar
              onClickDashboard={handleClickDashboard}
              onClickLogout={handleClickLogout}
              onClickNotifications={handleClickNotifications}
              notificationData={notificationData.filter(
                (notification) => notification.userid === user.userid
              )}
              userData={user}
            />
          </div>

          <div className="flex flex-col justify-center items-start text-black /*border border-green-500*/">
            <Headbar
              title={notifications ? "Notifications" : "Dashboard"}
              onClickNotifications={handleClickNotifications}
            />

            <div className="flex flex-col /*border border-purple-500*/ my-10 mx-20">
              {!notifications && (
                <span className="text-[24px] mb-5">Rooms</span>
              )}
              <div className="flex  justify-center items-center">
                {!notifications &&
                  sensorData.map((room) => (
                    <Room
                      key={room.id}
                      room={room}
                      activeRoomId={activeRoomId}
                      setActiveRoomId={setActiveRoomId}
                    />
                  ))}
              </div>
            </div>

            <div className="ml-12">
              <div>
                {notifications &&
                  notificationData
                    .filter(
                      (notification) => notification.userid === user.userid
                    )
                    .map((notification) => (
                      <div className="flex flex-col justify-center items-center">
                        <Notification
                          key={notification.id}
                          notification={notification}
                        />
                      </div>
                    ))}
              </div>
            </div>

            <div className="flex flex-col justify-start items-start /*border border-green-500*/ mt-4 mx-20">
              <div>
                {!notifications && (
                  <span className="text-[24px] mb-5">Levels</span>
                )}
              </div>
              <div>
                {!notifications && (
                  <div className="flex justify-between items-center bg-white w-[911px] h-[63px] rounded-[15px]">
                    <div className="flex ml-5">
                      <img
                        src="/icondashboardaqi.png"
                        alt=""
                        className="mr-3"
                      />
                      <span className="text-[20px]">AQI</span>
                    </div>
                    <div className="mr-5">
                      <img src="/icondashboarddownarrow.png" alt="" />
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-center items-center mt-3">
                <div>
                  {" "}
                  {!notifications && <AQI activeRoomId={activeRoomId} />}{" "}
                </div>
              </div>
              <div>
                {!notifications && (
                  <div className="flex justify-between items-center bg-white w-[911px] h-[63px] mt-20 mb-5 rounded-[15px]">
                    <div className="flex ml-5">
                      <img
                        src="/icondashboardwqi.png"
                        alt=""
                        className="mr-3"
                      />
                      <span className="text-[20px]">WQI</span>
                    </div>
                    <div className="mr-5">
                      <img src="/icondashboarddownarrow.png" alt="" />
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-center items-center">
                <div>
                  {!notifications && <WQI activeRoomId={activeRoomId} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Oturum kapatılıyor!</p>
      )}
    </div>
  );
}
