import * as admin from 'firebase-admin';
import serviceAccount from './mind-mobile-firebase-adminsdk-fbsvc-62af5a96b1.json';

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: serviceAccount.project_id,
    clientEmail: serviceAccount.client_email,
    privateKey: serviceAccount.private_key.replace(/\\n/g, '\n'),
  }),
});

export default admin;
