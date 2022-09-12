module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    clean: true,
  },
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
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/[name].[hash:6][ext]', //输出规则
        },
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024, // 小于20kb则解析成dataUrl
          },
        },
      },
    ],
  },
};
