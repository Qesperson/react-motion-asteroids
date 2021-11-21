// const { override } = require('customize-cra')

// const supportMjs = () => (webpackConfig) => {
//     webpackConfig.module.rules.push({
//         test: /\.mjs$/,
//         include: /node_modules/,
//         type: 'javascript/auto',
//     })
//     return webpackConfig
// }

// module.exports = override(supportMjs())

module.exports = function override(webpackConfig) {
    webpackConfig.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
    })

    return webpackConfig
}
