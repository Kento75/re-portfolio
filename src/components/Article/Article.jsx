import React from "react";
import classes from "./Article.css";

const Article = () => {
  return (
    <div className={classes.articleContainer}>
      <div className={classes.articleItem}>
        <a href="#">
          <h2>ここに画像</h2>
          <p>GitHub</p>
        </a>
      </div>
      <div className={classes.articleItem}>
        <a href="#">
          <h2>ここに画像</h2>
          <p>Qiita</p>
        </a>
      </div>
      <div className={classes.articleItem}>
        <a href="#">
          <h2>ここに画像</h2>
          <p>npm</p>
        </a>
      </div>
      <div className={classes.articleItem}>
        <a href="#">
          <h2>ここに画像</h2>
          <p>Twitter</p>
        </a>
      </div>
      <div className={classes.articleItem}>
        <a href="#">
          <h2>ここに画像</h2>
          <p>LinkdIn</p>
        </a>
      </div>
    </div>
  );
};

export default Article;
