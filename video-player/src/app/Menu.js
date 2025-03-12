import React from "react";
import styles from "./page.module.css";

const Menu = ({videoInfo,onRadioChange}) => {

  return (
    <div className={styles.myMenu}>
      <label>
        <input
          type="radio"
          name="options"
          value={videoInfo[0].videoUrl}
          onChange={onRadioChange}
        />
        {videoInfo[0].name}
      </label>
      <label>
        <input
          type="radio"
          name="options"
          value={videoInfo[1].videoUrl}
          onChange={onRadioChange}
        />
        {videoInfo[1].name}
      </label>
      <label>
        <input
          type="radio"
          name="options"
          value={videoInfo[2].videoUrl}
          onChange={onRadioChange}
        />
        {videoInfo[2].name}
      </label>
      <label>
        <input
          type="radio"
          name="options"
          value={videoInfo[3].videoUrl}
          onChange={onRadioChange}
        />
        {videoInfo[3].name}
      </label>
    </div>
  );
};

export default Menu;
