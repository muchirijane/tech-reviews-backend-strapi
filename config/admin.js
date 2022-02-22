module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8a01600a191495aaba3f1478b9b0f9bf'),
  },
});
