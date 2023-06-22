module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: '4.0.3',
      skipMD5: true,
    },
    instance: {
      dbName: 'jest',
    },
    autoStart: false,
  },
};

// module.exports = {
//   mongodbMemoryServerOptions: {
//     binary: {
//       version: '4.0.3',
//       skipMD5: true,
//     },
//     autoStart: false,
//     instance: {},
//   },
// };


// module.exports = {
//   mongodbMemoryServerOptions: {
//     instance: {
//       dbName: "jest",
//     },
//     binary: {
//       version: "4.0.3",
//       skipMD5: true,
//     },
//     autoStart: false,
//   },
// };
