import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default Home;