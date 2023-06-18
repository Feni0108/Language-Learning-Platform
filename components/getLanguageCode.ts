export const getLanguageCode = (language: string): string => {
  switch (language) {
    case 'english':
      return 'en';
    case 'hungarian':
      return 'hu';
    case 'czech':
      return 'cz';
    case 'slovak':
      return 'sk';
    case 'icelandic':
      return 'is';
    default:
      return 'en';
  }
};