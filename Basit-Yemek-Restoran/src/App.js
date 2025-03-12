import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";
import Gallery from "./Gallery";
import Title from "./Title";

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Title/>
        <div class="image-container">
          <Gallery />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;