import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/clerk-react"

function HomePage() {
  return (
    <div>
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