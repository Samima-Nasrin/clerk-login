import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import './App.css'

export default function App() {
  return (
    <div className="center-container">
      <SignedOut>
        <SignInButton mode="modal">
          <button className="big-btn">Sign In</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <div className="user-section">
          <UserButton appearance={{ elements: { avatarBox: "big-avatar" } }} />
        </div>
      </SignedIn>
    </div>
  )
}
