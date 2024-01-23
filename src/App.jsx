import Footer from "./components/Footer";
import Header from "./components/Header";
import ContextProvider from "./context/MyContext";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <div className="container">
        <ContextProvider>
          <Header />
          <AppRouter />
          <Footer />
        </ContextProvider>
      </div>
    </>
  );
}

export default App;
