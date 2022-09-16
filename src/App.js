import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";
import Footer from "./components/Footer";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.key} {...item} />;
  });

  return (
    <div>
      <Navbar />
      <section className="cards-list">{cards}</section>
      <Footer />
    </div>
  );
}
