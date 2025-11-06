// Note: live2d_path parameters should use absolute paths.
const live2d_path = 'https://cdn.jsdelivr.net/gh/Debelxd/live2d-widget@master/';

// Language configuration
const live2d_config = {
  defaultLanguage: 'en',
  availableLanguages: ['es', 'en'],
  userLanguage: null,
};

// Encapsulate methods for asynchronous resource loading
function loadExternalResource(url, type) {
  return new Promise((resolve, reject) => {
    let tag;
    if (type === 'css') {
      tag = document.createElement('link');
      tag.rel = 'stylesheet';
      tag.href = url;
    } else if (type === 'js') {
      tag = document.createElement('script');
      tag.src = url;
    }
    if (tag) {
      tag.onload = () => resolve(url);
      tag.onerror = () => reject(url);
      document.head.appendChild(tag);
    }
  });
}

// Detect user language
function detectUserLanguage() {
  const savedLanguage = localStorage.getItem('waifu-language');
  if (savedLanguage && live2d_config.availableLanguages.includes(savedLanguage)) {
    return savedLanguage;
  }
  
  const browserLang = navigator.language || navigator.userLanguage;
  const shortLang = browserLang.split('-')[0];
  
  if (live2d_config.availableLanguages.includes(shortLang)) {
    return shortLang;
  }
  
  return live2d_config.defaultLanguage;
}

// Get language-specific waifu-tips path
function getWaifuTipsPath() {
  const lang = live2d_config.userLanguage || detectUserLanguage();
  return live2d_path + `waifu-tips-${lang}.json`;
}

// Loading waifu.css live2d.min.js waifu-tips.js
if (screen.width >= 768) {
  Promise.all([
    loadExternalResource(live2d_path + 'live2d.min.js', 'js'),
    loadExternalResource(live2d_path + 'jsdelivr/random/waifu-tips.js', 'js'),
  ]).then(() => {
    // Set user language before initialization
    live2d_config.userLanguage = detectUserLanguage();
    
    initWidget({
      waifuPath: getWaifuTipsPath(),
      cdnPath: live2d_path,
      tools: [
        'hitokoto',
        'asteroids',
        'switch-model',
        'switch-texture',
        'photo',
        /*'info',*/
        'switch-language',
        'quit',
      ],
    });
  });
}

console.log(`
  く__,.ヘヽ.        /  ,ー､ 〉
           ＼ ', !-─‐-i  /  /´
           ／｀ｰ'       L/／｀ヽ､
         /   ／,   /|   ,   ,       ',
       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
          !,/7 '0'     ´0iソ|    |
          |.从"    _     ,,,, / |./    |
          ﾚ'| i＞.､,,__  _,.イ /   .i   |
            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
              | |/i 〈|/   i  ,.ﾍ |  i  |
             .|/ /  ｉ：    ﾍ!    ＼  |
              kヽ>､ﾊ    _,.ﾍ､    /､!
              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
              ﾚ'ヽL__|___i,___,ンﾚ|ノ
                  ﾄ-,/  |___./
                  'ｰ'    !_,.:
`);