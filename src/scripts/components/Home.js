import React, { useContext } from "react";
import { Context } from "../store/menu";

export default function HomePage() {
  const { store, dispatch } = useContext(Context);

  return (
    <div id="index-page">
      <div className="index-bg">
        <span />
        <span />
        <span />
      </div>
      <div className="index-logo" />
      <div
        id="index-button"
        data-state={store.dataState}
        onClick={() => dispatch({ type: "switch" })}
      >
        <div className="btn-bg" />
        <div className="btn-main">
          <div className="short-id short-id-1">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="short-id short-id-2">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <div className="index-sns">
        <div className="inner">
          <a
            href="https://github.com/iCyris"
            title="GitHub"
            rel="noopener noreferrer"
          >
            <i className="czs-github-logo" />
          </a>
          <a href="https://magia.cyris.moe/" title="Magia" rel="noopener noreferrer">
            <i className="czs-pokemon-ball" />
          </a>
          <a href="https://kiwi-fruit.cyris.moe/" title="KiwiFruit" rel="noopener noreferrer">
            <i className="czs-chemistry" />
          </a>
          <a
            href="https://www.apple.com/"
            title="Apple"
            rel="noopener noreferrer"
          >
            <i className="czs-apple" />
          </a>
          <a
            href="https://store.steampowered.com/"
            title="Steam"
            rel="noopener noreferrer"
          >
            <i className="czs-steam" />
          </a>
        </div>
      </div>
    </div>
  );
}
