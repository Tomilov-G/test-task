import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Provider } from "react-redux";
import { store } from "./store/store";
export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Main />
        <Footer />
      </Provider>
    </>
  );
};
