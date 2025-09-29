"use client";

import { Monitor, Smartphone } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.icons}>
        <button className={styles.iconButton} aria-label="Desktop View">
          <Monitor size={22} />
        </button>
        <button className={styles.iconButton} aria-label="Mobile View">
          <Smartphone size={22} />
        </button>
      </div>
    </header>
  );
}
