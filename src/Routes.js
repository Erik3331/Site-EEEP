import Home from './Pages/Home';
import Post from './Pages/Post';
import Blog from './components/Blog';
import HomeLogado from './Pages/LoginSystem/Home';
import Login from './Pages/LoginSystem/Login';
import Registro from './Pages/LoginSystem/Register';
import AdminDashboard from './Pages/Admin/AdminDashboard';

export function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<HomeLogado />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route 
            path="/admin-dashboard" 
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:id" element={<Post />} /> 
        </Routes>
      </Router>
    );
  }