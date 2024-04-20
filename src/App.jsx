import React  from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard, { tasksLoader } from './pages/Dashboard'
import Create, { createAction } from './pages/Create'
import Profile from './pages/Profile'
import Login from './pages/Login'

// Functional component to encapsulate state
function App() {
  const [email, setEmail] = React.useState("");

  // Create BrowserRouter within the functional component
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="login" element={<Login email={email} setEmail={setEmail} />} />
        <Route index element={<Dashboard />} loader={tasksLoader} />
        <Route path="create" element={<Create />} action={createAction} />
        <Route path="profile" element={<Profile email={email} />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;

