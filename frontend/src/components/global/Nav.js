import React from "react";
import styles from "../../styles/global/nav.module.css";
function Nav({ mode, game }) {
  // if game is positive then it means that it is a game header nav so it will contain the details of the game

  return (
    <div className={styles.nav}>
      {mode === "game" ? (
        <>
          <div className={styles.titleId}>
            <div className={styles.title}>{game.title}</div>
            <div className={styles.id}>Room id : {game.id}</div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.endRoom}>End Room</div>
            <div className={styles.exitRoom}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_12_116)">
                  <path
                    d="M15.9375 18.75C15.42 18.75 15 17.91 15 16.875C15 15.84 15.42 15 15.9375 15C16.455 15 16.875 15.84 16.875 16.875C16.875 17.91 16.455 18.75 15.9375 18.75Z"
                    fill="#343434"
                  />
                  <path
                    d="M20.3025 0.228761C20.4039 0.316892 20.4852 0.425787 20.5408 0.54807C20.5965 0.670352 20.6252 0.803165 20.625 0.937511V1.87501H21.5625C22.3084 1.87501 23.0238 2.17133 23.5512 2.69877C24.0787 3.22622 24.375 3.94159 24.375 4.68751V28.125H27.1875C27.4361 28.125 27.6746 28.2238 27.8504 28.3996C28.0262 28.5754 28.125 28.8139 28.125 29.0625C28.125 29.3112 28.0262 29.5496 27.8504 29.7254C27.6746 29.9012 27.4361 30 27.1875 30H2.8125C2.56386 30 2.3254 29.9012 2.14959 29.7254C1.97377 29.5496 1.875 29.3112 1.875 29.0625C1.875 28.8139 1.97377 28.5754 2.14959 28.3996C2.3254 28.2238 2.56386 28.125 2.8125 28.125H5.625V2.81251C5.62503 2.58663 5.70662 2.36836 5.85475 2.19784C6.00288 2.02732 6.2076 1.91601 6.43125 1.88439L19.5563 0.009386C19.6891 -0.00958535 19.8245 0.00018218 19.9532 0.0380284C20.0819 0.0758746 20.2011 0.140918 20.3025 0.228761ZM21.5625 3.75001H20.625V28.125H22.5V4.68751C22.5 4.43887 22.4012 4.20041 22.2254 4.0246C22.0496 3.84878 21.8111 3.75001 21.5625 3.75001ZM7.5 3.62626V28.125H18.75V2.01939L7.5 3.62626Z"
                    fill="#313131"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12_116">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Nav;
