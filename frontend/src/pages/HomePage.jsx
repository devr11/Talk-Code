import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/clerk-react"
import toast from "react-hot-toast"

function HomePage() {

    // fetch some data without using tanstack
    

  return (
    <div>
        <button className="btn btn-secondary" onClick={()=> toast.success("This is a success toast")}>Click Me</button>
        <SignedOut>
            <SignInButton>
                <button className="btn btn-primary">LogIn</button>
            </SignInButton>
        </SignedOut>

        <SignedIn>
            <SignOutButton/>
        </SignedIn>
    </div>
  )
}

export default HomePage