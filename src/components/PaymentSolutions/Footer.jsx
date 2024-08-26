import React from "react";

const Footer = () => {
  return (
    <footer className="style-14">
      <div className="container">
        <div className="content section-padding">
          <div className="row justify-content-between gx-0">
            <div className="col-lg-4">
              <div className="foot-info">
                <div className="foot-logo">
                  <img src="/assets/img/logo.jpg" alt="" />
                </div>
                <div className="social-icons">
                  <a href="https://www.facebook.com/MADA.Plastic.Solutions?mibextid=LQQJ4d">
                    {" "}
                    <i
                      className="fab fa-facebook-f"
                      style={{ fontSize: "30px" }}
                    ></i>{" "}
                  </a>
                  <a href="https://www.linkedin.com/company/mada-pack/">
                    {" "}
                    <i
                      className="fab fa-linkedin"
                      style={{ fontSize: "30px" }}
                    ></i>{" "}
                  </a>
                  <a href="#">
                    {" "}
                    <i
                      className="fab fa-instagram"
                      style={{ fontSize: "30px" }}
                    ></i>{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <h4 className="sub-link text-uppercase mb-20 mt-5 mt-lg-0">
                {" "}
                تواصل معنا{" "}
              </h4>
              <ul>
                <li>
                  {" "}
                  العنوان : المنطقة الصناعية الجديدة امتداد الرابعة قطعة ٤ بلوك
                  ٩ مدينة برج العرب الجديدة الاسكندرية{" "}
                </li>
                <li className="mb-2 mt-2">
                  {" "}
                  <a href="tel:01114447801"> تليفون : 01114447801</a>{" "}
                </li>
                <li className="mb-2">
                  {" "}
                  <a href="tel:تليفون : 111265773"> تليفون : 035890555</a>{" "}
                </li>
                <li className="mt-2">
                  {" "}
                  <a href="mailto:info@mada-pack.com">
                    {" "}
                    البريد الالكتروني : info@mada-pack.com{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="foot border-1 border-top brd-gray py-3">
          <div className="row align-items-center">
            <div className="col-lg-12 text-lg-end">
              <div className="text color-666 my-2 text-center">
                {" "}
                جميع الحقوق محفوظة{" "}
                <a href="#" className="color-000">
                  {" "}
                  @mada{" "}
                </a>{" "}
                - 2023{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
