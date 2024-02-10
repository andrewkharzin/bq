import { GetServerSideProps } from 'next';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import styles from "@/app/dashboard/_ui/dashboard/sidebar/sidebar.module.css";
import MenuLink from "./menuLink";
import { Image, Divider, Link } from "@nextui-org/react";

import { FaUsers, FaFileInvoice, FaStickyNote, FaTruck, FaChartBar, FaCog, FaCogs  } from 'react-icons/fa';

const menuItems = [
  {
    title: "Pages",
    list: [
       {
        id: 1,
        label: 'Dashboard',
        icon: <FaChartBar />,
        link: '/dashboard',
        subMenu: []
       },
       {
        id: 2,
        label: 'Users',
        icon: <FaUsers />,
        link: '/dashboard/users',
        subMenu: []
      },
      {
        id: 3,
        label: 'Invoices',
        icon: <FaFileInvoice />,
        link: '/dashboard/invoices',
        subMenu: []
      },
      {
        id: 4,
        label: 'Notes',
        icon: <FaStickyNote />,
        link: '/dashboard/notes',
        subMenu: []
      },
      {
        id: 5,
        label: 'Shipments',
        icon: <FaTruck />,
        link: '/dashboard/shipments',
        subMenu: []
      }
    ]
  },
  {
    title: "Analytics",
    list: [
      {
        id: 1,
        label: 'Overview',
        icon: <FaChartBar />,
        link: '/analytics/overview',
        subMenu: []
      },
      {
        id: 2,
        label: 'Reports',
        icon: <FaCogs />,
        link: '/analytics/reports',
        subMenu: []
      }
    ]
  },
  {
    title: "Settings",
  list: [
    {
      id: 1,
      label: 'General',
      icon: <FaCog />,
      link: '/settings/general',
      subMenu: []
    },
    {
      id: 2,
      label: 'Security',
      icon: <FaCog />,
      link: '/settings/security',
      subMenu: []
    },
    {
      id: 3,
      label: 'Notifications',
      icon: <FaCog />,
      link: '/settings/notifications',
      subMenu: []
    }
  ]
 }


];




const sidebar = () => {
  return (
    <div>
          <div className={styles.container}>
            <ul className={styles.list}>
            {menuItems.map(cat =>(
              <li className='mx-auto' key={cat.title}>
                <span className={styles.cat}>{cat.title}</span>

                {cat.list.map(item=>(
                  <MenuLink  item={item} key={item.label}/>
                ))}
              </li>
            ))}

            </ul>
          </div>
    </div>
  );
}



export default sidebar