const admin = require("firebase-admin");

const connectFirebase = async () => {
    try {
        const serviceAccount = require("./ecommer-2c278-firebase-adminsdk-4ywcv-007d6d2c16.json");

        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
          databaseURL: "https://ecommer-2c278-default-rtdb.firebaseio.com/"
        });


    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    connectFirebase
}