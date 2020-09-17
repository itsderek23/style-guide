module.exports = {
  components: {
    categories: [
      {
        name: 'Components',
        include: [
          'src/components/buttons/Button.jsx',
          'src/components/buttons/ButtonRound.jsx',
          'src/components/counters/Counter.jsx',
          'src/components/labels/Label.jsx',
          'src/components/avatar/Avatar.jsx',
          'src/components/bubble/Bubble.jsx',
          'src/components/logo/Logo.jsx',
          'src/components/file-handler/FileHandler.jsx',
          'src/components/rating/Rating.jsx',
          'src/components/spinner/Spinner.jsx',
          'src/components/spinner-container/SpinnerContainer.jsx',
        ],
      },
    ],
    wrapper: './src/wrappers/UXPinWrapper.jsx',
    webpackConfig: './uxpin.webpack.config.js',
  },
  name: 'Brainly Pencil - Style Guide',
};
