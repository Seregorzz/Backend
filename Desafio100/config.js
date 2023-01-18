const admin = require("firebase-admin");

const connectFirebase = async () => {
    try {
        const serviceAccount = {
            "type": "service_account",
  "project_id": "ecommer-2c278",
  "private_key_id": "007d6d2c16c99dff1ee85f137eadcdff40ec2d29",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCbHhJyqplBlyd+\na4yzIwupFxB0MyEGayAGsecYm6tlghwQFbgIXW8AWIGL7+NQtlUaZB91t6R6WO3w\nRSCmsvPBUuCSx1xG5AFWAgaFBP+6vUDOv+Du/L/Vt0yUTzQKhX80u13/oLR3Jv7k\nmdawYEv+yUXntG4KHj1aKHbXpMs7qJUqpXx5hE/CyuOlsUF+MRoHlB1dgYv4ALVv\nzWUkDACI1N2MSRs6zB60YJ0Ljki5YWjZe0Y/2ql8ge7yMjhd18rxCmMR5SfvfdmF\nre1oR8p/Kk31ZkWGSKq1DJvE05vX0beDmFzk+LSD1b2tSu+IbaZzkqrXrOWZBlM5\n5RLofy0XAgMBAAECggEAAmcbrmFcdgrN2/mgLdGFUjgJvgsMCr8+Y+wojMCIjfjP\nJM6j/E6E3tKq0GHwZE/WufhtZlOTEtQYJ3MirNezypL/6It5r0gZNIhb1SlSfsWE\ntfnR6vxzn5oIb88ERYTI3NEUL9armkw6gYxX1NaWXBrTtYxIHL8C1fKE2L/0PUx6\nidBSyP7GgQcGnDs0dqfsvsJQXCw8NaMT0Mph89TZ/talHZrD8svpAYwC8Yf7mjWn\n8LV5RSwAWi48wkln6n7mR1Y8J2vXvGExjXMjjvbme+xpaSfqVPFxaPUQUBenBTiv\nQYaJWI+PPuT9LpCAUkPW5eYuUzm1lIDErB055b14VQKBgQDNqqiMsSR8D41s5PpM\nrLi4ry7/1q014e+eiI5VABGNgdpr4nKwungb0ILYXMYTAENrxavhhH/QQH8H26s+\n9f/SsB1b6+LlQgxmsliZToXuY+mwC7bsUj92yk7Zb438RZ7Mwgh71hxPCPTHSFFi\nhZ/lWfPY+s5jkXAKeUK8cz+PywKBgQDBFG2XkSy4OIHaTBaQ0uKnsqirFZ7nn6Pe\nEjE3V4N3WbLLtg5X82XW5XV/B5D95t0kSF5MUXTxUDRtqNTYZT4IFL/u0PFIdqek\nLHiWxmG1vHXzoqhKZxL9mStNnt+3TrC3V+kufk3h0GQdzerpUvR20PlWEXsoaW1j\nN/BMjDAWZQKBgQCgfhqFn/6+qUxNu+nvR6HmzR46G4aTU7qv1hRsFF+eM8UFB3NE\nol70JaTVvp/7V+tFAL5+f+1Vz97RfQSHX2TBPxnKD6vCB+axhV9KU1KEk4dbD+kx\nRYWs53bciwcb5CBl3MzOBmmU64JIuRB5d5ktWyLFIgNJA8eRBMulT7I8PQKBgByE\nt+s7Ni+/qO5lbq/VdkTuzpr2hpIPslSKu1pBQtnOFeqg6V10RgaHveMVawUVpHRH\nfCYpoexCvHu2BDoyOgdXiUHs+raJUBmft/ANPUFqpMFntRPIRbXPeeXtIX4h0VhD\nU93aKgbAkQkV8SylZBZop2tfCaHecJnHGWc1DaVBAoGAeRpwLRy/8WDiJxJQMeEL\nmAFBAtm+vrFzvdPprmiwxKnubFko66x43EmM/7uCNAJFGVsDaDjHZb8cZGpxQ2eo\nGk5Wxj/o4T735sVb1lXfl4MQhN6wEtyU8qYP/s+dJwQJ3eQp6nhQJMuvRWGnAsN5\nDpLN2HMmjx9J6lW8djyDHCk=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-4ywcv@ecommer-2c278.iam.gserviceaccount.com",
  "client_id": "114117366557502470056",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-4ywcv%40ecommer-2c278.iam.gserviceaccount.com"
          }

        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
          databaseURL: "https://ecommer-2c278-default-rtdb.firebaseio.com"
        });

    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    connectFirebase
}