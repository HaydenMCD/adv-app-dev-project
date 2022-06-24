## Deployed app: 
https://h-mcd-project.web.app/

## How to run locally
1. Open Git and type `git clone https://github.com/BIT-Advanced-App-Dev/project-22s1-Hayden-McD.git`.
2. Open the downloalded repository in a code editor like vscode.
3. Once opened, type `cd app-dev-project` in the code editor terminal to enter the project folder.
4. Type `npm i` to install node packages.
5. Finally, type `npm start` to start a local deployment. This will automatically open the app in a web browser.

## Security Rules:
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
