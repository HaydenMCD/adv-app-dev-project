Deloyed app: https://h-mcd-project.web.app/

Security Rules:
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
