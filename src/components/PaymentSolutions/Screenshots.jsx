import React from "react";

const Screenshots = () => {
  return (
    <section className="screenshots style-14 section-padding">
      <div className="container">
        <div className="about-row mb-150">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div>
                <div className="row gx-0">
                  <div className="col-12 pt-50">
                    <img src="/assets/img/4.jpg" alt="" className="main-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="info mt-5 mt-lg-0">
                <div className="section-head mb-40">
                  <p className="color-red1 text-uppercase fw-bold mb-10">
                    رواد صناعة بلاستيك PET في مصر
                  </p>
                  <h2 className="fs-1">من نحن؟</h2>
                </div>
                <div className="text">
                  نتصدر الريادة في صناعة أجود أنواع البلاستيك المعاد تدويره PET
                  بأحدث التقنيات المتطورة لأكثر من 30 عاماً. والذي يُستخدم في
                  صناعة حاويات السوائل والأطعمة. ويُستخدم في عمليات التشكيل
                  الحراري لصناعة العديد من المنتجات المتنوعة.
                </div>

                <a
                  href="#0"
                  className="btn rounded-pill text-dark bg-white hover-red1 fw-bold border-1 brd-gray mt-30"
                  target="_blank"
                >
                  <small>
                    {" "}
                    أطلب عرض الأسعار الآن{" "}
                    <i className="fal fa-long-arrow-left me-1"></i>{" "}
                  </small>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="about-row">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="info">
                <div className="section-head mb-40">
                  <p className="color-red1 text-uppercase fw-bold mb-10">
                    {" "}
                    ستختار MADA، لماذا؟
                  </p>
                  <h2 className="fs-1">
                    {" "}
                    MADA للحلول البلاستيكية المبتكرة
                  </h2>
                </div>
                <div className="text">
                نتفهم تمامًا متطلباتك الصناعية ونقدم حلولًا بلاستيكية متقدمة تلبي احتياجاتك المتنوعه. نحن ملتزمون بتزويدك بأفضل الحاويات البلاستيكية التي تضمن تميز منتجك في السوق وتصل إلى عملائك بأمان وفعالية.

                </div>
                <h2 className="fs-5"> لتجربة الابتكار والجودة والأمان في كل عبوة.
</h2>
                <div className="text">
                الخبرة الفنية: خبراؤنا متخصصون في إنتاج الراتنج الشفاف والمرن، الذي يتميز بثباته ومقاومته العالية للصدمات والرطوبة والمواد الكيميائية.
السلامة والاستدامة: نستخدم مادة PET، المعترف بها عالميًا بأمان التلامس مع الأغذية والمشروبات، وخالية من مادة BPA الفثالات، مما يضمن سلامة منتجاتك.
الثقة التي تعتمد عليها: لأكثر من 30 عامًا، أثبتت مادة PET أمانها في تطبيقات الأغذية والمشروبات والأدوية، مما جعلها الخيار المفضل للعلامات التجارية الرائدة حول العالم.

                </div>
                {/* <h2 className="fs-5">أكثر من 30 عامًا من الثقة عالمياً</h2>
                <div className="text">
                  اثبتت التجربة سلامة PET للأغذية والمشروبات والأدوية والتطبيقات
                  الطبية، من خلال الدراسات المكثفة والموافقات التنظيمية والقبول
                  على نطاق واسع لأكثر من 30 عامًا.
                </div> */}
                <a
                  href="#0"
                  className="btn rounded-pill text-dark bg-white hover-red1 fw-bold border-1 brd-gray mt-30"
                  target="_blank"
                >
                  <small>
                    {" "}
                    المزيد <i className="fal fa-long-arrow-left me-1"></i>{" "}
                  </small>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className=" mt-5 mt-lg-0">
                <div className="row gx-0">
                  <div className="col-12">
                    <img src="/assets/img/1.jpg" alt="" className="main-img " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
