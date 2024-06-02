import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import FeaturedIn from "../components/Featured in/FeaturedIn";
import Meals from "../components/MealsDiets/Meals";

function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <FeaturedIn />
      <HowItWorks />
      <Meals />
    </>
  );
}

export default HomePage;