import photoswipeFromDom from './photoswipeFromDom';
import inlinePhotoswipe from './inlinePhotoswipe';

// photoswipeFromDom('.showcase-gallery');


const watchListSlides = [
  {
    src: 'assets/shopback/watchlist/watchlist_merchant_notifier.png',
    w: 1926,
    h: 1354,
    title: 'Following a merchant from the notifier'
  },
  {
    src: 'assets/shopback/watchlist/watchlist_merchant.png',
    w: 720,
    h: 1272,
    title: 'Following a merchant at the popup menu'
  },
  {
    src: 'assets/shopback/watchlist/watchlist_upsized.png',
    w: 720,
    h: 1272,
    title: 'Following upsized merchants at the popup menu'
  },
  {
    src: 'assets/shopback/watchlist/watchlist_product_page.png',
    w: 2670,
    h: 1982,
    title: 'Following the merchant or related-products at the slider'
  },
];

const notificationSlides = [
  {
    src: 'assets/shopback/notification/notification_entrty.png',
    w: 720,
    h: 1266,
    title: 'Guide to enable the web notification'
  },
  {
    src: 'assets/shopback/notification/notification_landing.png',
    w: 2422,
    h: 2302,
    title: 'Web notification landing page'
  },
];

const QRCodeSlides = [
  {
    src: 'assets/shopback/qrcode/qrcode_notifier.png',
    w: 2666,
    h: 1786,
    title: 'QRCode at the notifier'
  },
  {
    src: 'assets/shopback/qrcode/qrcode_scan.PNG',
    w: 1179,
    h: 2556,
    title: 'Scanning the QRCode on your phone'
  },
  {
    src: 'assets/shopback/qrcode/qrcode_purchase.PNG',
    w: 1179,
    h: 2556,
    title: 'Purchasing a voucher at the mobile app'
  },
  {
    src: 'assets/shopback/qrcode/qrcode_popup.png',
    w: 722,
    h: 1264,
    title: 'QRCode at the popup menu'
  },
];

const uninstallSlides = [
  {
    src: 'assets/shopback/uninstall/uninstall_sg.png',
    w: 2838,
    h: 2224,
    title: 'Uninstall feedback at SG'
  },
  {
    src: 'assets/shopback/uninstall/uninstall_tw.png',
    w: 2838,
    h: 2224,
    title: 'Uninstall feedback at TW'
  },
  {
    src: 'assets/shopback/uninstall/uninstall_form.png',
    w: 2320,
    h: 2604,
    title: 'Old uninstall feedback page'
  },
];

const fundPortfolioInvestmentAppSlides = [
  {
    src: 'assets/yqt/mini-app/IMG_1597.jpg',
    w: 1170,
    h: 2532,
    title: '小程序 - 首頁'
  },
  {
    src: 'assets/yqt/mini-app/IMG_1598.jpg',
    w: 1170,
    h: 2532,
    title: '小程序 - 組合詳情'
  },
  {
    src: 'assets/yqt/mini-app/IMG_1602.jpg',
    w: 1170,
    h: 2532,
    title: '小程序 - 基金'
  },
  {
    src: 'assets/yqt/mini-app/IMG_1722.jpg',
    w: 1170,
    h: 2532,
    title: '小程序 - 教你投'
  },
  {
    src: 'assets/yqt/h5/index.jpg',
    w: 1170,
    h: 2532,
    title: 'Mobile App - 首頁'
  },
  {
    src: 'assets/yqt/h5/index_xmas.jpg',
    w: 1170,
    h: 2532,
    title: 'Mobile App - 首頁 Xmas Skin'
  },
  {
    src: 'assets/yqt/h5/monthly_report.jpg',
    w: 1125,
    h: 2436,
    title: 'Mobile App - 投資月報'
  },
];

const fundPortfolioCampaignSlides = [
  {
    src: 'assets/yqt/campaign/mid-autumn/index.jpg',
    w: 1125,
    h: 2436,
    title: '中秋節 - 送投資折扣券'
  },
  {
    src: 'assets/yqt/campaign/mid-autumn/produce.jpg',
    w: 1125,
    h: 2436,
    title: '中秋節 - 定制邀請卡'
  },
  {
    src: 'assets/yqt/campaign/mid-autumn/poster.jpg',
    w: 1125,
    h: 2436,
    title: '中秋節 - 生成動態圖片'
  },
  {
    src: 'assets/yqt/campaign/thanksgiving/index.jpg',
    w: 1125,
    h: 2436,
    title: '感恩節 - 送投資折扣券'
  },
  {
    src: 'assets/yqt/campaign/thanksgiving/message.jpg',
    w: 1125,
    h: 2436,
    title: '感恩節 - 定制卡片訊息'
  },
  {
    src: 'assets/yqt/campaign/thanksgiving/letter.jpg',
    w: 1125,
    h: 2436,
    title: '感恩節 - 封裝卡片與動畫'
  },
  {
    videosrc: '//media.githubusercontent.com/media/hoyangtsai/projects/main/assets/yqt/campaign/thanksgiving/RPReplay_Final1607095077.mp4',
    w: 1125,
    h: 2436,
    html: `<video controls muted disablePictureInPicture controlsList="nodownload" ` +
      `poster="assets/yqt/campaign/thanksgiving/letter.jpg">` +
      `<source src="//media.githubusercontent.com/media/hoyangtsai/projects/main/assets/yqt/campaign/thanksgiving/RPReplay_Final1607095077.mp4" type="video/mp4">` +
      `</video>`,
  }
];

