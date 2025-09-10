export const KANDY_LOCKS_BET_MODE_META = {
	BASE: {
		mode: 'BASE',
		costMultiplier: 1.0,
		type: 'default',
		parent: '',
		children: '',
		assets: {
			icon: '',
			dialogImage: '',
			dialogVolatility: '',
			volatility: '',
			button: '',
		},
		text: {
			title: '',
			dialog: '',
			button: '',
			betAmountLabel: '',
			tickerIdle: '',
			tickerSpin: '',
			bannerText: '',
		},
		maxWin: 15000,
	},
	BOOST: {
		mode: 'BOOST',
		costMultiplier: 1.2,
		type: 'activate',
		parent: '',
		children: '',
		assets: {
			icon: 'https://test-fart-cdn-bucket.s3.ap-southeast-2.amazonaws.com/1_9_97/betModes/icon_doubleboost.webp',
			dialogImage:
				'https://test-fart-cdn-bucket.s3.ap-southeast-2.amazonaws.com/1_9_97/betModes/doubleboost_image.webp',
			dialogVolatility:
				'https://test-fart-cdn-bucket.s3.ap-southeast-2.amazonaws.com/1_9_97/betModes/volatility/volatility_01.webp',
			volatility:
				'https://test-fart-cdn-bucket.s3.ap-southeast-2.amazonaws.com/1_9_97/betModes/volatility/volatility_white_01.webp',
			button:
				'https://test-fart-cdn-bucket.s3.ap-southeast-2.amazonaws.com/1_9_97/betModes/button_activate.webp',
			bannerText: 'example banner text',
		},
		text: {
			title: 'BOOST',
			dialog:
				'Double the chance to trigger the FREE SPINS round when activated for 1.2x the player bet amount. DOUBLE BOOST remains active until disabled by the player.',
			description: 'Greatly increase your chance of landing a bonus symbol each spin.',
			button: 'ACTIVATE',
			betAmountLabel: 'DOUBLE BOOST',
			tickerIdle: 'DOUBLE BOOST IS ACTIVE',
			tickerSpin: 'GOOD LUCK',
			bannerText: 'example banner text',
		},
	},
	BONUS: {
		mode: 'BONUS',
		costMultiplier: 100,
		type: 'buy',
		parent: '',
		children: '',
		assets: {
			icon: 'https://test-fart-cdn-bucket.s3.ap-southeast-2.amazonaws.com/1_9_97/betModes/icon_bonusbuy.webp',
			dialogImage:
				'https://test-fart-cdn-bucket.s3.ap-southeast-2.amazonaws.com/1_9_97/betModes/bonus_image.webp',
			dialogVolatility:
				'https://test-fart-cdn-bucket.s3.ap-southeast-2.amazonaws.com/1_9_97/betModes/volatility/volatility_04.webp',
			volatility:
				'https://test-fart-cdn-bucket.s3.ap-southeast-2.amazonaws.com/1_9_97/betModes/volatility/volatility_white_04.webp',
			button:
				'https://test-fart-cdn-bucket.s3.ap-southeast-2.amazonaws.com/1_8_97/betModes/button_buy.webp',
		},
		text: {
			title: 'BONUS',
			dialog:
				'Triggers FREE SPINS feature when activated for 100x the player bet amount. The Global Multiplier can reach up to 64x and remains active for the duration of FREE SPINS.',
			description: 'Each spin may have a random multiplier applied to winning lines.',
			button: 'BUY',
			tickerIdle: 'PLACE YOUR BET',
			tickerSpin: 'BONUS BUY ACTIVATED',
			bannerText: 'example banner text',
		},
	},
	SUPER: {
		mode: 'SUPER',
		costMultiplier: 200,
		type: 'buy',
		parent: '',
		children: '',
		assets: {
			icon: 'https://test-fart-cdn-bucket.s3.ap-southeast-2.amazonaws.com/1_9_97/betModes/icon_superbonusbuy.webp',
			dialogImage:
				'https://test-fart-cdn-bucket.s3.ap-southeast-2.amazonaws.com/1_9_97/betModes/superbonus_image.webp',
			dialogVolatility:
				'https://test-fart-cdn-bucket.s3.ap-southeast-2.amazonaws.com/1_9_97/betModes/volatility/volatility_05.webp',
			volatility:
				'https://test-fart-cdn-bucket.s3.ap-southeast-2.amazonaws.com/1_9_97/betModes/volatility/volatility_white_05.webp',
			button:
				'https://test-fart-cdn-bucket.s3.ap-southeast-2.amazonaws.com/1_8_97/betModes/button_buy.webp',
		},
		text: {
			title: 'SUPER BONUS',
			dialog:
				'Triggers FREE SPINS feature when activated for 200x the player bet amount. The Global Multiplier can reach up to 256x and remains active for the duration of FREE SPINS.',
			description: 'Enter the mothership! Land values and multiply them with action symbols.',
			button: 'BUY',
			tickerIdle: 'PLACE YOUR BET',
			tickerSpin: 'SUPER BONUS BUY ACTIVATED',
			bannerText: 'example banner text',
		},
	},
};
