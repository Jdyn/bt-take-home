import styles from "./Layout.module.scss";
import NavigationBar from "../NavigationBar";
import { Outlet } from "react-router-dom";

export default function Container() {
  return (
    <div className={styles.root}>
      <NavigationBar />
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
}
