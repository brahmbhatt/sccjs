var OFF = 0, WARN = 1, ERROR = 2;
module.exports = exports = {
   "env": {
       "es6": true,
       "node": true
   },
   "ecmaFeatures": {
       // env=es6 doesn't include modules, which we are using
       "modules": true
   },
   "extends": "eslint:recommended",
   "rules": {
     "semi": ["error", "always"],
     "quotes": ["error", "single"],
     "indent": [2, ERROR],
      "no-console":OFF,
      "no-var": "error",
      "no-undef":OFF,
      "no-sparse-arrays":OFF
   }
};

// module.exports = {
//     "extends": "airbnb-base",
// };
