const presaRules = require('./presa/.prettierrc.js')
module.exports = {
  ...presaRules,
  // Provide your own rules

  overrides: [
    {
      files: 'presa/**/*',
      options: presaRules,
    },
  ],
}
