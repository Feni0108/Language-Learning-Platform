import {
  Words,
  Language,
  Dictionary,
  Category,
  Sentence,
    Storyline
} from ".prisma/client";
import {Blob} from "./blob";

/*
Usage:
- update the database schema: npx prisma migrate dev
- sync and format your prisma schema to that of your database schema: npx prisma db push
- regenerate the Prisma client: npx prisma generate
- restart your IDE
- In the terminal navigate to the root directory of the project
- Run the following command: npx ts-node --compiler-options '{"module":"commonjs"}' db/seed.ts
*/

const prisma = require("../lib/prisma").default;

async function seed() {
  /*------- Seeding the Word table ------*/
  try {
    await prisma.$connect();

    const wordList = [
        {
            id: 1,
            word: "zero",
            language: Language.eng,
            description: "the number zero",
            category: Category.NUMBER,
            image: Blob.find(element => element.id === 1)
        },
      {
        id: 1,
        word: "nulla",
        language: Language.hu,
        description: "a nulla szám",
        category: Category.NUMBER,
          image: Blob.find(element => element.id === 1)
      },
        {
            id: 1,
            word: "nula",
            language: Language.cz,
            description: "číslo nula",
            category: Category.NUMBER,
            image: Blob.find(element => element.id === 1)
        },
      {
        id: 1,
        word: "nula",
        language: Language.sk,
        description: "číslo nula",
        category: Category.NUMBER,
          image: Blob.find(element => element.id === 1)
      },
      {
        id: 1,
        word: "núll",
        language: Language.is,
        description: "talan núll",
        category: Category.NUMBER,
          image: Blob.find(element => element.id === 1)
      },
      {
        id: 2,
        word: "one",
        language: Language.eng,
        description: "the number one",
        category: Category.NUMBER,
          image: Blob.find(element => element.id === 2)
      },
      {
        id: 2,
        word: "egy",
        language: Language.hu,
        description: "az egyes szám",
        category: Category.NUMBER,
          image: Blob.find(element => element.id === 2)
      },
      {
        id: 2,
        word: "jeden",
        language: Language.cz,
        description: "číslo jeden",
        category: Category.NUMBER,
          image: Blob.find(element => element.id === 2)
      },
      {
        id: 2,
        word: "jeden",
        language: Language.sk,
        description: "číslo jeden",
        category: Category.NUMBER,
          image: Blob.find(element => element.id === 2)
      },
      {
        id: 2,
        word: "einn",
        language: Language.is,
        description: "talan einn",
        category: Category.NUMBER,
          image: Blob.find(element => element.id === 2)
      },
      {
        id: 3,
        word: "two",
        language: Language.eng,
        description: "the number two",
        category: Category.NUMBER,
          image: Blob.find(element => element.id === 3)
      },
      {
        id: 3,
        word: "kettő",
        language: Language.hu,
        description: "a kettes szám",
        category: Category.NUMBER,
          image: Blob.find(element => element.id === 3)
      },
      {
        id: 3,
        word: "dva",
        language: Language.cz,
        description: "číslo dva",
        category: Category.NUMBER,
          image: Blob.find(element => element.id === 3)
      },
      {
        id: 3,
        word: "dva",
        language: Language.sk,
        description: "číslo dva",
        category: Category.NUMBER,
          image: Blob.find(element => element.id === 3)
      },
      {
        id: 3,
        word: "tveir",
        language: Language.is,
        description: "talan tveir",
        category: Category.NUMBER,
          image: Blob.find(element => element.id === 3)
      },
      {
        id: 4,
        word: "three",
        language: Language.eng,
        description: "the number three",
        category: Category.NUMBER,
          image: Blob.find(element => element.id === 4)
      },
      {
        id: 4,
        word: "három",
        language: Language.hu,
        description: "a hármas szám",
        category: Category.NUMBER,
          image: Blob.find(element => element.id === 4)
      },
      {
        id: 4,
        word: "tri",
        language: Language.sk,
        description: "číslo tri",
        category: Category.NUMBER,
          image: Blob.find(element => element.id === 4)
      },
      {
        id: 4,
        word: "tři",
        language: Language.cz,
        description: "číslo tři",
        category: Category.NUMBER,
          image: Blob.find(element => element.id === 4)
      },
      {
        id: 4,
        word: "þrír",
        language: Language.is,
        description: "talan þrír",
        category: Category.NUMBER,
          image: Blob.find(element => element.id === 4)
      },
      {
        id: 5,
        word: "four",
        language: Language.eng,
        description: "the number four",
        category: Category.NUMBER
      },
      {
        id: 5,
        word: "négy",
        language: Language.hu,
        description: "a négyes szám",
        category: Category.NUMBER
      },
      {
        id: 5,
        word: "štyri",
        language: Language.sk,
        description: "číslo štyri",
        category: Category.NUMBER
      },
      {
        id: 5,
        word: "čtyři",
        language: Language.cz,
        description: "číslo čtyři",
        category: Category.NUMBER
      },
      {
        id: 5,
        word: "fjórir",
        language: Language.is,
        description: "talan fjórir",
        category: Category.NUMBER
      },
      {
        id: 6,
        word: "five",
        language: Language.eng,
        description: "the number five",
        category: Category.NUMBER
      },
      {
        id: 6,
        word: "öt",
        language: Language.hu,
        description: "az ötös szám",
        category: Category.NUMBER
      },
      {
        id: 6,
        word: "päť",
        language: Language.sk,
        description: "číslo päť",
        category: Category.NUMBER
      },
      {
        id: 6,
        word: "pět",
        language: Language.cz,
        description: "číslo pět",
        category: Category.NUMBER
      },
      {
        id: 6,
        word: "fimm",
        language: Language.is,
        description: "talan fimm",
        category: Category.NUMBER
      },
      {
        id: 7,
        word: "six",
        language: Language.eng,
        description: "the number six",
        category: Category.NUMBER
      },
      {
        id: 7,
        word: "hat",
        language: Language.hu,
        description: "a hatos szám",
        category: Category.NUMBER
      },
      {
        id: 7,
        word: "šesť",
        language: Language.sk,
        description: "číslo šesť",
        category: Category.NUMBER
      },
      {
        id: 7,
        word: "šest",
        language: Language.cz,
        description: "číslo šest",
        category: Category.NUMBER
      },
      {
        id: 7,
        word: "sex",
        language: Language.is,
        description: "talan sex",
        category: Category.NUMBER
      },
      {
        id: 8,
        word: "seven",
        language: Language.eng,
        description: "the number seven",
        category: Category.NUMBER
      },
      {
        id: 8,
        word: "hét",
        language: Language.hu,
        description: "a hetes szám",
        category: Category.NUMBER
      },
      {
        id: 8,
        word: "sedem",
        language: Language.sk,
        description: "číslo sedem",
        category: Category.NUMBER
      },
      {
        id: 8,
        word: "sedm",
        language: Language.cz,
        description: "číslo sedm",
        category: Category.NUMBER
      },
      {
        id: 8,
        word: "sjö",
        language: Language.is,
        description: "talan sjö",
        category: Category.NUMBER
      },
      {
        id: 9,
        word: "eight",
        language: Language.eng,
        description: "the number eight",
        category: Category.NUMBER
      },
      {
        id: 9,
        word: "nyolc",
        language: Language.hu,
        description: "a nyolcas szám",
        category: Category.NUMBER
      },
      {
        id: 9,
        word: "osem",
        language: Language.sk,
        description: "číslo osem",
        category: Category.NUMBER
      },
      {
        id: 9,
        word: "osm",
        language: Language.cz,
        description: "číslo osm",
        category: Category.NUMBER
      },
      {
        id: 9,
        word: "átta",
        language: Language.is,
        description: "talan átta",
        category: Category.NUMBER
      },
      {
        id: 10,
        word: "nine",
        language: Language.eng,
        description: "the number nine",
        category: Category.NUMBER
      },
      {
        id: 10,
        word: "kilenc",
        language: Language.hu,
        description: "a kilences szám",
        category: Category.NUMBER
      },
      {
        id: 10,
        word: "deväť",
        language: Language.sk,
        description: "číslo deväť",
        category: Category.NUMBER
      },
      {
        id: 10,
        word: "devět",
        language: Language.cz,
        description: "číslo devět",
        category: Category.NUMBER
      },
      {
        id: 10,
        word: "níu",
        language: Language.is,
        description: "talan níu",
        category: Category.NUMBER
      },
      {
        id: 11,
        word: "ten",
        language: Language.eng,
        description: "the number ten",
        category: Category.NUMBER
      },
      {
        id: 11,
        word: "tíz",
        language: Language.hu,
        description: "a tízes szám",
        category: Category.NUMBER
      },
      {
        id: 11,
        word: "desať",
        language: Language.sk,
        description: "číslo desať",
        category: Category.NUMBER
      },
      {
        id: 11,
        word: "deset",
        language: Language.cz,
        description: "číslo deset",
        category: Category.NUMBER
      },
      {
        id: 11,
        word: "tíu",
        language: Language.is,
        description: "talan tíu",
        category: Category.NUMBER
      },
      {
        id: 12,
        word: "I",
        language: Language.eng,
        description: "the first-person singular pronoun",
        category: Category.GREETINGS
      },
      {
        id: 12,
        word: "én",
        language: Language.hu,
        description: "az első személy egyes számú névmás",
        category: Category.GREETINGS
      },
      {
        id: 12,
        word: "ja",
        language: Language.sk,
        description: "zámeno prvej osoby jednotného čísla",
        category: Category.GREETINGS
      },
      {
        id: 12,
        word: "já",
        language: Language.cz,
        description: "zájmeno první osoby jednotného čísla",
        category: Category.GREETINGS
      },
      {
        id: 12,
        word: "ég",
        language: Language.is,
        description: "persónulegt fornafn í eintölu",
        category: Category.GREETINGS
      },
      {
        id: 13,
        word: "you",
        language: Language.eng,
        description: "the second-person singular pronoun",
        category: Category.GREETINGS
      },
      {
        id: 13,
        word: "te",
        language: Language.hu,
        description: "a második személy egyes számú névmás",
        category: Category.GREETINGS
      },
      {
        id: 13,
        word: "ty",
        language: Language.sk,
        description: "zámeno druhej osoby jednotného čísla",
        category: Category.GREETINGS
      },
      {
        id: 13,
        word: "ty",
        language: Language.cz,
        description: "zájmeno druhé osoby jednotného čísla",
        category: Category.GREETINGS
      },
      {
        id: 13,
        word: "þú",
        language: Language.is,
        description: "persónulegt fornafn í eintölu",
        category: Category.GREETINGS
      },
      {
        id: 14,
        word: "he",
        language: Language.eng,
        description: "the third-person singular pronoun (masculine)",
        category: Category.GREETINGS
      },
      {
        id: 14,
        word: "ő",
        language: Language.hu,
        description: "a harmadik személy egyes számú névmás (hímnem)",
        category: Category.GREETINGS
      },
      {
        id: 14,
        word: "on",
        language: Language.sk,
        description: "zámeno tretieho mužského rodu jednotného čísla",
        category: Category.GREETINGS
      },
      {
        id: 14,
        word: "on",
        language: Language.cz,
        description: "zájmeno třetí osoby mužského rodu jednotného čísla",
        category: Category.GREETINGS
      },
      {
        id: 14,
        word: "hann",
        language: Language.is,
        description: "persónulegt fornafn í eintölu (karlkyn)",
        category: Category.GREETINGS
      },
      {
        id: 15,
        word: "she",
        language: Language.eng,
        description: "the third-person singular pronoun (feminine)",
        category: Category.GREETINGS
      },
      {
        id: 15,
        word: "ő",
        language: Language.hu,
        description: "a harmadik személy egyes számú névmás (nőnem)",
        category: Category.GREETINGS
      },
      {
        id: 15,
        word: "ona",
        language: Language.sk,
        description: "zámeno tretieho ženského rodu jednotného čísla",
        category: Category.GREETINGS
      },
      {
        id: 15,
        word: "ona",
        language: Language.cz,
        description: "zájmeno třetí osoby ženského rodu jednotného čísla",
        category: Category.GREETINGS
      },
      {
        id: 15,
        word: "hún",
        language: Language.is,
        description: "persónulegt fornafn í eintölu (kvenkyn)",
        category: Category.GREETINGS
      },
      {
        id: 16,
        word: "we",
        language: Language.eng,
        description: "the first-person plural pronoun",
        category: Category.FAMILY
      },
      {
        id: 16,
        word: "mi",
        language: Language.hu,
        description: "az első személy többes számú névmás",
        category: Category.FAMILY
      },
      {
        id: 16,
        word: "my",
        language: Language.sk,
        description: "zámeno prvej osoby množného čísla",
        category: Category.FAMILY
      },
      {
        id: 16,
        word: "my",
        language: Language.cz,
        description: "zájmeno první osoby množného čísla",
        category: Category.FAMILY
      },
      {
        id: 16,
        word: "við",
        language: Language.is,
        description: "persónulegt fornafn í fleirtölu",
        category: Category.FAMILY
      },
      {
        id: 17,
        word: "you",
        language: Language.eng,
        description: "the second-person plural pronoun",
        category: Category.FAMILY
      },
      {
        id: 17,
        word: "ti",
        language: Language.hu,
        description: "a második személy többes számú névmás",
        category: Category.FAMILY
      },
      {
        id: 17,
        word: "vy",
        language: Language.sk,
        description: "zámeno druhej osoby množného čísla",
        category: Category.FAMILY
      },
      {
        id: 17,
        word: "vy",
        language: Language.cz,
        description: "zájmeno druhé osoby množného čísla",
        category: Category.FAMILY
      },
      {
        id: 17,
        word: "þið",
        language: Language.is,
        description: "persónulegt fornafn í fleirtölu",
        category: Category.FAMILY
      },
      {
        id: 18,
        word: "they",
        language: Language.eng,
        description: "the third-person plural pronoun",
        category: Category.FAMILY
      },
      {
        id: 18,
        word: "ők",
        language: Language.hu,
        description: "a harmadik személy többes számú névmás",
        category: Category.FAMILY
      },
      {
        id: 18,
        word: "oni",
        language: Language.sk,
        description: "zámeno tretieho rodu množného čísla",
        category: Category.FAMILY
      },
      {
        id: 18,
        word: "oni",
        language: Language.cz,
        description: "zájmeno třetí osoby množného čísla",
        category: Category.FAMILY
      },
      {
        id: 18,
        word: "þeir",
        language: Language.is,
        description: "persónulegt fornafn í fleirtölu",
        category: Category.FAMILY
      },
      {
        id: 19,
        word: "hello",
        language: Language.eng,
        description: "a greeting or expression of goodwill",
        category: Category.GREETINGS,
          image: Blob.find(element => element.id === 19)
      },
      {
        id: 19,
        word: "szia",
        language: Language.hu,
        description: "üdvözlés vagy jóakarat kifejezése",
        category: Category.GREETINGS,
          image: Blob.find(element => element.id === 19)
      },
      {
        id: 19,
        word: "ahoj",
        language: Language.cz,
        description: "pozdrav nebo vyjádření dobré vůle",
        category: Category.GREETINGS,
          image: Blob.find(element => element.id === 19)
      },
      {
        id: 19,
        word: "ahoj",
        language: Language.sk,
        description: "pozdrav alebo vyjadrenie dobrej vôle",
        category: Category.GREETINGS,
          image: Blob.find(element => element.id === 19)
      },
      {
        id: 19,
        word: "halló",
        language: Language.is,
        description: "kveðja eða góðvilja yfirlýsing",
        category: Category.GREETINGS,
          image: Blob.find(element => element.id === 19)
      },
      {
        id: 20,
        word: "goodbye",
        language: Language.eng,
        description: "a farewell or parting phrase",
        category: Category.GREETINGS,
          image: Blob.find(element => element.id === 20)
      },
      {
        id: 20,
        word: "viszlát",
        language: Language.hu,
        description: "búcsú vagy elköszönő kifejezés",
        category: Category.GREETINGS,
          image: Blob.find(element => element.id === 20)
      },
      {
        id: 20,
        word: "do videnia",
        language: Language.sk,
        description: "lúčenie alebo rozlúčková fráza",
        category: Category.GREETINGS,
          image: Blob.find(element => element.id === 20)
      },
      {
        id: 20,
        word: "sbohem",
        language: Language.cz,
        description: "rozloučení nebo rozloučení fráze",
        category: Category.GREETINGS,
          image: Blob.find(element => element.id === 20)
      },
      {
        id: 20,
        word: "bless",
        language: Language.is,
        description: "kveðja eða skilnaðarorð",
        category: Category.GREETINGS,
          image: Blob.find(element => element.id === 20)
      },
      {
        id: 21,
        word: "yes",
        language: Language.eng,
        description: "an affirmative response or agreement",
        category: Category.GREETINGS,
      },
      {
        id: 21,
        word: "igen",
        language: Language.hu,
        description: "egyetértő válasz vagy egyetértés",
        category: Category.GREETINGS
      },
      {
        id: 21,
        word: "áno",
        language: Language.sk,
        description: "potvrdzujúca odpoveď alebo súhlas",
        category: Category.GREETINGS
      },
      {
        id: 21,
        word: "ano",
        language: Language.cz,
        description: "potvrzující odpověď nebo souhlas",
        category: Category.GREETINGS
      },
      {
        id: 21,
        word: "já",
        language: Language.is,
        description: "jákvæð svör eða samþykki",
        category: Category.GREETINGS
      },
      {
        id: 22,
        word: "no",
        language: Language.eng,
        description: "a negative response or denial",
        category: Category.GREETINGS
      },
      {
        id: 22,
        word: "nem",
        language: Language.hu,
        description: "tagadó válasz vagy elutasítás",
        category: Category.GREETINGS
      },
      {
        id: 22,
        word: "ne",
        language: Language.cz,
        description: "negativní odpověď nebo popření",
        category: Category.GREETINGS
      },
      {
        id: 22,
        word: "nie",
        language: Language.sk,
        description: "záporná odpoveď alebo odmietnutie",
        category: Category.GREETINGS
      },
      {
        id: 22,
        word: "nei",
        language: Language.is,
        description: "neikvæð svör eða neitun",
        category: Category.GREETINGS
      },
      {
        id: 23,
        word: "thank you",
        language: Language.eng,
        description: "an expression of gratitude",
        category: Category.GREETINGS,
          image: Blob.find(element => element.id === 23)
      },
      {
        id: 23,
        word: "köszönöm",
        language: Language.hu,
        description: "hálás kifejezés",
        category: Category.GREETINGS,
          image: Blob.find(element => element.id === 23)
      },
      {
        id: 23,
        word: "prosím",
        language: Language.sk,
        description: "vyjadrenie vďaky",
        category: Category.GREETINGS,
          image: Blob.find(element => element.id === 23)
      },
      {
        id: 23,
        word: "děkuji",
        language: Language.cz,
        description: "vyjádření vděčnosti",
        category: Category.GREETINGS,
          image: Blob.find(element => element.id === 23)
      },
      {
        id: 23,
        word: "þakka þér",
        language: Language.is,
        description: "tjáning þakklætis",
        category: Category.GREETINGS,
          image: Blob.find(element => element.id === 23)
      },
      {
        id: 24,
        word: "please",
        language: Language.eng,
        description: "a polite request or invitation",
        category: Category.GREETINGS
      },
      {
        id: 24,
        word: "kérlek",
        language: Language.hu,
        description: "udvarias kérés vagy meghívás",
        category: Category.GREETINGS
      },
      {
        id: 24,
        word: "prosím",
        language: Language.sk,
        description: "zdvorilá žiadosť alebo pozvanie",
        category: Category.GREETINGS
      },
      {
        id: 24,
        word: "prosím",
        language: Language.cz,
        description: "zdvořilá žádost nebo pozvání",
        category: Category.GREETINGS
      },
      {
        id: 24,
        word: "vinsamlegast",
        language: Language.is,
        description: "kurteis beiðni eða boð",
        category: Category.GREETINGS
      },
      {
        id: 25,
        word: "sorry",
        language: Language.eng,
        description: "an apology or expression of regret",
        category: Category.GREETINGS
      },
      {
        id: 25,
        word: "bocsánat",
        language: Language.hu,
        description: "bocsánatkérés vagy sajnálat kifejezése",
        category: Category.GREETINGS
      },
      {
        id: 25,
        word: "prepáč",
        language: Language.sk,
        description: "ospravedlnenie alebo vyjadrenie ľútosti",
        category: Category.GREETINGS
      },
      {
        id: 25,
        word: "promiňte",
        language: Language.cz,
        description: "omluva nebo vyjádření lítosti",
        category: Category.GREETINGS
      },
      {
        id: 25,
        word: "fyrirgefðu",
        language: Language.is,
        description: "afsökunarbeiðni eða tjáning á eftirsjá",
        category: Category.GREETINGS
      },
      {
        id: 26,
        word: "excuse me",
        language: Language.eng,
        description:
          "a polite phrase used to get someone's attention or apologize",
        category: Category.GREETINGS
      },
      {
        id: 26,
        word: "elnézést",
        language: Language.hu,
        description:
          "udvarias kifejezés, amelyet figyelemfelkeltésre vagy bocsánatkérésre használnak",
        category: Category.GREETINGS
      },
      {
        id: 26,
        word: "prepáčte",
        language: Language.sk,
        description:
          "zdvorilá fráza používaná na upozornenie alebo ospravedlnenie sa",
        category: Category.GREETINGS
      },
      {
        id: 26,
        word: "omluvte mě",
        language: Language.cz,
        description: "zdvořilá fráze používaná k upozornění nebo omluvě",
        category: Category.GREETINGS
      },
      {
        id: 26,
        word: "fyrirgefðu",
        language: Language.is,
        description:
          "kurteist orðasamband notað til að fá athygli einhvers eða biðjast afsökunar",
        category: Category.GREETINGS
      },
      {
        id: 27,
        word: "today",
        language: Language.eng,
        description: "the current day or the present time",
        category: Category.CALENDAR
      },
      {
        id: 27,
        word: "ma",
        language: Language.hu,
        description: "a mai nap vagy a jelenlegi idő",
        category: Category.CALENDAR
      },
      {
        id: 27,
        word: "dnes",
        language: Language.sk,
        description: "súčasný deň alebo súčasný čas",
        category: Category.CALENDAR
      },
      {
        id: 27,
        word: "dnes",
        language: Language.cz,
        description: "současný den nebo přítomný čas",
        category: Category.CALENDAR
      },
      {
        id: 27,
        word: "í dag",
        language: Language.is,
        description: "núverandi dagur eða núverandi tími",
        category: Category.CALENDAR
      },
      {
        id: 28,
        word: "tomorrow",
        language: Language.eng,
        description: "the day following the current day",
        category: Category.CALENDAR
      },
      {
        id: 28,
        word: "holnap",
        language: Language.hu,
        description: "a jelenlegi napot követő nap",
        category: Category.CALENDAR
      },
      {
        id: 28,
        word: "zajtra",
        language: Language.sk,
        description: "deň nasledujúci po súčasnom dni",
        category: Category.CALENDAR
      },
      {
        id: 28,
        word: "zítra",
        language: Language.cz,
        description: "den následující po aktuálním dni",
        category: Category.CALENDAR
      },
      {
        id: 28,
        word: "á morgun",
        language: Language.is,
        description: "dagurinn sem fylgir eftir núverandi degi",
        category: Category.CALENDAR
      },
      {
        id: 29,
        word: "yesterday",
        language: Language.eng,
        description: "the day preceding the current day",
        category: Category.CALENDAR
      },
      {
        id: 29,
        word: "tegnap",
        language: Language.hu,
        description: "a jelenlegi napot megelőző nap",
        category: Category.CALENDAR
      },
      {
        id: 29,
        word: "včera",
        language: Language.sk,
        description: "deň predchádzajúci súčasnému dňu",
        category: Category.CALENDAR
      },
      {
        id: 29,
        word: "včera",
        language: Language.cz,
        description: "den předcházející aktuálnímu dni",
        category: Category.CALENDAR
      },
      {
        id: 29,
        word: "í gær",
        language: Language.is,
        description: "dagurinn sem er á undan núverandi degi",
        category: Category.CALENDAR
      },
      {
        id: 30,
        word: "morning",
        language: Language.eng,
        description: "the early part of the day, from sunrise to noon",
        category: Category.CALENDAR,
          image: Blob.find(element => element.id === 30)
      },
      {
        id: 30,
        word: "reggel",
        language: Language.hu,
        description: "a nap korai része, a napkelte és dél között",
        category: Category.CALENDAR,
          image: Blob.find(element => element.id === 30)
      },
      {
        id: 30,
        word: "ráno",
        language: Language.sk,
        description: "čas skorého rána, od východu slnka do poludnia",
        category: Category.CALENDAR,
          image: Blob.find(element => element.id === 30)
      },
      {
        id: 30,
        word: "ráno",
        language: Language.cz,
        description: "část dne od východu slunce po poledne",
        category: Category.CALENDAR,
          image: Blob.find(element => element.id === 30)
      },
      {
        id: 30,
        word: "morgunn",
        language: Language.is,
        description: "byrjun dags, frá sólarupprás til hádegis",
        category: Category.CALENDAR,
          image: Blob.find(element => element.id === 30)
      },
      {
        id: 31,
        word: "evening",
        language: Language.eng,
        description: "the later part of the day, from late afternoon to night",
        category: Category.CALENDAR,
          image: Blob.find(element => element.id === 31)
      },
      {
        id: 31,
        word: "este",
        language: Language.hu,
        description: "a nap későbbi része, a késő délutántól az éjszakáig",
        category: Category.CALENDAR,
          image: Blob.find(element => element.id === 31)
      },
      {
        id: 31,
        word: "večer",
        language: Language.sk,
        description: "čas neskorého popoludnia až do noci",
        category: Category.CALENDAR,
          image: Blob.find(element => element.id === 31)
      },
      {
        id: 31,
        word: "večer",
        language: Language.cz,
        description: "část dne od pozdního odpoledne do noci",
        category: Category.CALENDAR,
          image: Blob.find(element => element.id === 31)
      },
      {
        id: 31,
        word: "kvöld",
        language: Language.is,
        description: "seinni hluti dags, frá seint síðdegis til næturs",
        category: Category.CALENDAR,
          image: Blob.find(element => element.id === 31)
      },
      {
        id: 32,
        word: "night",
        language: Language.eng,
        description: "the period of darkness between sunset and sunrise",
        category: Category.CALENDAR,
          image: Blob.find(element => element.id === 32)
      },
      {
        id: 32,
        word: "éjszaka",
        language: Language.hu,
        description: "a naplemente és napfelkelte közötti sötét időszak",
        category: Category.CALENDAR,
          image: Blob.find(element => element.id === 32)
      },
      {
        id: 32,
        word: "noc",
        language: Language.sk,
        description: "obdobie tmy medzi západom slnka a východom slnka",
        category: Category.CALENDAR,
          image: Blob.find(element => element.id === 32)
      },
      {
        id: 32,
        word: "noc",
        language: Language.cz,
        description: "období tmy mezi západem slunce a východem slunce",
        category: Category.CALENDAR,
          image: Blob.find(element => element.id === 32)
      },
      {
        id: 32,
        word: "nótt",
        language: Language.is,
        description: "tíminn milli sólarlags og sólarupprásar",
        category: Category.CALENDAR,
          image: Blob.find(element => element.id === 32)
      },
      {
        id: 33,
        word: "week",
        language: Language.eng,
        description: "a period of seven days",
        category: Category.CALENDAR
      },
      {
        id: 33,
        word: "hét",
        language: Language.hu,
        description: "egy hét időtartama",
        category: Category.CALENDAR
      },
      {
        id: 33,
        word: "týždeň",
        language: Language.sk,
        description: "obdobie siedmych dní",
        category: Category.CALENDAR
      },
      {
        id: 33,
        word: "týden",
        language: Language.cz,
        description: "období sedmi dnů",
        category: Category.CALENDAR
      },
      {
        id: 33,
        word: "vika",
        language: Language.is,
        description: "tímabil sjö daga",
        category: Category.CALENDAR
      },
      {
        id: 34,
        word: "month",
        language: Language.eng,
        description:
          "a unit of time corresponding to approximately 30 or 31 days",
        category: Category.CALENDAR
      },
      {
        id: 34,
        word: "hónap",
        language: Language.hu,
        description: "időegység, ami körülbelül 30 vagy 31 napnak felel meg",
        category: Category.CALENDAR
      },
      {
        id: 34,
        word: "mesiac",
        language: Language.sk,
        description: "časová jednotka zodpovedajúca približne 30 alebo 31 dňom",
        category: Category.CALENDAR
      },
      {
        id: 34,
        word: "měsíc",
        language: Language.cz,
        description: "časová jednotka odpovídající přibližně 30 nebo 31 dnům",
        category: Category.CALENDAR
      },
      {
        id: 34,
        word: "mánuður",
        language: Language.is,
        description: "tím sem samsvarar 30 eða 31 dögum",
        category: Category.CALENDAR
      },
      {
        id: 35,
        word: "year",
        language: Language.eng,
        description:
          "a unit of time corresponding to approximately 365 or 366 days",
        category: Category.CALENDAR
      },
      {
        id: 35,
        word: "év",
        language: Language.hu,
        description: "időegység, ami körülbelül 365 vagy 366 napnak felel meg",
        category: Category.CALENDAR
      },
      {
        id: 35,
        word: "rok",
        language: Language.sk,
        description:
          "časová jednotka zodpovedajúca približne 365 alebo 366 dňom",
        category: Category.CALENDAR
      },
      {
        id: 35,
        word: "rok",
        language: Language.cz,
        description: "časová jednotka odpovídající přibližně 365 nebo 366 dnům",
        category: Category.CALENDAR
      },
      {
        id: 35,
        word: "ár",
        language: Language.is,
        description: "tímabil sem samsvarar 365 eða 366 dögum",
        category: Category.CALENDAR
      },
      {
        id: 36,
        word: "day",
        language: Language.eng,
        description: "a period of 24 hours",
        category: Category.CALENDAR
      },
      {
        id: 36,
        word: "nap",
        language: Language.hu,
        description: "24 órás időszak",
        category: Category.CALENDAR
      },
      {
        id: 36,
        word: "deň",
        language: Language.sk,
        description: "obdobie trvajúce 24 hodín",
        category: Category.CALENDAR
      },
      {
        id: 36,
        word: "den",
        language: Language.cz,
        description: "období trvající 24 hodin",
        category: Category.CALENDAR
      },
      {
        id: 36,
        word: "dagur",
        language: Language.is,
        description: "tímabil 24 klukkustunda",
        category: Category.CALENDAR
      },
      {
        id: 37,
        word: "hour",
        language: Language.eng,
        description: "a unit of time equal to 60 minutes",
        category: Category.CALENDAR
      },
      {
        id: 37,
        word: "óra",
        language: Language.hu,
        description: "az időmérték, amely 60 percet jelent",
        category: Category.CALENDAR
      },
      {
        id: 37,
        word: "hodina",
        language: Language.sk,
        description: "časová jednotka rovná 60 minútom",
        category: Category.CALENDAR
      },
      {
        id: 37,
        word: "hodina",
        language: Language.cz,
        description: "jednotka času rovná 60 minutám",
        category: Category.CALENDAR
      },
      {
        id: 37,
        word: "klukkustund",
        language: Language.is,
        description: "tími sem jafngildir 60 mínútum",
        category: Category.CALENDAR
      },
      {
        id: 38,
        word: "minute",
        language: Language.eng,
        description: "a unit of time equal to 60 seconds",
        category: Category.CALENDAR
      },
      {
        id: 38,
        word: "perc",
        language: Language.hu,
        description: "az időmérték, amely 60 másodpercet jelent",
        category: Category.CALENDAR
      },
      {
        id: 38,
        word: "minúta",
        language: Language.sk,
        description: "časová jednotka rovná 60 sekundám",
        category: Category.CALENDAR
      },
      {
        id: 38,
        word: "minuta",
        language: Language.cz,
        description: "jednotka času rovná 60 sekundám",
        category: Category.CALENDAR
      },
      {
        id: 38,
        word: "mínúta",
        language: Language.is,
        description: "tími sem jafngildir 60 sekúndum",
        category: Category.CALENDAR
      },
      {
        id: 39,
        word: "second",
        language: Language.eng,
        description: "a unit of time",
        category: Category.CALENDAR
      },
      {
        id: 39,
        word: "másodperc",
        language: Language.hu,
        description: "időmérték",
        category: Category.CALENDAR
      },
      {
        id: 39,
        word: "sekunda",
        language: Language.sk,
        description: "časová jednotka",
        category: Category.CALENDAR
      },
      {
        id: 39,
        word: "sekunda",
        language: Language.cz,
        description: "jednotka času",
        category: Category.CALENDAR
      },
      {
        id: 39,
        word: "sekúnda",
        language: Language.is,
        description: "tímaeining",
        category: Category.CALENDAR
      },
      {
        id: 40,
        word: "money",
        language: Language.eng,
        description: "a medium of exchange or a financial resource",
        category: Category.SHOPPING,
          image: Blob.find(element => element.id === 40)
      },
      {
        id: 40,
        word: "pénz",
        language: Language.hu,
        description:
          "az eladásra szolgáló közvetítőeszköz vagy pénzügyi erőforrás",
        category: Category.SHOPPING,
          image: Blob.find(element => element.id === 40)
      },
      {
        id: 40,
        word: "peniaze",
        language: Language.sk,
        description: "prostriedok výmeny alebo finančný zdroj",
        category: Category.SHOPPING,
          image: Blob.find(element => element.id === 40)
      },
      {
        id: 40,
        word: "peníze",
        language: Language.cz,
        description: "prostředek směny nebo finanční zdroj",
        category: Category.SHOPPING,
          image: Blob.find(element => element.id === 40)
      },
      {
        id: 40,
        word: "peningar",
        language: Language.is,
        description: "gjaldeyrisskipti eða fjárhagur",
        category: Category.SHOPPING,
          image: Blob.find(element => element.id === 40)
      },
      {
        id: 41,
        word: "book",
        language: Language.eng,
        description: "a written or printed work consisting of pages",
        category: Category.HOBBY,
          image: Blob.find(element => element.id === 41)
      },
      {
        id: 41,
        word: "könyv",
        language: Language.hu,
        description: "nyomtatott lapokból álló dokumentum",
        category: Category.HOBBY,
          image: Blob.find(element => element.id === 41)
      },
      {
        id: 41,
        word: "kniha",
        language: Language.sk,
        description: "písaná alebo tlačená práca pozostávajúca z strán",
        category: Category.HOBBY,
          image: Blob.find(element => element.id === 41)
      },
      {
        id: 41,
        word: "kniha",
        language: Language.cz,
        description: "psaný nebo tištěný text skládající se z stránek",
        category: Category.HOBBY,
          image: Blob.find(element => element.id === 41)
      },
      {
        id: 41,
        word: "bók",
        language: Language.is,
        description: "ritað eða prentað verk sem samanstendur af síðum",
        category: Category.HOBBY,
          image: Blob.find(element => element.id === 41)
      },
      {
        id: 42,
        word: "school",
        language: Language.eng,
        description: "an institution for education",
        category: Category.LIVING,
          image: Blob.find(element => element.id === 42)
      },
      {
        id: 42,
        word: "iskola",
        language: Language.hu,
        description: "oktatási intézmény",
        category: Category.LIVING,
          image: Blob.find(element => element.id === 42)
      },
      {
        id: 42,
        word: "škola",
        language: Language.sk,
        description: "inštitúcia pre vzdelávanie",
        category: Category.LIVING,
          image: Blob.find(element => element.id === 42)
      },
      {
        id: 42,
        word: "škola",
        language: Language.cz,
        description: "instituce pro vzdělávání",
        category: Category.LIVING,
          image: Blob.find(element => element.id === 42)
      },
      {
        id: 42,
        word: "skóli",
        language: Language.is,
        description: "menntastofnun",
        category: Category.LIVING,
          image: Blob.find(element => element.id === 42)
      },
      {
        id: 43,
        word: "car",
        language: Language.eng,
        description: "a road vehicle with four wheels",
        category: Category.HOBBY,
          image: Blob.find(element => element.id === 43)
      },
      {
        id: 43,
        word: "autó",
        language: Language.hu,
        description: "négy keréken közlekedő jármű",
        category: Category.HOBBY,
          image: Blob.find(element => element.id === 43)
      },
      {
        id: 43,
        word: "auto",
        language: Language.sk,
        description: "cestné vozidlo so štyrmi kolesami",
        category: Category.HOBBY,
          image: Blob.find(element => element.id === 43)
      },
      {
        id: 43,
        word: "auto",
        language: Language.cz,
        description: "silniční vozidlo se čtyřmi koly",
        category: Category.HOBBY,
          image: Blob.find(element => element.id === 43)
      },
      {
        id: 43,
        word: "bíll",
        language: Language.is,
        description: "ökutæki með fjórum hjólum",
        category: Category.HOBBY,
          image: Blob.find(element => element.id === 43)
      },
      {
        id: 44,
        word: "house",
        language: Language.eng,
        description: "a building used for dwelling or living in",
        category: Category.LIVING,
          image: Blob.find(element => element.id === 44)
      },
      {
        id: 44,
        word: "ház",
        language: Language.hu,
        description: "lakó- vagy élőhelyként használt épület",
        category: Category.LIVING,
          image: Blob.find(element => element.id === 44)
      },
      {
        id: 44,
        word: "dom",
        language: Language.sk,
        description: "budova používaná na bývanie",
        category: Category.LIVING,
          image: Blob.find(element => element.id === 44)
      },
      {
        id: 44,
        word: "dům",
        language: Language.cz,
        description: "budova používaná k obývání",
        category: Category.LIVING,
          image: Blob.find(element => element.id === 44)
      },
      {
        id: 44,
        word: "hús",
        language: Language.is,
        description: "bygging notað fyrir búsetu eða bú",
        category: Category.LIVING,
          image: Blob.find(element => element.id === 44)
      },
      {
        id: 45,
        word: "dog",
        language: Language.eng,
        description: "a domesticated carnivorous mammal",
        category: Category.ANIMALS,
          image: Blob.find(element => element.id === 45)
      },
      {
        id: 45,
        word: "kutya",
        language: Language.hu,
        description: "házi ragadozó emlős",
        category: Category.ANIMALS,
          image: Blob.find(element => element.id === 45)
      },
      {
        id: 45,
        word: "pes",
        language: Language.sk,
        description: "domestikovaný masožravý cicavec",
        category: Category.ANIMALS,
          image: Blob.find(element => element.id === 45)
      },
      {
        id: 45,
        word: "pes",
        language: Language.cz,
        description: "domestikovaný masožravý savec",
        category: Category.ANIMALS,
          image: Blob.find(element => element.id === 45)
      },
      {
        id: 45,
        word: "hundur",
        language: Language.is,
        description: "heimilsdýr sem étur kjöt",
        category: Category.ANIMALS,
          image: Blob.find(element => element.id === 45)
      },
      {
        id: 46,
        word: "cat",
        language: Language.eng,
        description: "a small domesticated carnivorous mammal",
        category: Category.ANIMALS,
          image: Blob.find(element => element.id === 46)
      },
      {
        id: 46,
        word: "macska",
        language: Language.hu,
        description: "kis házi ragadozó emlős",
        category: Category.ANIMALS,
          image: Blob.find(element => element.id === 46)
      },
      {
        id: 46,
        word: "mačka",
        language: Language.sk,
        description: "malý domáci masožravý cicavec",
        category: Category.ANIMALS,
          image: Blob.find(element => element.id === 46)
      },
      {
        id: 46,
        word: "kočka",
        language: Language.cz,
        description: "malý domácí masožravý savec",
        category: Category.ANIMALS,
          image: Blob.find(element => element.id === 46)
      },
      {
        id: 46,
        word: "köttur",
        language: Language.is,
        description: "lítið heimildisdýr sem étur kjöt",
        category: Category.ANIMALS,
          image: Blob.find(element => element.id === 46)
      },
      {
        id: 47,
        word: "tree",
        language: Language.eng,
        description: "a woody perennial plant",
        category: Category.ANIMALS,
          image: Blob.find(element => element.id === 47)
      },
      {
        id: 47,
        word: "fa",
        language: Language.hu,
        description: "fás évelő növény",
        category: Category.ANIMALS,
          image: Blob.find(element => element.id === 47)
      },
      {
        id: 47,
        word: "strom",
        language: Language.sk,
        description: "drevená trvalka",
        category: Category.ANIMALS,
          image: Blob.find(element => element.id === 47)
      },
      {
        id: 47,
        word: "strom",
        language: Language.cz,
        description: "dřevitá trvalka",
        category: Category.ANIMALS,
          image: Blob.find(element => element.id === 47)
      },
      {
        id: 47,
        word: "tré",
        language: Language.is,
        description: "viðarkennd fjölær planta",
        category: Category.ANIMALS,
          image: Blob.find(element => element.id === 47)
      },
      {
        id: 48,
        word: "flower",
        language: Language.eng,
        description: "the reproductive structure of a flowering plant",
        category: Category.ANIMALS,
          image: Blob.find(element => element.id === 48)
      },
      {
        id: 48,
        word: "virág",
        language: Language.hu,
        description: "lágy szárú növényfaj",
        category: Category.ANIMALS,
          image: Blob.find(element => element.id === 48)
      },
      {
        id: 48,
        word: "kvetina",
        language: Language.sk,
        description: "reprodukčná štruktúra kvetinových rastlín",
        category: Category.ANIMALS,
          image: Blob.find(element => element.id === 48)
      },
      {
        id: 48,
        word: "květina",
        language: Language.cz,
        description: "rozmnožovací orgán kvetoucích rostlin",
        category: Category.ANIMALS,
          image: Blob.find(element => element.id === 48)
      },
      {
        id: 48,
        word: "blóm",
        language: Language.is,
        description: "æxlunargerð blómplantna",
        category: Category.ANIMALS,
          image: Blob.find(element => element.id === 48)
      },
      {
        id: 49,
        word: "river",
        language: Language.eng,
        description: "a large natural stream of water",
        category: Category.LIVING,
          image: Blob.find(element => element.id === 49)
      },
      {
        id: 49,
        word: "folyó",
        language: Language.hu,
        description: "nagy természetes vízfolyás",
        category: Category.LIVING,
          image: Blob.find(element => element.id === 49)
      },
      {
        id: 49,
        word: "rieka",
        language: Language.sk,
        description: "veľký prírodný tok vody",
        category: Category.LIVING,
          image: Blob.find(element => element.id === 49)
      },
      {
        id: 49,
        word: "řeka",
        language: Language.cz,
        description: "velký přírodní tok vody",
        category: Category.LIVING,
          image: Blob.find(element => element.id === 49)
      },
      {
        id: 49,
        word: "á",
        language: Language.is,
        description: "stór náttúrulegur straumur af vatni",
        category: Category.LIVING,
          image: Blob.find(element => element.id === 49)
      },
      {
        id: 50,
        word: "mountain",
        language: Language.eng,
        description: "a large landform that rises above its surroundings",
        category: Category.LIVING,
          image: Blob.find(element => element.id === 50)
      },
      {
        id: 50,
        word: "hegy",
        language: Language.hu,
        description: "a környezetétől magasabbra emelkedő nagy földalakzat",
        category: Category.LIVING,
          image: Blob.find(element => element.id === 50)
      },
      {
        id: 50,
        word: "hora",
        language: Language.sk,
        description: "veľký pevninský útvar, ktorý sa vypína nad okolím",
        category: Category.LIVING,
          image: Blob.find(element => element.id === 50)
      },
      {
        id: 50,
        word: "hora",
        language: Language.cz,
        description: "velký pevninský útvar, který se vypíná nad okolím",
        category: Category.LIVING,
          image: Blob.find(element => element.id === 50)
      },
      {
        id: 50,
        word: "fjall",
        language: Language.is,
        description: "stórt landslag sem rís yfir umhverfi sitt",
        category: Category.LIVING,
          image: Blob.find(element => element.id === 50)
      },
      {
        id: 51,
        word: "sun",
        language: Language.eng,
        description: "the star at the center of the solar system",
        category: Category.LIVING
      },
      {
        id: 51,
        word: "nap",
        language: Language.hu,
        description: "a Nap a Naprendszer központi csillaga",
        category: Category.LIVING
      },
      {
        id: 51,
        word: "slnko",
        language: Language.sk,
        description: "hviezda v strede slnečnej sústavy",
        category: Category.LIVING
      },
      {
        id: 51,
        word: "slunce",
        language: Language.cz,
        description: "hvězda uprostřed sluneční soustavy",
        category: Category.LIVING
      },
      {
        id: 51,
        word: "sól",
        language: Language.is,
        description: "stjarnan í miðjunni á sólkerfinu",
        category: Category.LIVING
      },
      {
        id: 52,
        word: "moon",
        language: Language.eng,
        description: "the natural satellite of the Earth",
        category: Category.LIVING
      },
      {
        id: 52,
        word: "hold",
        language: Language.hu,
        description: "a Föld természetes holdja",
        category: Category.LIVING
      },
      {
        id: 52,
        word: "mesiac",
        language: Language.sk,
        description: "prírodný satelit Zeme",
        category: Category.LIVING
      },
      {
        id: 52,
        word: "měsíc",
        language: Language.cz,
        description: "přírodní satelit Země",
        category: Category.LIVING
      },
      {
        id: 52,
        word: "tungl",
        language: Language.is,
        description: "náttúrulegi fylgihnöttur jarðarinnar",
        category: Category.LIVING
      },
      {
        id: 53,
        word: "star",
        language: Language.eng,
        description: "a luminous celestial object",
        category: Category.LIVING
      },
      {
        id: 53,
        word: "csillag",
        language: Language.hu,
        description: "egy ragyogó égitest",
        category: Category.LIVING
      },
      {
        id: 53,
        word: "hviezda",
        language: Language.sk,
        description: "žiariaci nebeský objekt",
        category: Category.LIVING
      },
      {
        id: 53,
        word: "hvězda",
        language: Language.cz,
        description: "zářící nebeský objekt",
        category: Category.LIVING
      },
      {
        id: 53,
        word: "stjarna",
        language: Language.is,
        description: "ljómandi himneskur hlutur",
        category: Category.LIVING
      },
      {
        id: 54,
        word: "water",
        language: Language.eng,
        description: "a transparent, odorless, tasteless liquid",
        category: Category.LIVING
      },
      {
        id: 54,
        word: "víz",
        language: Language.hu,
        description: "átlátszó, szagtalan, íztelen folyadék",
        category: Category.LIVING
      },
      {
        id: 54,
        word: "voda",
        language: Language.sk,
        description: "priehľadná, bez zápachu a chuti tekutina",
        category: Category.LIVING
      },
      {
        id: 54,
        word: "voda",
        language: Language.cz,
        description: "průhledná, bez zápachu a chuti kapalina",
        category: Category.LIVING
      },
      {
        id: 54,
        word: "vatn",
        language: Language.is,
        description: "gegnsær, lyktarlaus og bragðlaus vökvi",
        category: Category.LIVING
      },
      {
        id: 55,
        word: "fire",
        language: Language.eng,
        description: "the rapid oxidation of a material",
        category: Category.LIVING
      },
      {
        id: 55,
        word: "tűz",
        language: Language.hu,
        description: "anyag gyors oxidációja",
        category: Category.LIVING
      },
      {
        id: 55,
        word: "oheň",
        language: Language.sk,
        description: "rýchle oxidovanie materiálu",
        category: Category.LIVING
      },
      {
        id: 55,
        word: "oheň",
        language: Language.cz,
        description: "rychlá oxidace materiálu",
        category: Category.LIVING
      },
      {
        id: 55,
        word: "eldur",
        language: Language.is,
        description: "hraður bruni efna",
        category: Category.LIVING
      },
      {
        id: 56,
        word: "earth",
        language: Language.eng,
        description: "the third planet from the Sun",
        category: Category.LIVING
      },
      {
        id: 56,
        word: "föld",
        language: Language.hu,
        description: "a Nap harmadik bolygója",
        category: Category.LIVING
      },
      {
        id: 56,
        word: "zem",
        language: Language.sk,
        description: "tretia planéta od Slnka",
        category: Category.LIVING
      },
      {
        id: 56,
        word: "zem",
        language: Language.cz,
        description: "třetí planeta od Slunce",
        category: Category.LIVING
      },
      {
        id: 56,
        word: "jörð",
        language: Language.is,
        description: "þriðja plánetan frá sólu",
        category: Category.LIVING
      },
      {
        id: 57,
        word: "air",
        language: Language.eng,
        description: "the invisible gaseous substance surrounding the Earth",
        category: Category.LIVING
      },
      {
        id: 57,
        word: "levegő",
        language: Language.hu,
        description: "az Földet körülvevő láthatatlan gáz halmazállapotú anyag",
        category: Category.LIVING
      },
      {
        id: 57,
        word: "vzduch",
        language: Language.sk,
        description: "neviditeľná plynná látka obklopujúca Zem",
        category: Category.LIVING
      },
      {
        id: 57,
        word: "vzduch",
        language: Language.cz,
        description: "neviditelná plynná látka obklopující Zemi",
        category: Category.LIVING
      },
      {
        id: 57,
        word: "loft",
        language: Language.is,
        description: "ósýnilegt loftkennd efni sem umlykur jörðina",
        category: Category.LIVING
      },
      {
        id: 58,
        word: "time",
        language: Language.eng,
        description:
          "a measurable period during which an action, process, or condition exists",
        category: Category.CALENDAR,
          image: Blob.find(element => element.id === 58)

      },
      {
        id: 58,
        word: "idő",
        language: Language.hu,
        description:
          "egy mérhető időszak, amely alatt egy cselekvés, folyamat vagy állapot fennáll",
        category: Category.CALENDAR,
          image: Blob.find(element => element.id === 58)
      },
      {
        id: 58,
        word: "čas",
        language: Language.sk,
        description:
          "merateľné obdobie, počas ktorého existuje činnosť, proces alebo stav",
        category: Category.CALENDAR,
          image: Blob.find(element => element.id === 58)
      },
      {
        id: 58,
        word: "čas",
        language: Language.cz,
        description:
          "měřitelné období, během něhož existuje činnost, proces nebo stav",
        category: Category.CALENDAR,
          image: Blob.find(element => element.id === 58)
      },
      {
        id: 58,
        word: "tími",
        language: Language.is,
        description:
          "mælanlegt tímabil þar sem aðgerð, ferli eða ástand er til staðar",
        category: Category.CALENDAR,
          image: Blob.find(element => element.id === 58)
      },
      {
        id: 59,
        word: "love",
        language: Language.eng,
        description: "an intense feeling of deep affection",
        category: Category.LIVING
      },
      {
        id: 59,
        word: "szeretet",
        language: Language.hu,
        description: "mély szeretet intenzív érzése",
        category: Category.LIVING
      },
      {
        id: 59,
        word: "láska",
        language: Language.sk,
        description: "intenzívny pocit hlbokého citu",
        category: Category.LIVING
      },
      {
        id: 59,
        word: "láska",
        language: Language.cz,
        description: "intenzivní pocit hluboké náklonnosti",
        category: Category.LIVING
      },
      {
        id: 59,
        word: "ást",
        language: Language.is,
        description: "sterk tilfinning um dýpt ástar",
        category: Category.LIVING
      },
      {
        id: 60,
        word: "friend",
        language: Language.eng,
        description: "a person with whom one has a bond of mutual affection",
        category: Category.FRIENDS
      },
      {
        id: 60,
        word: "barát",
        language: Language.hu,
        description: "olyan személy, akivel kölcsönös szeretetszál köti össze",
        category: Category.FRIENDS
      },
      {
        id: 60,
        word: "priateľ",
        language: Language.sk,
        description: "osoba, s ktorou má človek vzájomný citový vzťah",
        category: Category.FRIENDS
      },
      {
        id: 60,
        word: "přítel",
        language: Language.cz,
        description: "osoba, se kterou má člověk vzájemný citový vztah",
        category: Category.FRIENDS
      },
      {
        id: 60,
        word: "vinur",
        language: Language.is,
        description:
          "manneskja sem einhver hefur tengingu við af sameiginlegri ástríðu",
        category: Category.FRIENDS
      },
      {
        id: 61,
        word: "family",
        language: Language.eng,
        description: "a group of individuals living together",
        category: Category.FAMILY,
          image: Blob.find(element => element.id === 61)
      },
      {
        id: 61,
        word: "család",
        language: Language.hu,
        description: "együtt élő egyének csoportja",
        category: Category.FAMILY,
          image: Blob.find(element => element.id === 61)
      },
      {
        id: 61,
        word: "rodina",
        language: Language.sk,
        description: "skupina jednotlivcov žijúcich spolu",
        category: Category.FAMILY,
          image: Blob.find(element => element.id === 61)
      },
      {
        id: 61,
        word: "rodina",
        language: Language.cz,
        description: "skupina jednotlivců žijících spolu",
        category: Category.FAMILY,
          image: Blob.find(element => element.id === 61)
      },
      {
        id: 61,
        word: "fjölskylda",
        language: Language.is,
        description: "hópur einstaklinga sem búa saman",
        category: Category.FAMILY,
          image: Blob.find(element => element.id === 61)
      },
      {
        id: 62,
        word: "love",
        language: Language.eng,
        description: "an intense feeling of affection or deep attachment",
        category: Category.FAMILY,
          image: Blob.find(element => element.id === 62)
      },
      {
        id: 62,
        word: "szeretet",
        language: Language.hu,
        description: "erős érzelmi kötődés vagy mély ragaszkodás",
        category: Category.FAMILY,
          image: Blob.find(element => element.id === 62)
      },
      {
        id: 62,
        word: "láska",
        language: Language.sk,
        description: "intenzívne pocity náklonnosti alebo hlboké puto",
        category: Category.FAMILY,
          image: Blob.find(element => element.id === 62)
      },
      {
        id: 62,
        word: "láska",
        language: Language.cz,
        description: "intenzivní pocit náklonnosti nebo hluboká připoutanost",
        category: Category.FAMILY,
          image: Blob.find(element => element.id === 62)
      },
      {
        id: 62,
        word: "ást",
        language: Language.is,
        description: "sterk tilfinning um dýpt ástar",
        category: Category.FAMILY,
          image: Blob.find(element => element.id === 62)
      },
      {
        id: 63,
        word: "pen",
        language: Language.eng,
        description: "a writing instrument used to apply ink to a surface",
        category: Category.HOBBY,
          image: Blob.find(element => element.id === 63)
      },
      {
        id: 63,
        word: "toll",
        language: Language.hu,
        description:
          "íráshoz használt eszköz, amellyel tintát visznek fel egy felületre",
        category: Category.HOBBY,
          image: Blob.find(element => element.id === 63)
      },
      {
        id: 63,
        word: "pero",
        language: Language.sk,
        description:
          "písací nástroj používaný na nanášanie atramentu na povrch",
        category: Category.HOBBY,
          image: Blob.find(element => element.id === 63)
      },
      {
        id: 63,
        word: "pero",
        language: Language.cz,
        description: "psací nástroj používaný k nanášení inkoustu na povrch",
        category: Category.HOBBY,
          image: Blob.find(element => element.id === 63)
      },
      {
        id: 63,
        word: "penni",
        language: Language.is,
        description: "skriffæri sem notað er til að setja blek á yfirborð",
        category: Category.HOBBY,
          image: Blob.find(element => element.id === 63)
      },
      {
        id: 64,
        word: "pencil",
        language: Language.eng,
        description: "a narrow cylindrical instrument used for writing",
        category: Category.HOBBY
      },
      {
        id: 64,
        word: "ceruza",
        language: Language.hu,
        description: "keskeny henger alakú írószer",
        category: Category.HOBBY
      },
      {
        id: 64,
        word: "ceruzka",
        language: Language.sk,
        description: "úzky valcovitý nástroj na písanie",
        category: Category.HOBBY
      },
      {
        id: 64,
        word: "tužka",
        language: Language.cz,
        description: "úzký válcovitý nástroj na psaní",
        category: Category.HOBBY
      },
      {
        id: 64,
        word: "blýantur",
        language: Language.is,
        description: "þunnt sívalskt skriffæri notað til að skrifa",
        category: Category.HOBBY
      },
      {
        id: 65,
        word: "table",
        language: Language.eng,
        description:
          "a piece of furniture with a flat top and one or more legs",
        category: Category.SHOPPING
      },
      {
        id: 65,
        word: "asztal",
        language: Language.hu,
        description: "lapos tetejű bútordarab, egy vagy több lábbal",
        category: Category.SHOPPING
      },
      {
        id: 65,
        word: "stôl",
        language: Language.sk,
        description:
          "nábytok s rovnou vrchnou časťou a jednou alebo viacerými nohami",
        category: Category.SHOPPING
      },
      {
        id: 65,
        word: "stůl",
        language: Language.cz,
        description: "nábytek s rovnou deskou a jednou nebo více nohami",
        category: Category.SHOPPING
      },
      {
        id: 65,
        word: "borð",
        language: Language.is,
        description: "húsgagn með flötum toppi og einum eða fleiri fótum",
        category: Category.SHOPPING
      },
      {
        id: 66,
        word: "chair",
        language: Language.eng,
        description: "a piece of furniture with a raised surface",
        category: Category.SHOPPING
      },
      {
        id: 66,
        word: "szék",
        language: Language.hu,
        description: "egy bútordarab emelt felülettel",
        category: Category.SHOPPING
      },
      {
        id: 66,
        word: "stolička",
        language: Language.sk,
        description: "nábytok s vystúpeným povrchom",
        category: Category.SHOPPING
      },
      {
        id: 66,
        word: "židle",
        language: Language.cz,
        description: "nábytek s vyvýšeným povrchem",
          category: Category.SHOPPING
      },
      {
        id: 66,
        word: "stóll",
        language: Language.is,
        description: "húsgagn með upphækkuðu yfirborði",
        category: Category.SHOPPING
      },
      {
        id: 67,
        word: "computer",
        language: Language.eng,
        description: "an electronic device for processing data",
        category: Category.HOBBY,
          image: Blob.find(element => element.id === 67)
      },
      {
        id: 67,
        word: "számítógép",
        language: Language.hu,
        description: "elektronikai eszköz adatfeldolgozásra",
        category: Category.HOBBY,
          image: Blob.find(element => element.id === 67)
      },
      {
        id: 67,
        word: "počítač",
        language: Language.sk,
        description: "elektronické zariadenie na spracovanie údajov",
        category: Category.HOBBY,
          image: Blob.find(element => element.id === 67)
      },
      {
        id: 67,
        word: "počítač",
        language: Language.cz,
        description: "elektronické zařízení pro zpracování dat",
        category: Category.HOBBY,
          image: Blob.find(element => element.id === 67)
      },
      {
        id: 67,
        word: "tölva",
        language: Language.is,
        description: "rafmagnstæki til að vinna með gögn",
        category: Category.HOBBY,
          image: Blob.find(element => element.id === 67)
      },
      {
        id: 68,
        word: "phone",
        language: Language.eng,
        description: "a device used for communication",
        category: Category.FRIENDS,
          image: Blob.find(element => element.id === 68)

      },
      {
        id: 68,
        word: "telefon",
        language: Language.hu,
        description: "kommunikációra használt eszköz",
        category: Category.FRIENDS,
          image: Blob.find(element => element.id === 68)
      },
      {
        id: 68,
        word: "telefón",
        language: Language.sk,
        description: "zariadenie používané na komunikáciu",
        category: Category.FRIENDS,
          image: Blob.find(element => element.id === 68)
      },
      {
        id: 68,
        word: "telefon",
        language: Language.cz,
        description: "zařízení používané pro komunikaci",
        category: Category.FRIENDS,
          image: Blob.find(element => element.id === 68)
      },
      {
        id: 68,
        word: "sími",
        language: Language.is,
        description: "tæki sem notað er til samskipta",
        category: Category.FRIENDS,
          image: Blob.find(element => element.id === 68)
      },
      {
        id: 69,
        word: "music",
        language: Language.eng,
        description: "an artistic form of auditory expression",
        category: Category.HOBBY
      },
      {
        id: 69,
        word: "zene",
        language: Language.hu,
        description: "a hallásos kifejezés művészi formája",
        category: Category.HOBBY
      },
      {
        id: 69,
        word: "hudba",
        language: Language.sk,
        description: "umelecká forma zvukovej expresie",
        category: Category.HOBBY

      },
      {
        id: 69,
        word: "hudba",
        language: Language.cz,
        description: "umělecká forma zvukového vyjádření",
        category: Category.HOBBY
      },
      {
        id: 69,
        word: "tónlist",
        language: Language.is,
        description: "listræn tegund hljóðrænna tjáninga",
        category: Category.HOBBY
      },
      {
        id: 70,
        word: "art",
        language: Language.eng,
        description: "the expression or application of human creative skill",
        category: Category.HOBBY
      },
      {
        id: 70,
        word: "művészet",
        language: Language.hu,
        description: "az emberi alkotókészség kifejezése vagy alkalmazása",
        category: Category.HOBBY
      },
      {
        id: 70,
        word: "umenie",
        language: Language.sk,
        description: "vyjadrenie alebo uplatnenie ľudskej tvorivej zručnosti",
        category: Category.HOBBY
      },
      {
        id: 70,
        word: "umění",
        language: Language.cz,
        description: "vyjádření nebo uplatnění lidské tvůrčí dovednosti",
        category: Category.HOBBY
      },
      {
        id: 70,
        word: "list",
        language: Language.is,
        description: "tjáningu eða beiting sköpunarkunnáttu manna",
        category: Category.HOBBY
      },
      {
        id: 71,
        word: "sport",
        language: Language.eng,
        description: "physical activity involving skill and competition",
        category: Category.HOBBY
      },
      {
        id: 71,
        word: "sport",
        language: Language.hu,
        description: "képességet és versenyt igénylő testmozgás",
        category: Category.HOBBY
      },
      {
        id: 71,
        word: "šport",
        language: Language.sk,
        description: "fyzická aktivita zahŕňajúca zručnosť a súťaž",
        category: Category.HOBBY
      },
      {
        id: 71,
        word: "sport",
        language: Language.cz,
        description: "fyzická aktivita vyžadující dovednost a soutěž",
        category: Category.HOBBY
      },
      {
        id: 71,
        word: "íþrótt",
        language: Language.is,
        description: "hreyfing sem felur í sér hæfni og keppni",
        category: Category.HOBBY
      },
      {
        id: 72,
        word: "work",
        language: Language.eng,
        description: "activity involving mental or physical effort",
        category: Category.LIVING
      },
      {
        id: 72,
        word: "munka",
        language: Language.hu,
        description: "szellemi vagy fizikai erőfeszítést igénylő tevékenység",
        category: Category.LIVING
      },
      {
        id: 72,
        word: "práca",
        language: Language.sk,
        description: "činnosť vyžadujúca mentálnu alebo fyzickú námahu",
        category: Category.LIVING
      },
      {
        id: 72,
        word: "práce",
        language: Language.cz,
        description: "činnost vyžadující duševní nebo fyzické úsilí",
        category: Category.LIVING
      },
      {
        id: 72,
        word: "vinna",
        language: Language.is,
        description: "starfsemi sem felur í sér andlega eða líkamlega áreynslu",
        category: Category.LIVING
      },
      {
        id: 73,
        word: "study",
        language: Language.eng,
        description: "the acquisition of knowledge through learning",
        category: Category.LIVING
      },
      {
        id: 73,
        word: "tanulás",
        language: Language.hu,
        description: "ismeretek elsajátítása tanulás által",
        category: Category.LIVING
      },
      {
        id: 73,
        word: "štúdium",
        language: Language.sk,
        description: "osvojovanie vedomostí prostredníctvom učenia sa",
        category: Category.LIVING
      },
      {
        id: 73,
        word: "studium",
        language: Language.cz,
        description: "získávání znalostí prostřednictvím učení",
        category: Category.LIVING
      },
      {
        id: 73,
        word: "nám",
        language: Language.is,
        description: "öflun þekkingar með námi",
        category: Category.LIVING
      },
      {
        id: 74,
        word: "play",
        language: Language.eng,
        description: "engaging in an activity for enjoyment and recreation",
        category: Category.HOBBY
      },
      {
        id: 74,
        word: "játék",
        language: Language.hu,
        description:
          "belefoglalódás egy tevékenységbe a szórakozás és kikapcsolódás céljából",
        category: Category.HOBBY
      },
      {
        id: 74,
        word: "hra",
        language: Language.sk,
        description: "zúčastňovanie sa činnosti pre zábavu a rekreáciu",
        category: Category.HOBBY
      },
      {
        id: 74,
        word: "hra",
        language: Language.cz,
        description: "účast v činnosti pro zábavu a rekreaci",
        category: Category.HOBBY
      },
      {
        id: 74,
        word: "leikur",
        language: Language.is,
        description: "þátttaka í athöfn fyrir skemmtun og afþreyingu",
        category: Category.HOBBY
      },
      {
        id: 75,
        word: "sleep",
        language: Language.eng,
        description: "a natural state of rest for the body and mind",
        category: Category.LIVING
      },
      {
        id: 75,
        word: "alvás",
        language: Language.hu,
        description: "a test és az elme természetes pihenőállapota",
        category: Category.LIVING
      },
      {
        id: 75,
        word: "spánok",
        language: Language.sk,
        description: "prirodzený stav odpočinku pre telo a myseľ",
        category: Category.LIVING
      },
      {
        id: 75,
        word: "spánek",
        language: Language.cz,
        description: "přirozený stav odpočinku pro tělo a mysl",
        category: Category.LIVING
      },
      {
        id: 75,
        word: "svefn",
        language: Language.is,
        description: "náttúrulegt hvíldarstig líkama og hugar",
        category: Category.LIVING
      },
      {
        id: 76,
        word: "eat",
        language: Language.eng,
        description: "to consume food by mouth",
        category: Category.LIVING
      },
      {
        id: 76,
        word: "enni",
        language: Language.hu,
        description: "ételt fogyasztani a szájjal",
        category: Category.LIVING
      },
      {
        id: 76,
        word: "jesť",
        language: Language.sk,
        description: "konzumovať jedlo ústami",
        category: Category.LIVING
      },
      {
        id: 76,
        word: "jíst",
        language: Language.cz,
        description: "konzumovat jídlo ústy",
        category: Category.LIVING
      },
      {
        id: 76,
        word: "borða",
        language: Language.is,
        description: "að neyta fæðu með munni",
        category: Category.LIVING
      },
      {
        id: 77,
        word: "drink",
        language: Language.eng,
        description: "to consume a liquid through the mouth",
        category: Category.LIVING
      },
      {
        id: 77,
        word: "inni",
        language: Language.hu,
        description: "folyadékot fogyasztani a szájjal",
        category: Category.LIVING
      },
      {
        id: 77,
        word: "piť",
        language: Language.sk,
        description: "konzumovať tekutinu ústami",
        category: Category.LIVING
      },
      {
        id: 77,
        word: "pít",
        language: Language.cz,
        description: "konzumovat tekutinu ústy",
        category: Category.LIVING
      },
      {
        id: 77,
        word: "drekka",
        language: Language.is,
        description: "að drekka vökva með munni",
        category: Category.LIVING
      },
      {
        id: 78,
        word: "run",
        language: Language.eng,
        description: "to move swiftly on foot",
        category: Category.HOBBY
      },
      {
        id: 78,
        word: "futni",
        language: Language.hu,
        description: "gyorsan mozogni gyalog",
        category: Category.HOBBY
      },
      {
        id: 78,
        word: "bežať",
        language: Language.sk,
        description: "rýchlo sa pohybovať pešo",
        category: Category.HOBBY
      },
      {
        id: 78,
        word: "běhat",
        language: Language.cz,
        description: "rychle se pohybovat pěšky",
        category: Category.HOBBY
      },
      {
        id: 78,
        word: "hlaupa",
        language: Language.is,
        description: "að hreyfa sig fljótt á fótunum",
        category: Category.HOBBY
      },
      {
        id: 79,
        word: "swim",
        language: Language.eng,
        description: "to move through water using limbs",
        category: Category.HOBBY
      },
      {
        id: 79,
        word: "úszni",
        language: Language.hu,
        description: "mozogni a vízben végtagok segítségével",
        category: Category.HOBBY
      },
      {
        id: 79,
        word: "plávať",
        language: Language.sk,
        description: "pohybovať sa vo vode pomocou končatín",
        category: Category.HOBBY
      },
      {
        id: 79,
        word: "plavat",
        language: Language.cz,
        description: "pohybovat se ve vodě pomocí končetin",
        category: Category.HOBBY
      },
      {
        id: 79,
        word: "synda",
        language: Language.is,
        description: "að hreyfa sig í gegnum vatn með útlimum",
        category: Category.HOBBY
      },
      {
        id: 80,
        word: "jump",
        language: Language.eng,
        description: "to propel oneself upward into the air",
        category: Category.HOBBY
      },
      {
        id: 80,
        word: "ugrani",
        language: Language.hu,
        description: "magasba lökni magát a levegőben",
        category: Category.HOBBY
      },
      {
        id: 80,
        word: "skákať",
        language: Language.sk,
        description: "vystrelit sa samého do vzduchu",
        category: Category.HOBBY
      },
      {
        id: 80,
        word: "skákat",
        language: Language.cz,
        description: "vystřelit sebe nahoru do vzduchu",
        category: Category.HOBBY
      },
      {
        id: 80,
        word: "hoppa",
        language: Language.is,
        description: "að hrifsa sig sjálfan upp í loftið",
        category: Category.HOBBY
      },
      {
        id: 81,
        word: "laugh",
        language: Language.eng,
        description: "to express amusement or joy with sound",
        category: Category.FRIENDS,
          image: Blob.find(element => element.id === 81)

      },
      {
        id: 81,
        word: "nevetni",
        language: Language.hu,
        description: "szórakozottságot vagy örömöt kifejezni hanggal",
        category: Category.FRIENDS,
          image: Blob.find(element => element.id === 81)
      },
      {
        id: 81,
        word: "smiať sa",
        language: Language.sk,
        description: "vyjadrovať zábavu alebo radosť zvukom",
        category: Category.FRIENDS,
          image: Blob.find(element => element.id === 81)
      },
      {
        id: 81,
        word: "smát se",
        language: Language.cz,
        description: "vyjádřit pobavení nebo radost zvukem",
        category: Category.FRIENDS,
          image: Blob.find(element => element.id === 81)
      },
      {
        id: 81,
        word: "hlæja",
        language: Language.is,
        description: "að tjá gleði eða skemmtun með hljóði",
        category: Category.FRIENDS,
          image: Blob.find(element => element.id === 81)
      },
      {
        id: 82,
        word: "cry",
        language: Language.eng,
        description: "to shed tears as an expression of emotion",
        category: Category.FRIENDS,
          image: Blob.find(element => element.id === 82)
      },
      {
        id: 82,
        word: "sírni",
        language: Language.hu,
        description: "könnyeket hullatni érzelem kifejezésére",
        category: Category.FRIENDS,
          image: Blob.find(element => element.id === 82)
      },
      {
        id: 82,
        word: "plakať",
        language: Language.sk,
        description: "prehodiť slzy ako prejav emócií",
        category: Category.FRIENDS,
          image: Blob.find(element => element.id === 82)
      },
      {
        id: 82,
        word: "plakat",
        language: Language.cz,
        description: "prolít slzy jako vyjádření emocí",
        category: Category.FRIENDS,
          image: Blob.find(element => element.id === 82)
      },
      {
        id: 82,
        word: "gráta",
        language: Language.is,
        description: "að fella tár sem tjáningu af tilfinningu",
        category: Category.FRIENDS,
          image: Blob.find(element => element.id === 82)
      },
      {
        id: 83,
        word: "it",
        language: Language.eng,
        description: "the third-person singular pronoun (neuter)",
        category: Category.GREETINGS
      },
      {
        id: 83,
        word: "az",
        language: Language.hu,
        description: "a harmadik személy egyes számú névmás (semleges nem)",
        category: Category.GREETINGS
      },
      {
        id: 83,
        word: "to",
        language: Language.sk,
        description: "zámeno tretie osoby jednotného čísla (stredný rod)",
        category: Category.GREETINGS
      },
      {
        id: 83,
        word: "to",
        language: Language.cz,
        description: "zájmeno třetí osoby jednotného čísla (střední rod)",
        category: Category.GREETINGS
      },
      {
        id: 83,
        word: "það",
        language: Language.is,
        description: "persónulegt fornafn í eintölu (hvættkyn)",
        category: Category.GREETINGS
      },
        {
            id: 84,
            word: "rain",
            language: Language.eng,
                description: "a form of precipitation",
            category: Category.GREETINGS,
            image: Blob.find(element => element.id === 84)

        },
        {
            id: 84,
            word: "eső",
            language: Language.hu,
            description: "a csapadékok egy formája",
            category: Category.GREETINGS,
            image: Blob.find(element => element.id === 84)
        },
        {
            id: 84,
            word: "",
            language: Language.sk,
            description: "",
            category: Category.GREETINGS,
            image: Blob.find(element => element.id === 84)
        },
        {
            id: 84,
            word: "",
            language: Language.cz,
            description: "",
            category: Category.GREETINGS,
            image: Blob.find(element => element.id === 84)
        },
        {
            id: 84,
            word: "",
            language: Language.is,
            description: "",
            category: Category.GREETINGS,
            image: Blob.find(element => element.id === 84)
        },
        {
            id: 85,
            word: "horse",
            language: Language.eng,
            description: "odd-toed ungulate",
            category: Category.ANIMALS

        },
        {
            id: 85,
            word: "ló",
            language: Language.hu,
            description: "páratlanujjú patás",
            category: Category.ANIMALS
        },
        {
            id: 85,
            word: "",
            language: Language.sk,
            description: "",
            category: Category.ANIMALS
        },
        {
            id: 85,
            word: "",
            language: Language.cz,
            description: "",
            category: Category.ANIMALS
        },
        {
            id: 85,
            word: "",
            language: Language.is,
            description: "",
            category: Category.ANIMALS
        },
        {
            id: 86,
            word: "bee",
            language: Language.eng,
            description: "flying, yellow-black insect",
            category: Category.ANIMALS

        },
        {
            id: 86,
            word: "méh",
            language: Language.hu,
            description: "repülő, sárga-fekete rovar",
            category: Category.ANIMALS
        },
        {
            id: 86,
            word: "",
            language: Language.sk,
            description: "",
            category: Category.ANIMALS
        },
        {
            id: 86,
            word: "",
            language: Language.cz,
            description: "",
            category: Category.ANIMALS
        },
        {
            id: 86,
            word: "",
            language: Language.is,
            description: "",
            category: Category.ANIMALS
        },
        {
            id: 87,
            word: "deer",
            language: Language.eng,
            description: "herbivore, ungulate, target of hunters",
            category: Category.ANIMALS

        },
        {
            id: 87,
            word: "szarvas",
            language: Language.hu,
            description: "növényevő, patás állat, vadászok célpontja",
            category: Category.ANIMALS
        },
        {
            id: 87,
            word: "",
            language: Language.sk,
            description: "",
            category: Category.ANIMALS
        },
        {
            id: 87,
            word: "",
            language: Language.cz,
            description: "",
            category: Category.ANIMALS
        },
        {
            id: 87,
            word: "",
            language: Language.is,
            description: "",
            category: Category.ANIMALS
        },
        {
            id: 88,
            word: "wolf",
            language: Language.eng,
            description: "canine predator",
            category: Category.ANIMALS

        },
        {
            id: 88,
            word: "fakras",
            language: Language.hu,
            description: "kutyaféle ragadozó",
            category: Category.ANIMALS
        },
        {
            id: 88,
            word: "",
            language: Language.sk,
            description: "",
            category: Category.ANIMALS
        },
        {
            id: 88,
            word: "",
            language: Language.cz,
            description: "",
            category: Category.ANIMALS
        },
        {
            id: 88,
            word: "",
            language: Language.is,
            description: "",
            category: Category.ANIMALS
        },
        {
            id: 89,
            word: "beer",
            language: Language.eng,
            description: "Large, stocky furred predatory mammal",
            category: Category.ANIMALS

        },
        {
            id: 89,
            word: "medve",
            language: Language.hu,
            description: "Nagy, zömök testű bundás ragadozó emlős",
            category: Category.ANIMALS
        },
        {
            id: 89,
            word: "",
            language: Language.sk,
            description: "",
            category: Category.ANIMALS
        },
        {
            id: 89,
            word: "",
            language: Language.cz,
            description: "",
            category: Category.ANIMALS
        },
        {
            id: 89,
            word: "",
            language: Language.is,
            description: "",
            category: Category.ANIMALS
        },
        {
            id: 90,
            word: "goldfish",
            language: Language.eng,
            description: "popular aquarium fish species",
            category: Category.ANIMALS

        },
        {
            id: 90,
            word: "aranyhal",
            language: Language.hu,
            description: "népszerű akváriumi halfajta",
            category: Category.ANIMALS
        },
        {
            id: 90,
            word: "",
            language: Language.sk,
            description: "",
            category: Category.ANIMALS
        },
        {
            id: 90,
            word: "",
            language: Language.cz,
            description: "",
            category: Category.ANIMALS
        },
        {
            id: 90,
            word: "",
            language: Language.is,
            description: "",
            category: Category.ANIMALS
        },
        {
            id: 91,
            word: "grandmother",
            language: Language.eng,
            description: "Mother of one parent",
            category: Category.FAMILY,
            image: Blob.find(element => element.id === 91)

        },
        {
            id: 91,
            word: "nagymama",
            language: Language.hu,
            description: "Az egyik szülő édesanyja",
            category: Category.FAMILY,
            image: Blob.find(element => element.id === 91)
        },
        {
            id: 91,
            word: "",
            language: Language.sk,
            description: "",
            category: Category.FAMILY,
            image: Blob.find(element => element.id === 91)
        },
        {
            id: 91,
            word: "",
            language: Language.cz,
            description: "",
            category: Category.FAMILY,
            image: Blob.find(element => element.id === 91)
        },
        {
            id: 91,
            word: "",
            language: Language.is,
            description: "",
            category: Category.FAMILY,
            image: Blob.find(element => element.id === 91)
        },
        {
            id: 92,
            word: "man",
            language: Language.eng,
            description: "male adult boy",
            category: Category.FAMILY,
            image: Blob.find(element => element.id === 92)

        },
        {
            id: 92,
            word: "férfi",
            language: Language.hu,
            description: "hímnemű felnőtt ember ",
            category: Category.FAMILY,
            image: Blob.find(element => element.id === 92)
        },
        {
            id: 92,
            word: "",
            language: Language.sk,
            description: "",
            category: Category.FAMILY,
            image: Blob.find(element => element.id === 92)
        },
        {
            id: 92,
            word: "",
            language: Language.cz,
            description: "",
            category: Category.FAMILY,
            image: Blob.find(element => element.id === 92)
        },
        {
            id: 92,
            word: "",
            language: Language.is,
            description: "",
            category: Category.FAMILY,
            image: Blob.find(element => element.id === 92)
        },
        {
            id: 93,
            word: "uncle",
            language: Language.eng,
            description: "parent's brother",
            category: Category.FAMILY
        },
        {
            id: 93,
            word: "nagybácsi",
            language: Language.hu,
            description: "Szülő fiútestvére.",
            category: Category.FAMILY,
        },
        {
            id: 93,
            word: "",
            language: Language.sk,
            description: "",
            category: Category.FAMILY,
        },
        {
            id: 93,
            word: "",
            language: Language.cz,
            description: "",
            category: Category.FAMILY,
        },
        {
            id: 93,
            word: "",
            language: Language.is,
            description: "",
            category: Category.FAMILY,
        },
        {
            id: 94,
            word: "twins",
            language: Language.eng,
            description: "at the same time, a brother born of a mother.",
            category: Category.FAMILY
        },
        {
            id: 94,
            word: "ikertestvérek",
            language: Language.hu,
            description: "egyszerre, egy anyától született testvér",
            category: Category.FAMILY,
        },
        {
            id: 94,
            word: "",
            language: Language.sk,
            description: "",
            category: Category.FAMILY,
        },
        {
            id: 94,
            word: "",
            language: Language.cz,
            description: "",
            category: Category.FAMILY,
        },
        {
            id: 94,
            word: "",
            language: Language.is,
            description: "",
            category: Category.FAMILY,
        },
        {
            id: 95,
            word: "cinema",
            language: Language.eng,
            description: "a venue for public screenings of films in front of large audiences",
            category: Category.FRIENDS,
            image: Blob.find(element => element.id === 95)
        },
        {
            id: 95,
            word: "mozi",
            language: Language.hu,
            description: "filmek nyilvános, nagyobb közönség előtti vetítésére alkalmas helyszín",
            category: Category.FRIENDS,
            image: Blob.find(element => element.id === 95)
        },
        {
            id: 95,
            word: "",
            language: Language.sk,
            description: "",
            category: Category.FRIENDS,
            image: Blob.find(element => element.id === 95)
        },
        {
            id: 95,
            word: "",
            language: Language.cz,
            description: "",
            category: Category.FRIENDS,
            image: Blob.find(element => element.id === 95)
        },
        {
            id: 95,
            word: "",
            language: Language.is,
            description: "",
            category: Category.FRIENDS,
            image: Blob.find(element => element.id === 95)
        },
        {
            id: 96,
            word: "concert",
            language: Language.eng,
            description: "musical performance",
            category: Category.FRIENDS
        },
        {
            id: 96,
            word: "koncert",
            language: Language.hu,
            description: "zenei előadás",
            category: Category.FRIENDS,
        },
        {
            id: 96,
            word: "",
            language: Language.sk,
            description: "",
            category: Category.FRIENDS,
        },
        {
            id: 96,
            word: "",
            language: Language.cz,
            description: "",
            category: Category.FRIENDS,
        },
        {
            id: 96,
            word: "",
            language: Language.is,
            description: "",
            category: Category.FRIENDS,
        },
        {
            id: 97,
            word: "museum",
            language: Language.eng,
            description: "The institution consisting of scientifically organised collections of cultural goods",
            category: Category.FRIENDS
        },
        {
            id: 97,
            word: "múzeum",
            language: Language.hu,
            description: "A kulturális javak tudományosan rendszerezett gyűjteményeiből álló intézmény",
            category: Category.FRIENDS,
        },
        {
            id: 97,
            word: "",
            language: Language.sk,
            description: "",
            category: Category.FRIENDS,
        },
        {
            id: 97,
            word: "",
            language: Language.cz,
            description: "",
            category: Category.FRIENDS,
        },
        {
            id: 97,
            word: "",
            language: Language.is,
            description: "",
            category: Category.FRIENDS,
        },
        {
            id: 98,
            word: "class-mate",
            language: Language.eng,
            description: "Students who study in the same class",
            category: Category.FRIENDS
        },
        {
            id: 98,
            word: "osztálytárs",
            language: Language.hu,
            description: "Azon diákok, akik ugyanabban az osztályban tanulnak",
            category: Category.FRIENDS,
        },
        {
            id: 98,
            word: "",
            language: Language.sk,
            description: "",
            category: Category.FRIENDS,
        },
        {
            id: 98,
            word: "",
            language: Language.cz,
            description: "",
            category: Category.FRIENDS,
        },
        {
            id: 98,
            word: "",
            language: Language.is,
            description: "",
            category: Category.FRIENDS,
        },
        {
            id: 99,
            word: "friendship",
            language: Language.eng,
            description: "Human contact",
            category: Category.FRIENDS
        },
        {
            id: 99,
            word: "barátság",
            language: Language.hu,
            description: "Emberi kapcsolat",
            category: Category.FRIENDS,
        },
        {
            id: 99,
            word: "",
            language: Language.sk,
            description: "",
            category: Category.FRIENDS,
        },
        {
            id: 99,
            word: "",
            language: Language.cz,
            description: "",
            category: Category.FRIENDS,
        },
        {
            id: 99,
            word: "",
            language: Language.is,
            description: "",
            category: Category.FRIENDS,
        },
        {
            id: 100,
            word: "shopping centre",
            language: Language.eng,
            description: "a centre with additional shops",
            category: Category.SHOPPING,
            image: Blob.find(element => element.id === 100)
        },
        {
            id: 100,
            word: "bevásárlóközpoont",
            language: Language.hu,
            description: "egy központ, ahol további üzletek működnek",
            category: Category.SHOPPING,
            image: Blob.find(element => element.id === 100)
        },
        {
            id: 100,
            word: "",
            language: Language.sk,
            description: "",
            category: Category.SHOPPING,
            image: Blob.find(element => element.id === 100)
        },
        {
            id: 100,
            word: "",
            language: Language.cz,
            description: "",
            category: Category.SHOPPING,
            image: Blob.find(element => element.id === 100)
        },
        {
            id: 100,
            word: "",
            language: Language.is,
            description: "",
            category: Category.SHOPPING,
            image: Blob.find(element => element.id === 100)
        },
        {
            id: 101,
            word: "open",
            language: Language.eng,
            description: "free access",
            category: Category.SHOPPING,
            image: Blob.find(element => element.id === 101)
        },
        {
            id: 101,
            word: "nyitva",
            language: Language.hu,
            description: "szabad bejárást, elérést, hozzájutást biztosít",
            category: Category.SHOPPING,
            image: Blob.find(element => element.id === 101)
        },
        {
            id: 101,
            word: "",
            language: Language.sk,
            description: "",
            category: Category.SHOPPING,
            image: Blob.find(element => element.id === 101)
        },
        {
            id: 101,
            word: "",
            language: Language.cz,
            description: "",
            category: Category.SHOPPING,
            image: Blob.find(element => element.id === 101)
        },
        {
            id: 101,
            word: "",
            language: Language.is,
            description: "",
            category: Category.SHOPPING,
            image: Blob.find(element => element.id === 101)
        },
        {
            id: 102,
            word: "closed",
            language: Language.eng,
            description: "",
            category: Category.SHOPPING,
            image: Blob.find(element => element.id === 102)
        },
        {
            id: 102,
            word: "zárva",
            language: Language.hu,
            description: "",
            category: Category.SHOPPING,
            image: Blob.find(element => element.id === 102)
        },
        {
            id: 102,
            word: "",
            language: Language.sk,
            description: "",
            category: Category.SHOPPING,
            image: Blob.find(element => element.id === 102)
        },
        {
            id: 102,
            word: "",
            language: Language.cz,
            description: "",
            category: Category.SHOPPING,
            image: Blob.find(element => element.id === 102)
        },
        {
            id: 102,
            word: "",
            language: Language.is,
            description: "",
            category: Category.SHOPPING,
            image: Blob.find(element => element.id === 102)
        },
        {
            id: 103,
            word: "butcher",
            language: Language.eng,
            description: "a meat-grinder",
            category: Category.SHOPPING
        },
        {
            id: 103,
            word: "hentes",
            language: Language.hu,
            description: "hús kimérésével foglalkozó iparos.",
            category: Category.SHOPPING,
        },
        {
            id: 103,
            word: "",
            language: Language.sk,
            description: "",
            category: Category.SHOPPING,
        },
        {
            id: 103,
            word: "",
            language: Language.cz,
            description: "",
            category: Category.SHOPPING,
        },
        {
            id: 103,
            word: "",
            language: Language.is,
            description: "",
            category: Category.SHOPPING,
        },
        {
            id: 104,
            word: "baker",
            language: Language.eng,
            description: "premises for the independent production of bakery products",
            category: Category.SHOPPING
        },
        {
            id: 104,
            word: "pék",
            language: Language.hu,
            description: "sütőipari termékek önálló előállítására alkalmas hely",
            category: Category.SHOPPING,
        },
        {
            id: 104,
            word: "",
            language: Language.sk,
            description: "",
            category: Category.SHOPPING,
        },
        {
            id: 104,
            word: "",
            language: Language.cz,
            description: "",
            category: Category.SHOPPING,
        },
        {
            id: 104,
            word: "",
            language: Language.is,
            description: "",
            category: Category.SHOPPING,
        },
        {
            id: 105,
            word: "quality",
            language: Language.eng,
            description: "",
            category: Category.SHOPPING
        },
        {
            id: 105,
            word: "minőség",
            language: Language.hu,
            description: "",
            category: Category.SHOPPING,
        },
        {
            id: 105,
            word: "",
            language: Language.sk,
            description: "",
            category: Category.SHOPPING,
        },
        {
            id: 105,
            word: "",
            language: Language.cz,
            description: "",
            category: Category.SHOPPING,
        },
        {
            id: 105,
            word: "",
            language: Language.is,
            description: "",
            category: Category.SHOPPING,
        },
        {
            id: 106,
            word: "quantity",
            language: Language.eng,
            description: "",
            category: Category.SHOPPING
        },
        {
            id: 106,
            word: "mennyiség",
            language: Language.hu,
            description: "",
            category: Category.SHOPPING,
        },
        {
            id: 106,
            word: "",
            language: Language.sk,
            description: "",
            category: Category.SHOPPING,
        },
        {
            id: 106,
            word: "",
            language: Language.cz,
            description: "",
            category: Category.SHOPPING,
        },
        {
            id: 106,
            word: "",
            language: Language.is,
            description: "",
            category: Category.SHOPPING,
        },

    ];

    const existingWords = await prisma.words.findMany();

    const newWords = wordList.filter((word) => {
      const exists = existingWords.some(
        (existingWord: Words) =>
          existingWord.word === word.word &&
          existingWord.language === word.language
      );
      return !exists;
    });

    for (const word of newWords) {
      const createdWord = await prisma.words.create({
        data: {
          id: word.id,
          word: word.word,
          language: word.language,
          description: word.description,
          category: word.category,
            image: word.image?.image

        },
      });
      console.log(`Word created with id: ${createdWord.id}`);
    }
    console.log("Database seeded successfully!");


    /*--------------------------------------------------------------------------*/

    /*--------- Seeding the Sentence table ---------*/

    const sentenceList: {
      id: number
      sentence: string;
      language: Language;
      category: Category;
    }[] = [
      {
        id: 1,
        sentence: "How are you?",
        language: Language.eng,
        category: Category.GREETINGS
      },
      {
        id: 1,
        sentence: "Hogy vagy?",
        language: Language.hu,
        category: Category.GREETINGS
      },
      {
        id: 1,
        sentence: "",
        language: Language.sk,
        category: Category.GREETINGS
      },{
        id: 1,
        sentence: "",
        language: Language.is,
        category: Category.GREETINGS
      },{
        id: 1,
        sentence: "",
        language: Language.cz,
        category: Category.GREETINGS
      },
      {
        id: 2,
        sentence: "My name is Andras",
        language: Language.eng,
        category: Category.GREETINGS
      },
      {
        id: 2,
        sentence: "Az én nevem András",
        language: Language.hu,
        category: Category.GREETINGS
      },
      {
        id: 2,
        sentence: "",
        language: Language.sk,
        category: Category.GREETINGS
      },{
        id: 2,
        sentence: "",
        language: Language.is,
        category: Category.GREETINGS
      },{
        id: 2,
        sentence: "",
        language: Language.cz,
        category: Category.GREETINGS
      },
      {
        id: 3,
        sentence: "I am from Ukraine",
        language: Language.eng,
        category: Category.GREETINGS
      },
      {
        id: 3,
        sentence: "Én Ukrajnából jövök",
        language: Language.hu,
        category: Category.GREETINGS
      },
      {
        id: 3,
        sentence: "",
        language: Language.sk,
        category: Category.GREETINGS
      },{
        id: 3,
        sentence: "",
        language: Language.is,
        category: Category.GREETINGS
      },{
        id: 3,
        sentence: "",
        language: Language.cz,
        category: Category.GREETINGS
      },
      {
        id: 4,
        sentence: "I have two sisters",
        language: Language.eng,
        category: Category.FAMILY
      },
      {
        id: 4,
        sentence: "Két nővérem van",
        language: Language.hu,
        category: Category.FAMILY
      },
      {
        id: 4,
        sentence: "",
        language: Language.sk,
        category: Category.FAMILY
      },{
        id: 4,
        sentence: "",
        language: Language.is,
        category: Category.FAMILY
      },{
        id: 4,
        sentence: "",
        language: Language.cz,
        category: Category.FAMILY
      },
      {
        id: 5,
        sentence: "I have four uncles",
        language: Language.eng,
        category: Category.FAMILY
      },
      {
        id: 5,
        sentence: "Négy nagybátyám van",
        language: Language.hu,
        category: Category.FAMILY
      },
      {
        id: 5,
        sentence: "",
        language: Language.sk,
        category: Category.FAMILY
      },{
        id: 5,
        sentence: "",
        language: Language.is,
        category: Category.FAMILY
      },{
        id: 5,
        sentence: "",
        language: Language.cz,
        category: Category.FAMILY
      },
      {
        id: 6,
        sentence: "I only have two grandparents",
        language: Language.eng,
        category: Category.FAMILY
      },
      {
        id: 6,
        sentence: "Csak négy nagyszülőm van",
        language: Language.hu,
        category: Category.FAMILY
      },
      {
        id: 6,
        sentence: "",
        language: Language.sk,
        category: Category.FAMILY
      },{
        id: 6,
        sentence: "",
        language: Language.is,
        category: Category.FAMILY
      },{
        id: 6,
        sentence: "",
        language: Language.cz,
        category: Category.FAMILY
      },
      {
        id: 7,
        sentence: "I have a dog",
        language: Language.eng,
        category: Category.ANIMALS
      },
      {
        id: 7,
        sentence: "Van egy kutyám",
        language: Language.hu,
        category: Category.ANIMALS
      },
      {
        id: 7,
        sentence: "",
        language: Language.sk,
        category: Category.ANIMALS
      },{
        id: 7,
        sentence: "",
        language: Language.is,
        category: Category.ANIMALS
      },{
        id: 7,
        sentence: "",
        language: Language.cz,
        category: Category.ANIMALS
      },
      {
        id: 8,
        sentence: "I love cats",
        language: Language.eng,
        category: Category.ANIMALS
      },
      {
        id: 8,
        sentence: "Szeretem a macskákat",
        language: Language.hu,
        category: Category.ANIMALS
      },
      {
        id: 8,
        sentence: "",
        language: Language.sk,
        category: Category.ANIMALS
      },{
        id: 8,
        sentence: "",
        language: Language.is,
        category: Category.ANIMALS
      },{
        id: 8,
        sentence: "",
        language: Language.cz,
        category: Category.ANIMALS
      },
      {
        id: 9,
        sentence: "Giraffes are tall",
        language: Language.eng,
        category: Category.ANIMALS
      },
      {
        id: 9,
        sentence: "A zsiráfok magasak",
        language: Language.hu,
        category: Category.ANIMALS
      },
      {
        id: 9,
        sentence: "",
        language: Language.sk,
        category: Category.ANIMALS
      },{
        id: 9,
        sentence: "",
        language: Language.is,
        category: Category.ANIMALS
      },{
        id: 9,
        sentence: "",
        language: Language.cz,
        category: Category.ANIMALS
      },
      {
        id: 10,
        sentence: "Twelve cats",
        language: Language.eng,
        category: Category.NUMBER
      },
      {
        id: 10,
        sentence: "Tizenkét macska",
        language: Language.hu,
        category: Category.NUMBER
      },
      {
        id: 10,
        sentence: "",
        language: Language.cz,
        category: Category.NUMBER
      },
      {
        id: 10,
        sentence: "",
        language: Language.sk,
        category: Category.NUMBER
      },
      {
        id: 10,
        sentence: "",
        language: Language.is,
        category: Category.NUMBER
      },
      {
        id: 11,
        sentence: "I want lots of dogs",
        language: Language.eng,
        category: Category.NUMBER
      },
      {
        id: 11,
        sentence: "Sok kutyát akarok",
        language: Language.hu,
        category: Category.NUMBER
      },
      {
        id: 11,
        sentence: "",
        language: Language.cz,
        category: Category.NUMBER
      },
      {
        id: 11,
        sentence: "",
        language: Language.sk,
        category: Category.NUMBER
      },
      {
        id: 11,
        sentence: "",
        language: Language.is,
        category: Category.NUMBER
      },
      {
        id: 12,
        sentence: "My lucky number is eight",
        language: Language.eng,
        category: Category.NUMBER
      },
      {
        id: 12,
        sentence: "Az én szerencseszámom a nyolc",
        language: Language.hu,
        category: Category.NUMBER
      },
      {
        id: 12,
        sentence: "",
        language: Language.cz,
        category: Category.NUMBER
      },
      {
        id: 12,
        sentence: "",
        language: Language.sk,
        category: Category.NUMBER
      },
      {
        id: 12,
        sentence: "",
        language: Language.is,
        category: Category.NUMBER
      },
      {
        id: 13,
        sentence: "Today is Saturday",
        language: Language.eng,
        category: Category.CALENDAR
      },
      {
        id: 13,
        sentence: "Ma szombat van",
        language: Language.hu,
        category: Category.CALENDAR
      },
      {
        id: 13,
        sentence: "",
        language: Language.cz,
        category: Category.CALENDAR
      },
      {
        id: 13,
        sentence: "",
        language: Language.sk,
        category: Category.CALENDAR
      },
      {
        id: 13,
        sentence: "",
        language: Language.is,
        category: Category.CALENDAR
      },
      {
        id: 14,
        sentence: "My favourite season is winter",
        language: Language.eng,
        category: Category.CALENDAR
      },
      {
        id: 14,
        sentence: "Kedvenc évszakom a tél",
        language: Language.hu,
        category: Category.CALENDAR
      },
      {
        id: 14,
        sentence: "",
        language: Language.cz,
        category: Category.CALENDAR
      },
      {
        id: 14,
        sentence: "",
        language: Language.sk,
        category: Category.CALENDAR
      },
      {
        id: 14,
        sentence: "",
        language: Language.is,
        category: Category.CALENDAR
      },
      {
        id: 15,
        sentence: "I was born in August",
        language: Language.eng,
        category: Category.CALENDAR
      },
      {
        id: 15,
        sentence: "Én Augusztusban születtem",
        language: Language.hu,
        category: Category.CALENDAR
      },
      {
        id: 15,
        sentence: "",
        language: Language.cz,
        category: Category.CALENDAR
      },
      {
        id: 15,
        sentence: "",
        language: Language.sk,
        category: Category.CALENDAR
      },
      {
        id: 15,
        sentence: "",
        language: Language.is,
        category: Category.CALENDAR
      },
      {
        id: 16,
        sentence: "Nora is my best friend",
        language: Language.eng,
        category: Category.FRIENDS
      },
      {
        id: 16,
        sentence: "Nora a legjobb barátom",
        language: Language.hu,
        category: Category.FRIENDS
      },
      {
        id: 16,
        sentence: "",
        language: Language.cz,
        category: Category.FRIENDS
      },
      {
        id: 16,
        sentence: "",
        language: Language.sk,
        category: Category.FRIENDS
      },
      {
        id: 16,
        sentence: "",
        language: Language.is,
        category: Category.FRIENDS
      },
      {
        id: 17,
        sentence: "This evening I am going to go fishing with my friends",
        language: Language.eng,
        category: Category.FRIENDS
      },
      {
        id: 17,
        sentence: "Ma este horgásni fogok a barátaimmal",
        language: Language.hu,
        category: Category.FRIENDS
      },
      {
        id: 17,
        sentence: "",
        language: Language.cz,
        category: Category.FRIENDS
      },
      {
        id: 17,
        sentence: "",
        language: Language.sk,
        category: Category.FRIENDS
      },
      {
        id: 17,
        sentence: "",
        language: Language.is,
        category: Category.FRIENDS
      },
      {
        id: 18,
        sentence: "Going to the cinema with Nora",
        language: Language.eng,
        category: Category.FRIENDS
      },
      {
        id: 18,
        sentence: "Moziba megyek Norával",
        language: Language.hu,
        category: Category.FRIENDS
      },
      {
        id: 18,
        sentence: "",
        language: Language.cz,
        category: Category.FRIENDS
      },
      {
        id: 18,
        sentence: "",
        language: Language.sk,
        category: Category.FRIENDS
      },
      {
        id: 18,
        sentence: "",
        language: Language.is,
        category: Category.FRIENDS
      },
      {
        id: 19,
        sentence: "I like reading books",
        language: Language.eng,
        category: Category.HOBBY
      },
      {
        id: 19,
        sentence: "Szeretek könyveket olvasni",
        language: Language.hu,
        category: Category.HOBBY
      },
      {
        id: 19,
        sentence: "",
        language: Language.cz,
        category: Category.FRIENDS
      },
      {
        id: 19,
        sentence: "",
        language: Language.sk,
        category: Category.FRIENDS
      },
      {
        id: 19,
        sentence: "",
        language: Language.is,
        category: Category.FRIENDS
      },
      {
        id: 20,
        sentence: "I play football every Tuesday and Thursday",
        language: Language.eng,
        category: Category.HOBBY
      },
      {
        id: 20,
        sentence: "Minden kedden és csütörtökön focizok",
        language: Language.hu,
        category: Category.HOBBY
      },
      {
        id: 20,
        sentence: "",
        language: Language.cz,
        category: Category.HOBBY
      },
      {
        id: 20,
        sentence: "",
        language: Language.sk,
        category: Category.HOBBY
      },
      {
        id: 20,
        sentence: "",
        language: Language.is,
        category: Category.HOBBY
      },
      {
        id: 21,
        sentence: "I run in the evening",
        language: Language.eng,
        category: Category.HOBBY
      },
      {
        id: 21,
        sentence: "Esténként futok",
        language: Language.hu,
        category: Category.HOBBY
      },
      {
        id: 21,
        sentence: "",
        language: Language.cz,
        category: Category.HOBBY
      },
      {
        id: 21,
        sentence: "",
        language: Language.sk,
        category: Category.HOBBY
      },
      {
        id: 21,
        sentence: "",
        language: Language.is,
        category: Category.HOBBY
      },
      {
        id: 22,
        sentence: "I live in Prague",
        language: Language.eng,
        category: Category.LIVING
      },
      {
        id: 22,
        sentence: "Prágában élek",
        language: Language.hu,
        category: Category.LIVING
      },
      {
        id: 22,
        sentence: "",
        language: Language.cz,
        category: Category.LIVING
      },
      {
        id: 22,
        sentence: "",
        language: Language.sk,
        category: Category.LIVING
      },
      {
        id: 22,
        sentence: "",
        language: Language.is,
        category: Category.LIVING
      },
      {
        id: 23,
        sentence: "I live by a river",
        language: Language.eng,
        category: Category.LIVING
      },
      {
        id: 23,
        sentence: "Egy folyó mellett élek",
        language: Language.hu,
        category: Category.LIVING
      },
      {
        id: 23,
        sentence: "",
        language: Language.cz,
        category: Category.LIVING
      },
      {
        id: 23,
        sentence: "",
        language: Language.sk,
        category: Category.LIVING
      },
      {
        id: 23,
        sentence: "",
        language: Language.is,
        category: Category.LIVING
      },
      {
        id: 24,
        sentence: "I work from Monday to Friday",
        language: Language.eng,
        category: Category.LIVING
      },
      {
        id: 24,
        sentence: "Hétfőtől péntekig dolgozom",
        language: Language.hu,
        category: Category.LIVING
      },
      {
        id: 24,
        sentence: "",
        language: Language.cz,
        category: Category.LIVING
      },
      {
        id: 24,
        sentence: "",
        language: Language.sk,
        category: Category.LIVING
      },
      {
        id: 24,
        sentence: "",
        language: Language.is,
        category: Category.LIVING
      },
      {
        id: 25,
        sentence: "I love going to the shops",
        language: Language.eng,
        category: Category.SHOPPING
      },
      {
        id: 25,
        sentence: "Imádok boltokba járni",
        language: Language.hu,
        category: Category.SHOPPING
      },
      {
        id: 25,
        sentence: "",
        language: Language.cz,
        category: Category.SHOPPING
      },
      {
        id: 25,
        sentence: "",
        language: Language.sk,
        category: Category.SHOPPING
      },
      {
        id: 25,
        sentence: "",
        language: Language.is,
        category: Category.SHOPPING
      },
      {
        id: 26,
        sentence: "I will buy a new computer",
        language: Language.eng,
        category: Category.SHOPPING
      },
      {
        id: 26,
        sentence: "Venni fogok egy új számítógépet",
        language: Language.hu,
        category: Category.SHOPPING
      },
      {
        id: 26,
        sentence: "",
        language: Language.cz,
        category: Category.SHOPPING
      },
      {
        id: 26,
        sentence: "",
        language: Language.sk,
        category: Category.SHOPPING
      },
      {
        id: 26,
        sentence: "",
        language: Language.is,
        category: Category.SHOPPING
      },
      {
        id: 27,
        sentence: "I order a new coffee machine",
        language: Language.eng,
        category: Category.SHOPPING
      },
      {
        id: 27,
        sentence: "Rendelek egy új kávéfőzőt",
        language: Language.hu,
        category: Category.SHOPPING
      },
      {
        id: 27,
        sentence: "",
        language: Language.cz,
        category: Category.SHOPPING
      },
      {
        id: 27,
        sentence: "",
        language: Language.sk,
        category: Category.SHOPPING
      },
      {
        id: 27,
        sentence: "",
        language: Language.is,
        category: Category.SHOPPING
      },


    ];

    for (const sentence of sentenceList) {
      const sentenceCreate = await prisma.sentence.create({
        data: {
          id: sentence.id,
          sentence: sentence.sentence,
          language: sentence.language,
          category: sentence.category
        },
      });
      console.log(`Sentence created with id: ${sentenceCreate.id}`);
    }

    /*--------------------------------------------------------------------------*/


    /*--------- Seeding the Storyline table ---------*/

    const storylineList: {
      id: number
      sentences: string[]
      options: string[][]
      solutions: string[]
      language: Language
      category: Category;
    }[] = [
      {
        id: 2,
        sentences: ["Hi!", "Hi!", "How's it going?", "I'm __", "That's awesome!", "__?"],
        options: [["doing well", "pretty tired", "feeling bored"], ["How about you?", "Are you busy?", "What's up?"]],
        solutions: ["doing well", "How about you?"],
        language: Language.eng,
        category: Category.GREETINGS
      },
      {
        id: 3,
        sentences: ["Hey there!", "Hey there!", "What's new?", "I'm __", "Not much.", "__?"],
        options: [["just chilling", "ready for the weekend", "looking for a new job"], ["How are you doing?", "Any exciting plans?", "What are you up to?"]],
        solutions: ["just chilling", "How are you doing?"],
        language: Language.eng,
        category: Category.GREETINGS
      },
      {
        id: 4,
        sentences: ["Hello!", "Hello!", "How have you been?", "I've been __", "That's good to hear!", "__?"],
        options: [["quite busy", "enjoying my vacation", "working on a project"], ["What's up?", "Are you free?", "How's life?"]],
        solutions: ["quite busy", "What's up?"],
        language: Language.eng,
        category: Category.GREETINGS
      },
      {
        id: 5,
        sentences: ["Greetings!", "Greetings!", "How's your day?", "My day is __", "That's nice!", "__?"],
        options: [["going well", "a bit stressful", "just getting started"], ["How's everything?", "Are you enjoying the day?", "What's happening?"]],
        solutions: ["going well", "How's everything?"],
        language: Language.eng,
        category: Category.GREETINGS
      },
      {
        id: 6,
        sentences: ["Hey!", "Hey!", "How's life treating you?", "I'm __", "Good to hear!", "__?"],
        options: [["doing great", "feeling a bit down", "searching for new opportunities"], ["How's your day going?", "Any exciting news?", "Tell me about yourself."]],
        solutions: ["doing great", "How's your day going?"],
        language: Language.eng,
        category: Category.GREETINGS
      },
      {
        id: 2,
        sentences: ["Szia!", "Szia!", "Mi újság?", "Jól vagyok, __", "Nincs nagyobb hír.", "__?"],
        options: [["csak lazulok", "készülök a hétvégére", "új munkát keresek"], ["Hogy vagy?", "Van valami izgalmas terved?", "Mi a helyzet?"]],
        solutions: ["csak lazulok", "Hogy vagy?"],
        language: Language.hu,
        category: Category.GREETINGS
      },
      {
        id: 3,
        sentences: ["Helló!", "Helló!", "Hogy vagy mostanában?", "Jól vagyok, __", "Jó hallani!", "__?"],
        options: [["elég elfoglalt", "jó nyaralást", "projekten dolgozom"], ["Mi újság?", "Szabad vagy?", "Hogyan megy az élet?"]],
        solutions: ["elég elfoglalt", "Mi újság?"],
        language: Language.hu,
        category: Category.GREETINGS
      },
      {
        id: 4,
        sentences: ["Üdvözlet!", "Üdvözlet!", "Hogy telik a napod?", "A napom __", "Az jó!", "__?"],
        options: [["jól halad", "kicsit stresszes", "épp csak elkezdődött"], ["Hogy mennek a dolgok?", "Élvezed a napot?", "Mi történik?"]],
        solutions: ["jól halad", "Hogy mennek a dolgok?"],
        language: Language.hu,
        category: Category.GREETINGS
      },
      {
        id: 5,
        sentences: ["Szia!", "Szia!", "Hogy vagy?", "Nagyon jól vagyok, __", "Az szép!", "__?"],
        options: [["jól megy", "kicsit lehangolt", "új lehetőségeket keresek"], ["Hogy telik a napod?", "Van valami izgalmas hír?", "Mesélj magadról."]],
        solutions: ["jól megy", "Hogy telik a napod?"],
        language: Language.hu,
        category: Category.GREETINGS
      },
      {
        id: 6,
        sentences: ["Hé!", "Hé!", "Hogy megy az élet?", "Én __ vagyok", "Jó hallani!", "__?"],
        options: [["nagyon jól vagyok", "kicsit levert vagyok", "új lehetőségeket keresek"], ["Hogy megy a napod?", "Van izgalmas hír?", "Mesélj magadról."]],
        solutions: ["nagyon jól vagyok", "Hogy megy a napod?"],
        language: Language.hu,
        category: Category.GREETINGS
      },
      {
        id: 17,
        sentences: ["Hello!", "Hello!", "I need to buy a new calendar.", "What kind of calendar are you looking for?", "I want a wall calendar with beautiful pictures.", "You should check out __."],
        options: [["the bookstore", "the grocery store", "the pharmacy"]],
        solutions: ["the bookstore"],
        language: Language.eng,
        category: Category.CALENDAR
      },
      {id: 17,
        sentences: ["Helló!", "Helló!", "Új naptárat kell vennem.", "Milyen naptárat keresel?", "Egy fali naptárat szeretnék szép képekkel.", "Nézd meg a __."],
        options: [["könyvesboltot", "élelmiszerboltot", "gyógyszertárat"]],
        solutions: ["könyvesboltot"],
        language: Language.hu,
        category: Category.CALENDAR
      },
      {
        id: 18,
        sentences: ["Hi!", "Hi!", "I can't remember when we scheduled our meeting, Wednesday or Tuesday?", "Let me check my calendar.", "Our meeting is on __.", "Great, see you then!"],
        options: [["Monday at 2pm", "Wednesday at 10am", "Friday at 4pm"]],
        solutions: ["Monday at 2pm"],
        language: Language.eng,
        category: Category.CALENDAR
      },
      {id: 18,
        sentences: ["Szia!", "Szia!", "Nem emlékszem, mikor terveztük a találkozónkat, szerda vagy kedd?", "Hadd nézzem meg a naptáram.", "A találkozónk __-kor lesz.", "Szuper, akkor találkozunk!"],
        options: [["hétfőn 14:00-kor", "szerdán 10:00-kor", "pénteken 16:00-kor"]],
        solutions: ["hétfőn 14:00-kor"],
        language: Language.hu,
        category: Category.CALENDAR
      },
      {
        id: 25,
        sentences: ["What kind of living space do you prefer?", "I like __", "That sounds nice!", "__?"],
        options: [["a bungalo", "a spacious house", "an iglu"], ["Do you have any favorite home decor styles?", "How important is location for you?", "What amenities do you look for in a living space?"]],
        solutions: ["a cozy apartment", "Do you have any favorite home decor styles?"],
        language: Language.eng,
        category: Category.LIVING
      },
      {id: 25,
        sentences: ["Milyen lakóteret részesítesz előnyben?", "Én __ szeretem", "Ez jól hangzik!", "__?"],
        options: [["a kényelmes lakás", "az iglut", "a bungalot"], ["Van kedvenc lakberendezési stílusod?", "Mennyire fontos számodra az elhelyezkedés?", "Milyen kényelmi szolgáltatásokat keresel egy lakóhelyen?"]],
        solutions: ["egy kényelmes lakást", "Van kedvenc lakberendezési stílusod?"],
        language: Language.hu,
        category: Category.LIVING
      },
      {
        id: 26,
        sentences: ["Do you enjoy living in the city or the countryside?", "I prefer __", "Interesting choice!", "__?"],
        options: [["life on the go", "country life", "a mix of both"], ["What do you like most about your choice?", "How does your choice affect your daily life?", "What are the challenges of living in your preferred environment?"]],
        solutions: ["country life", "What do you like most about your choice?"],
        language: Language.eng,
        category: Category.LIVING
      },
      {id: 26,
        sentences: ["A városban vagy a vidéken szeretsz élni?", "Én __ részesítem előnyben.", "Érdekes választás!", "__?"],
        options: [["a pörgős életet", "a vidéki életet", "egy keverékét mindkettőnek"], ["Mi tetszik a legjobban a választásodban?", "Hogyan befolyásolja a választásod a mindennapi életed?", "Mik a kihívások az általad preferált környezetben való életben?"]],
        solutions: ["a városi életet", "Mi tetszik a legjobban a választásodban?"],
        language: Language.hu,
        category: Category.LIVING
      },
      {
        id: 7,
        sentences: ["How's your family doing?", "We're all _", "That's great to hear!", "How about your family?", "_"],
        options: [["doing well", "going through a tough time", "celebrating a special occasion"], ["They're doing fine", "We're facing some challenges", "We just had a family gathering"]],
        solutions: ["doing well", "They're doing fine"],
        language: Language.eng,
        category: Category.FAMILY
      },
      {id: 7,
        sentences: ["Hogy van a családod?", "Mindannyian _ vagyunk", "Ez jó hír!", "Hogy van a te családod?", "_"],
        options: [["jól vagyunk", "nehéz időszakon megyünk keresztül", "egy különleges alkalomra készülünk"], ["Jól vannak", "Néhány kihívással szembesülünk", "Éppen családi összejövetelen voltunk"]],
        solutions: ["jól vagyunk", "Jól vannak"],
        language: Language.hu,
        category: Category.FAMILY
      },
      {
        id: 8,
        sentences: ["Do you have any siblings?", "Yes, I have _", "That's nice!", "What about you?", "_"],
        options: [["a brother and a sister", "two brothers", "an older sister"], ["I'm an only child", "I have a younger brother", "I have three siblings"]],
        solutions: ["a brother and a sister", "I'm an only child"],
        language: Language.eng,
        category: Category.FAMILY
      },
      {id: 8,
        sentences: ["Van testvéred?", "Igen, van _", "Ez szép!", "És neked?", "_"],
        options: [["egy bátyám és egy húgom", "két bátyám", "egy idősebb nővérem"], ["Egyke vagyok", "Van egy öcsém", "Három testvérem van"]],
        solutions: ["egy bátyám és egy húgom", "Egyke vagyok"],
        language: Language.hu,
        category: Category.FAMILY
      },
      {
        id: 9,
        sentences: ["What do your parents do for a living?", "My dad is a _ and my mom is a _", "That's interesting!", "What about your parents?", "_"],
        options: [["doctor", "teacher", "lawyer"], ["engineer", "nurse", "artist"], ["My dad is a chef", "My mom is a businesswoman", "They both work in finance"]],
        solutions: ["doctor", "teacher", "My dad is a chef"],
        language: Language.eng,
        category: Category.FAMILY
      },
      {id: 9,
        sentences: ["Mit csinálnak a szüleid?", "Az apukám _ és az anyukám _", "Ez érdekes!", "És a te szüleid?", "_"],
        options: [["orvos", "tanár", "ügyvéd"], ["mérnök", "ápoló", "művész"], ["Az apukám szakács", "Az anyukám üzletasszony", "Mindketten a pénzügyi szektorban dolgoznak"]],
        solutions: ["orvos", "tanár", "Az apukám szakács"],
        language: Language.hu,
        category: Category.FAMILY
      },
      {
        id: 19,
        sentences: ["Hey, long time no see!", "Yeah, it's been a while!", "How have you been?", "I've been __", "That's great!", "__?"],
        options: [["pretty good", "busy with work", "dealing with some challenges"], ["What have you been up to?", "How's your family?", "Have you been on any trips lately?"]],
        solutions: ["pretty good", "What have you been up to?"],
        language: Language.eng,
        category: Category.FRIENDS
      },
      {
        id: 19,
        sentences: ["Hé, rég láttalak!", "Igen, eltelt egy kis idő!", "Hogy vagy?", "Én __ vagyok", "Ez nagyszerű!", "__?"],
        options: [["egész jól", "elfoglalt a munkával", "néhány kihívással küzdök"], ["Mit csináltál mostanában?", "Hogy van a családod?", "Voltál utazni mostanában?"]],
        solutions: ["egész jól", "Mit csináltál mostanában?"],
        language: Language.hu,
        category: Category.FRIENDS
      },
      {
        id: 20,
        sentences: ["Hey, have you met our new friend?", "No, not yet!", "You should, they're _", "Sounds interesting!", "_?"],
        options: [["really nice", "quite funny", "super talented"], ["What's their name?", "Where did you meet them?", "What do they do for a living?"]],
        solutions: ["really nice", "What's their name?"],
        language: Language.eng,
        category: Category.FRIENDS
      },
      {
        id: 20,
        sentences: ["Hé, találkoztál már az új barátunkkal?", "Még nem!", "Meg kellene, ő __", "Érdekesnek hangzik!", "__?"],
        options: [["nagyon kedves", "elég vicces", "szuper tehetséges"], ["Mi a neve?", "Hol találkoztál vele?", "Mivel foglalkozik?"]],
        solutions: ["nagyon kedves", "Mi a neve?"],
        language: Language.hu,
        category: Category.FRIENDS
      },
      {
        id: 21,
        sentences: ["Do you remember our friend from high school?", "Which one?", "The one who was always __, he was so funny", "Oh, yes! How are they doing?", "They're doing great, just __"],
        options: [["making us laugh", "helping others", "winning competitions"], ["Got a new job.", "Moved to a new city.", "Started a family."]],
        solutions: ["making us laugh", "Moved to a new city."],
        language: Language.eng,
        category: Category.FRIENDS
      },
      {
        id: 21,
        sentences: ["Emlékszel a középiskolai barátunkra?", "Melyikre?", "Arra, aki mindig __, nagyon vicces volt", "Ó, igen! Hogy van?", "Nagyon jól van, csak éppen __"],
        options: [["nevettetett minket", "segített másoknak", "versenyeket nyert"], ["Új munkahelyet talált.", "Új városba költözött.", "Családot alapított."]],
        solutions: ["nevettetett minket", "Új munkahelyet talált."],
        language: Language.hu,
        category: Category.FRIENDS
      },
      {
        id: 10,
        sentences: ["I saw a __ at the zoo.", "It was really __!", "I also saw a group of __ on the tree."],
        options: [["giraffe", "lion", "penguin"], ["cute", "long", "playful"], ["monkeys", "zebras", "flamingos"]],
        solutions: ["giraffe", "long", "monkeys"],
        language: Language.eng,
        category: Category.ANIMALS
      },
      {
        id: 10,
        sentences: ["Láttam egy __ az állatkertben.", "Nagyon __ volt!", "Egy csoport __ is láttam fenn a fán"],
        options: [["zsiráfot", "oroszlánt", "pingvint"], ["aranyos", "nagy", "játékos"], ["majmot", "zebrát", "flamingót"]],
        solutions: ["zsiráfot", "nagy", "majmot"],
        language: Language.hu,
        category: Category.ANIMALS
      },
      {
        id: 11,
        sentences: ["My favorite marine animal is the __.", "I think they are very __", "They can be found in the __"],
        options: [["elephant", "tiger", "dolphin"], ["intelligent", "strong", "graceful"], ["savannah", "jungle", "ocean"]],
        solutions: ["dolphin", "intelligent", "ocean"],
        language: Language.eng,
        category: Category.ANIMALS
      },
      {
        id: 11,
        sentences: ["A kedvenc tengeri állatom a __", "Szerintem nagyon __,", "Az __ találhatók."],
        options: [["elefánt", "tigris", "delfin"], ["intelligens", "erős", "kecses"], ["szavannán", "dzsungelben", "óceánban"]],
        solutions: ["delfin", "intelligens", "óceánban"],
        language: Language.hu,
        category: Category.ANIMALS
      },
      {
        id: 12,
        sentences: ["The __ is known for its beautiful wings", "It is a very __ creature.", "You can often see them in the __."],
          options: [["peacock", "butterfly", "hummingbird"], ["elegant", "colorful", "swift"], ["forest", "garden", "meadow"]],
        solutions: ["butterfly", "colorful", "garden"],
        language: Language.eng,
        category: Category.ANIMALS
  },
    {
      id: 12,
          sentences: ["A __ ismert gyönyörű tollazatáról.", "Ez egy nagyon __ lény.", "Gyakran láthatók a _-ban."],
        options: [["páva", "pillangó", "kolibri"], ["elegáns", "színes", "gyors"], ["erdőben", "kertben", "réten"]],
        solutions: ["páva", "elegáns", "kertben"],
        language: Language.hu,
        category: Category.ANIMALS
    },
      {
        id: 22,
        sentences: ["Hey!", "Hey!", "What's your favorite hobby?", "I love music, and I __", "That's awesome!", "__?"],
        options: [["painting", "playing guitar", "reading books"], ["How long have you been doing it?", "What got you into it?", "Do you have any other hobbies?"]],
        solutions: ["painting", "How long have you been doing it?"],
        language: Language.eng,
        category: Category.HOBBY
      },
      {id: 22,
        sentences: ["Hé!", "Hé!", "Mi a kedvenc hobbid?", "Imádom a zenét, ezért szeretek __", "Ez nagyszerű!", "_?"],
        options: [["festeni", "gitározni", "könyveket olvasásni"], ["Mióta foglalkozol vele?", "Miért kezdtél el foglalkozni vele?", "Van más hobbid is?"]],
        solutions: ["festést", "Mióta foglalkozol vele?"],
        language: Language.hu,
        category: Category.HOBBY
      },
      {
        id: 23,
        sentences: ["Hi!", "Hi!", "Do you have any hobbies?", "Yes, I like pictures and I enjoy __", "That sounds fun!", "__?"],
        options: [["cooking", "photography", "dancing"], ["How often do you do it?", "What's your favorite thing about it?", "Have you ever considered teaching it?"]],
        solutions: ["photography", "What's your favorite thing about it?"],
        language: Language.eng,
        category: Category.HOBBY
      },
      {id: 23,
        sentences: ["Szia!", "Szia!", "Van valamilyen hobbid?", "Igen, szeretem a képeket és élvezem a __", "Ez jól hangzik!", "__?"],
        options: [["főzést", "fényképezést", "táncolást"], ["Milyen gyakran csinálod?", "Mi a kedvenc dolog benne?", "Gondoltál már arra, hogy tanítsd?"]],
        solutions: ["főzést", "Mi a kedvenc dolog benne?"],
        language: Language.hu,
        category: Category.HOBBY
      },
      {
        id: 24,
        sentences: ["Hello!", "Hello!", "What do you like to do in your free time?", "I usually __ at home", "That's interesting!", "__?"],
        options: [["go for a walk", "play video games", "write poetry"], ["What's your favorite place to walk?", "What games do you play?", "What inspires your poetry?"]],
        solutions: ["play video games", "What games do you play?"],
        language: Language.eng,
        category: Category.HOBBY
      },
      {id: 24,
        sentences: ["Helló!", "Helló!", "Mit szeretsz csinálni a szabadidődben?", "Általában __ otthon", "Ez érdekes!", "__?"],
        options: [["sétálni megyek", "videojátékokat játszom", "verseket írok"], ["Mi a kedvenc helyed?", "Milyen játékokat játszol?", "Mi inspirálja a verseidet?"]],
        solutions: ["videojátékokat játszom", "Milyen játékokat játszol?"],
        language: Language.hu,
        category: Category.HOBBY
      },
      {
        id: 13,
        sentences: ["What's your favorite prime number?", "Mine favourite prime number is __", "Interesting choice!", "__?"],
        options: [["7", "33", "22"], ["Why do you like that number?", "Do you believe in lucky numbers?", "What's the story behind your favorite number?"]],
        solutions: ["7", "Why do you like that number?"],
        language: Language.eng,
        category: Category.NUMBER
      },
      {id: 13,
        sentences: ["Mi a kedvenc prímszámod?", "Az enyém __", "Érdekes választás!", "__?"],
        options: [["7", "33", "22"], ["Miért szereted ezt a számot?", "Hiszel a szerencse számokban?", "Mi a történet a kedvenc számod mögött?"]],
        solutions: ["7", "Miért szereted ezt a számot?"],
        language: Language.hu,
        category: Category.NUMBER
      },
      {
        id: 14,
        sentences: ["My siblings are called Nora and Junior.", "Can you guess how many siblings I have?", "You have __ siblings", "That's correct!", "__?"],
        options: [["1", "3", "2"], ["Do you enjoy having siblings?", "Do you like playing games on the computer?", "Did you want your own room?"]],
        solutions: ["2", "Do you enjoy having siblings?"],
        language: Language.eng,
        category: Category.NUMBER
      },
      {id: 14,
        sentences: ["A testvéreimet Nórának és Juniornak hívják.", "Kitalálod, hány testvérem van?", "Neked __ testvéred van", "Ez helyes!", "__?"],
        options: [["2", "3", "4"], ["Szereted a testvéreidet?", "Szeretsz játszani a számítógépen?", "Saját szobát akartál?"]],
        solutions: ["2", "Szereted a testvéreidet?"],
        language: Language.hu,
        category: Category.NUMBER
      },
      {
        id: 15,
        sentences: ["How many countries have you visited?", "I've been to __ countries", "Wow, that's impressive!", "__?"],
        options: [["1", "2", "I have never been abroad"], ["Which one was your favorite?", "Do you like to travel?", "Do you have any travel tips?"]],
        solutions: ["2", "Which one was your favorite?"],
        language: Language.eng,
        category: Category.NUMBER
      },
      {id: 15,
        sentences: ["Hány országban jártál?", "Én már legalább __ országban jártam", "Hűha, az lenyűgöző!", "__?"],
        options: [["1", "2", "Soha nem jártam még külföldön"], ["Melyik volt a kedvenced?", "Szeretsz utazni?", "Van valami utazási tipped?"]],
        solutions: ["2", "Melyik volt a kedvenced?"],
        language: Language.hu,
        category: Category.NUMBER
      },
      {
        id: 28,
        sentences: ["I'm looking for a new pair of shoes.", "What type of shoes are you looking for?", "I want something comfortable and stylish.", "How about these sneakers?", "They look great!", "Would you like to try them on?", "__?"],
        options: [["Yes, please.", "No, I'll keep looking.", "Maybe later."]],
        solutions: ["Yes, please."],
        language: Language.eng,
        category: Category.SHOPPING
      },
      {id: 28,
        sentences: ["Új cipőt keresek.", "Milyen típusú cipőt keresel?", "Valami kényelmes és stílusosat szeretnék.", "Mit szólsz ehhez a sportcipőhöz?", "Nagyon jól néz ki!", "Szeretnéd felpróbálni?", "__?"],
        options: [["Igen, kérem.", "Nem, még nézelődöm.", "Talán később."]],
        solutions: ["Igen, kérem."],
        language: Language.hu,
        category: Category.SHOPPING
      },
      {
        id: 29,
        sentences: ["Do you have this shirt in a different size?", "Yes, we have it in small, medium, and large.", "I'll take the medium one.", "Great choice!", "How much does it cost?", "It's $25.", "Oh no, __."],
        options: [["I'll take it.", "That's too expensive.", "Do you have a sale section?"]],
        solutions: ["That's too expensive."],
        language: Language.eng,
        category: Category.SHOPPING
      },
      {id: 29,
        sentences: ["Van más méretben is ebből a pólóból?", "Igen, van kis, közepes és nagy méretben.", "A közepeset kérem.", "Jó választás!", "Mennyibe kerül?", "7500 forint.", "Oh ne, __"],
        options: [["Megveszem.", "Ez túl drága.", "Van leértékelt részleg?"]],
        solutions: ["Megveszem."],
        language: Language.hu,
        category: Category.SHOPPING
      },
      {
        id: 30,
        sentences: ["Can you help me find a gift for my friend?", "Sure, what's the occasion?", "It's her birthday.", "How about a nice __?", "That's a great idea!", "We have a wide selection to choose from.", "__"],
        options: [["blanket", "plush", "parfume"], ["Show me the options.", "I'll think about it.", "I have another idea."]],
        solutions: ["parfume","Show me the options."],
        language: Language.eng,
        category: Category.SHOPPING
      },
      {id: 30,
        sentences: ["Tudsz segíteni ajándékot találni a barátomnak?", "Persze, mi az alkalom?", "A születésnapja.", "Mit szólsz egy jó __?", "Nagyszerű ötlet!", "Széles választékunk van.","__"],
        options: [["takaróhoz", "plüsshöz", "parfümhöz"],["Mutasd meg a lehetőségeket.", "Még gondolkodom rajta.", "Van egy másik ötletem."]],
        solutions: ["parfümhöz","Mutasd meg a lehetőségeket."],
        language: Language.hu,
        category: Category.SHOPPING
      }

    ];


    for (const storyline of storylineList) {
      const storylineCreate = await prisma.storyline.create({
        data: {
          id: storyline.id,
          sentences: storyline.sentences,
          options: storyline.options,
          solutions: storyline.solutions,
          language: storyline.language,
          category: storyline.category
        },
      });
      console.log(`Storyline created with id: ${storylineCreate.id}`);
    }

} catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
