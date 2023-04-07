import React from 'react';
import styles from './loaderStyles.module.css';

const Loader = () => (
  <div className={styles.loadingScreen}>
    <div className={styles.newtonsCradle}>
      <div className={styles.newtonsCradle__dot} />
      <div className={styles.newtonsCradle__dot} />
      <div className={styles.newtonsCradle__dot} />
      <div className={styles.newtonsCradle__dot} />
    </div>
  </div>
);

export default Loader;
