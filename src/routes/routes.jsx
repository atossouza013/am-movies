import { Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import Movies from "../containers/Movies";
import Serie from "../containers/Series";
import DefaultLayout from "../layout/DefaultLayout";
import Detail from "../containers/Detail";
import Search from "../containers/Search";

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Serie />} />
        <Route path="/detail/:type/:id" element={<Detail />} />
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  );
}

export default Router;
