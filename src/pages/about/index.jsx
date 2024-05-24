import MainLayout from "@layouts/Main";
import Navbar from "@components/Navbars/PaymentSolutionsNav";
import Screenshots from "@components/PaymentSolutions/Screenshots";
import Footer from "@components/PaymentSolutions/Footer";
const About = () => {
  return (
    <MainLayout title={"مادا | من نحن"}>
      <Navbar />
      <main >
        <div className="m-auto " style={{background:`url(/assets/img/banner-inner.jpg)`, backgroundSize:"cover", height:"350px", width:"100%", backgroundPosition:"center ", backgroundRepeat:"no-repeat"}}>
    
        </div>
        <Screenshots />
      </main>
      <Footer />
    </MainLayout>
  );
};
export default About;
