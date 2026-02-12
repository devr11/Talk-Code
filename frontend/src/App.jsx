import { useEffect } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";
import { healthCheck } from "./api";

function App() {
  useEffect(() => {
    (async () => {
      try {
        const data = await healthCheck();
        console.log("Backend health:", data);
      } catch (err) {
        console.error("Health check error:", err);
      }
    })();
  }, []);

  console.log("VITE_API_URL:", import.meta.env.VITE_API_URL);
  return (
    <>
      <h1 className="text-7xl">Welcome to the App</h1>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
        <UserButton />
      </SignedIn>
    </>
  );
}

export default App;
