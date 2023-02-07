import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages
import About from "./pages/About";
import Careers, { careersLoader } from "./pages/careers/Careers";
import Contact from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import Home from "./pages/Home";

//layouts
import CareersLayout from "./layouts/CareersLayout";
import HelpLayout from "./layouts/HelpLayout";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="careers" element={<CareersLayout />}>
        <Route index element={<Careers />} loader={careersLoader} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
