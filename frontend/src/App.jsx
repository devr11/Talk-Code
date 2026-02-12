import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";
import { Route, Routes } from "react-router";

function App() {
 
  console.log("VITE_API_URL:", import.meta.env.VITE_API_URL);
  return (
    <Routes>
      <h1 className="text-7xl">Welcome to the App</h1>
      
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
