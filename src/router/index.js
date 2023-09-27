import { Routes, Route, Navigate } from "react-router-dom";
import { pages } from "../pages";
import { BrowserRouter } from "react-router-dom";

import Layout from "../layout";
import Introduce from "../pages/Introduce";

export default function Routers() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/introduce" replace={true} />}
          />
          <Route
            path="/cho-tot"
            element={<Navigate to="/cho-tot/lineup" replace={true} />}
          />
          <Route path="introduce" element={<Introduce />} />
          <Route path="/cho-tot/*" element={<Layout />}>
            {pages.map((page, index) => (
              <Route key={index} path={page.path} element={<page.component />}>
                {page.children ? (
                  <Route
                    path={page.children.path}
                    element={<page.children.component />}
                  />
                ) : (
                  <></>
                )}
              </Route>
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
