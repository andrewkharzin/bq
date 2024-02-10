import  Link  from "next/link"
import styles from "@/app/dashboard/_ui/dashboard/sidebar/sidebar.module.css";

const MenuLink = ({item}) => {
  return (
    <Link  href={item.link} className={styles.container}>
      <p>{item.icon}<span>{item.label}</span></p>
      {/* {item.icon}
      {item.label} */}
    </Link>
  );
}

export default MenuLink
