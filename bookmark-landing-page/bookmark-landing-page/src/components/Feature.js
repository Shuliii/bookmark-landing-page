import styles from "./Feature.module.css";
const Feature = () => {
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
    </section>
  );
};

export default Feature;
