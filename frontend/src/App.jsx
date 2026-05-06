import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/generalPages/About.jsx";
import Admin from "./pages/adminPages/Admin.jsx";
import Contact from "./pages/generalPages/Contact.jsx";
import Project from "./pages/generalPages/Project.jsx";

import ProtectedRoute from "./components/ProtectedRoute";
// import Dashboard from "./pages/Dashboard";
import EditPage from "./pages/adminPages/EditPage.jsx"
import CreatePage from "./pages/adminPages/AdminProjectCreate.jsx"
import Messages from "./pages/adminPages/Messages.jsx";

import AdminLogin from "./components/AdminLogin.jsx";

function App() {


return(
  <>

  
  
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<Project />} />
      {/* <Route path="/admin" element={Admin} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/admin/edit/:id" element={<EditPage />} />
      <Route path="/admin/create" element={<CreatePage />} />

      <Route path="/admin/messages" element={<Messages />} />

      <Route path="/admin/login" element={<AdminLogin />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
    </Routes>
  </BrowserRouter>








  </>
)
}

export default App;
