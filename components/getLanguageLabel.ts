import i18n from "@/i18n/i18n";

const t = (key: string) => i18n.t(key);

export const getLanguageLabel = (language: string): string => {
    switch (language) {
        case 'eng':
            return t('eng');
        case 'hu':
            return t('hu');
        case 'cz':
            return t('cz');
        case 'sk':
            return t('sk');
        case 'is':
            return t('is');
        default:
            return t('en');
    }
};