const fundAmsSlides = [
  {
    src: 'assets/fitam/fundpedia-detail-1.jpg',
    w: 1267,
    h: 744,
    title: '基金策略池'
  },
  {
    src: 'assets/fitam/fundpedia-detail-2.jpg',
    w: 1214,
    h: 706,
    title: '基金百科詳情'
  },
  {
    src: 'assets/fitam/strategy-comb.jpg',
    w: 756,
    h: 550,
    title: '基金百科詳情'
  },
];

const weplusCardSlides = [
  {
    src: 'assets/wecard/index-desktop.jpg',
    w: 2756,
    h: 3088,
    title: '響應式桌面端'
  },
  {
    src: 'assets/wecard/index-mobile.jpg',
    w: 1125,
    h: 2436,
    title: '響應式移動端'
  },
];

const wxgoldSlides = [
  {
    src: 'assets/wxgold/IMG_1566.jpg',
    w: 1125,
    h: 2436,
    title: '金沙紅包'
  },
  {
    src: 'assets/wxgold/IMG_1567.jpg',
    w: 1125,
    h: 2436
  },
  {
    src: 'assets/wxgold/IMG_1554.jpg',
    w: 1125,
    h: 2436
  },
  {
    videosrc: '//media.githubusercontent.com/media/hoyangtsai/projects/main/assets/wxgold/RPReplay_Final1561480690.mp4',
    w: 1125,
    h: 2436,
    html: `<video controls muted disablePictureInPicture controlsList="nodownload">` +
      `<source src="//media.githubusercontent.com/media/hoyangtsai/projects/main/assets/wxgold/RPReplay_Final1561480690.mp4" type="video/mp4">` +
      `</video>`,
  }
];

const wecardSlides = [
  {
    src: 'assets/wecard/coupon-1.jpg',
    w: 1080,
    h: 2340,
    title: '優惠券首頁'
  },
  {
    src: 'assets/wecard/coupon-2.jpg',
    w: 1080,
    h: 2340,
  },
  {
    src: 'assets/wecard/coupon-3.jpg',
    w: 1080,
    h: 2340,
  },
  {
    src: 'assets/wecard/pt-index.jpg',
    w: 1125,
    h: 2888,
  },
  {
    src: 'assets/wecard/pt-invited.jpg',
    w: 1124,
    h: 2436,
  },
  {
    videosrc: '//media.githubusercontent.com/media/hoyangtsai/projects/main/assets/wecard/RPReplay_Final1561606039.mp4',
    w: 1124,
    h: 2436,
    html: `<video controls muted disablePictureInPicture controlsList="nodownload" poster="assets/wecard/event-618.jpg">` +
      `<source src="//media.githubusercontent.com/media/hoyangtsai/projects/main/assets/wecard/RPReplay_Final1561606039.mp4" type="video/mp4">` +
      `</video>`,
  }
];

function initSlides() {
  const inlineShowcaseEles = document.querySelectorAll('.showcase-gallery__inline');

  inlineShowcaseEles.forEach((el) => {
    const slide = el.dataset.slide;
    switch (slide) {
      case 'watchlist':
        new inlinePhotoswipe(el, watchListSlides).init();
        break;
      case 'notification':
        new inlinePhotoswipe(el, notificationSlides).init();
        break;
      case 'qrcode':
        new inlinePhotoswipe(el, QRCodeSlides).init();
        break;
      case 'uninstall':
        new inlinePhotoswipe(el, uninstallSlides).init();
        break;
      case 'fund-portfolio-investment-app':
        new inlinePhotoswipe(el, fundPortfolioInvestmentAppSlides).init();
        break;
      case 'fund-portfolio-campaign':
        new inlinePhotoswipe(el, fundPortfolioCampaignSlides).init();
        break;
      case 'fund-ams':
        new inlinePhotoswipe(el, fundAmsSlides).init();
        break;
      case 'weplus-card':
        new inlinePhotoswipe(el, weplusCardSlides).init();
        break;
      case 'wxgold':
        new inlinePhotoswipe(el, wxgoldSlides).init();
        break;
      case 'wecard':
        new inlinePhotoswipe(el, wecardSlides).init();
        break;
      default:
        break;
    }
  });
}

initSlides();
