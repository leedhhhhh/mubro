module.exports = {
	webpack: (config, { isServer }) => {
		// 비디오 파일 처리를 위한 로더 추가
		config.module.rules.push({
			test: /\.(mp4|webm)$/,
			use: {
				loader: 'file-loader',
				options: {
					publicPath: '/_next',
					name: 'static/media/[name].[hash].[ext]',
				},
			},
		});

		return config;
	},
};
