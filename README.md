# X Clone (React Native)

A full-stack mobile clone of X (formerly Twitter) built with React Native (Expo) and a Node.js backend.

## 🚀 Tech Stack

### Frontend (Mobile)
*   **Framework:** React Native with Expo
*   **Styling:** NativeWind (Tailwind CSS)
*   **Authentication:** Clerk Expo
*   **Navigation:** React Navigation / Expo Router
*   **Data Fetching:** React Query, Axios
*   **Animations:** React Native Reanimated

### Backend
*   **Runtime:** Node.js
*   **Framework:** Express.js
*   **Database:** MongoDB with Mongoose
*   **Authentication:** Clerk Express
*   **Security:** Arcjet (Rate limiting & Bot protection)
*   **Media Storage:** Cloudinary & Multer

## 📁 Project Structure

```bash
📦 x-clone-rn
 ┣ 📂 mobile/     # Frontend Expo React Native application
 ┗ 📂 backend/    # Node.js/Express backend API
```

## 🛠️ Getting Started

### Prerequisites
*   Node.js (v18+)
*   npm or yarn
*   Expo Go app on your physical device (or iOS Simulator/Android Emulator)
*   MongoDB instance
*   Clerk Account for Auth
*   Cloudinary Account for Media Storage

### 1. Backend Setup
Navigate into the backend directory:
```bash
cd backend
npm install
```

Create a `.env` file based on `.env.example` and fill in your keys:
```env
PORT=...
MONGODB_URI=...
CLERK_SECRET_KEY=...
CLERK_PUBLISHABLE_KEY=...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

Run the backend server:
```bash
npm run dev
# Server will start usually on http://localhost:PORT
```

### 2. Mobile Setup
Navigate into the mobile directory:
```bash
cd mobile
npm install
```

Create a `.env` file in the mobile root and add your Clerk public key and Backend API URL:
```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=...
EXPO_PUBLIC_API_URL=http://localhost:PORT/api
```

Start the Expo Development Server:
```bash
npx expo start
```
*   Press `a` to open in Android Emulator
*   Press `i` to open in iOS Simulator
*   Scan the QR code with the Expo Go app on your physical device

## 📄 License
This project is licensed under the ISC License.
