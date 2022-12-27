import React from "react";
import style from "./SearchResult.module.scss";
import location from "../../assets/icon-location.svg";
import link from "../../assets/icon-website.svg";
import twitter from "../../assets/icon-twitter.svg";
import company from "../../assets/icon-company.svg";
export default function UserData({ data }: { data: any }) {
  let joinedDate = new Date();
  let date =
    joinedDate.getDate() +
    " " +
    joinedDate.toLocaleString("en-us", { month: "short" }) +
    " " +
    joinedDate.getFullYear();
  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        <img src={data.avatar_url} className={style.avatar} />
        <div className={style.flex}>
          <div>
            <p className={style.name}>{data.name}</p>
            <p className={style.login}>@{data.login ? data.login : null}</p>
          </div>
          <div>
            <p>Joined {date}</p>
          </div>
        </div>
      </div>
      <p className={style.bio}>
        {data.bio ? data.bio : "This profile has no bio"}
      </p>
      <div className={style.block}>
        <div>
          <p>Repos</p>
          <h1>{data.public_repos} </h1>
        </div>
        <div>
          <p>Following</p>
          <h1>{data.following}</h1>
        </div>
        <div>
          <p>Followers</p>
          <h1>{data.followers} </h1>
        </div>
      </div>
      <div className={style.footer}>
        <div>
          <div className={style.footer_item}>
            <img src={location} className={style.icon} />
            <p>{data.location ? data.location : "Not Available"}</p>
          </div>
          <div className={style.footer_item}>
            <img src={link} className={style.icon} />
            <a href={data.html_url}>{data.html_url}</a>
          </div>
        </div>
        <div>
          <div className={style.footer_item}>
            <img src={twitter} className={style.icon} />
            <p className={style.twitter}>
              {data.twitter_username ? data.twitter_username : "Not Available"}
            </p>
          </div>
          <div className={style.footer_item}>
            <img src={company} className={style.icon} />
            <p> {data.company ? data.company : "Not Available"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
