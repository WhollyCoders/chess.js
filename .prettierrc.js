module.exports = {
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: '**/*.js',
      options: {
        parser: 'babel'
      }
    },
    {
      files: '**/*.md',
      options: {
        parser: 'markdown'
      }
    }
  ]
}
