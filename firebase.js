import { initializeApp } from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.BLOG_POST_API_KEY,
    authDomain: process.env.BLOG_POST_AUTH_DOMAIN,
    projectId: process.env.BLOG_POST_PROJECT_ID,
    storageBucket: process.env.BLOG_POST_STORAGE_BUCKET,
    messagingSenderId: process.env.BLOG_POST_MESSAGING_SENDER_ID,
    appId: process.env.BLOG_POST_APP_ID,
    measurementId: process.env.BLOG_POST_MESSUREMENT_ID
}
const app = initializeApp(firebaseConfig)

// export const auth = app.auth()
// console.log(auth)
// export default app
