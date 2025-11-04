import * as admin from 'firebase-admin';
import serviceAccount from './mind-mobile-firebase-adminsdk-fbsvc-62af5a96b1.json';
//
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
// });

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: serviceAccount.project_id,
    clientEmail: serviceAccount.client_email,
    privateKey: serviceAccount.private_key.replace(/\\n/g, '\n'),
  }),
});

export default admin;

// import { initializeApp, cert, getApps, getApp } from 'firebase-admin/app';
// import { getAuth } from 'firebase-admin/auth';
// import * as admin from 'firebase-admin';
// import serviceAccount from './mind-mobile-firebase-adminsdk-fbsvc-62af5a96b1.json';
//
// const app = !getApps().length
//   ? initializeApp({
//       credential: cert({
//         projectId: serviceAccount.project_id,
//         clientEmail: serviceAccount.client_email,
//         privateKey: serviceAccount.private_key.replace(/\\n/g, '\n'),
//       }),
//     })
//   : getApp();
//
// const auth = getAuth(app);
//
// export { app, auth, admin };
