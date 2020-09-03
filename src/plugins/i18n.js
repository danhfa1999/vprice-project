import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
const messages = {
    'en': {
        rate: 'Rate Exchange',
        product: 'Product',
        buy: 'Cash Buying',
        sell: '	Cash Selling',
        buytrans: 'Buy Transfer',
        currency: 'Currencies',
        selltele: 'Telegraphic Buying',


    },
    'vi': {
        rate: 'Tỷ Gía',
        product: 'Loại',
        buy: 'Mua vào',
        sell: '	Bán ra',
        buytrans: 'Mua Chuyển Khoản',
        currency: 'Tiền tệ',
        selltele: 'Bán ra',
    }
};

const i18n = new VueI18n({
    locale: 'vi',
    fallbackLocale: 'vi',
    messages,
});
export default i18n;