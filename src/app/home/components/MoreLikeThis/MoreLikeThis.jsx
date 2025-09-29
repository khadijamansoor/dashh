"use client";

import styles from "./MoreLikeThis.module.css";
import { Save, Copy, Download, Share2, Globe } from "lucide-react";

export default function MoreLikeThis() {
  // make 12 sample cards
  const cards = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <section className={styles.moreSection}>
      <h2 className={styles.title}>More Like This</h2>
      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card} className={styles.card}>
            <img
              src={`/images/sample${card}.png`}
              alt={`Sample ${card}`}
              className={styles.cardImage}
            />

            {/* Overlay */}
            <div className={styles.overlay}>
              {/* top-left */}
              <div className={styles.topLeft}>
                <button title="Save"><Save size={18} /></button>
                <button title="Copy"><Copy size={18} /></button>
                <button title="Download"><Download size={18} /></button>
              </div>

              {/* top-right */}
              <div className={styles.topRight}>
                <button title="Share"><Share2 size={18} /></button>
              </div>

              {/* bottom-right webflow */}
              <div className={styles.bottomRight}>
                <div className={styles.webflow}>
                  <Globe size={22} />
                  <span className={styles.webflowText}>
                    Made with Webflow
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
