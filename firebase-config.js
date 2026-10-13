/* BYLD Quotations: site settings. */
window.BYLD_CONFIG = {
  firebase: {
    apiKey: "AIzaSyD33JYFI3HpgtBX3v5HFssgamX8ZOrvUk8",
    authDomain: "byld-quotations.firebaseapp.com",
    projectId: "byld-quotations",
    storageBucket: "byld-quotations.firebasestorage.app",
    messagingSenderId: "710782307292",
    appId: "1:710782307292:web:c4541138cc67bdebb6dd19"
  },
  /* Anyone with an email ending in these can sign in and work on quotations. Must match firestore.rules. */
  allowedDomains: ["byld.ae", "kbwrealestate.com"],
  /* Other individual addresses allowed to sign in. Must also be listed in firestore.rules. */
  extraAllowed: ["lcrllenado@gmail.com"],
  /* Only these can see, create and download contracts and completion certificates. Must match firestore.rules. */
  docAdmins: ["accounts@byld.ae", "lcrllenado@gmail.com", "accounts@kbwrealestate.com"],
  /* These see Settings (Dropbox, email alert, backup), set defaults and delete forever. Must match firestore.rules. */
  admins: ["accounts@byld.ae", "lcrllenado@gmail.com", "accounts@kbwrealestate.com"]
};
