import {Category} from ".prisma/client";
import i18n from "@/i18n/i18n";

const t = (key: string) => i18n.t(key);

export const getCategoryLabel = (category: Category) => {
  switch (category) {
    case Category.ANIMALS:
      return t("animals");
    case Category.CALENDAR:
      return t("calendar");
    case Category.FAMILY:
      return t("family");
    case Category.FRIENDS:
      return t("friends");
    case Category.GREETINGS:
      return t("greetings");
    case Category.HOBBY:
      return t("hobby");
    case Category.LIVING:
      return t("living");
    case Category.SHOPPING:
      return t("shopping");
    case Category.NUMBER:
      return t("number");
    default:
      return "";
  }
};