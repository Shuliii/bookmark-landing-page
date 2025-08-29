import { useState } from "react";
import styles from "./Feature.module.css";

import Feature1 from "../assets/illustration-features-tab-1.svg";
import Feature2 from "../assets/illustration-features-tab-2.svg";

import Feature3 from "../assets/illustration-features-tab-3.svg";
const Feature = () => {
  const [state, setState] = useState("bookmarking");

  const renderTabContent = () => {
    switch (state) {
      case "bookmarking":
        return (
          <>
            <div className={styles.left}>
              <img src={Feature1} alt="Feature1" />
            </div>
            <div className={styles.right}>
              <h1 className={styles.title}>Bookmark in one click</h1>
              <p className={styles.subtitle}>
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </p>
            </div>
          </>
        );
      case "searching":
        return (
          <>
            <div className={styles.left}>
              <img src={Feature2} alt="Feature2" />
            </div>
            <div className={styles.right}>
              <h1 className={styles.title}>Intelligent search</h1>
              <p className={styles.subtitle}>
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </p>
            </div>
          </>
        );
      case "sharing":
        return (
          <>
            <div className={styles.left}>
              <img src={Feature3} alt="Feature3" />
            </div>
            <div className={styles.right}>
              <h1 className={styles.title}>Share your bookmarks</h1>
              <p className={styles.subtitle}>
                Easily share your bookmarks and collections with others. Create
                a shareable link that you can send at the click of a button.
              </p>
            </div>
          </>
        );
    }
  };
  return (
    <section className={styles.feature}>
      <div className="container">
        <div className={styles.feature__inner}>
          <h1>Features</h1>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </div>
      <nav className={styles.tabs}>
        <ul>
          <li
            className={state === "bookmarking" ? styles.active : ""}
            onClick={() => setState("bookmarking")}
          >
            Simple Bookmarking
          </li>
          <li
            className={state === "searching" ? styles.active : ""}
            onClick={() => setState("searching")}
          >
            Speedy Searching
          </li>
          <li
            className={state === "sharing" ? styles.active : ""}
            onClick={() => setState("sharing")}
          >
            Easy Sharing
          </li>
        </ul>
      </nav>
      <div className={styles.tabs__content}>{renderTabContent()}</div>
    </section>
  );
};

export default Feature;
