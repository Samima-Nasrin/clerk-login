# Google login using clerk

## Commands 
```bash
git clone https://github.com/Samima-Nasrin/clerk-login.git
cd clerk-login/frontend/clerk-react
npm install
npm run dev
```

## Environmental Variables (backend/.env)
```
CLERK_SECRET_KEY=sk_test_...
CLERK_PUBLISHABLE_KEY=pk_test_...
MONGODB_URI=...
PORT=5000
```

## Environmental Variables (frontend/clerk-react/.env.local)
```
VITE_CLERK_PUBLISHABLE_KEY=...
```
