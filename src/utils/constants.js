import {
  FaTachometerAlt,
  FaClipboardList,
  FaCalendarAlt,
  FaTools,
  FaBuilding,
  FaUsers,
  FaKey,
  FaBox,
  FaWrench,
  FaCloud,
} from "react-icons/fa";
import cebuImage from '../assets/cebu.jpg'
export const dashboardMenuDataList = {
  buildingName: "Cebu Towers",
  address: "200 George Street, Sydney NSW 2000",
  image: cebuImage,
  menu: [
    { name: "Dashboard", icon: <FaTachometerAlt />, navigate: "/dashboard" },
    { name: "Cases", icon: <FaClipboardList />, navigate: "/cases" },
    { name: "Work Orders Sent", icon: <FaTools />, navigate: "/work-orders" },
    { name: "Calendar", icon: <FaCalendarAlt />, navigate: "/calender" },
    {
      name: "Maintenance Schedule",
      icon: <FaTools />,
      navigate: "/maintenance-schedule",
    },
    {
      name: "Building",
      icon: <FaBuilding />,
      navigate: "/building",
    },
    { name: "Residents", icon: <FaUsers />, navigate: "/residents" },
    { name: "Keys", icon: <FaKey />, navigate: "/keys" },
    { name: "Parcels", icon: <FaBox />, navigate: "/parcels" },
    {
      name: "Contractors",
      icon: <FaWrench />,
      navigate: "/contractors",
    },
    {
      name: "Cloudsense",
      icon: <FaCloud />,
      navigate: "/cloudsense",
    },
  ],
};
