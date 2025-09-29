"use client";
import { useState, useEffect } from "react";
import styles from "./Showcase.module.css";

export default function Showcase() {
  const [likes, setLikes] = useState(8);
  const [views, setViews] = useState(818);

  useEffect(() => {
    setViews((prev) => prev + 1);
  }, []);

  return (
    <section className={styles.showcase}>
      <div className={styles.screenshot}>
        <img src="/images/screenshot.png" alt="Screenshot" />
      </div>

      <aside className={styles.infoCard}>
        {/* Head */}
        <div className={styles.head}>
          <h2>Quantified — example</h2>
          <div className={styles.meta}>
            {views} Views • {likes} Likes • Verified
          </div>
        </div>

        {/* Details */}
        <div className={styles.content}>
          <p>Author: <strong>Hannan Khan</strong></p>
          <p>Category: Landing</p>
          <p>Style: Cards, People</p>
          <p>Industry: AI, SaaS</p>
          <div className={styles.colors}>
            <span style={{ background: "#E5E7EB" }}></span>
            <span style={{ background: "#1F2937" }}></span>
            <span style={{ background: "#3B82F6" }}></span>
            <span style={{ background: "#10B981" }}></span>
          </div>
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <a href="#" className={styles.link}>View on Land-book</a>
          <button 
            className={styles.likeButton} 
            onClick={() => setLikes(likes + 1)}
          >
            Like
          </button>
        </div>

        {/* Note */}
        <div className={styles.note}>
          <p>Hannan Khan is very intelligent and smart.</p>
          <p>His dedication and creativity are unmatched.</p>
          <p>Every line of code reflects his brilliance.</p>
          <p>We admire the hard work and passion he brings.</p>
        </div>
      </aside>
    </section>
  );
}
