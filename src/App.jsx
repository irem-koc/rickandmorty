import ContextProvider from "./context/MyContext";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <div className="container">
        <ContextProvider>
          <AppRouter />
        </ContextProvider>
      </div>
    </>
  );
}

export default App;
