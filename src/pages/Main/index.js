import React from 'react';

import './Main.css';

import logo from '../../assets/logo.svg';
import dislike from '../../assets/dislike.svg';
import like from '../../assets/like.svg';

export default function Main({match}) {
  return (
    <div className="main-container">
      <img src={logo} alt="TinDev" />
      <ul>
        <li>
          <img
            src="https://avatars0.githubusercontent.com/u/11524687?v=4"
            alt="user"
          />
          <footer>
            <strong>Bruno Lebrão</strong>
            <p>Front-End Developer</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={like} alt="like" />
            </button>
            <button>
              <img src={dislike} alt="dislike" />
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://avatars0.githubusercontent.com/u/11524687?v=4"
            alt="user"
          />
          <footer>
            <strong>Bruno Lebrão</strong>
            <p>Front-End Developer</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={like} alt="like" />
            </button>
            <button>
              <img src={dislike} alt="dislike" />
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://avatars0.githubusercontent.com/u/11524687?v=4"
            alt="user"
          />
          <footer>
            <strong>Bruno Lebrão</strong>
            <p>Front-End Developer</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={like} alt="like" />
            </button>
            <button>
              <img src={dislike} alt="dislike" />
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://avatars0.githubusercontent.com/u/11524687?v=4"
            alt="user"
          />
          <footer>
            <strong>Bruno Lebrão</strong>
            <p>Front-End Developer</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={like} alt="like" />
            </button>
            <button>
              <img src={dislike} alt="dislike" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
