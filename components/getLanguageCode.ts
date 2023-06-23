export const getLanguageCode = (language: string): string => {
  switch (language) {
    case 'eng':
      return 'en';
    case 'hu':
      return 'hu';
    case 'cz':
      return 'cz';
    case 'sk':
      return 'sk';
    case 'is':
      return 'is';
    default:
      return 'en';
  }
};