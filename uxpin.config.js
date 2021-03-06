module.exports = {
  components: {
    categories: [
      {
        name: 'Basics',
        include: [
          'src/components/subject-icons/merge/SubjectIcon/SubjectIcon.jsx',
          'src/components/math-symbols/merge/MathSymbol/MathSymbol.jsx',
          'src/components/logo/Logo.jsx',
          'src/components/icons/Icon.jsx',
        ],
      },
      {
        name: 'Components',
        include: [
          'src/components/buttons/Button.jsx',
          'src/components/counters/Counter.jsx',
          'src/components/dropdowns/Dropdown.jsx',
          'src/components/labels/Label.jsx',
          'src/components/avatar/Avatar.jsx',
          'src/components/bubble/Bubble.jsx',
          'src/components/file-handler/FileHandler.jsx',
          'src/components/rating/Rating.jsx',
          'src/components/spinner/Spinner.jsx',
          'src/components/flash-messages/FlashMessage.jsx',
          'src/components/form-elements/merge/Select/Select.jsx',
          'src/components/form-elements/merge/Input/Input.jsx',
          'src/components/form-elements/merge/TextArea/TextArea.jsx',
          'src/components/form-elements/merge/Radio/Radio.jsx',
          'src/components/form-elements/merge/Checkbox/Checkbox.jsx',
          'src/components/search/Search.jsx',
        ],
      },
      {
        name: 'Containers',
        include: [
          'src/components/spinner-container/SpinnerContainer.jsx',
          'src/components/flex/Flex.jsx',
          'src/components/box/Box.jsx',
        ],
      },
    ],
    wrapper: './src/wrappers/UXPinWrapper.jsx',
    webpackConfig: './uxpin.webpack.config.js',
  },
  name: 'Brainly - Style Guide',
};
