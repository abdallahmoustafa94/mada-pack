import React, { useState } from 'react'
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import ReactPlayer from 'react-player';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <header className="style-14">
      <div className="container">
        <div className="content">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="info">
                <span className="vid_link">
                  <span className="icon"><img src="/assets/img/mada-icon.png" alt="" /> </span>
                </span>
                <h1> الخبرة هى شعارنا، والمنتجات البلاستيكية هي <span> تخصصنا </span> </h1>
                <p className='mt-4'>نحن ملتزمون بتقديم مجموعة متنوعة من الحاويات البلاستيكية. جنبا إلى جنب مع جميع المنتجات المصنوعة خصيصاً لعملك.
</p>
                <a href="#0" className="btn rounded-pill text-white bg-red1 shadow-lg fw-bold mt-4" target="_blank">
              <small> أطلب عرض الأسعار </small>
            </a>

              </div>
            </div>
            <div className="col-lg-7">
              <div className="img">
              <ReactPlayer
      url={"/assets/hero-video.mp4"}
      playing
      loop
      muted
      playsinline
      width="100%"
    />
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        typeof window !== "undefined" &&
        (
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="pGbIOC83-So"
            onClose={() => setOpen(false)}
          />
        )
      }
    </header>
  )
}

export default Header