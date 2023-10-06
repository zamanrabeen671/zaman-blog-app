import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Zaman here!</b> Discover my tech & travel stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>A Lazy developer who want learn code and explore the tech world.</h1>
          <p className={styles.postDesc}>
            A self-motivated and enthusiastic software developer who likes to take on new
            challenges with an open-minded spirit. I enjoy the hungriness of learning new technologies. A
            teamwork environment is my first priority to achieve the best outcome..
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
