
export const color = {
	lightBlue: '#6FCDE4',
	darkLightBlue: '#7dcde3',
	offBlack: '#1C1C1C',
}

const screenSize = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px'
}

export const device = {
	mobileS: `(min-width: ${screenSize.mobileS})`,
	mobileM: `(min-width: ${screenSize.mobileM})`,
	mobileL: `(min-width: ${screenSize.mobileL})`,
	tablet: `(min-width: ${screenSize.tablet})`,
	laptop: `(min-width: ${screenSize.laptop})`,
	laptopL: `(min-width: ${screenSize.laptopL})`,
	desktop: `(min-width: ${screenSize.desktop})`,
	desktopL: `(min-width: ${screenSize.desktop})`
};