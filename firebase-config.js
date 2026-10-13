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
  /* Anyone with an email ending in @byld.ae can sign in. */
  allowedDomain: "byld.ae",
  /* Extra individual addresses allowed in (e.g. a consultant). Must also be added to firestore.rules. */
  extraAllowed: [],
  /* Admins see Settings (Dropbox, email alert, backup) and can change the defaults. Must match firestore.rules. */
  admins: ["accounts@byld.ae"]
};
