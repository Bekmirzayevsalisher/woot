// import Navbar from "./components/navbar/Navbar"
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/product/Products";
import  Scrollby from "../../components/slider/Scrollby"
import Futer from "../../components/futer/Futer";

function Home() {
  return (
  
    <div className="Home">
      <Navbar/>
      <Banner />
      <Products/>
      <Scrollby/>
      <Futer/>
      <Footer/>
     <like/>
      
      
    </div>
  );
}
export default Home;