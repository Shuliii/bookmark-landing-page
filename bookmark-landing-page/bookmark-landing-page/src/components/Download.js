import styles from "./Download.module.css";

const Download = () => {
  return (
    <section className={styles.download}>
      <div className={styles.download__inner}>
        <h1 className={styles.title}>Download the Extension</h1>
        <p className={styles.subtitle}>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
    </section>
  );
};

export default Download;
