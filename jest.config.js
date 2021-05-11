module.exports = {
  "moduleFileExtensions": ["js", "json", "vue", "svg"],
  "transform": {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest",
    "^.+\\.svg$": "<rootDir>/svgTransform.js"
  }
}
