import { Provider } from "react-redux";
import Head from "./Components/Head";
import Body from "./Components/Body";
import store from "./utils/store";
import { Route, Routes, Outlet } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

const RootLayout = () => (
  <div>
    <Head />
    <Outlet />
  </div>
);

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="" element={<Body />}>
            <Route index element={<MainContainer />} />
            <Route path="watch" element={<WatchPage />} />
          </Route>
        </Route>
      </Routes>
    </Provider>
  );
}
export default App;
