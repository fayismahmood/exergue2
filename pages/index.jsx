import anime from 'animejs'
import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css'



export default function Home() {
  const [RegForm, setRegForm] = useState(false);
  return (
    <div>
      <Head>
        <title>EXERGUE Philosophy Colloquium 2022
        </title>
        <meta name="title" content="EXERGUE Philosophy Colloquium 2022
"/>
        <meta name="description" content="Exergue is a philosophy colloquium initiated by Department of Aqeeda and philosophy, Darul Huda Islamic University. Topics surrounding post-modernism, post-structuralism, Islamic contemporary philosophy, post modern idea in Islamic philosophy are discussed throughout the colloquium. Aspirants are requested to fill the below given form." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="EXERGUE Philosophy Colloquium 2022
"/>
        <meta property="og:description" content="Exergue is a philosophy colloquium initiated by Department of Aqeeda and philosophy, Darul Huda Islamic University. Topics surrounding post-modernism, post-structuralism, Islamic contemporary philosophy, post modern idea in Islamic philosophy are discussed throughout the colloquium. Aspirants are requested to fill the below given form." />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="EXERGUE Philosophy Colloquium 2022
"/>
        <meta property="twitter:description" content="Exergue is a philosophy colloquium initiated by Department of Aqeeda and philosophy, Darul Huda Islamic University. Topics surrounding post-modernism, post-structuralism, Islamic contemporary philosophy, post modern idea in Islamic philosophy are discussed throughout the colloquium. Aspirants are requested to fill the below given form." />
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
      </Head>
      <div className="Hero">
        <div className="bg">
          <svg width="1201" height="982" viewBox="0 0 1201 982" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.2">
              <path d="M-117.294 111.028C-117.294 111.028 165.666 -644.303 754.903 -598.246C754.903 -598.246 1276.59 -493.408 878.802 323.807L-117.294 111.028Z" fill="url(#paint0_linear_108_684)" />
              <path opacity="0.9" d="M290.521 -4.06357C290.521 -4.06357 15.2266 458.539 280.766 532.351C407.393 571.185 541.095 587.49 677.584 580.743L529.394 1025.51C529.394 1025.51 419.014 1155.71 206.471 1067.19C206.471 1067.19 -150.38 969.119 -175.173 687.804C-175.173 687.804 -260.898 506.057 18.1996 36.2323L88.4755 -82.2455L290.521 -4.06357Z" fill="url(#paint1_linear_108_684)" />
            </g>
            <defs>
              <linearGradient id="paint0_linear_108_684" x1="817.68" y1="472.183" x2="1031.94" y2="-650.495" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D4597B" stopOpacity="0.63" />
                <stop offset="1" stopColor="#25396C" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear_108_684" x1="479.419" y1="1143.24" x2="658.233" y2="5.19423" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D4597B" stopOpacity="0.63" />
                <stop offset="1" stopColor="#25396C" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <svg width="1323" height="982" viewBox="0 0 1323 982" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.2">
              <path d="M552.361 738.105C552.361 738.105 73.4127 89.107 433.261 -379.754C433.261 -379.754 805.558 -759.94 1273.78 19.0579L552.361 738.105Z" fill="url(#paint0_linear_108_687)" />
              <path opacity="0.9" d="M678.208 333.48C678.208 333.48 915.934 816.465 1122.58 634.097C1224.17 549.115 1310.73 445.919 1379.48 327.818L1671.55 694.524C1671.55 694.524 1720.53 858.042 1530.44 987.962C1530.44 987.962 1253.68 1233.65 1004.33 1101.07C1004.33 1101.07 805.233 1073.85 563.526 583.741L502.516 460.237L678.208 333.48Z" fill="url(#paint1_linear_108_687)" />
            </g>
            <defs>
              <linearGradient id="paint0_linear_108_687" x1="1364.85" y1="151.188" x2="540.494" y2="-640.488" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D4597B" stopOpacity="0.63" />
                <stop offset="1" stopColor="#25396C" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear_108_687" x1="1743" y1="800.603" x2="886.436" y2="30.2661" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D4597B" stopOpacity="0.63" />
                <stop offset="1" stopColor="#25396C" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="gr">

          <svg
            ref={(e) => {
              if (e) {
                anime({
                  targets: e,
                  rotate: [0, 40, 0],
                  scale: [1, 2, 1],
                  duration: 38000,
                  loop: true,
                  elasticity: 600,
                  easing: 'easeOutElastic',
                  delay: function (el, index) {
                    return index * 80;
                  },
                });
              }
            }}

            width="523" height="561" style={{ position: "absolute", top: 100, left: 0 }} viewBox="0 0 423 661" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path


              opacity="0.9" d="M364.745 0C364.745 0 41.9011 16.5633 82.3641 397.378L423 319.509L364.745 0Z" fill="url(#paint0_linear_108_674)" />
            <g filter="url(#filter0_d_108_674)">
              <path d="M-17 102.033L49.6492 652.856L234.603 589.829L116.011 71.6313L-17 102.033Z" fill="url(#paint1_linear_108_674)" shapeRendering="crispEdges" />
            </g>
            <defs>
              <filter id="filter0_d_108_674" x="-21" y="71.6313" width="259.603" height="589.225" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_108_674" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_108_674" result="shape" />
              </filter>
              <linearGradient id="paint0_linear_108_674" x1="423.544" y1="380.042" x2="309.824" y2="-54.1833" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D4597B" stopOpacity="0.63" />
                <stop offset="1" stopColor="#25396C" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear_108_674" x1="235" y1="627.5" x2="-44" y2="95" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D4597B" stopOpacity="0.63" />
                <stop offset="1" stopColor="#25396C" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <svg

            ref={(e) => {
              if (e) {
                anime({
                  targets: e,
                  rotate: [0, 20, 0],
                  scale: [1, 2, 1],
                  duration: 38000,
                  loop: true,
                  elasticity: 600,
                  easing: 'easeOutElastic',

                });
              }
            }}
            style={{ position: "absolute", right: 0 }} width="484" height="465" viewBox="0 0 684 865" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M563.029 -49.641L489.273 526.519C489.273 526.519 171.336 539.735 111.716 334.883C111.716 334.883 8.54937 87.7623 198.354 -54.6541C254.234 -85.8733 317.35 -101.845 381.363 -100.966C445.375 -100.086 508.029 -82.3845 563.029 -49.641Z" fill="url(#paint0_linear_108_679)" />
            <path opacity="0.9" d="M683.979 80.5843L638.381 435.03C638.381 435.03 586.74 837.556 353.389 864.102C353.389 864.102 129.842 867.293 0 728.294L110.577 573.345C110.577 573.345 320.444 695.709 389.07 542.811C389.07 542.811 427.26 474.451 470.008 82.749L683.979 80.5843Z" fill="url(#paint1_linear_108_679)" />
            <defs>
              <linearGradient id="paint0_linear_108_679" x1="563.786" y1="499.308" x2="363.734" y2="-174.21" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D4597B" stopOpacity="0.63" />
                <stop offset="1" stopColor="#25396C" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear_108_679" x1="685.06" y1="829.927" x2="462.386" y2="-27.1187" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D4597B" stopOpacity="0.63" />
                <stop offset="1" stopColor="#25396C" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="cont">
          <div className="Head">
            <svg width="299" height="199" viewBox="0 0 399 299" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                ref={(e) => {
                  if (e) {
                    anime({
                      targets: e,
                      translateY: [-250, 0],
                      opacity: [0, 1],
                      duration: 1000
                    });
                  }
                }}
                d="M298.335 23.3437L313.583 149.363L355.898 134.944L328.766 16.3882L298.335 23.3437Z" fill="white" />
              <path
                ref={(e) => {
                  if (e) {
                    anime({
                      targets: e,
                      translateX: [-250, 0],
                      opacity: [0, 1],
                      duration: 1000
                    });
                  }
                }}
                opacity="0.9" d="M385.672 0C385.672 0 311.81 3.78942 321.068 90.914L399 73.0987L385.672 0Z" fill="#25396C" />
              <path
                ref={(e) => {
                  if (e) {
                    anime({
                      targets: e,
                      translateY: [250, 0],
                      opacity: [0, 1],
                      duration: 1000
                    });
                  }
                }}
                d="M0.0773379 92.3633C0.0773379 92.3633 -4.18675 27.4927 50.6097 11.8728C50.6097 11.8728 101.644 2.77082 98.0164 75.9142L0.0773379 92.3633Z" fill="#25396C" />
              <path
                ref={(e) => {
                  if (e) {
                    anime({
                      targets: e,
                      translateX: [-250, 0],
                      opacity: [0, 1],
                      duration: 1000
                    });
                  }
                }}
                opacity="0.9" d="M32.2218 70.7076C32.2218 70.7076 25.6617 113.73 52.4425 110.606C65.3563 109.384 78.0203 106.272 90.0282 101.369L94.1959 138.972C94.1959 138.972 89.3915 152.143 66.7977 152.471C66.7977 152.471 30.8519 156.752 17.558 136.793C17.558 136.793 2.70118 126.148 9.3192 82.4707L10.9786 71.4597L32.2218 70.7076Z" fill="white" />
              <path
                ref={(e) => {
                  if (e) {
                    anime({
                      targets: e,
                      translateY: [250, 0],
                      opacity: [0, 0, 1],
                      duration: 1000
                    });
                  }
                }} d="M196.088 96.1653C196.088 96.1653 188.685 37.1089 237.943 19.8677C237.943 19.8677 284.131 8.7946 284.738 75.8728L196.088 96.1653Z" fill="#25396C" />
              <path
                ref={(e) => {
                  if (e) {
                    anime({
                      targets: e,
                      translateX: [250, 0],
                      opacity: [0, 1],
                      duration: 1000
                    });
                  }
                }} opacity="0.9" d="M224.401 74.6425C224.401 74.6425 220.708 114.325 245.033 110.011C256.772 108.203 268.18 104.682 278.895 99.561L284.738 133.715C284.738 133.715 281.045 146.019 260.429 147.561C260.429 147.561 227.783 153.401 214.471 135.864C214.471 135.864 200.306 126.94 203.999 86.6506L204.918 76.4962L224.401 74.6425Z" fill="white" />
              <path
                ref={(e) => {
                  if (e) {
                    anime({
                      targets: e,
                      translateY: [-250, 0],
                      opacity: [0, 1],
                      duration: 1000
                    });
                  }
                }} d="M247.886 229.521C247.886 229.521 240.5 170.465 289.758 153.207C289.758 153.207 335.946 142.134 336.553 209.212L247.886 229.521Z" fill="#25396C" />
              <path
                ref={(e) => {
                  if (e) {
                    anime({
                      targets: e,
                      translateX: [250, 0],
                      opacity: [0, 1],
                      duration: 1000
                    });
                  }
                }} opacity="0.9" d="M276.216 207.982C276.216 207.982 272.523 247.664 296.848 243.366C308.583 241.556 319.987 238.03 330.693 232.9L336.537 267.055C336.537 267.055 332.843 279.358 312.211 280.9C312.211 280.9 279.581 286.74 266.352 269.204C266.352 269.204 252.187 260.28 255.88 219.99L256.799 209.836L276.216 207.982Z" fill="white" />
              <path
                ref={(e) => {
                  if (e) {
                    anime({
                      targets: e,
                      translateX: [-250, 0],
                      opacity: [0, 1],
                      duration: 1000
                    });
                  }
                }} d="M103.777 42.2081C103.777 42.2081 112.706 95.0308 143.17 94.7027C143.17 94.7027 172.945 96.9502 178.903 76.1164C182.417 65.6053 185.397 54.9232 187.832 44.1111L103.777 42.2081Z" fill="white" />
              <path
                ref={(e) => {
                  if (e) {
                    anime({
                      targets: e,
                      translateX: [250, 0],
                      opacity: [0, 1],
                      duration: 1000
                    });
                  }
                }} opacity="0.9" d="M103.777 148.608C103.777 148.608 99.3128 105.825 135.423 80.5292C135.423 80.5292 165.197 60.4336 185.665 92.4225C185.665 92.4225 197.155 120.31 196.088 146.377L103.777 148.608Z" fill="#25396C" />
              <path
                ref={(e) => {
                  if (e) {
                    anime({
                      targets: e,
                      translateY: [250, 0],
                      opacity: [0, 1],
                      duration: 1000
                    });
                  }
                }} d="M145.339 166.635L134.719 249.593C134.719 249.593 88.9412 251.495 80.3568 222C80.3568 222 65.5025 186.419 92.8313 165.913C100.877 161.418 109.965 159.118 119.182 159.245C128.398 159.371 137.42 161.92 145.339 166.635Z" fill="white" />
              <path
                ref={(e) => {
                  if (e) {
                    anime({
                      targets: e,
                      translateX: [250, 0],
                      opacity: [0, 1],
                      duration: 1000
                    });
                  }
                }} opacity="0.9" d="M162.754 185.385L156.188 236.42C156.188 236.42 148.753 294.377 115.154 298.199C115.154 298.199 82.9667 298.658 64.2715 278.645L80.1928 256.335C80.1928 256.335 110.41 273.953 120.291 251.938C120.291 251.938 125.79 242.096 131.945 185.697L162.754 185.385Z" fill="white" />
              <path
                ref={(e) => {
                  if (e) {
                    anime({
                      targets: e,
                      translateX: [-250, 0],
                      opacity: [0, 1],
                      duration: 1000
                    });
                  }
                }} d="M168.193 168.919C168.193 168.919 153.421 267.346 199.773 258.537L222.752 256.388L217.204 166.458L168.193 168.919Z" fill="white" />
              <path
                ref={(e) => {
                  if (e) {
                    anime({
                      targets: e,
                      translateX: [250, 0],
                      opacity: [0, 1],
                      duration: 1000
                    });
                  }
                }} opacity="0.9" d="M207.57 159.699L231.123 159.24L243.91 263.081L211.181 269.249L207.57 159.699Z" fill="white" />
            </svg>
            <div className="disc">
              {["PHILOSOPHY", "COLLOQUIUM"].map((e, i) => <div key={i} ref={(e) => {
                if (e) {
                  anime({
                    targets: e,
                    translateY: [50, 0],
                    opacity: [0, 1],
                    delay: 1000 + i * 100,
                    duration: 1000
                  });
                }
              }}>{e}</div>)}


            </div>
            <div
              ref={(e) => {
                if (e) {
                  anime({
                    targets: e,
                    translateY: [50, 0],
                    opacity: [0, 1],
                    delay: 1300,
                    duration: 1000
                  });
                }
              }}
              className="motto">
              thinking the marginals

            </div>
            <div
              ref={(e) => {
                if (e) {
                  anime({
                    targets: e,
                    translateY: [50, 0],
                    opacity: [0, 1],
                    delay: 1800,
                    duration: 1000
                  });
                }
              }}

              className="button">
              <button
                onClick={() => {

                  window.open("https://forms.gle/QXsV3ccB39zNLwt1A")
                }}

              >Book My slot</button>
            </div>
          </div>

        </div>
        <div className="datePlc">
          <div className="date">
            <div className="day">
              24
            </div>
            <div className="_date">
              <b>Sunday</b>
              <sub>
                July 2022
              </sub>
            </div>

          </div>
          <div className="plc">
            <b>SAMASTHA AUDITORIUM</b>
            <sub>
              francis rd, thekepuram, kuttichira, calicut
            </sub>
          </div>
        </div>

      </div>
      <div className="prg">
        <div className="about">
          <p>
            Exergue Philosophy Colloquium 2020 isan academic event convened by the Department of Aqeeda and Philosophy,Darul Huda Islamic University. It aimsat providing an understanding of recenttrends in philosophical thinking thatinclude post-structuralism andpost-modernism, the discussion of whichforms the first session of the program.The second session is devoted to thecharacterisation of the responses andof the engagements made by Islamicscholarship with these new forms ofthinking. The sessions will be led byleading academic figures in the respective fields. The program will undoubtedly, enable the participants to forman insightful and informed critiquetowards contemporary philosophy
          </p>
        </div>
        <div className="proS">
          <div className="e">
            <div className="prg">
              Inauguration:
            </div>
            <div className="by">
              Rafeekh Ali Hudawi
            </div>
            <div className="disc">
              Registrar, Darul Huda Islamic University
            </div>
          </div>



          <div className="e">
            <div className="prg">
              Presidential speech:
            </div>
            <div className="by">
              Rasheed Hudawi Elamkulam
            </div>
            <div className="disc">
              Dean, Kulliyya of Usooladheen, DHIU
            </div>
          </div>
          <div className="e">
            <div className="prg">
              Introduction:
            </div>
            <div className="by">
              Shareef Thodannur
            </div>
            <div className="disc">
              Lecturer, Dept. of Aqeeda and philosophy, DHIU Doctoral Student, IIT Palakkad            </div>
          </div>
        </div>
        <div className="fullPrg">
          <div className="e">
            <div className="secName">
              Session One
            </div>
            <div className="_cont">
              <div className="eTlk">

                <div className="by">
                  <img src="/sk.jpeg" alt="" />
                  <div className="Name">
                    Sunil Kumar
                  </div>
                  <div className="disc">
                    Philosophy Enthusiast & independent researcher
                  </div>
                </div>

                <div className="txt">
                  <div className="subj">
                    <b>Postmodernism and Beyond</b>
                    <sub>
                      How do postmodernisms make
                      platform for future thinking?
                      Its limit and Possibilities.
                    </sub>
                  </div>

                  <div className="mod">
                    <b>Moderator:</b> Twaha Murshid Hudawi
                  </div>
                </div>

              </div>
              <div className="eTlk">

                <div className="by">
                  <img src="https://ssus.ac.in/images/2019/07/22/aby_265x345.png" alt="" />
                  <div className="Name">
                    Dr.Abey Koshy                  </div>
                  <div className="disc">
                    Professor in the PG/Research Department of
                    Philosophy at SS University, Kalady                  </div>
                </div>

                <div className="txt">
                  <div className="subj">
                    <b>What poststructuralism Aims at?</b>
                    <sub>
                      Deconstruction of structuralism and critics of prominent philosophers
                    </sub>
                  </div>

                  <div className="mod">
                    <b>Moderator:</b>  Sayyid Haseel
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div className="e">
            <div className="secName">
              Session Two
            </div>
            <div className="_cont">
              <div className="eTlk">

                <div className="by">
                  <img src="https://utharakalam.com/wp-content/uploads/2018/03/Shameer-KS-e1550488514933.jpg" alt="" />
                  <div className="Name">
                    Shameer Ks
                  </div>
                  <div className="disc">
                    Author, Editor at other books
                  </div>
                </div>

                <div className="txt">
                  <div className="subj">
                    <b>  Contemporary Islamic Philosophy   </b>
                    <sub>
                      Major schools in modern
                      Islamic Philosophy, School of Tehran
                      and Isfahan, prominent thinkers
                    </sub>
                  </div>

                  <div className="mod">
                    <b>Moderator:</b>  Fasil Kp Valamboor
                  </div>
                </div>

              </div>
              <div className="eTlk">

                <div className="by">
                  <img src="/shUst.jpeg" alt="" />
                  <div className="Name">
                    Shameer Ali Hudawi Pallath                  </div>
                  <div className="disc">
                    PG Lecturer, Darul Huda Islamic University
                  </div>
                </div>

                <div className="txt">
                  <div className="subj">
                    <b>Post-modern ideas in Islamic academics
                    </b>
                    <sub>
                      Islamic response to post-modernism and post-structuralism

                    </sub>
                  </div>

                  <div className="mod">
                    <b>Moderator:</b> Sadath Ali Chelari
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      {RegForm && <Register setRegForm={setRegForm} />}
      <style jsx>{`
      @media only screen and (max-width: 600px) {
  .gr {
    opacity: .2;
  }
}
        .fullPrg{
          margin: 20px 30px;
          margin-top: 80px;
          display: flex;
          flex-wrap: wrap;
          place-content: center;
        }
        .eTlk img{
          width: 200px;

          margin: auto;

          margin-right: 40px;
          box-shadow: 1px 64px 41px -18px #665864;
          border: white solid 5px;
                  }
        .eTlk {
          display: grid;
          place-content:center;
          padding: 20px 30px;
          max-width: min(400px,calc(100vw - 100px));

          margin: 50px;
          flex-wrap: wrap;
          
          margin-top: 0px;

          background: rgba( 255, 255, 255, 0.25 );
          box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
          backdrop-filter: blur( 4px );
          -webkit-backdrop-filter: blur( 4px );
          
          border: 5px solid #6B1F5F;

          z-index: 5;
          position: relative;
        }
        .eTlk::before{
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: none;
          z-index: -5;
          transform: translate(-20px,8px);
          border: solid 5px #3f1036;
        }

        .eTlk .txt{
          margin-top: 30px;
        }
        .eTlk .subj{
          margin-bottom: 20px;
        }
        .eTlk .subj b{
          font-size: 25px ;
          line-height: 1;
          background: #6B1F5F;
          color: white;
        }
        .eTlk .subj sub{
          margin-top: 10px;
          display: block;
        }
        .eTlk .by .Name{
          font-size: 30px;
          font-family: roboto slab;
        }
        .eTlk .by{
          font-family: roboto slab;
        }
        .eTlk .by .disc{
          
        }
        .fullPrg .e{

          margin-bottom: 50px;
        }
        .fullPrg .e ._cont{
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
        }
        .fullPrg .secName{
          background: linear-gradient(100.05deg, #1F386B 4.09%, #000000 57.21%, #6b1f6000 97.65%);

         padding: 4px 15px;
         font-size: 18px;
         color: white;
         letter-spacing: 5pt;
          margin: auto;
          margin-bottom: 30px;
          width: max-content;
        }
        .prg{
          background-image: url("/bg.png");
          background-size:contain;
          font-family: 'Source Code Pro';

        }
        .prg .about{
          margin: 20px 30px;
          padding: 20px;
          border-bottom: 2px solid #25396C;
;
        }
        .prg .proS{
          margin: 20px 30px;
          font-family: 'Source Code Pro';
          display: flex;
          flex-wrap: wrap;
        }
        .prg .proS .e {
          margin: 20px;
          max-width: 400px;
        }
        .prg .proS .e .prg{
          font-style: normal;
          font-weight: 900;
          font-size: 25.0425px;
          line-height: 28px;

          color: #E05171;
          background: none;
        }
        .prg .proS .e .by{
          font-weight: 400;
          font-size: 31.0425px;
          line-height: 39px;

          color: #1F386B;
        }
        .prg .proS .e .prg{

        }
        .Hero {
          background: linear-gradient(100.05deg, #1F386B 4.09%, #000000 57.21%, #6B1F5F 97.65%);
          width:100%;
          min-height:100vh;
          position:relative;
          overflow: hidden;
        }
        .Hero .bg{
         
          width: 100%;
          height: 100vh;
          overflow:hidden;
          position:absolute;
        }
        .Hero .bg svg{
          position:absolute;
          opacity:.5;
        }
        .Hero .gr{
          position:absolute;
          top:0;
          z-index: 50;
          width: 100%;
        }
        .Hero .cont .Head{
          display: grid;
          place-content: center;
          place-items: center;
        }
        .Hero .cont{
          width:100%;
          height:100vh;
          position: relative;


          z-index: 55;
          display:flex;
          place-items:center;
          place-content: center;
        }
        .Hero .cont .disc{
          font-family: 'Roboto Slab', serif;
        font-style: normal;
        font-weight: 900;
        font-size: 23.0425px;
        line-height: 38px;
        text-align: center;
        letter-spacing: 0.30em;

        color: #E05171;

        }

        .Hero .cont .motto{
          font-family: 'Roboto Slab';
          width: max-content;
          font-style: normal;
          font-weight: 900;
          font-size: 18.0425px;
          line-height: 38px;
          text-align: center;
          letter-spacing: 0.36em;
          color: #9E9898;
         

        }
        .Hero .cont .button {
          margin: auto;
          margin-top: 40px;
          width: max-content;
          position: relative;
        }
        .Hero .cont .button button{
          background: linear-gradient(97.5deg, #25396C 2.48%, #E05171 116.77%);
          color:white;  
          padding: 13px 25px;
          font-size: 20px;
          border: none;
          cursor: pointer;
          text-transform: uppercase;

        }
        .Hero .cont .button button:hover{
          transition: .5s ease-in-out;
          background: linear-gradient(97.5deg, #E05171 2.77%,#25396C 100.48%);
        }
        .Hero .cont .button button::before{
          content: "";
          position: absolute;
          width: calc(100% - 8px);
          height: calc(100% - 8px);
          background: none;
          border: 4px solid white;
          top: 0;
          left: 0;
          transform: translate(-8px,8px);
          z-index: -1;

        }
        .Hero .cont .button button:hover::before{
          transition: .5s ease-in;
          transform: translate(0px,0px);

        }
        .datePlc{
          background: rgba(0, 0, 0, 0.527);
          
          color: white;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding: 20px 50px;
          font-family:  'Source Code Pro';
          line-height: 1;
        }
        .datePlc b{
          display: block;
          font-size: 25px;
          font-family: roboto slab;
        }
        .datePlc .day{
          display: inline;
          padding:5px 10px ;
          font-size: 28px;
          border: solid white 2px;
          margin-right: 15px;
        }
        .datePlc .date{
          display: flex;
          line-height: 1;
        }
        .datePlc>*{
          padding:10px 20px;
        }
      `}</style>
    </div>
  )
}



function Register({ setRegForm }) {
  const [Data, setData] = useState(null);

  return (

    <div className="Dia">
      <div>
        Instructions
        <ul>
          <li>Registration Fee : Rs.100</li>
          <li>Last Date of Registration : 18/01/2022</li>
          <li>Conformation Date : 20/01/2022</li>
          <li>First 150 registrations only are selected</li>
          <li>Spot registration is not available</li>
          <li>Conformation should be notified via Email</li>
          <li>Contact</li>
          <li>996 140 24 32</li>
          <li>974 557 99 78</li>
          <li>aqeedadept@gmail.com</li>
        </ul>
      </div>
      <div>
        <div className="Txt">
          <label htmlFor="">
            Name
          </label>
          <input onInput={({ target }) => {
            setData(e => ({ ...e, "name": target.value }))
          }} type="text" name="" id="" />
        </div>
        <div className="Txt">
          <label htmlFor="">
            Email
          </label>
          <input onInput={({ target }) => {
            setData(e => ({ ...e, email: target.value }))
          }} type="text" name="" id="" />
        </div>
        <div className="Txt">
          <label htmlFor="">
            Phone Number
          </label>
          <input onInput={({ target }) => {
            setData(e => ({ ...e, phone: target.value }))
          }} type="text" name="" id="" />
        </div>
        <div className="Txt">
          <label htmlFor="">
            Institution
          </label>
          <input onInput={({ target }) => {
            setData(e => ({ ...e, insti: target.value }))
          }} type="text" name="" id="" />
        </div>
        <div>
          <button onClick={() => {
            axios.post("/api/reg", Data).then(({ data }) => {
              if (data) {
                setRegForm(false)
                alert(` ${data.name} you have successfully registered`)
              }
            })
          }}>
            Register
          </button>
          <button onClick={() => { setRegForm(false) }} style={{ background: "red" }}>Close</button>
        </div>
      </div>
      <style jsx>{`
        .Txt{
          margin: 10px;
          
        }
        .Txt label{
          display: block;

        }
        button{
          background: #6B1F5F;
          border: solid white 3px;
          padding: 10px 15px;
          font-size: 18px;
          margin: 10px;
          color: white;
        }
        .Txt input{
          padding: 10px 15px;
          font-size: 18px;
          border: solid #6B1F5F 3px;
          outline: none;
          width: 100%;

        }
      .Dia{
        font-family: roboto slab;
        overflow: auto;
        position: fixed;
        width: max-content;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(255, 255, 255, 0.524);
        backdrop-filter: blur(10px);
        z-index: 500;
        padding: 20px;
      }
      
      `}</style>
    </div>
  )
}