// sideBar
const menuItems = document.querySelectorAll('.menu-item');

//messages
const messagesCard = document.querySelector('.messages');
const message = messagesCard.querySelectorAll('.message');

//Search Bar in Message
const messageSearchEle = document.getElementById('message-search');

const removeActiveClass = (itemList) => {
	itemList.forEach((item) => {
		item.classList.remove('active');
	});
};

//Theme Customization
const themeCustomizeWrapper = document.querySelector('.theme-customize');
const themeCustomizeCardWrapper = document.querySelector('.card');
const themeMenuItem = document.querySelector('#theme-item');

menuItems.forEach((item) => {
	item.addEventListener('click', () => {
		removeActiveClass(menuItems);
		item.classList.add('active');
		if (item.id != 'notifications') {
			document.querySelector('.notification-popup').style.display = 'none';
		} else {
			document.querySelector('.notification-popup').style.display = 'block';
			document.querySelector('.notifications-count').style.display = 'none';
		}
		if (item.id == 'notifications-messages') {
			document.querySelector(
				'#notifications-messages .notifications-count'
			).style.display = 'none';
			messagesCard.style.boxShadow = '0 0 1rem var(--color-primary)';
			changeCategoryTab();
			document.querySelector('h6.message-requests').classList.add('active');
			setTimeout(() => {
				messagesCard.style.transition = 'all 3s ease-out';
				messagesCard.style.boxShadow = 'none';
			}, 2000);
		}
	});
});

//rightBar

const changeCategoryTab = () => {
	const tabs = document.querySelectorAll('.category > h6');
	tabs.forEach((tab) => {
		tab.classList.remove('active');
	});
};

messageSearchEle.addEventListener('keyup', () => {
	const val = messageSearchEle.value.toLowerCase();
	message.forEach((msg) => {
		const userName = msg.querySelector('h5').innerText.toLocaleLowerCase();
		msg.style.display = userName.includes(val) ? 'flex' : 'none';
	});
});

//Theme Customization
themeMenuItem.addEventListener('click', () => {
	themeCustomizeWrapper.style.display = 'flex';
});

themeCustomizeWrapper.addEventListener('click', (e) => {
	if (e.target.classList.contains('theme-customize'))
		themeCustomizeWrapper.style.display = 'none';
});

const fontSizes = document.querySelectorAll('.choose-font-size span');
const root = document.querySelector(':root');

const fontSizeObj = {
	'font-size-1': {
		'font-size': '10px',
		'sticky-top-left': '5.4rem',
		'sticky-top-right': '5.4rem',
	},
	'font-size-2': {
		'font-size': '13px',
		'sticky-top-left': '5.4rem',
		'sticky-top-right': '-7rem',
	},
	'font-size-3': {
		'font-size': '16px',
		'sticky-top-left': '-2rem',
		'sticky-top-right': '-17rem',
	},
	'font-size-4': {
		'font-size': '19px',
		'sticky-top-left': '-5rem',
		'sticky-top-right': '-25rem',
	},
	'font-size-5': {
		'font-size': '22px',
		'sticky-top-left': '-12rem',
		'sticky-top-right': '-35rem',
	},
};

fontSizes.forEach((fs) => {
	fs.addEventListener('click', () => {
		removeActiveClass(fontSizes);
		fs.classList.add('active');
		document.querySelector('html').style.fontSize =
			fontSizeObj[fs.classList[0]]['font-size'];
		root.style.setProperty(
			'--sticky-top-left',
			`${fontSizeObj[fs.classList[0]]['sticky-top-left']}`
		);
		root.style.setProperty(
			'--sticky-top-right',
			`${fontSizeObj[fs.classList[0]]['sticky-top-right']}`
		);
	});
});

//color palette
const colorPrimary = {
	'color-1': '252',
	'color-2': '52',
	'color-3': '352',
	'color-4': '152',
	'color-5': '202',
};

const colorPalletes = document.querySelectorAll('.choose-color span');
colorPalletes.forEach((cp) => {
	cp.addEventListener('click', () => {
		removeActiveClass(colorPalletes);
		cp.classList.add('active');
		root.style.setProperty(
			'--primary-color-hue',
			colorPrimary[cp.classList[0]]
		);
	});
});

//Background color
const backGroundObj = {
	'bg-1': {
		light: '95%',
		dark: '17%',
		white: '100%',
	},
	'bg-2': {
		light: '15%',
		dark: '95%',
		white: '20%',
	},
	'bg-3': {
		light: '0%',
		dark: '95%',
		white: '10%',
	},
};

const backgroundColors = document.querySelectorAll('.choose-bg > div');
backgroundColors.forEach((bg) => {
	bg.addEventListener('click', () => {
		removeActiveClass(backgroundColors);
		bg.classList.add('active');
		root.style.setProperty(
			'--dark-color-lightness',
			backGroundObj[bg.classList[0]].dark
		);
		root.style.setProperty(
			'--light-color-lightness',
			backGroundObj[bg.classList[0]].light
		);
		root.style.setProperty(
			'--white-color-lightness',
			backGroundObj[bg.classList[0]].white
		);
	});
});
