import React from "react";
import styles from "./page.module.css";

const Video = ({selectedVideo}) => {
  return (
    <div className={styles.myVideo}>
     {
      selectedVideo && (<video key={selectedVideo} width="600" controls autoPlay>
        <source src={selectedVideo} type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>)
     }
    </div>
  );
};

export default Video

