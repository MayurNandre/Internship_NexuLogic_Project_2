import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow">
      <App />
      </main>

      <Footer />
      
    </div>
    </BrowserRouter>
  </Provider>
);
