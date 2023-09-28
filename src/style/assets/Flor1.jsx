import React from "react";

export default function Flor1({ width, height }) {
  return (
    <svg
      width={width || "305"}
      height={height || "242"}
      viewBox="0 0 305 242"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.726929 241.855C5.81494 241.055 20.3279 237.348 36.7549 232.672C46.4948 229.91 55.314 226.59 63.6244 222.52C76.5383 216.245 86.0359 209.655 94.0071 201.417C98.1502 197.128 100.985 193.422 103.699 188.721C105.104 186.274 105.225 186.153 107.43 185.038C112.203 182.64 130.835 172.003 130.277 172.003C129.647 172.003 111.646 181.816 108.205 184.045C107.309 184.627 106.509 185.087 106.485 185.038C106.436 184.99 107.43 183.706 108.69 182.179C117.121 171.979 120.659 166.697 123.808 159.768C127.346 151.894 129.72 143.293 133.524 124.346C135.293 115.405 136.189 112.28 138.103 108.355C143.7 96.8463 155.354 87.3971 169.31 83.0844C172.362 82.1395 170.618 82.3576 166.233 83.4721C161.048 84.8046 156.493 86.7914 152.204 89.6019C150.944 90.4257 150.024 90.9587 150.121 90.7891C150.242 90.6195 151.526 88.9477 153.004 87.0821C156.808 82.3091 159.715 78.3598 161.435 75.622C164.415 70.8974 166.863 64.8403 168.559 58.1774L169.237 55.4153L170.691 54.7612C173.792 53.3559 184.21 47.5653 195.501 40.9993C203.787 36.1778 208.1 33.8519 212.873 31.6228C240.905 18.5878 266.442 16.7949 283.281 26.7044C291.495 31.5259 297.552 38.8914 301.477 48.8009C302.858 52.3141 303.173 54.3493 303.027 59.195C302.906 64.0407 302.543 65.5671 300.677 69.4195C296.728 77.5845 288.708 83.4236 278.702 85.4346C275.722 86.0403 269.107 86.0403 266.273 85.4346C259.755 84.0778 254.57 81.3157 250.5 77.0999C248.125 74.6286 247.326 73.5383 245.969 70.849C244.539 67.99 243.74 64.8403 243.425 60.9152C243.352 60.1641 243.328 60.2611 243.304 61.3029C243.28 62.054 243.425 63.5804 243.619 64.6949C245.606 76.0339 255.176 85.1438 267.726 87.6152C270.876 88.2451 277.03 88.1724 280.325 87.4698C286.964 86.0645 292.682 82.9148 297.188 78.2145C299.587 75.6947 300.871 73.8291 302.397 70.6309C304.384 66.4394 305.232 61.9813 304.941 57.0629C304.723 53.4528 304.239 51.248 302.93 47.9529C296.098 30.7021 284.008 20.938 265.909 17.9821C262.081 17.3764 251.711 17.3764 247.132 17.9821C231.093 20.1627 214.738 26.3168 197.463 36.7108C185.64 43.8098 170.424 53.5255 169.964 54.2524C169.479 55.0277 169.479 54.1554 170.012 51.6599C170.327 50.085 171.127 45.6997 171.781 41.8958C173.283 33.1735 173.84 31.2836 175.948 27.3586C177.378 24.6692 178.88 22.6825 181.472 19.9931C185.785 15.535 190.97 12.1673 196.858 10.0109C199.595 9.01754 199.28 8.96908 195.937 9.914C189.419 11.7311 184.889 14.4447 180.309 19.242L177.887 21.7618L177.741 20.8653C177.668 20.3808 177.596 18.5878 177.596 16.9161C177.596 14.469 177.523 13.8148 177.257 13.7179C177.063 13.6452 176.772 13.1364 176.627 12.6276C176.481 12.0219 176.215 11.61 175.924 11.5373C175.658 11.4646 175.27 11.0285 175.076 10.5439C174.785 9.86554 174.567 9.67171 174.107 9.67171C173.719 9.67171 173.332 9.45365 173.089 9.066C172.799 8.62988 172.556 8.50874 172.169 8.60565C171.805 8.67834 171.466 8.53297 171.054 8.12108C170.739 7.75765 170.303 7.49114 170.061 7.49114C169.818 7.49114 169.31 7.22462 168.922 6.88542C168.51 6.54622 167.977 6.27971 167.686 6.27971C167.42 6.27971 167.008 6.01319 166.79 5.69822C166.596 5.35902 166.184 5.06827 165.893 5.01982C165.578 4.97136 165.336 4.70485 165.239 4.34142C165.142 3.92953 164.876 3.71147 164.343 3.59033C163.931 3.51764 163.252 3.20267 162.816 2.8877C161.968 2.28198 161.508 2.47581 161.653 3.37227C161.726 3.9053 162.017 4.17182 162.865 4.43833C163.277 4.55947 163.277 4.60793 162.889 5.45593C162.477 6.27971 162.477 6.35239 162.889 6.64314C163.422 7.03079 163.422 7.39422 162.792 8.24222C162.404 8.79948 162.356 9.04177 162.574 9.30828C162.792 9.55057 162.744 9.81708 162.429 10.4228C162.065 11.1739 162.065 11.2223 162.453 11.5131C162.792 11.7554 162.841 12.0219 162.695 12.8214C162.55 13.6937 162.598 13.8875 163.034 14.1782C163.446 14.469 163.543 14.8082 163.543 15.8258C163.543 17.9579 164.125 19.4358 165.433 20.5746C167.686 22.5613 172.266 24.5965 174.737 24.7177C175.391 24.7661 175.9 24.8146 175.9 24.8631C175.9 24.9357 175.464 25.8807 174.931 26.9952C173.017 30.9929 171.926 35.0633 171.175 40.9266C169.237 56.1664 163.931 70.0736 154.869 83.6901C152.035 87.9544 148.812 92.0732 147.286 93.3816C146.51 94.06 145.081 95.4895 144.112 96.604L142.343 98.615L142.149 97.5731C142.028 96.9916 142.004 94.5445 142.077 92.1217C142.198 88.3905 142.149 87.6878 141.859 87.6878C141.422 87.6878 141.253 87.3971 140.889 86.0161C140.696 85.1681 140.502 84.9016 140.138 84.9016C139.751 84.9016 139.048 83.8597 138.515 82.4787C138.467 82.3576 138.152 82.2606 137.788 82.3091C137.304 82.3333 136.989 82.1395 136.504 81.4853C135.947 80.7827 135.729 80.6373 135.196 80.7585C134.663 80.8554 134.372 80.6858 133.597 79.9105C133.088 79.4017 132.458 78.9655 132.167 78.9655C131.901 78.9413 131.295 78.6263 130.835 78.2387C130.374 77.8268 129.72 77.5118 129.381 77.5118C128.969 77.5118 128.557 77.2453 128.121 76.6881C127.758 76.2277 127.2 75.8158 126.91 75.7674C126.522 75.7189 126.28 75.4282 126.086 74.8467C125.892 74.3137 125.625 73.9744 125.238 73.8533C124.462 73.6595 123.106 72.9568 122.379 72.3754C121.603 71.7939 121.337 72.0846 121.434 73.4172C121.507 74.3863 121.579 74.459 122.355 74.6771C122.815 74.7982 123.227 74.9194 123.275 74.9678C123.324 74.9921 123.106 75.5493 122.791 76.1793L122.233 77.318L122.766 77.6814C123.518 78.1902 123.469 78.699 122.573 79.9347C121.87 80.9038 121.846 81.0007 122.209 81.2915C122.597 81.558 122.597 81.6549 122.137 82.5756C121.482 83.8113 121.507 84.1989 122.137 84.3685C122.597 84.4897 122.645 84.6108 122.5 85.3134C122.04 87.4456 122.04 87.5667 122.645 87.809C123.154 88.027 123.203 88.2451 123.348 90.353C123.542 93.5512 123.881 94.5445 125.189 95.974C127.976 98.9541 135.341 102.467 138.782 102.467C139.218 102.467 139.557 102.54 139.508 102.661C139.46 102.758 138.685 104.309 137.788 106.102C135.22 111.214 133.766 116.132 132.628 123.401C129.793 141.863 123.324 158.678 112.978 174.669C110.919 177.818 106.097 184.651 105.976 184.53C105.928 184.505 106.267 183.512 106.727 182.349C108.859 176.995 109.804 172.197 109.828 166.31C109.877 161.924 109.61 159.477 108.641 155.286C107.139 148.841 103.892 141.451 100.67 137.163C99.3374 135.37 95.485 131.711 93.4256 130.233C89.0402 127.108 83.7341 125.194 77.8951 124.636C76.2475 124.467 76.1991 124.443 75.7872 123.595C75.1088 122.141 72.2013 117.416 70.5538 115.09C68.2278 111.82 65.2719 108.379 63.5033 106.901C60.087 104.066 54.9506 102.201 47.2458 101.014C44.2173 100.529 39.0081 100.359 39.0081 100.723C39.0081 100.82 39.9046 101.28 40.9949 101.716C42.7878 102.443 43.2239 102.758 45.1864 104.745C46.5432 106.126 48.8449 108.985 51.2193 112.28C55.6774 118.41 58.1003 121.002 60.9593 122.674C62.8491 123.788 66.1199 125 67.2345 125C67.5494 125 67.8886 125.097 67.9613 125.242C68.034 125.388 67.8886 125.484 67.6221 125.484C67.3556 125.484 65.9746 125.872 64.5451 126.332C54.2479 129.7 45.8406 138.011 42.4486 148.187C41.2372 151.773 40.8495 154.22 40.8495 158.314C40.8737 162.53 41.5037 165.825 43.0059 169.532C44.0719 172.173 44.0235 172.924 42.7878 172.779C42.2063 172.706 41.8429 172.827 41.5279 173.166C41.2614 173.433 40.583 173.893 39.9773 174.184C39.3716 174.499 38.5236 175.056 38.0874 175.42C37.3121 176.098 37.2637 176.098 36.561 175.759C35.8826 175.395 35.8342 175.42 35.2527 175.977C34.9135 176.316 34.647 176.728 34.647 176.898C34.647 177.067 34.1624 177.528 33.5567 177.891C32.951 178.279 32.4179 178.691 32.3453 178.812C32.2726 178.909 32.636 179.224 33.1933 179.514C34.2835 180.072 34.332 180.144 33.7505 180.774C33.4355 181.138 33.4113 181.331 33.6294 181.816C33.8959 182.373 34.017 182.422 34.8893 182.276C35.7373 182.131 35.9553 182.204 36.7064 182.882C37.6029 183.657 38.4509 183.851 38.9597 183.342C39.4442 182.858 39.5169 183.27 39.105 184.094L38.7174 184.869L39.9046 186.226C40.5345 186.977 41.649 187.897 42.3517 188.309C45.5256 190.102 50.6136 188.6 55.7259 184.36C56.3316 183.875 56.9615 183.512 57.1311 183.56C57.3007 183.633 57.3734 183.536 57.3007 183.342C57.228 183.149 57.3734 182.809 57.6157 182.591C58.0518 182.179 58.0518 182.107 57.325 179.926C56.3074 176.922 55.2413 175.226 53.0365 173.118C50.0322 170.235 47.5366 169.314 45.2834 170.283C44.6049 170.598 44.0235 170.792 43.975 170.744C43.7327 170.453 42.6182 166.915 42.2548 165.219C41.6248 162.239 41.6733 157.394 42.3759 154.074C44.4353 144.334 51.1224 135.757 60.3778 130.936C70.7476 125.557 82.45 125.703 91.4631 131.324C93.8617 132.802 97.8837 136.484 99.6039 138.762C102.56 142.687 105.806 150.828 106.994 157.369C107.551 160.349 107.624 168.03 107.139 170.792C105.71 178.836 102.754 185.426 97.3022 192.719C94.7097 196.184 88.0468 202.919 84.2914 205.899C74.8423 213.313 64.4724 219.201 51.8251 224.289C46.0587 226.615 41.8429 228.044 31.4973 231.145C12.0417 237.033 6.10352e-05 241.103 6.10352e-05 241.806C6.10352e-05 241.927 0.024292 242 0.0485229 242C0.0969849 241.976 0.387726 241.903 0.726929 241.855ZM137.376 98.6634C134.227 95.441 131.658 91.5402 128.484 85.0469C125.868 79.6924 125.189 77.8268 127.443 82.1637C129.284 85.7011 132.506 91.1768 134.832 94.7384C136.795 97.7427 138.224 99.4387 139.678 100.481C140.066 100.771 140.26 101.014 140.066 101.014C139.872 101.014 138.66 99.9475 137.376 98.6634ZM173.695 21.5437C171.539 19.3147 169.479 16.2377 167.153 11.7554C165.118 7.83034 164.658 6.54622 166.475 9.86554C167.686 12.0946 171.175 17.6672 172.677 19.775C173.259 20.5988 174.373 21.8345 175.124 22.5371C175.876 23.2397 176.239 23.6516 175.9 23.482C175.561 23.3124 174.567 22.4402 173.695 21.5437Z"
        fill="white"
      />
      <path
        d="M66.7258 207.717C66.7985 207.499 66.8712 206.99 66.8712 206.554C66.8712 205.827 66.9197 205.779 67.5496 205.875C67.9857 205.924 68.3492 205.827 68.5672 205.561C68.858 205.221 68.8095 205.003 68.3249 204.107C67.7919 203.113 67.7677 202.968 68.0584 202.12C68.3734 201.248 68.3734 201.199 67.6223 200.569C66.7743 199.867 66.9439 199.625 68.3249 199.625C69.0033 199.625 69.076 199.528 69.6575 197.638C70.772 194.173 70.1179 191.944 67.1862 189.206C65.1268 187.268 60.8141 184.845 58.3427 184.239C57.9551 184.142 57.737 183.949 57.8097 183.827C58.2216 183.149 56.8648 184.264 55.3384 185.863C53.3274 187.946 52.5763 189.134 51.7768 191.629C50.9772 194.028 50.7592 196.087 51.1226 197.856C51.3649 199.067 51.583 199.406 52.649 200.4C53.5213 201.224 53.9574 201.49 54.2481 201.345C54.4662 201.224 54.9265 201.078 55.2657 200.981C55.823 200.86 55.9441 200.933 56.0653 201.466C56.1864 201.878 56.5256 202.193 57.1071 202.459C57.5917 202.653 58.3427 203.065 58.7304 203.38C59.1423 203.671 59.9418 204.155 60.5233 204.446C61.2986 204.834 61.5894 205.149 61.7105 205.706C61.8559 206.53 62.3889 206.893 63.4308 206.893C63.8184 206.893 64.6664 207.16 65.3206 207.499C66.7258 208.226 66.5562 208.177 66.7258 207.717Z"
        fill="white"
      />
      <path
        d="M178.541 189.206C178.686 188.527 178.977 187.704 179.195 187.389C179.534 186.88 179.534 186.662 179.292 186.032C179.05 185.474 179.05 185.232 179.268 185.014C179.413 184.869 179.534 184.287 179.534 183.73C179.534 183.124 179.679 182.591 179.898 182.422C180.091 182.252 180.261 181.768 180.261 181.331C180.261 180.895 180.431 180.411 180.624 180.241C180.842 180.047 180.988 179.538 180.988 178.884C180.988 178.061 181.109 177.77 181.497 177.576C181.909 177.334 181.957 177.14 181.836 176.365C181.715 175.638 181.763 175.395 182.102 175.202C182.417 175.032 182.466 174.814 182.32 174.281C182.223 173.893 182.127 173.094 182.102 172.488C182.102 171.882 181.933 171.131 181.763 170.84C181.569 170.525 181.497 170.017 181.569 169.726C181.69 169.266 181.375 168.878 179.849 167.521C178.856 166.6 177.208 164.832 176.215 163.596C174.204 161.052 173.647 160.761 172.314 161.488C169.867 162.797 166.693 169.702 166.693 173.675C166.693 175.226 167.396 176.679 169.067 178.569C169.77 179.369 169.988 179.757 169.818 180.023C169.479 180.556 169.528 180.605 170.57 181.307C171.272 181.768 171.514 182.082 171.466 182.47C171.442 182.858 171.636 183.1 172.241 183.415C172.702 183.633 173.162 184.045 173.259 184.336C173.38 184.651 173.671 184.845 174.01 184.845C175.028 184.845 175.779 185.402 175.706 186.08C175.633 186.613 175.779 186.759 176.627 187.098C177.62 187.485 177.62 187.485 177.232 188.091C176.748 188.818 176.917 189.424 177.693 189.981L178.274 190.417L178.541 189.206ZM174.083 175.735C172.944 171.64 172.435 168.078 172.556 165.195C172.605 163.814 172.774 162.675 172.92 162.53C173.162 162.288 173.162 162.457 172.944 163.184C172.799 163.717 172.75 164.953 172.823 166.067C172.968 168.248 174.591 176.001 175.682 179.805C176.069 181.186 176.384 182.397 176.36 182.543C176.336 182.955 174.931 178.787 174.083 175.735Z"
        fill="white"
      />
      <path
        d="M73.0735 187.122C73.7277 186.88 74.4303 186.347 75.0603 185.596C75.9325 184.578 76.0052 184.36 75.7387 183.972C75.0845 183.003 75.1329 182.495 75.9325 182.107C76.5382 181.816 76.9259 181.235 77.895 179.175C78.9611 176.922 79.1791 176.631 79.7121 176.607C80.5844 176.607 80.9236 176.171 80.9236 175.129C80.9236 174.62 81.1416 173.724 81.4082 173.094C81.6747 172.464 81.8443 171.858 81.7474 171.737C81.6747 171.616 81.1901 171.519 80.6813 171.519C79.8091 171.519 79.7364 171.47 79.6637 170.768C79.5668 169.653 78.9853 169.387 78.0646 170.017C77.2893 170.598 76.1021 170.719 75.666 170.283C75.3268 169.944 74.503 170.356 74.1396 171.034C73.8004 171.64 73.34 171.664 73.5339 171.059C73.8488 170.065 73.3158 169.532 71.4502 168.926C67.937 167.836 66.1684 168.297 63.479 171.01C62.1464 172.367 61.3711 173.433 60.5473 175.032C59.457 177.14 58.1487 180.556 58.1487 181.283C58.1487 181.865 61.8799 184.942 63.6243 185.79C66.8468 187.364 70.8202 187.922 73.0735 187.122Z"
        fill="white"
      />
      <path
        d="M189.153 167.521C189.734 167.352 190.728 166.867 191.382 166.431C192.351 165.825 192.69 165.728 193.054 165.922C193.417 166.116 193.635 166.043 194.192 165.462C194.677 164.953 195.04 164.783 195.379 164.88C195.767 164.977 196.009 164.808 196.324 164.25C196.567 163.838 196.93 163.548 197.148 163.572C197.39 163.62 197.633 163.378 197.778 162.918C198.117 161.827 198.408 161.561 199.062 161.731C199.523 161.852 199.716 161.731 200.056 161.125C200.54 160.301 200.807 160.18 201.001 160.737C201.194 161.246 202.163 161.197 202.648 160.64C203.036 160.204 203.012 160.18 202.091 159.792C201.534 159.598 200.879 159.187 200.613 158.92C200.225 158.532 200.031 158.484 199.474 158.702C198.965 158.896 198.796 158.872 198.626 158.557C198.481 158.339 198.069 158.193 197.584 158.193C197.003 158.193 196.664 158.048 196.494 157.709C196.349 157.442 196.034 157.224 195.791 157.224C195.549 157.224 195.089 157.03 194.774 156.764C194.459 156.521 193.805 156.255 193.32 156.158C192.714 156.061 192.399 155.843 192.302 155.528C192.206 155.189 191.963 155.043 191.454 155.043C191.067 155.043 190.558 154.85 190.34 154.583C190.025 154.244 189.71 154.171 188.886 154.244C188.256 154.317 187.772 154.268 187.675 154.098C187.554 153.905 187.36 153.905 186.996 154.098C186.73 154.244 186.173 154.317 185.761 154.244C185.131 154.171 184.695 154.389 183.047 155.649C181.981 156.449 180.261 157.539 179.243 158.048C177.063 159.162 176.675 159.695 177.256 161.052C178.298 163.596 183.677 167.109 187.408 167.715C187.796 167.788 188.595 167.691 189.153 167.521ZM179.8 161.246C179.074 161.052 178.395 160.786 178.25 160.64C178.129 160.519 178.492 160.568 179.074 160.786C179.655 160.979 181.06 161.197 182.199 161.27C183.992 161.391 192.06 161.052 195.283 160.737C196.93 160.592 192.787 161.319 190.558 161.561C187.869 161.876 181.424 161.682 179.8 161.246Z"
        fill="white"
      />
      <path
        d="M157.753 161.246C157.874 161.125 171.83 159.405 172.605 159.405C172.871 159.405 173.017 159.332 172.92 159.259C172.629 158.969 162.695 159.938 159.667 160.519C156.614 161.125 155.936 161.343 157.05 161.343C157.365 161.343 157.704 161.294 157.753 161.246Z"
        fill="white"
      />
      <path
        d="M177.499 157.151C179.461 155.431 180.649 154.583 182.732 153.372C184.38 152.427 184.695 152.136 184.719 151.603C184.743 151.24 185.01 150.682 185.325 150.343C185.712 149.931 185.834 149.592 185.712 149.253C185.616 148.914 185.737 148.502 186.052 148.041C186.633 147.242 186.682 146.781 186.294 146.394C186.1 146.2 186.1 145.885 186.318 145.207C186.585 144.407 186.56 144.262 186.221 143.995C185.882 143.753 185.834 143.486 185.979 142.493C186.076 141.693 186.027 141.233 185.858 141.136C185.688 141.015 185.64 140.652 185.737 140.094C185.834 139.586 185.785 139.028 185.591 138.689C185.373 138.253 185.349 137.938 185.543 137.357C185.761 136.799 185.737 136.484 185.519 136.121C185.276 135.733 185.325 135.588 185.737 135.152C186.197 134.691 186.221 134.57 185.93 133.771C185.761 133.286 185.616 132.414 185.591 131.857C185.591 130.694 185.616 130.718 184.768 131.106C184.016 131.445 183.774 132.075 184.138 132.753C184.477 133.383 184.501 133.335 183.29 133.625C182.563 133.795 182.296 133.989 182.199 134.449C182.078 134.982 181.909 135.055 180.818 135.128C179.825 135.176 179.558 135.297 179.461 135.661C179.389 135.976 179.122 136.145 178.735 136.145C177.765 136.145 177.354 136.387 177.354 136.993C177.354 137.429 177.136 137.623 176.312 137.914C175.44 138.205 175.294 138.35 175.367 138.883C175.415 139.368 175.221 139.658 174.398 140.216C172.75 141.378 171.369 142.953 171.078 144.019C170.376 146.612 171.078 152.16 172.532 155.31C173.986 158.435 175.44 158.968 177.499 157.151ZM174.931 154.341C175.294 152.015 176.36 148.792 177.62 146.103C178.589 144.019 182.417 137.114 182.587 137.114C182.635 137.114 181.836 138.834 180.77 140.942C177.087 148.332 175.003 153.759 174.906 156.255C174.906 156.594 174.834 156.715 174.761 156.521C174.688 156.352 174.761 155.358 174.931 154.341Z"
        fill="white"
      />
      <path
        d="M210.837 154.268C212 152.815 212.606 151.749 213.091 150.222C213.648 148.526 213.503 145.062 212.776 143.172C212.509 142.445 211.661 140.216 210.862 138.205C209.505 134.692 209.456 134.498 209.481 132.317C209.481 130.088 209.481 130.064 209.045 130.621C208.415 131.445 206.573 135.273 205.871 137.236C205.531 138.181 205.12 139.78 204.95 140.797C204.683 142.445 204.683 142.905 205.071 144.674C205.798 148.114 208.923 155.286 209.674 155.286C209.844 155.286 210.377 154.826 210.837 154.268Z"
        fill="white"
      />
      <path
        d="M232.11 149.52C230.22 148.066 229.518 146.854 226.998 141.015C224.987 136.291 223.485 134.377 220.723 132.996C218.663 131.954 214.908 131.348 214.908 132.051C214.908 132.778 216.773 137.769 217.912 140.143C219.875 144.165 221.28 145.546 225.568 147.678C227.773 148.768 231.722 150.198 232.498 150.198C232.861 150.174 232.764 150.028 232.11 149.52Z"
        fill="white"
      />
      <path
        d="M137.619 139.271C148.013 132.559 156.444 127.253 158.697 126.042C162.889 123.764 168.922 121.85 174.204 121.099C177.475 120.639 184.792 120.687 188.377 121.196C196.397 122.359 205.798 125.654 211.467 129.289C214.06 130.936 212.388 129.555 209.384 127.568C202.939 123.28 196.639 120.687 189.468 119.379C185.712 118.676 178.177 118.628 174.567 119.282C167.42 120.566 160.442 123.28 154.191 127.229C151.598 128.852 129.623 144.116 129.623 144.286C129.623 144.456 129.429 144.553 137.619 139.271Z"
        fill="white"
      />
      <path
        d="M221.934 127.762C222.273 127.713 223.194 127.544 223.994 127.398C226.683 126.914 229.178 125.291 232.546 121.802C234.145 120.178 235.817 117.974 235.648 117.78C235.575 117.731 235.211 117.901 234.8 118.192C233.249 119.306 232.256 119.476 226.174 119.67C219.657 119.888 218.809 120.057 216.458 121.559C214.738 122.674 213.696 123.861 212.703 125.848L211.976 127.302L212.776 127.495C213.721 127.689 221.062 127.931 221.934 127.762Z"
        fill="white"
      />
      <path
        d="M195.428 91.4675C196.349 91.0072 197.73 90.0623 198.505 89.3596C199.862 88.1482 200.08 88.0755 201.146 88.5359C201.461 88.657 201.776 88.3905 202.455 87.4456C203.278 86.2826 203.424 86.2099 204.126 86.3311C204.853 86.4764 204.926 86.428 205.483 85.2165C205.944 84.1747 206.186 83.9324 206.646 83.9324C207.179 83.9324 207.3 83.7628 207.615 82.3576L208.003 80.7827H209.021C210.208 80.7585 210.111 80.8554 210.741 79.4017C211.298 78.1176 211.492 78.0206 212.122 78.7233C212.752 79.4259 213.624 79.329 214.448 78.4568C215.223 77.633 215.32 77.2696 214.835 77.2696C214.084 77.2696 212.001 76.4942 211.128 75.9128C210.232 75.2828 210.159 75.2828 209.505 75.6705C208.657 76.155 208.269 76.155 207.882 75.6947C207.688 75.4524 207.131 75.3313 206.234 75.3313C205.12 75.3313 204.805 75.2344 204.344 74.7255C203.908 74.2652 203.545 74.1198 202.721 74.1198C201.897 74.1198 201.558 73.9987 201.146 73.5141C200.686 73.0053 200.419 72.9084 199.159 72.9084C197.827 72.9084 197.706 72.8599 197.56 72.3027C197.415 71.7454 197.294 71.697 195.986 71.697C194.823 71.697 194.532 71.6243 194.314 71.2124C193.999 70.6309 193.345 70.6067 191.842 71.1397C190.752 71.5274 190.679 71.5274 190.243 71.1155C189.783 70.7278 189.71 70.7278 188.402 71.382C187.239 71.9393 186.948 72.0119 186.536 71.7454C186.1 71.4547 185.785 71.697 182.975 74.4106C181.279 76.0581 178.88 78.0933 177.644 78.9171C176.409 79.7651 175.222 80.7342 175.004 81.0492C173.623 83.1571 176.118 86.2341 181.448 88.972C185.664 91.1525 189.42 92.2913 192.351 92.2913C193.466 92.2913 194.096 92.1217 195.428 91.4675ZM177.039 83.3267C175.827 82.9633 176.045 82.721 177.257 83.0602C179.001 83.5205 181.133 83.6174 183.556 83.3267C187.433 82.8906 197.027 81.1946 201.437 80.177C203.69 79.644 205.58 79.2563 205.629 79.3048C205.75 79.4017 195.234 82.2606 192.981 82.721C188.862 83.569 186.464 83.7871 182.199 83.7144C179.849 83.6659 177.548 83.4963 177.039 83.3267Z"
        fill="white"
      />
      <path
        d="M235.987 78.5054C237.658 78.3116 238.119 78.0451 239.306 76.6156C241.487 73.9504 242.528 69.9043 242.02 65.955L241.753 63.7017L239.766 63.1202C235.672 61.8846 231.868 61.6423 229.251 62.4661C226.683 63.2656 225.69 64.3074 224.817 67.1664L224.357 68.6686L225.084 69.347L225.811 70.0012H225.205C224.236 70.0012 223.679 70.4131 223.509 71.2126C223.339 72.0364 223.121 72.206 222.079 72.3998C221.062 72.6179 220.965 73.3447 221.813 74.0231L222.467 74.5561L221.91 75.3072C221.256 76.2037 221.401 76.3975 222.976 76.6398C223.509 76.7367 224.212 77.0275 224.551 77.2697C225.302 77.8755 225.52 77.8755 226.198 77.2455C226.659 76.8094 226.853 76.7852 227.652 77.0032C228.185 77.1486 229.057 77.2697 229.615 77.2697C230.172 77.2697 230.923 77.3909 231.262 77.512C231.771 77.7059 232.11 77.6816 232.667 77.3909C233.322 77.0517 233.418 77.0759 233.709 77.4636C233.879 77.6816 234.097 78.0693 234.17 78.3116C234.266 78.5296 234.388 78.6992 234.485 78.6992C234.581 78.675 235.26 78.5781 235.987 78.5054Z"
        fill="white"
      />
      <path
        d="M258.495 65.5914C260.216 65.1068 261.354 64.065 262.275 62.1025C263.171 60.2369 263.171 60.1157 262.299 59.1224L261.79 58.5409L262.469 58.7105C263.341 58.9043 263.947 58.5651 264.334 57.6687C264.577 57.0872 264.843 56.8933 265.643 56.748C266.83 56.5057 267.121 55.7546 266.248 55.1489L265.715 54.7612L266.37 54.0101C266.709 53.5983 267 53.1621 267 53.0652C267 52.9683 266.466 52.726 265.788 52.5564C265.134 52.3868 264.334 51.9749 264.044 51.66C263.438 51.0058 262.735 50.9331 262.13 51.4661C261.766 51.8296 261.597 51.8053 260.24 51.345C259.44 51.0785 258.592 50.8604 258.374 50.8604C258.132 50.8604 257.599 50.7393 257.163 50.5697C256.557 50.3516 256.218 50.3516 255.782 50.5454C255.249 50.7877 255.152 50.7393 254.764 50.0124C254.376 49.3098 254.183 49.2129 253.02 49.0675C251.348 48.8737 250.476 49.2613 248.877 50.9573C246.599 53.3802 245.194 57.1841 245.194 60.9637V62.999L247.035 63.8712C250.766 65.5914 255.854 66.3667 258.495 65.5914Z"
        fill="white"
      />
      <path
        d="M237.44 60.6247C237.78 60.5762 238.822 60.3824 239.766 60.1643L241.511 59.8009L241.753 58.7833C242.601 55.4398 242.65 51.442 241.899 48.68C241.026 45.5787 239.524 44.125 236.52 43.4466L234.678 43.0347L233.976 43.8585C233.394 44.5369 233.273 44.5853 233.394 44.1492C233.564 43.4466 233.079 42.8166 232.086 42.5017C231.529 42.3078 231.093 41.9202 230.778 41.3387C230.196 40.2484 229.324 40.103 228.96 41.048C228.694 41.7748 228.694 41.7748 227.701 41.1691C227.264 40.9026 226.828 40.6845 226.707 40.6845C226.61 40.6845 226.538 41.266 226.538 41.9929C226.538 42.7197 226.441 43.3739 226.32 43.4466C226.198 43.5193 225.98 43.9312 225.835 44.3188C225.617 44.973 225.665 45.1184 226.15 45.5545C226.683 46.0148 226.707 46.1602 226.61 48.898C226.513 51.3936 226.562 51.8297 226.95 52.1931C227.337 52.605 227.337 52.6535 226.61 53.2592C225.908 53.8649 225.883 53.9618 226.029 55.1248C226.247 56.7723 226.756 57.4992 228.549 58.6137C230.705 59.9947 234.945 60.9396 237.44 60.6247Z"
        fill="white"
      />
      <path
        d="M165.53 58.7834C166.305 58.6138 166.984 58.3957 167.056 58.3473C167.129 58.2746 166.596 57.257 165.918 56.1182C162.598 50.6668 158.14 45.5788 155.427 44.1735C152.543 42.6714 148.061 41.5811 143.07 41.1692C140.163 40.9269 138.103 41.1207 139.193 41.5326C142.61 42.841 143.603 43.7374 148.255 49.7461C152.64 55.4398 154.482 57.0632 157.971 58.2746C160.127 59.0257 163.446 59.2437 165.53 58.7834Z"
        fill="white"
      />
      <path
        d="M243.958 57.2568C243.958 56.9903 243.885 56.9176 243.813 57.1115C243.74 57.2811 243.764 57.4991 243.837 57.5718C243.909 57.6687 243.982 57.5233 243.958 57.2568Z"
        fill="white"
      />
      <path
        d="M244.2 56.2881C244.2 56.0216 244.128 55.9489 244.055 56.1427C243.982 56.3123 244.006 56.5304 244.079 56.6031C244.152 56.7 244.225 56.5546 244.2 56.2881Z"
        fill="white"
      />
      <path
        d="M244.563 55.0761C244.66 54.7369 244.685 54.3977 244.636 54.325C244.563 54.2765 244.442 54.5188 244.37 54.8823C244.273 55.2215 244.249 55.5607 244.297 55.6334C244.37 55.6818 244.491 55.4395 244.563 55.0761Z"
        fill="white"
      />
      <path
        d="M216.604 15.8986C217.646 15.511 219.414 14.3238 220.214 13.4515C220.698 12.9427 220.965 12.8458 221.546 12.9427C222.225 13.0881 222.346 12.9912 222.758 12.2159C223.146 11.5132 223.364 11.3679 223.848 11.4163C224.381 11.489 224.551 11.3194 224.963 10.4714C225.302 9.6961 225.544 9.45381 225.859 9.57495C226.174 9.67187 226.295 9.50227 226.416 8.77541C226.731 7.00672 226.756 6.93403 227.555 7.10363C228.209 7.22478 228.306 7.17632 228.645 6.27986C229.082 5.18957 229.203 5.14112 230.051 5.69838C230.632 6.0618 230.681 6.0618 231.432 5.31072L232.207 4.51117L230.923 4.17197C230.22 4.00237 229.324 3.66317 228.936 3.44511C228.355 3.10591 228.137 3.08169 227.749 3.32397C227.167 3.6874 226.538 3.71163 226.538 3.37243C226.538 3.25129 226.005 3.13014 225.35 3.13014C224.575 3.13014 224.115 3.009 224.042 2.79094C223.969 2.62134 223.412 2.37906 222.831 2.30637C222.225 2.20946 221.595 1.96717 221.425 1.77334C221.207 1.50683 220.868 1.43414 220.238 1.53105C219.293 1.67643 218.954 1.53105 218.712 0.876882C218.591 0.537682 218.372 0.489224 217.621 0.610367C216.943 0.707282 216.628 0.658825 216.386 0.368081C215.998 -0.0922623 215.586 -0.116491 214.496 0.271167C213.89 0.489224 213.575 0.489224 213.236 0.295395C212.873 0.077338 212.63 0.125795 212 0.489224C211.492 0.804196 210.983 0.925339 210.619 0.828425C210.111 0.707282 209.747 0.973796 208.124 2.69403C207.106 3.80854 205.313 5.40763 204.15 6.25563C201.994 7.85472 201.631 8.38775 201.945 9.62341C202.697 12.6762 213.188 17.1827 216.604 15.8986ZM203.69 9.72032C203.327 9.62341 204.49 9.55072 206.234 9.55072C208.996 9.55072 210.086 9.40535 213.939 8.63004C216.41 8.12124 219.657 7.39438 221.183 6.98249C222.709 6.59483 223.994 6.30409 224.042 6.35255C224.212 6.54638 216.434 8.77541 213.696 9.33267C210.377 9.98684 205.556 10.1807 203.69 9.72032Z"
        fill="white"
      />
    </svg>
  );
}