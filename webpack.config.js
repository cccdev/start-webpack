module.exports = {
  entry: './src/index.js',
  output: { filename: 'bundle.js' },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false, //不转为 esModule
              name: '[name].[hash:6].[ext]',//按照name+6位hash+扩展名的规则来命名
              outputPath: 'image', //输出目录
              limit: 20 * 1024 // 20kb以下才打包成base64格式
            },
          },
        ],
      },
    ],
  },
};
