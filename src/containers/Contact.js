import React from "react";
import { SlEnvolope, SlPhone, SlLocationPin } from "react-icons/sl";
import "../assets/css/Contact.css";

export default function Contact() {
  return (
    <>
      <div id="Contact" className="Contact container">
        <div className="info">
          <div className="infoTexts">
            <h3>Contacto</h3>
            <p>
              Espero podamos crear soluciones juntos. En caso de interés te dejo
              estos métodos de contacto. También podés contactarme por mis redes
              sociales. Muchas gracias.{" "}
            </p>
          </div>
          <div className="infoContacto">
            <div className="infoContacto__container">
              <div className="infoContacto--icon">
                <a href="https://mail.google.com" target="_blank"><SlEnvolope /></a>
              </div>
              <div className="infoContacto--text">
                <p>eley.aramis@gmail.com</p>
              </div>
            </div>
            <div className="infoContacto__container">
              <div className="infoContacto--icon">
                <a href="https://whatsapp.com" target="_blank"><SlPhone /></a>
              </div>
              <div className="infoContacto--text">
                <p>11-2250-1319</p>
              </div>
            </div>
            <div className="infoContacto__container">
              <div className="infoContacto--icon">
                <a href="https://google.com/maps/@-34.6045438,-58.3787764,15z" target="_blank"><SlLocationPin /></a>
              </div>
              <div className="infoContacto--text">
                <p>Buenos Aires, Argentina.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="illustration">
          <svg
            width="244"
            height="441"
            viewBox="0 0 244 441"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M116.25 4.96955C108.515 9.43431 101.814 13.8541 97.6963 18.9457C95.6398 21.4889 94.234 24.1927 93.6636 27.1473C93.0935 30.1007 93.3548 33.3212 94.6576 36.9038L94.1877 37.0747C92.8583 33.4188 92.5832 30.1062 93.1727 27.0526C93.762 24.0001 95.2119 21.2228 97.3075 18.6313C100.854 14.2452 106.268 10.3715 112.548 6.57291C110.512 7.42641 107.819 8.45455 104.769 9.26414C98.9891 10.7981 91.84 11.579 85.2147 8.9643C80.8404 10.9098 79.222 16.628 80.3549 22.0499C81.4915 27.4894 85.372 32.4697 91.803 32.7913L92.2751 32.8149L91.9898 33.1918C86.7085 40.1704 82.4419 48.2112 79.8252 54.8327C78.5166 58.1441 77.624 61.0921 77.2217 63.3692C77.0204 64.5085 76.9437 65.4698 76.9948 66.22C77.0466 66.9798 77.2265 67.4766 77.4903 67.7405C77.9038 68.154 77.9634 68.7094 77.8236 69.3153C77.6851 69.9153 77.3427 70.6113 76.8847 71.3769C76.3467 72.2761 75.6225 73.3126 74.8309 74.4455L74.8308 74.4456L74.8305 74.446C74.2793 75.2349 73.6955 76.0705 73.1191 76.9391C70.278 81.2201 67.5501 86.395 68.9996 91.539C69.2527 92.4372 68.9035 93.3651 68.3278 94.2605C67.7492 95.1605 66.9033 96.0855 66.0699 96.9939L66.0373 97.0294L66.0372 97.0295C65.2072 97.9342 64.3916 98.8231 63.8181 99.686C63.2567 100.531 62.9611 101.302 63.0668 102.001C68.3012 106.307 71.9203 110.091 74.0697 113.469C76.2303 116.864 76.9203 119.874 76.24 122.595L75.7549 122.474C76.3906 119.931 75.7646 117.064 73.6479 113.737C71.5298 110.408 67.9336 106.644 62.6779 102.329C56.6379 97.3691 51.1909 89.4404 47.2585 82.5216C45.2906 79.0592 43.6982 75.843 42.5971 73.3669C42.0467 72.1291 41.6181 71.0741 41.3265 70.2644C41.1808 69.8598 41.0684 69.5138 40.992 69.2353C40.9177 68.9642 40.8712 68.7353 40.8712 68.5753C40.8712 67.462 41.6179 66.7387 42.2873 66.2367C42.4566 66.1096 42.6252 65.9938 42.7795 65.8884L42.8115 65.8665C42.9546 65.7687 43.0823 65.6815 43.1921 65.5992C43.3113 65.5098 43.3961 65.4358 43.4496 65.3727C43.5002 65.3131 43.5032 65.2863 43.5033 65.2849L43.5034 65.2848L43.5033 65.2845L43.5033 65.2829L43.5031 65.277L43.502 65.2569L43.5008 65.2395C43.4997 65.2259 43.4984 65.21 43.4968 65.1916C43.4921 65.1377 43.4851 65.0663 43.4758 64.9777C43.4573 64.8008 43.4304 64.5597 43.397 64.2625L43.3701 64.0239L43.37 64.0229C43.3062 63.457 43.2243 62.7305 43.1346 61.8919C42.9288 59.9677 42.6816 57.4509 42.5168 54.9207C42.3521 52.3927 42.269 49.8423 42.3934 47.854C42.4555 46.8612 42.57 45.9958 42.7572 45.3393C42.8508 45.011 42.9655 44.7245 43.1078 44.4976C43.2499 44.2712 43.4301 44.0877 43.6605 43.9956C44.3928 43.7027 45.0557 42.9115 45.5275 41.7771C45.9958 40.6512 46.2581 39.2266 46.2179 37.7363C46.1372 34.753 44.8499 31.5656 41.6674 29.9744L41.5839 29.9326L41.5482 29.8463C41.0233 28.5766 40.4894 27.6912 39.797 26.9258C39.1019 26.1574 38.2376 25.4994 37.0339 24.6942L36.9151 24.6148L36.9233 24.4721C37.0225 22.7474 37.6579 21.5634 39.1517 19.6448C37.8525 19.9908 36.8813 20.3615 36.0548 20.8572C35.0871 21.4376 34.3024 22.1986 33.4216 23.3244L33.2984 23.4818L33.1178 23.3963C32.1387 22.9333 31.4243 22.5066 30.8036 21.9829C30.1831 21.4594 29.6663 20.8474 29.0737 20.0264L29.0459 19.9879L29.0341 19.9419C28.3795 17.3736 28.3518 15.6538 28.8986 12.636C27.4328 13.9093 26.4212 14.9545 25.6425 16.0115C24.7735 17.1913 24.1871 18.396 23.5876 19.9691L23.2948 20.7375L23.1104 19.9362C22.5463 17.4855 22.4732 15.8174 23.0238 12.441C21.5451 13.248 20.4939 14.0888 19.6174 15.172C18.6514 16.3658 17.8868 17.8669 17.0042 19.9766L16.9088 20.2048L16.6796 20.1118C16.2231 19.9265 15.9001 19.6932 15.6686 19.3312C15.4827 19.0405 15.3657 18.6814 15.2689 18.2354C11.5548 19.5574 9.29779 22.1574 9.12696 25.8142L9.12407 25.8762L9.09253 25.9296C8.15514 27.5176 7.66745 28.8271 7.41444 30.2119C7.16019 31.6034 7.14095 33.0796 7.15294 35.0136L7.1572 35.7009L6.71236 35.1769C5.87477 34.1903 5.35246 33.3437 5.04795 32.3956C4.79551 31.6096 4.6971 30.767 4.67996 29.7377C3.66399 30.8849 2.97522 31.9032 2.46816 33.0286C1.89113 34.3092 1.54311 35.7424 1.22745 37.6873L1.22526 37.7008L1.22162 37.714C0.367969 40.7981 0.279307 42.9788 0.915292 44.8987C1.55332 46.8248 2.93234 48.5263 5.10284 50.6286L5.19184 50.7148L5.17715 50.8378C4.71543 54.7048 4.82214 57.4154 5.47351 59.9144C6.12614 62.4183 7.32955 64.7273 9.09391 67.7925L9.12452 67.8457L9.12703 67.907C10.2399 95.1045 12.2158 115.096 17.0299 132.01C21.8418 148.917 29.4923 162.759 41.971 177.65L41.9758 177.656C42.304 178.072 42.6307 178.488 42.9566 178.903C49.8995 187.739 56.4361 196.058 68.797 197.963C69.7005 198.102 70.8647 197.776 72.2438 196.991C73.6159 196.211 75.1663 194.997 76.8281 193.418C80.1509 190.261 83.8925 185.672 87.5121 180.258C94.7533 169.426 101.478 155.338 103.388 142.896L103.882 142.972C101.957 155.513 95.1916 169.67 87.9277 180.536C84.2947 185.97 80.53 190.591 77.1725 193.781C75.4942 195.375 73.911 196.618 72.491 197.426C71.0779 198.23 69.7915 198.622 68.7209 198.457C56.1601 196.522 49.5085 188.053 42.59 179.246C42.3778 178.975 42.1655 178.705 41.9527 178.435C37.9856 210.18 40.6975 229.867 42.7737 244.939C43.381 249.347 43.9338 253.361 44.2494 257.166C44.9507 265.623 44.4774 273.051 40.8054 281.46C37.1376 289.859 30.2863 299.221 18.2689 311.568C8.4122 321.694 4.46509 338.389 5.54239 357.689C6.61126 376.838 12.6249 398.505 22.6587 418.75C24.5106 415.081 26.8388 412.226 30.4216 410.354C34.1434 408.409 39.1887 407.541 46.3972 407.876L46.374 408.375C39.2082 408.042 34.264 408.91 30.6531 410.797C27.0494 412.68 24.7432 415.594 22.8841 419.421C21.3456 422.589 20.1208 426.365 18.7192 430.686L18.5686 431.15C18.4951 431.377 18.4211 431.604 18.3465 431.834C18.7381 434.115 19.4919 435.759 20.4983 436.949C21.5127 438.148 22.7978 438.901 24.2684 439.373C26.7849 440.18 29.8063 440.155 32.8941 440.129H32.8987C33.4448 440.124 33.993 440.12 34.5408 440.12C43.7472 440.12 49.2456 439.421 53.8577 437.286C58.4526 435.16 62.1927 431.598 67.844 425.798C66.563 407.099 68.128 398.032 70.0583 390.298C70.3523 389.119 70.6546 387.973 70.9562 386.829C72.704 380.201 74.4314 373.65 74.4314 361.404H74.9314C74.9314 373.716 73.1892 380.323 71.4392 386.959L71.4388 386.961C71.1698 387.98 70.9007 389.001 70.6377 390.043C72.4054 389.722 74.2084 389.39 76.0457 389.051L76.0766 389.045C108.114 383.14 150.545 375.319 197.648 391.38C198.19 390.715 199.137 389.898 200.379 389.019C201.717 388.072 203.416 387.041 205.363 386.034C209.255 384.02 214.152 382.098 219.157 381.147C224.16 380.196 229.296 380.21 233.647 382.099C237.367 383.714 240.491 386.689 242.463 391.546C234.554 341.267 222.476 328.946 220.606 327.378C210.423 318.837 202.075 314.591 194.736 313.45C187.407 312.31 181.052 314.26 174.837 318.185L174.57 317.762C180.859 313.791 187.335 311.793 194.813 312.956C202.143 314.096 210.403 318.269 220.368 326.528C215.797 305.617 210.282 294.14 205.34 286.524C203.266 283.328 201.293 280.811 199.522 278.553L199.522 278.553L199.522 278.552L199.521 278.551L199.514 278.542C199.151 278.08 198.798 277.628 198.453 277.184C196.507 274.675 194.858 272.393 193.698 269.71C191.213 272.142 189.09 275.701 187.175 279.689C185.539 283.096 184.065 286.797 182.649 290.35L182.649 290.351L182.641 290.37C182.346 291.11 182.054 291.844 181.763 292.568C180.078 296.759 178.445 300.607 176.692 303.284C174.987 305.887 173.091 307.496 170.843 307.061C166.615 311.63 163.606 313.602 158.98 314.924L158.052 315.189L158.734 314.507C160.382 312.858 161.851 311.389 162.991 309.924C164.124 308.467 164.92 307.028 165.242 305.443C165.277 303.833 165.701 302.07 166.431 300.5C163.585 303.501 160.853 305.818 157.037 306.367C154.81 308.072 153.174 309.146 151.751 309.75C150.305 310.365 149.083 310.493 147.694 310.325L147.089 310.252L147.571 309.879C150.503 307.612 152.084 305.896 154.742 301.404C155.595 299.639 156.353 298.269 157.253 297.031C155.236 298.539 153.259 299.563 150.491 300.426C148.866 302.078 147.37 303.076 145.857 303.659C144.331 304.246 142.805 304.405 141.144 304.405H140.257L141.013 303.941C142.803 302.844 144.093 302.011 144.939 301.223C145.776 300.444 146.151 299.736 146.158 298.888L146.158 298.842L146.175 298.799C147.064 296.52 147.854 294.744 148.942 293.015C149.117 292.737 149.299 292.46 149.491 292.182C148.643 292.773 147.704 293.157 146.526 293.214C144.847 295.136 143.348 296.163 141.852 296.771C140.527 297.309 139.212 297.513 137.818 297.73L137.514 297.777C137.422 297.791 137.328 297.806 137.235 297.821L137.071 297.358C138.611 296.471 139.712 295.756 140.522 294.902C141.32 294.061 141.846 293.072 142.21 291.62C142.23 289.782 142.452 288.36 143.068 287.016C143.367 286.363 143.757 285.733 144.256 285.086C139.758 288.546 136.643 290.586 132.589 290.586H131.648L132.465 290.119C134.767 288.803 136.493 287.691 137.673 286.575C138.847 285.466 139.465 284.367 139.579 283.075C140.309 274.798 142.961 269.822 145.431 266.257C146.043 265.374 146.643 264.578 147.197 263.844L147.208 263.829C147.767 263.088 148.275 262.413 148.708 261.767C149.573 260.474 150.106 259.332 150.106 258.092C150.106 246.16 147.747 237.3 145.622 229.318C145.117 227.421 144.626 225.574 144.182 223.748C141.868 214.223 140.873 205.28 146.178 192.847L146.638 193.044C141.39 205.343 142.369 214.167 144.668 223.629C145.108 225.442 145.597 227.28 146.101 229.17L146.101 229.17L146.101 229.171C148.228 237.157 150.606 246.088 150.606 258.092C150.606 259.483 150.005 260.727 149.123 262.045C148.682 262.705 148.164 263.392 147.607 264.13L147.598 264.142C147.043 264.878 146.448 265.667 145.842 266.542C143.411 270.051 140.798 274.945 140.077 283.119C139.949 284.567 139.251 285.772 138.017 286.938C136.951 287.946 135.475 288.936 133.597 290.041C137.559 289.682 140.755 287.189 146.056 283.055L146.254 282.9L146.582 283.276C145.055 284.763 144.102 285.959 143.522 287.225C142.944 288.487 142.727 289.839 142.71 291.654L142.709 291.684L142.702 291.712C142.322 293.246 141.758 294.325 140.885 295.246C140.244 295.922 139.441 296.506 138.442 297.125C139.567 296.942 140.611 296.735 141.664 296.308C143.095 295.726 144.554 294.731 146.219 292.804L146.291 292.721L146.4 292.718C147.889 292.673 148.962 292.068 150.012 291.126C150.541 290.652 151.059 290.096 151.621 289.482L151.793 289.295C152.305 288.736 152.853 288.137 153.471 287.526L153.824 287.879C151.78 289.947 150.427 291.592 149.365 293.281C148.309 294.96 147.536 296.69 146.657 298.939C146.636 299.948 146.165 300.765 145.28 301.589C144.526 302.291 143.451 303.016 142.055 303.886C143.326 303.831 144.505 303.643 145.677 303.192C147.122 302.635 148.574 301.672 150.178 300.032L150.222 299.986L150.282 299.968C153.936 298.836 156.174 297.434 159.019 294.942C159.695 294.246 160.467 293.543 161.382 292.776L161.715 293.15C160.871 293.947 160.098 294.661 159.364 295.305C158.816 295.869 158.335 296.426 157.893 297.008C156.912 298.297 156.111 299.718 155.188 301.631L155.183 301.641L155.178 301.65C152.643 305.934 151.057 307.751 148.377 309.883C149.434 309.937 150.415 309.775 151.556 309.29C152.928 308.707 154.536 307.655 156.785 305.93L156.837 305.89L156.903 305.881C161.288 305.275 164.185 302.248 167.715 298.374C167.994 298.016 168.293 297.686 168.611 297.391L168.966 297.743C168.87 297.848 168.775 297.953 168.679 298.058L168.446 298.314L168.095 298.7C166.668 300.54 165.787 303.17 165.741 305.476L165.741 305.498L165.736 305.52C165.397 307.217 164.55 308.733 163.385 310.231C162.391 311.509 161.156 312.785 159.792 314.154C163.82 312.854 166.64 310.885 170.572 306.617L170.67 306.511L170.812 306.543C172.778 306.997 174.539 305.658 176.274 303.01C177.995 300.382 179.611 296.58 181.299 292.381C181.591 291.655 181.885 290.917 182.182 290.171C183.598 286.618 185.08 282.897 186.724 279.473C188.681 275.397 190.88 271.713 193.492 269.214C192.389 266.385 193.158 264.098 194.673 260.764C194.898 260.269 195.14 259.75 195.395 259.201C196.897 255.979 198.875 251.732 200.683 245.356C204.913 230.429 208.206 203.815 202.093 151.518C201.14 143.358 198.627 135.746 196.183 128.537C195.013 125.088 193.869 122.854 192.829 120.824C192.463 120.109 192.111 119.42 191.774 118.712C190.478 115.987 189.455 113.034 188.932 107.423L188.929 107.393L188.934 107.363C192.553 83.0156 192.876 72.1917 191.731 64.83C191.158 61.1518 190.219 58.3321 189.129 55.1037L189.068 54.9228C187.993 51.7383 186.78 48.1455 185.646 42.965L185.598 42.7423L185.815 42.6733C191.984 40.7152 195.542 37.3031 197.242 33.5933C198.945 29.8778 198.796 25.8376 197.503 22.6051C196.869 21.0197 195.889 20.1259 194.742 19.6593C193.584 19.1884 192.234 19.1437 190.855 19.3059C189.478 19.468 188.096 19.8332 186.881 20.1626L186.713 20.2082C186.172 20.3552 185.665 20.493 185.214 20.5968C184.72 20.7105 184.276 20.7882 183.917 20.7882C182.592 20.7882 181.827 20.7764 180.592 20.1678C179.509 19.6336 178.051 18.6345 175.462 16.7829C179.979 24.9364 183.265 31.2178 184.271 35.8982C184.796 38.3375 184.71 40.3811 183.822 42.0387C182.933 43.699 181.265 44.9235 178.732 45.7806L178.572 45.307C181.036 44.4734 182.573 43.3113 183.381 41.8027C184.191 40.2914 184.294 38.3839 183.783 36.0032C182.758 31.237 179.307 24.7319 174.513 16.1024C161.72 6.92429 151.413 2.35516 142.187 0.968852C132.96 -0.417489 124.786 1.37515 116.25 4.96955ZM220.993 327.051C223.227 328.977 235.569 342.143 243.388 394.269L243.395 394.32L243.383 394.369C240.052 407.357 226.912 413.15 215.488 412.488C209.771 412.156 204.441 410.208 200.951 406.698C197.49 403.216 195.866 398.223 197.437 391.837C150.481 375.841 108.185 383.636 76.1544 389.539C74.2338 389.893 72.35 390.241 70.5044 390.575C68.6015 398.238 67.0678 407.278 68.3505 425.875L68.3582 425.987L68.2802 426.067C62.5946 431.905 58.7805 435.559 54.0677 437.74C49.3511 439.923 43.7596 440.62 34.5408 440.62C34.0023 440.62 33.4596 440.624 32.9159 440.629H32.9156C29.8331 440.656 26.7159 440.683 24.1157 439.849C22.5755 439.355 21.2035 438.556 20.1166 437.272C19.0304 435.988 18.2429 434.236 17.8432 431.856L17.833 431.796L17.852 431.738C17.9833 431.334 18.1128 430.935 18.241 430.539L18.2461 430.524C19.628 426.263 20.8513 422.491 22.3807 419.314C12.2194 398.92 6.12237 377.051 5.04316 357.717C3.96251 338.357 7.9119 321.491 17.9106 311.219C29.9118 298.889 36.7148 289.578 40.3472 281.26C43.9755 272.95 44.4481 265.613 43.7511 257.207C43.4375 253.426 42.8866 249.428 42.2808 245.031C40.1932 229.879 37.4528 209.991 41.5176 177.887C29.0414 162.982 21.3736 149.098 16.549 132.147C11.7213 115.185 9.74357 95.1611 8.62995 67.9888C6.88123 64.9482 5.65694 62.6006 4.98968 60.0406C4.32435 57.4879 4.21675 54.7412 4.66614 50.9015C2.53429 48.8268 1.10955 47.0752 0.440656 45.0559C-0.238583 43.0054 -0.126816 40.7167 0.736094 37.5938C1.05367 35.6402 1.40987 34.1602 2.0123 32.8232C2.61732 31.4803 3.46438 30.2955 4.74614 28.9221L5.1863 28.4505L5.17889 29.0956C5.16379 30.4116 5.24519 31.3747 5.524 32.2427C5.74689 32.9367 6.09996 33.5822 6.65028 34.3043C6.6494 32.7036 6.69209 31.3835 6.92259 30.122C7.18476 28.6871 7.68796 27.3364 8.63061 25.7287C8.84055 21.7673 11.376 19.003 15.3784 17.6688L15.6502 17.5782L15.7032 17.8598C15.8109 18.4324 15.9216 18.7987 16.0898 19.0617C16.2167 19.2601 16.3849 19.4125 16.643 19.546C17.4895 17.5468 18.2546 16.0613 19.2287 14.8575C20.2451 13.6014 21.4784 12.6646 23.2399 11.7612L23.6854 11.5327L23.6004 12.026C23.0389 15.2856 23.0205 16.9438 23.4257 19.0203C23.9391 17.7782 24.4854 16.7394 25.24 15.715C26.1438 14.488 27.339 13.2919 29.1151 11.7926L29.6587 11.3338L29.5217 12.0317C28.8558 15.4261 28.8382 17.1284 29.507 19.7723C30.0762 20.5577 30.5591 21.1224 31.126 21.6008C31.6654 22.0558 32.2896 22.44 33.1524 22.8586C34.0081 21.7872 34.8076 21.0221 35.7976 20.4284C36.8325 19.8077 38.0601 19.3836 39.7468 18.979L40.4575 18.8085L40.0001 19.3785C38.2342 21.5794 37.5591 22.7132 37.432 24.3592C38.5841 25.1352 39.4547 25.8021 40.1678 26.5904C40.8921 27.391 41.445 28.3066 41.9745 29.5695C45.311 31.282 46.6345 34.6447 46.7177 37.7228C46.7597 39.2759 46.4873 40.7714 45.9892 41.9692C45.4945 43.1585 44.759 44.0947 43.8462 44.4598C43.7475 44.4993 43.6399 44.5904 43.5313 44.7634C43.4231 44.9359 43.3244 45.1736 43.238 45.4764C43.0654 46.0819 42.9537 46.9058 42.8924 47.8852C42.7701 49.841 42.8514 52.3658 43.0158 54.8882C43.1799 57.4085 43.4263 59.9175 43.6318 61.8387C43.7213 62.676 43.8031 63.4013 43.8669 63.9672L43.8938 64.2066C43.9272 64.5034 43.9543 64.7465 43.9731 64.9257C43.991 65.0968 44.0033 65.2275 44.0033 65.2851C44.0033 65.4528 43.9198 65.5913 43.8309 65.6962C43.7405 65.8027 43.6196 65.9035 43.4921 65.9992C43.3729 66.0885 43.2362 66.1819 43.0959 66.2777L43.0616 66.3012C42.9073 66.4066 42.7469 66.5169 42.5873 66.6367C41.9405 67.1217 41.3712 67.7145 41.3712 68.5753C41.3712 68.6621 41.4005 68.8342 41.4742 69.1031C41.5459 69.3646 41.6538 69.6974 41.797 70.095C42.0832 70.8898 42.5068 71.9331 43.054 73.1637C44.1483 75.6246 45.7333 78.8262 47.6932 82.2746C51.5186 89.0051 56.758 96.6497 62.5495 101.57C62.5901 100.846 62.9312 100.117 63.4016 99.4093C63.9971 98.5134 64.8352 97.6 65.6531 96.7086L65.7014 96.6559C66.5424 95.7392 67.3563 94.847 67.9072 93.99C68.4612 93.1284 68.7114 92.3599 68.5183 91.6746C67.001 86.2899 69.8665 80.9361 72.7025 76.6626C73.2966 75.7673 73.8867 74.9232 74.4388 74.1335L74.4389 74.1333L74.439 74.1331C75.2194 73.0168 75.9236 72.0094 76.4556 71.1202C76.9079 70.3642 77.2162 69.7235 77.3364 69.2028C77.4552 68.6879 77.3813 68.3386 77.1367 68.094C76.7425 67.6998 76.5503 67.0506 76.496 66.254C76.441 65.4478 76.5243 64.4424 76.7293 63.2822C77.1396 60.9602 78.0446 57.978 79.3602 54.6489C81.9459 48.1059 86.1304 40.1905 91.3133 33.2594C84.863 32.7115 81.0049 27.6052 79.8655 22.1522C78.7034 16.5905 80.344 10.5069 85.1117 8.4637L85.2069 8.42291L85.303 8.46137C91.8114 11.0647 98.8781 10.3102 104.641 8.78087C109.036 7.61438 112.622 6.01546 114.639 5.11612C115.269 4.83504 115.746 4.6223 116.047 4.51245C124.641 0.892537 132.913 -0.930199 142.261 0.474402C151.606 1.87848 162 6.50349 174.85 15.7289C178.031 18.0128 179.656 19.1487 180.813 19.7194C181.94 20.2749 182.609 20.2882 183.917 20.2882C184.216 20.2882 184.614 20.2219 185.102 20.1095C185.542 20.0081 186.04 19.873 186.584 19.7254L186.751 19.68C187.963 19.3514 189.378 18.9763 190.797 18.8093C192.215 18.6425 193.661 18.68 194.93 19.1962C196.21 19.7167 197.286 20.7147 197.968 22.4194C199.307 25.7673 199.462 29.9506 197.697 33.8016C195.95 37.6137 192.334 41.0747 186.184 43.08C187.297 48.1139 188.483 51.6282 189.542 54.7644L189.542 54.7648L189.543 54.7652L189.603 54.9438C190.693 58.1724 191.645 61.0283 192.225 64.7531C193.382 72.1944 193.048 83.0799 189.433 107.407C189.951 112.942 190.958 115.832 192.226 118.498C192.554 119.188 192.901 119.866 193.264 120.574L193.264 120.575L193.264 120.575C194.307 122.612 195.474 124.89 196.656 128.377C199.1 135.583 201.629 143.241 202.59 151.46C208.707 203.791 205.419 230.478 201.164 245.493C199.345 251.91 197.35 256.191 195.848 259.414L195.846 259.418C195.591 259.964 195.351 260.48 195.128 260.971C193.588 264.361 192.91 266.492 194.018 269.183C195.156 271.946 196.824 274.268 198.848 276.878C199.19 277.318 199.541 277.766 199.902 278.226L199.908 278.235L199.912 278.239C201.683 280.498 203.672 283.035 205.759 286.251C210.79 294.003 216.385 305.693 220.993 327.051ZM197.965 391.785C196.361 398.099 197.947 402.967 201.306 406.345C204.684 409.744 209.883 411.662 215.517 411.989C226.777 412.641 239.604 406.94 242.881 394.31C241.085 387.998 237.645 384.379 233.448 382.557C229.224 380.724 224.201 380.697 219.251 381.638C214.303 382.578 209.453 384.481 205.593 386.478C203.663 387.476 201.984 388.496 200.668 389.427C199.373 390.344 198.444 391.164 197.965 391.785ZM26.0083 25.546C25.082 24.9535 24.2037 24.8448 23.4993 25.3479C22.4302 26.1116 22.0009 27.2578 22.0206 28.544C22.0403 29.8369 22.516 31.2551 23.2412 32.5042C23.9669 33.754 24.9272 34.808 25.8889 35.387C26.8508 35.9661 27.7552 36.0436 28.4622 35.4779C29.4115 34.7185 29.7856 33.589 29.7437 32.3177C29.7017 31.0429 29.2397 29.6485 28.5446 28.4165C27.8488 27.1835 26.9334 26.1378 26.0083 25.546ZM30.2434 32.3013C30.2889 33.6798 29.8816 34.9827 28.7745 35.8684C27.8365 36.6188 26.6844 36.4495 25.631 35.8154C24.5775 35.1811 23.5637 34.0553 22.8088 32.7552C22.0534 31.4543 21.542 29.9525 21.5206 28.5516C21.4991 27.1439 21.9747 25.8225 23.2087 24.941C24.1495 24.2691 25.2658 24.4776 26.2777 25.1248C27.2907 25.7728 28.2569 26.8892 28.98 28.1708C29.7038 29.4535 30.1981 30.9263 30.2434 32.3013ZM32.3884 27.4311C32.8394 26.3822 33.5589 25.5525 34.5407 25.5525C35.7539 25.5525 36.6283 26.1896 37.2007 27.1214C37.7674 28.0438 38.046 29.2621 38.0989 30.4802C38.1519 31.7004 37.9797 32.947 37.6204 33.9384C37.268 34.9109 36.704 35.7191 35.9175 35.9157C35.2183 36.0905 34.6002 36.0614 34.066 35.8609C33.5326 35.6607 33.1021 35.2968 32.7653 34.833C32.0969 33.9125 31.7829 32.5806 31.741 31.2392C31.6989 29.8938 31.9292 28.499 32.3884 27.4311ZM34.2417 35.3928C34.6664 35.5522 35.1793 35.5849 35.7962 35.4306C36.3257 35.2982 36.8097 34.708 37.1503 33.7681C37.4841 32.8471 37.65 31.6671 37.5994 30.5019C37.5487 29.3347 37.2819 28.2087 36.7747 27.3831C36.2733 26.567 35.5453 26.0525 34.5407 26.0525C33.8775 26.0525 33.2809 26.6211 32.8477 27.6286C32.4226 28.6171 32.2005 29.9368 32.2407 31.2236C32.281 32.5143 32.5839 33.7323 33.1699 34.5392C33.4603 34.9391 33.8164 35.2332 34.2417 35.3928ZM13.6151 29.9896C11.4469 32.8433 11.6258 35.977 13.0357 38.1701C14.4535 40.3755 17.1107 41.6299 19.9285 40.7188C21.7612 38.8447 21.772 36.0376 20.503 33.7375C19.2419 31.4519 16.7411 29.7212 13.6151 29.9896ZM20.9407 33.496C22.2944 35.9495 22.3149 39.04 20.2406 41.1143L20.1989 41.156L20.1429 41.1747C17.0592 42.2026 14.1491 40.8267 12.6151 38.4405C11.0778 36.0492 10.917 32.6432 13.286 29.5973L13.3518 29.5127L13.4585 29.502C16.8631 29.1616 19.5839 31.0368 20.9407 33.496ZM42.0892 32.5126C42.0432 32.5124 41.9959 32.5265 41.9419 32.5728C39.7116 34.4845 38.9092 37.4532 39.1489 39.7363C39.269 40.8797 39.6465 41.8142 40.1967 42.3578C40.4689 42.6266 40.7816 42.7989 41.1302 42.8608C41.4792 42.9229 41.8821 42.8776 42.3388 42.6818C43.3971 42.2283 43.9883 41.321 44.2501 40.1921C44.5132 39.0575 44.4365 37.7194 44.167 36.466C43.8975 35.2128 43.4408 34.0703 42.967 33.33C42.7278 32.9562 42.4986 32.708 42.3061 32.5894C42.2122 32.5315 42.1405 32.5128 42.0892 32.5126ZM44.7372 40.3051C44.4506 41.541 43.7806 42.6079 42.5357 43.1414C42.0054 43.3687 41.5034 43.435 41.0427 43.3531C40.5816 43.2712 40.1798 43.0439 39.8453 42.7135C39.1823 42.0585 38.7784 40.9953 38.6516 39.7885C38.3978 37.3713 39.2405 34.2297 41.6165 32.1931C41.7545 32.0749 41.9162 32.0118 42.0913 32.0126C42.2611 32.0134 42.4224 32.0737 42.5684 32.1637C42.8557 32.3407 43.1338 32.6631 43.3881 33.0604C43.9014 33.8624 44.3769 35.0641 44.6558 36.3609C44.9346 37.6574 45.0225 39.0748 44.7372 40.3051ZM8.35075 39.2023C6.18491 42.0562 6.3578 45.3556 7.77542 47.7183C9.20047 50.0934 11.8591 51.4942 14.6641 50.5894C16.4947 48.7151 16.5108 45.7442 15.2353 43.2731C13.9689 40.8193 11.4659 38.9385 8.35075 39.2023ZM15.6797 43.0437C17.0268 45.6539 17.0528 48.9084 14.9762 50.9849L14.9345 51.0266L14.8785 51.0453C11.7819 52.0775 8.87334 50.52 7.34668 47.9756C5.81723 45.4265 5.65019 41.859 8.02169 38.8099L8.0875 38.7253L8.19415 38.7146C11.6099 38.373 14.3284 40.4256 15.6797 43.0437ZM29.2456 42.6616H29.2764C34.4263 42.6616 37.7214 44.2417 39.5621 46.6676C41.3982 49.0875 41.7451 52.294 41.1197 55.4629C40.4939 58.6334 38.8897 61.7996 36.7736 64.1764C34.6609 66.5492 32.0074 68.1673 29.2764 68.1673C24.9468 68.1673 21.7525 66.8338 19.6608 64.7421C17.5701 62.6514 16.6042 59.8262 16.6882 56.8879C16.856 51.0137 21.2148 44.6693 29.2158 42.6691L29.2456 42.6616ZM29.3072 43.1616C21.5343 45.1179 17.349 51.2678 17.188 56.9022C17.1074 59.7217 18.0334 62.4076 20.0144 64.3886C21.9943 66.3685 25.0515 67.6673 29.2764 67.6673C31.8097 67.6673 34.3383 66.1596 36.4001 63.8439C38.4584 61.5321 40.0211 58.4469 40.6291 55.366C41.2375 52.2835 40.8853 49.2386 39.1638 46.9699C37.4505 44.7119 34.3388 43.1679 29.3072 43.1616ZM236.153 392.959C235.845 391.736 234.748 390.217 232.466 388.588L232.757 388.181C235.082 389.841 236.288 391.448 236.638 392.837C236.814 393.535 236.773 394.179 236.545 394.737C236.326 395.27 235.943 395.71 235.443 396.039C235.215 396.577 235.128 396.986 235.138 397.385C235.148 397.807 235.266 398.239 235.479 398.828L235.64 399.272L235.182 399.155C233.999 398.854 233.196 398.585 232.58 398.269C231.987 397.964 231.576 397.618 231.17 397.173C230.22 397.018 229.371 396.539 228.534 395.855C228.155 395.546 227.775 395.191 227.387 394.801C227.725 395.517 227.924 396.159 227.998 396.727C228.134 397.773 227.844 398.581 227.208 399.099C226.648 399.655 226.329 400.078 226.187 400.517C226.047 400.949 226.068 401.433 226.271 402.133L226.413 402.621L225.94 402.436C224.831 402.001 224.06 401.582 223.46 401.047C222.878 400.529 222.47 399.916 222.064 399.112C221.352 398.835 220.614 398.469 219.876 398.014C219.782 398.59 219.657 399.121 219.502 399.604C219.546 400.495 219.644 401.13 219.855 401.685C220.069 402.247 220.405 402.745 220.952 403.352L221.47 403.924L220.715 403.764L216.579 402.883C215.907 403.072 215.153 403.08 214.325 402.912C214.091 403.383 213.842 403.82 213.577 404.22C213.679 404.595 213.715 404.955 213.747 405.272C213.753 405.335 213.76 405.398 213.766 405.458C213.774 405.527 213.782 405.593 213.791 405.657C213.853 406.087 213.972 406.465 214.363 406.855L214.791 407.282H214.186H208.525C208.437 407.284 208.348 407.284 208.259 407.282C205.862 407.232 202.978 405.859 199.551 403.055L199.868 402.668C203.268 405.45 206.041 406.735 208.268 406.782L208.269 406.782L208.518 406.782C210.384 406.742 211.893 405.805 213.097 404.036C213.354 403.659 213.597 403.244 213.826 402.791C211.732 402.209 209.154 400.561 206.121 397.781L206.459 397.412C209.622 400.312 212.225 401.91 214.243 402.382C215.111 402.585 215.86 402.577 216.498 402.386C217.638 402.043 218.49 401.088 219.012 399.493C219.184 398.968 219.319 398.376 219.415 397.718C217.969 396.753 216.537 395.444 215.303 393.798L215.703 393.498C216.939 395.147 218.378 396.445 219.822 397.387C220.672 397.942 221.523 398.373 222.333 398.679C223.328 399.055 224.257 399.24 225.044 399.241C225.834 399.242 226.462 399.057 226.884 398.718C227.363 398.333 227.622 397.711 227.502 396.791C227.381 395.861 226.872 394.645 225.826 393.133L226.216 392.822C227.181 393.883 228.023 394.792 228.85 395.468C229.676 396.143 230.469 396.571 231.33 396.691C231.932 396.775 232.673 396.648 233.379 396.426C234.082 396.206 234.721 395.901 235.111 395.657C235.566 395.373 235.898 394.995 236.082 394.547C236.265 394.1 236.306 393.566 236.153 392.959ZM210.756 406.782H213.662C213.438 406.433 213.347 406.082 213.296 405.728C213.273 405.57 213.258 405.418 213.243 405.268C213.234 405.177 213.225 405.086 213.214 404.994C213.205 404.92 213.196 404.845 213.184 404.769C212.48 405.682 211.672 406.361 210.756 406.782ZM217.39 402.544L220.109 403.123C219.791 402.708 219.557 402.307 219.388 401.863C219.245 401.487 219.152 401.088 219.09 400.632C218.663 401.492 218.098 402.139 217.39 402.544ZM222.762 399.356C223.069 399.894 223.386 400.313 223.792 400.674C224.251 401.082 224.834 401.428 225.67 401.785C225.565 401.256 225.57 400.801 225.712 400.362C225.794 400.109 225.92 399.868 226.087 399.628C225.764 399.705 225.414 399.741 225.044 399.741C224.351 399.74 223.577 399.61 222.762 399.356ZM231.916 397.213C232.175 397.446 232.455 397.642 232.809 397.824C233.298 398.075 233.933 398.302 234.857 398.553C234.727 398.142 234.647 397.773 234.638 397.397C234.63 397.074 234.675 396.755 234.778 396.408C234.413 396.585 233.982 396.761 233.529 396.903C233.012 397.066 232.45 397.189 231.916 397.213ZM122.487 18.7262C124.038 18.8174 125.245 20.0948 126.239 22.4142L126.293 22.5415L126.214 22.6552C125.947 23.0413 125.651 23.3759 125.335 23.6608C125.016 24.0577 124.729 24.4647 124.455 24.9366C123.957 25.7945 123.494 26.8763 122.956 28.5131C121.514 32.9025 120.104 38.6467 119.349 43.7005C118.971 46.2279 118.759 48.5751 118.787 50.4903C118.801 51.4479 118.875 52.2916 119.017 52.9928C119.159 53.697 119.365 54.2402 119.632 54.6108C120.513 55.8353 122.293 56.3883 124.717 56.624C126.465 56.7939 128.492 56.7956 130.664 56.7973C131.369 56.7979 132.089 56.7985 132.82 56.8049C135.791 56.8307 138.925 56.9525 141.854 57.569C142.29 57.6608 142.707 57.8395 143.103 58.0401C143.33 58.155 143.565 58.2855 143.794 58.4122C143.953 58.5003 144.108 58.5866 144.255 58.6645C145.012 59.0655 145.677 59.3178 146.338 59.1232C147.527 58.7732 148.23 57.7424 148.644 56.0886C149.057 54.4337 149.161 52.2274 149.202 49.6477C149.212 49.0034 149.219 48.3367 149.225 47.651C149.271 42.8689 149.326 37.1613 150.773 31.6617C150.836 31.423 150.904 31.1953 150.97 30.9792L150.981 30.943C151.05 30.7144 151.114 30.4994 151.166 30.2886C151.271 29.8682 151.323 29.4795 151.265 29.0771C151.15 28.2795 150.59 27.3441 148.886 25.9991L148.807 25.9372L148.793 25.8382C148.461 23.5111 148.939 21.7185 150.233 20.9795C151.521 20.2432 153.449 20.6538 155.766 22.3092L155.832 22.3559L155.858 22.4318C156.105 23.1548 156.237 23.7913 156.164 24.3285C156.088 24.8888 155.793 25.3201 155.248 25.6171C154.721 25.9045 153.966 26.0649 152.958 26.1299C152.11 26.1845 151.064 26.1724 149.793 26.1009C151.092 27.2324 151.635 28.1373 151.76 29.006C151.83 29.4982 151.764 29.9578 151.652 30.4089C151.596 30.6337 151.528 30.8603 151.459 31.0876L151.449 31.1218L151.449 31.1232L151.448 31.1244C151.383 31.3414 151.317 31.5603 151.256 31.7889C149.826 37.2235 149.772 42.864 149.725 47.6506L149.725 47.6569C149.719 48.3417 149.712 49.009 149.702 49.6557C149.661 52.2288 149.558 54.4909 149.129 56.2098C148.71 57.8875 147.96 59.1166 146.584 59.5701C143.237 66.1739 137.08 69 131.402 68.165C125.705 67.3272 120.539 62.8129 119.191 54.854C118.885 54.4066 118.67 53.8035 118.527 53.0916C118.377 52.3506 118.302 51.4741 118.287 50.4977C118.259 48.5448 118.475 46.168 118.854 43.6267C119.613 38.5433 121.031 32.7717 122.481 28.357C123.024 26.7036 123.5 25.5855 124.023 24.6854C124.068 24.6069 124.114 24.5301 124.16 24.4549C123.347 24.8477 122.464 24.9895 121.59 24.9C119.899 24.7268 118.264 23.6903 117.24 21.9833L117.14 21.8159L117.278 21.6779C118.273 20.6826 119.195 19.926 120.054 19.4278C120.912 18.9297 121.722 18.6812 122.487 18.7262ZM125.715 22.4627C125.449 22.7521 125.203 23.0303 124.972 23.3153C123.99 24.1867 122.803 24.5216 121.641 24.4026C120.173 24.2523 118.725 23.3747 117.772 21.8919C118.695 20.9835 119.537 20.306 120.305 19.8603C121.112 19.3919 121.824 19.188 122.457 19.2253C123.676 19.297 124.751 20.2799 125.715 22.4627ZM119.833 55.5592C121.344 62.829 126.199 66.8944 131.474 67.6703C136.831 68.458 142.668 65.8629 145.959 59.6884C145.277 59.7161 144.627 59.427 144.021 59.1064C143.853 59.0171 143.692 58.9278 143.533 58.8395C143.316 58.719 143.103 58.6004 142.877 58.4861C142.531 58.3109 142.192 58.1654 141.851 58.0812C136.535 61.5898 129.906 61.5793 124.591 57.114C122.613 56.9151 120.929 56.4941 119.833 55.5592ZM125.482 57.188C130.369 60.9307 136.27 60.9369 141.145 57.9384C138.442 57.4361 135.575 57.3288 132.815 57.3048C132.096 57.2986 131.384 57.298 130.684 57.2975H130.683C128.83 57.296 127.061 57.2946 125.482 57.188ZM149.261 25.5673C148.993 23.4006 149.501 21.9737 150.481 21.4137C151.485 20.8395 153.155 21.0767 155.41 22.6695C155.632 23.3379 155.723 23.8588 155.669 24.2615C155.615 24.6563 155.421 24.9534 155.009 25.1782C154.579 25.4127 153.912 25.5674 152.926 25.6309C151.986 25.6914 150.782 25.668 149.261 25.5673ZM124.943 40.3085C124.943 40.7524 124.943 40.9652 124.953 41.11C124.961 41.2458 124.977 41.3151 125.017 41.4872C125.089 41.7979 125.222 42.372 125.469 44.0526C127.525 40.1483 130.866 37.811 134.425 37.6148C138.05 37.4149 141.825 39.4403 144.624 44.1377C144.768 43.0339 144.841 41.7675 144.842 40.3265C143.232 36.2066 138.762 34.1139 134.399 34.1139C130.027 34.1139 125.905 36.2098 124.943 40.3085ZM144.503 44.9301C141.743 39.9607 137.976 37.9198 134.452 38.114C130.921 38.3087 127.551 40.7514 125.594 44.924C125.921 47.0743 127.346 48.4033 129.095 49.0787C130.872 49.7653 132.959 49.7639 134.485 49.2552L134.567 49.2277L134.649 49.2575C137.604 50.332 139.827 50.6063 141.419 49.9519C142.971 49.3143 144.006 47.7554 144.503 44.9301ZM134.399 33.6139C138.905 33.6139 143.631 35.7839 145.326 40.1901L145.342 40.2334V40.2798C145.342 42.077 145.234 43.6208 145.011 44.9281C144.508 47.8769 143.412 49.6736 141.609 50.4144C139.848 51.1383 137.494 50.8142 134.559 49.7567C132.932 50.2747 130.769 50.2613 128.915 49.5451C127.019 48.813 125.424 47.334 125.088 44.9206C124.768 42.6285 124.609 41.9409 124.53 41.6026L124.53 41.6001L124.529 41.5954C124.489 41.4239 124.465 41.3202 124.454 41.1417C124.443 40.9758 124.443 40.7398 124.443 40.2971V40.2798V40.2514L124.449 40.2236C125.473 35.7859 129.897 33.6139 134.399 33.6139ZM128.972 42.9608C128.54 43.3462 128.233 43.9681 128.233 44.8861C128.233 45.4426 128.503 45.8171 128.928 46.0563C129.367 46.3028 129.972 46.4032 130.6 46.364C131.226 46.3248 131.843 46.1486 132.296 45.8751C132.752 45.5993 132.998 45.2554 132.998 44.8861C132.998 43.4021 131.815 42.5073 130.601 42.4359C129.997 42.4005 129.408 42.5719 128.972 42.9608ZM130.63 41.9368C132.048 42.0201 133.498 43.0799 133.498 44.8861C133.498 45.5039 133.085 45.9825 132.554 46.3031C132.02 46.626 131.321 46.8199 130.631 46.863C129.943 46.906 129.232 46.8008 128.683 46.4921C128.121 46.176 127.733 45.6457 127.733 44.8861C127.733 43.8496 128.084 43.0829 128.639 42.5877C129.19 42.0961 129.917 41.8949 130.63 41.9368ZM138.831 43.0632C138.41 43.3948 138.104 43.968 138.104 44.8861C138.104 45.4472 138.379 45.8681 138.815 46.1587C139.258 46.4543 139.865 46.6102 140.486 46.6102C141.107 46.6102 141.714 46.4543 142.157 46.1587C142.593 45.8681 142.868 45.4472 142.868 44.8861C142.868 44.3172 142.585 43.8082 142.132 43.4147C141.678 43.0201 141.067 42.7554 140.456 42.6813C139.845 42.6072 139.259 42.7261 138.831 43.0632ZM142.46 43.0372C142.994 43.5013 143.368 44.1389 143.368 44.8861C143.368 45.6411 142.985 46.2073 142.434 46.5747C141.891 46.9372 141.181 47.1102 140.486 47.1102C139.791 47.1102 139.081 46.9372 138.538 46.5747C137.987 46.2073 137.604 45.6411 137.604 44.8861C137.604 43.8496 137.956 43.1165 138.522 42.6704C139.081 42.2297 139.811 42.0995 140.516 42.185C141.221 42.2705 141.927 42.5742 142.46 43.0372ZM42.5805 417.543C43.0541 417.212 43.4507 417.045 43.7888 416.991C44.1218 416.938 44.4111 416.992 44.6803 417.127C45.2396 417.405 45.7201 418.029 46.2608 418.828C46.3458 418.953 46.4319 419.083 46.5197 419.214L46.5218 419.218L46.5219 419.218C46.9773 419.901 47.4769 420.651 48.0866 421.287C48.7208 421.949 49.4862 422.502 50.4693 422.754C47.6256 425.306 43.8818 425.289 41.6941 424.022C40.558 423.364 39.8768 422.394 39.9005 421.302C39.9243 420.204 40.6616 418.886 42.5805 417.543ZM51.0272 422.355C49.947 422.201 49.1314 421.655 48.4476 420.941C47.8713 420.34 47.4003 419.634 46.9446 418.95C46.8543 418.815 46.7646 418.68 46.6748 418.548C46.1461 417.767 45.5984 417.025 44.9033 416.679C44.5453 416.501 44.1508 416.427 43.7101 416.497C43.2744 416.567 42.8073 416.774 42.2938 417.134C40.3129 418.52 39.4294 419.965 39.4006 421.291C39.3718 422.623 40.2063 423.738 41.4435 424.455C43.9126 425.884 48.1255 425.823 51.1686 422.78L51.5222 422.426L51.0272 422.355ZM38.0077 422.426L37.897 422.315L37.7491 422.367C36.3334 422.857 34.9888 423.347 33.8308 424.232C32.6644 425.123 31.7019 426.402 31.0136 428.445L30.9768 428.555L31.0358 428.653C32.4405 431.008 35.1913 431.845 37.9647 431.44C40.7406 431.035 43.5943 429.383 45.2815 426.684L45.4272 426.45L45.1813 426.327C44.512 425.993 43.886 425.743 43.2868 425.515C43.1466 425.462 43.0083 425.41 42.8714 425.359L42.8586 425.354C42.4123 425.187 41.9813 425.026 41.5487 424.841C40.4214 424.358 39.2978 423.716 38.0077 422.426ZM37.8924 430.945C35.2882 431.326 32.8115 430.548 31.525 428.495C32.1825 426.599 33.0775 425.437 34.1344 424.629C35.1825 423.829 36.4034 423.364 37.7658 422.89C39.0618 424.159 40.2085 424.81 41.3517 425.3C41.7961 425.491 42.2422 425.658 42.691 425.826C42.8302 425.878 42.9697 425.93 43.1095 425.983C43.6256 426.179 44.1526 426.388 44.7066 426.652C43.0874 429.079 40.454 430.571 37.8924 430.945ZM30.1007 428.997L29.9742 428.884L29.8226 428.96C27.8118 429.965 26.8214 431.215 26.6735 432.454C26.5251 433.699 27.2378 434.831 28.4028 435.564C30.7383 437.035 34.9779 436.996 38.6657 433.308L39.0273 432.947L38.5199 432.884C36.5996 432.644 35.2 432.295 33.9328 431.7C32.6647 431.105 31.5144 430.256 30.1007 428.997ZM33.7203 432.153C34.9319 432.722 36.2464 433.07 37.9418 433.311C34.4878 436.501 30.7027 436.421 28.6693 435.141C27.6134 434.476 27.0511 433.51 27.17 432.513C27.2864 431.538 28.0662 430.435 29.896 429.484C31.2691 430.696 32.4293 431.547 33.7203 432.153ZM26.1435 434.253L25.952 434.098L25.7943 434.287C24.9388 435.314 24.684 436.308 24.9677 437.159C25.2484 438.001 26.0295 438.619 27.0588 438.962C29.1201 439.649 32.3255 439.296 35.3375 437.288L36.1153 436.769L35.1826 436.83C33.4247 436.945 31.9288 436.914 30.4933 436.551C29.0613 436.188 27.6743 435.491 26.1435 434.253ZM25.442 437.001C25.2465 436.414 25.3692 435.665 26.0261 434.799C27.5279 435.978 28.9208 436.668 30.3706 437.035C31.596 437.345 32.8522 437.422 34.2333 437.378C31.5849 438.861 28.9257 439.057 27.2169 438.488C26.2721 438.173 25.6548 437.639 25.442 437.001Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
