import {Words, Language} from ".prisma/client";

/*
Usage:
- update the database schema: npx prisma migrate dev
- sync and format your prisma schema to that of your database schema: npx prisma db push
- regenerate the Prisma client: npx prisma generate
- restart your IDE
- In the terminal navigate to the root directory of the project
- Run the following command: npx ts-node --compiler-options '{"module":"commonjs"}' db/seed.ts
*/

const prisma = require('../lib/prisma').default;

async function seed() {
  try {
    await prisma.$connect();
    const wordList = [
      {
        id: 1,
        word: 'zero',
        language: Language.eng,
        description: 'the number zero'
      },
      {
        id: 1,
        word: 'nulla',
        language: Language.hu,
        description: 'a nulla szám'
      },
      {
        id: 1,
        word: 'nula',
        language: Language.cz,
        description: 'číslo nula'
      },
      {
        id: 1,
        word: 'nula',
        language: Language.sk,
        description: 'číslo nula'
      },
      {
        id: 1,
        word: 'núll',
        language: Language.is,
        description: 'talan'
      },
      {
        id: 2,
        word: 'one',
        language: Language.eng,
        description: 'the number one'
      },
      {
        id: 2,
        word: 'egy',
        language: Language.hu,
        description: 'az egyes szám'
      },
      {
        id: 2,
        word: 'jeden',
        language: Language.cz,
        description: 'číslo jeden'
      },
      {
        id: 2,
        word: 'jeden',
        language: Language.sk,
        description: 'číslo jeden'
      },
      {
        id: 2,
        word: 'einn',
        language: Language.is,
        description: 'tala einn'
      },
      {
        id: 3,
        word: 'two',
        language: Language.eng,
        description: 'the number two'
      },
      {
        id: 3,
        word: 'kettő',
        language: Language.hu,
        description: 'a kettes szám'
      },
      {
        id: 3,
        word: 'dva',
        language: Language.cz,
        description: 'číslo dva'
      },
      {
        id: 3,
        word: 'dva',
        language: Language.sk,
        description: 'číslo dva'
      },
      {
        id: 3,
        word: 'tveir',
        language: Language.is,
        description: 'tala tveir'
      },
      {
        id: 4,
        word: 'three',
        language: Language.eng,
        description: 'the number three'
      },
      {
        id: 4,
        word: 'három',
        language: Language.hu,
        description: 'a hármas szám'
      },
      {
        id: 4,
        word: 'tri',
        language: Language.sk,
        description: 'číslo tri'
      },
      {
        id: 4,
        word: 'tři',
        language: Language.cz,
        description: 'číslo tři'
      },
      {
        id: 4,
        word: 'þrír',
        language: Language.is,
        description: 'tala þrír'
      },
      {
        id: 5,
        word: 'four',
        language: Language.eng,
        description: 'the number four'
      },
      {
        id: 5,
        word: 'négy',
        language: Language.hu,
        description: 'a négyes szám'
      },
      {
        id: 5,
        word: 'štyri',
        language: Language.sk,
        description: 'číslo štyri'
      },
      {
        id: 5,
        word: 'čtyři',
        language: Language.cz,
        description: 'číslo čtyři'
      },
      {
        id: 5,
        word: 'fjórir',
        language: Language.is,
        description: 'tala fjórir'
      },
      {
        id: 6,
        word: 'five',
        language: Language.eng,
        description: 'the number five'
      },
      {
        id: 6,
        word: 'öt',
        language: Language.hu,
        description: 'az ötös szám'
      },
      {
        id: 6,
        word: 'päť',
        language: Language.sk,
        description: 'číslo päť'
      },
      {
        id: 6,
        word: 'pět',
        language: Language.cz,
        description: 'číslo pět'
      },
      {
        id: 6,
        word: 'fimm',
        language: Language.is,
        description: 'tala fimm'
      },
      {
        id: 7,
        word: 'six',
        language: Language.eng,
        description: 'the number six'
      },
      {
        id: 7,
        word: 'hat',
        language: Language.hu,
        description: 'a hatos szám'
      },
      {
        id: 7,
        word: 'šesť',
        language: Language.sk,
        description: 'číslo šesť'
      },
      {
        id: 7,
        word: 'šest',
        language: Language.cz,
        description: 'číslo šest'
      },
      {
        id: 7,
        word: 'sex',
        language: Language.is,
        description: 'tala sex'
      },
      {
        id: 8,
        word: 'seven',
        language: Language.eng,
        description: 'the number seven'
      },
      {
        id: 8,
        word: 'hét',
        language: Language.hu,
        description: 'a hetes szám'
      },
      {
        id: 8,
        word: 'sedem',
        language: Language.sk,
        description: 'číslo sedem'
      },
      {
        id: 8,
        word: 'sedm',
        language: Language.cz,
        description: 'číslo sedm'
      },
      {
        id: 8,
        word: 'sjö',
        language: Language.is,
        description: 'tala sjö'
      },
      {
        id: 9,
        word: 'eight',
        language: Language.eng,
        description: 'the number eight'
      },
      {
        id: 9,
        word: 'nyolc',
        language: Language.hu,
        description: 'a nyolcas szám'
      },
      {
        id: 9,
        word: 'osem',
        language: Language.sk,
        description: 'číslo osem'
      },
      {
        id: 9,
        word: 'osm',
        language: Language.cz,
        description: 'číslo osm'
      },
      {
        id: 9,
        word: 'átta',
        language: Language.is,
        description: 'tala átta'
      },
      {
        id: 10,
        word: 'nine',
        language: Language.eng,
        description: 'the number nine'
      },
      {
        id: 10,
        word: 'kilenc',
        language: Language.hu,
        description: 'a kilences szám'
      },
      {
        id: 10,
        word: 'deväť',
        language: Language.sk,
        description: 'číslo deväť'
      },
      {
        id: 10,
        word: 'devět',
        language: Language.cz,
        description: 'číslo devět'
      },
      {
        id: 10,
        word: 'níu',
        language: Language.is,
        description: 'tala níu'
      },
      {
        id: 11,
        word: 'ten',
        language: Language.eng,
        description: 'the number ten'
      },
      {
        id: 11,
        word: 'tíz',
        language: Language.hu,
        description: 'a tízes szám'
      },
      {
        id: 11,
        word: 'desať',
        language: Language.sk,
        description: 'číslo desať'
      },
      {
        id: 11,
        word: 'deset',
        language: Language.cz,
        description: 'číslo deset'
      },
      {
        id: 11,
        word: 'tíu',
        language: Language.is,
        description: 'tala tíu'
      },
      {
        id: 12,
        word: 'I',
        language: Language.eng,
        description: 'the first-person singular pronoun'
      },
      {
        id: 12,
        word: 'én',
        language: Language.hu,
        description: 'az első személy egyes számú névmás'
      },
      {
        id: 12,
        word: 'ja',
        language: Language.sk,
        description: 'zámeno prvej osoby jednotného čísla'
      },
      {
        id: 12,
        word: 'já',
        language: Language.cz,
        description: 'zájmeno první osoby jednotného čísla'
      },
      {
        id: 12,
        word: 'ég',
        language: Language.is,
        description: 'persónulegt fornafn í eintölu'
      },
      {
        id: 13,
        word: 'you',
        language: Language.eng,
        description: 'the second-person singular pronoun'
      },
      {
        id: 13,
        word: 'te',
        language: Language.hu,
        description: 'a második személy egyes számú névmás'
      },
      {
        id: 13,
        word: 'ty',
        language: Language.sk,
        description: 'zámeno druhej osoby jednotného čísla'
      },
      {
        id: 13,
        word: 'ty',
        language: Language.cz,
        description: 'zájmeno druhé osoby jednotného čísla'
      },
      {
        id: 13,
        word: 'þú',
        language: Language.is,
        description: 'persónulegt fornafn í eintölu'
      },
      {
        id: 14,
        word: 'he',
        language: Language.eng,
        description: 'the third-person singular pronoun (masculine)'
      },
      {
        id: 14,
        word: 'ő',
        language: Language.hu,
        description: 'a harmadik személy egyes számú névmás (hímnem)'
      },
      {
        id: 14,
        word: 'on',
        language: Language.sk,
        description: 'zámeno tretieho mužského rodu jednotného čísla'
      },
      {
        id: 14,
        word: 'on',
        language: Language.cz,
        description: 'zájmeno třetí osoby mužského rodu jednotného čísla'
      },
      {
        id: 14,
        word: 'hann',
        language: Language.is,
        description: 'persónulegt fornafn í eintölu (karlkyn)'
      },
      {
        id: 15,
        word: 'she',
        language: Language.eng,
        description: 'the third-person singular pronoun (feminine)'
      },
      {
        id: 15,
        word: 'ő',
        language: Language.hu,
        description: 'a harmadik személy egyes számú névmás (nőnem)'
      },
      {
        id: 15,
        word: 'ona',
        language: Language.sk,
        description: 'zámeno tretieho ženského rodu jednotného čísla'
      },
      {
        id: 15,
        word: 'ona',
        language: Language.cz,
        description: 'zájmeno třetí osoby ženského rodu jednotného čísla'
      },
      {
        id: 15,
        word: 'hún',
        language: Language.is,
        description: 'persónulegt fornafn í eintölu (kvenkyn)'
      },
      {
        id: 16,
        word: 'we',
        language: Language.eng,
        description: 'the first-person plural pronoun'
      },
      {
        id: 16,
        word: 'mi',
        language: Language.hu,
        description: 'az első személy többes számú névmás'
      },
      {
        id: 16,
        word: 'my',
        language: Language.sk,
        description: 'zámeno prvej osoby množného čísla'
      },
      {
        id: 16,
        word: 'my',
        language: Language.cz,
        description: 'zájmeno první osoby množného čísla'
      },
      {
        id: 16,
        word: 'við',
        language: Language.is,
        description: 'persónulegt fornafn í fleirtölu'
      },
      {
        id: 17,
        word: 'you',
        language: Language.eng,
        description: 'the second-person plural pronoun'
      },
      {
        id: 17,
        word: 'ti',
        language: Language.hu,
        description: 'a második személy többes számú névmás'
      },
      {
        id: 17,
        word: 'vy',
        language: Language.sk,
        description: 'zámeno druhej osoby množného čísla'
      },
      {
        id: 17,
        word: 'vy',
        language: Language.cz,
        description: 'zájmeno druhé osoby množného čísla'
      },
      {
        id: 17,
        word: 'þið',
        language: Language.is,
        description: 'persónulegt fornafn í fleirtölu'
      },
      {
        id: 18,
        word: 'they',
        language: Language.eng,
        description: 'the third-person plural pronoun'
      },
      {
        id: 18,
        word: 'ők',
        language: Language.hu,
        description: 'a harmadik személy többes számú névmás'
      },
      {
        id: 18,
        word: 'oni',
        language: Language.sk,
        description: 'zámeno tretieho rodu množného čísla'
      },
      {
        id: 18,
        word: 'oni',
        language: Language.cz,
        description: 'zájmeno třetí osoby množného čísla'
      },
      {
        id: 18,
        word: 'þeir',
        language: Language.is,
        description: 'persónulegt fornafn í fleirtölu'
      },
      {
        id: 19,
        word: 'hello',
        language: Language.eng,
        description: 'a greeting or expression of goodwill'
      },
      {
        id: 19,
        word: 'szia',
        language: Language.hu,
        description: 'üdvözlés vagy jóakarat kifejezése'
      },
      {
        id: 19,
        word: 'ahoj',
        language: Language.cz,
        description: 'pozdrav nebo vyjádření dobré vůle'
      },
      {
        id: 19,
        word: 'ahoj',
        language: Language.sk,
        description: 'pozdrav alebo vyjadrenie dobrej vôle'
      },
      {
        id: 19,
        word: 'halló',
        language: Language.is,
        description: 'heilsa eða góðvilja yfirlýsing'
      },
      {
        id: 20,
        word: 'goodbye',
        language: Language.eng,
        description: 'a farewell or parting phrase'
      },
      {
        id: 20,
        word: 'viszlát',
        language: Language.hu,
        description: 'búcsú vagy elköszönő kifejezés'
      },
      {
        id: 20,
        word: 'do videnia',
        language: Language.sk,
        description: 'lúčenie alebo rozlúčková fráza'
      },
      {
        id: 20,
        word: 'sbohem',
        language: Language.cz,
        description: 'rozloučení nebo rozloučení fráze'
      },
      {
        id: 20,
        word: 'bless',
        language: Language.is,
        description: 'kveðja eða skilaboðasögn'
      },
      {
        id: 21,
        word: 'yes',
        language: Language.eng,
        description: 'an affirmative response or agreement'
      },
      {
        id: 21,
        word: 'igen',
        language: Language.hu,
        description: 'egyetértő válasz vagy egyetértés'
      },
      {
        id: 21,
        word: 'áno',
        language: Language.sk,
        description: 'potvrdzujúca odpoveď alebo súhlas'
      },
      {
        id: 21,
        word: 'ano',
        language: Language.cz,
        description: 'potvrzující odpověď nebo souhlas'
      },
      {
        id: 21,
        word: 'já',
        language: Language.is,
        description: 'jákvæð svör eða samþykki'
      },
      {
        id: 22,
        word: 'no',
        language: Language.eng,
        description: 'a negative response or denial'
      },
      {
        id: 22,
        word: 'nem',
        language: Language.hu,
        description: 'tagadó válasz vagy elutasítás'
      },
      {
        id: 22,
        word: 'ne',
        language: Language.cz,
        description: 'negativní odpověď nebo popření'
      },
      {
        id: 22,
        word: 'nie',
        language: Language.sk,
        description: 'záporná odpoveď alebo odmietnutie'
      },
      {
        id: 22,
        word: 'nei',
        language: Language.is,
        description: 'neikvæð svör eða neita'
      },
      {
        id: 23,
        word: 'thank you',
        language: Language.eng,
        description: 'an expression of gratitude'
      },
      {
        id: 23,
        word: 'köszönöm',
        language: Language.hu,
        description: 'hálás kifejezés'
      },
      {
        id: 23,
        word: 'prosím',
        language: Language.sk,
        description: 'vyjadrenie vďaky'
      },
      {
        id: 23,
        word: 'děkuji',
        language: Language.cz,
        description: 'vyjádření vděčnosti'
      },
      {
        id: 23,
        word: 'þakka þér',
        language: Language.is,
        description: 'takk fyrir'
      },
      {
        id: 24,
        word: 'please',
        language: Language.eng,
        description: 'a polite request or invitation'
      },
      {
        id: 24,
        word: 'kérlek',
        language: Language.hu,
        description: 'udvarias kérés vagy meghívás'
      },
      {
        id: 24,
        word: 'prosím',
        language: Language.sk,
        description: 'zdvorilá žiadosť alebo pozvanie'
      },
      {
        id: 24,
        word: 'prosím',
        language: Language.cz,
        description: 'zdvořilá žádost nebo pozvání'
      },
      {
        id: 24,
        word: 'vinsamlegast',
        language: Language.is,
        description: 'kurteis beiðni eða boð'
      },
      {
        id: 25,
        word: 'sorry',
        language: Language.eng,
        description: 'an apology or expression of regret'
      },
      {
        id: 25,
        word: 'bocsánat',
        language: Language.hu,
        description: 'bocsánatkérés vagy sajnálat kifejezése'
      },
      {
        id: 25,
        word: 'prepáč',
        language: Language.sk,
        description: 'ospravedlnenie alebo vyjadrenie ľútosti'
      },
      {
        id: 25,
        word: 'promiňte',
        language: Language.cz,
        description: 'omluva nebo vyjádření lítosti'
      },
      {
        id: 25,
        word: 'fyrirgefðu',
        language: Language.is,
        description: 'lesi eða tjáning á sorg'
      },
      {
        id: 26,
        word: 'excuse me',
        language: Language.eng,
        description: 'a polite phrase used to get someone\'s attention or apologize'
      },
      {
        id: 26,
        word: 'elnézést',
        language: Language.hu,
        description: 'udvarias kifejezés, amelyet figyelemfelkeltésre vagy bocsánatkérésre használnak'
      },
      {
        id: 26,
        word: 'prepáčte',
        language: Language.sk,
        description: 'zdvorilá fráza používaná na upozornenie alebo ospravedlnenie sa'
      },
      {
        id: 26,
        word: 'omluvte mě',
        language: Language.cz,
        description: 'zdvořilá fráze používaná k upozornění nebo omluvě'
      },
      {
        id: 26,
        word: 'fyrirgefðu',
        language: Language.is,
        description: 'kurteis orðasamband notað til að fá athygli einhvers eða biðja um afsökun'
      },
      {
        id: 27,
        word: 'today',
        language: Language.eng,
        description: 'the current day or the present time'
      },
      {
        id: 27,
        word: 'ma',
        language: Language.hu,
        description: 'a mai nap vagy a jelenlegi idő'
      },
      {
        id: 27,
        word: 'dnes',
        language: Language.sk,
        description: 'súčasný deň alebo súčasný čas'
      },
      {
        id: 27,
        word: 'dnes',
        language: Language.cz,
        description: 'současný den nebo přítomný čas'
      },
      {
        id: 27,
        word: 'í dag',
        language: Language.is,
        description: 'núverandi dagur eða núverandi tími'
      },
      {
        id: 28,
        word: 'tomorrow',
        language: Language.eng,
        description: 'the day following the current day'
      },
      {
        id: 28,
        word: 'holnap',
        language: Language.hu,
        description: 'a jelenlegi napot követő nap'
      },
      {
        id: 28,
        word: 'zajtra',
        language: Language.sk,
        description: 'deň nasledujúci po súčasnom dni'
      },
      {
        id: 28,
        word: 'zítra',
        language: Language.cz,
        description: 'den následující po aktuálním dni'
      },
      {
        id: 28,
        word: 'á morgun',
        language: Language.is,
        description: 'dagurinn sem fylgir eftir núverandi degi'
      },
      {
        id: 29,
        word: 'yesterday',
        language: Language.eng,
        description: 'the day preceding the current day'
      },
      {
        id: 29,
        word: 'tegnap',
        language: Language.hu,
        description: 'a jelenlegi napot megelőző nap'
      },
      {
        id: 29,
        word: 'včera',
        language: Language.sk,
        description: 'deň predchádzajúci súčasnému dňu'
      },
      {
        id: 29,
        word: 'včera',
        language: Language.cz,
        description: 'den předcházející aktuálnímu dni'
      },
      {
        id: 29,
        word: 'í gær',
        language: Language.is,
        description: 'dagurinn sem fyrirgengur núverandi degi'
      },
      {
        id: 30,
        word: 'morning',
        language: Language.eng,
        description: 'the early part of the day, from sunrise to noon'
      },
      {
        id: 30,
        word: 'reggel',
        language: Language.hu,
        description: 'a nap korai része, a napkelte és dél között'
      },
      {
        id: 30,
        word: 'ráno',
        language: Language.sk,
        description: 'čas skorého rána, od východu slnka do poludnia'
      },
      {
        id: 30,
        word: 'ráno',
        language: Language.cz,
        description: 'část dne od východu slunce po poledne'
      },
      {
        id: 30,
        word: 'morgunn',
        language: Language.is,
        description: 'byrjun dags, frá sólarupprás til hádegs'
      },
      {
        id: 31,
        word: 'evening',
        language: Language.eng,
        description: 'the later part of the day, from late afternoon to night'
      },
      {
        id: 31,
        word: 'este',
        language: Language.hu,
        description: 'a nap későbbi része, a késő délutántól az éjszakáig'
      },
      {
        id: 31,
        word: 'večer',
        language: Language.sk,
        description: 'čas neskorého popoludnia až do noci'
      },
      {
        id: 31,
        word: 'večer',
        language: Language.cz,
        description: 'část dne od pozdního odpoledne do noci'
      },
      {
        id: 31,
        word: 'kvöld',
        language: Language.is,
        description: 'seinni hluti dagsins, frá seint síðdegi til náttúru'
      },
      {
        id: 32,
        word: 'night',
        language: Language.eng,
        description: 'the period of darkness between sunset and sunrise'
      },
      {
        id: 32,
        word: 'éjszaka',
        language: Language.hu,
        description: 'a naplemente és napfelkelte közötti sötét időszak'
      },
      {
        id: 32,
        word: 'noc',
        language: Language.sk,
        description: 'obdobie tmy medzi západom slnka a východom slnka'
      },
      {
        id: 32,
        word: 'noc',
        language: Language.cz,
        description: 'období tmy mezi západem slunce a východem slunce'
      },
      {
        id: 32,
        word: 'nótt',
        language: Language.is,
        description: 'skotmál milli sólarlags og sólarupprásar'
      },
      {
        id: 33,
        word: 'week',
        language: Language.eng,
        description: 'a period of seven days'
      },
      {
        id: 33,
        word: 'hét',
        language: Language.hu,
        description: 'egy hét időtartama'
      },
      {
        id: 33,
        word: 'týždeň',
        language: Language.sk,
        description: 'obdobie siedmych dní'
      },
      {
        id: 33,
        word: 'týden',
        language: Language.cz,
        description: 'období sedmi dnů'
      },
      {
        id: 33,
        word: 'vika',
        language: Language.is,
        description: 'tímabil sjö daga'
      },
      {
        id: 34,
        word: 'month',
        language: Language.eng,
        description: 'a unit of time corresponding to approximately 30 or 31 days'
      },
      {
        id: 34,
        word: 'hónap',
        language: Language.hu,
        description: 'időegység, ami körülbelül 30 vagy 31 napnak felel meg'
      },
      {
        id: 34,
        word: 'mesiac',
        language: Language.sk,
        description: 'časová jednotka zodpovedajúca približne 30 alebo 31 dňom'
      },
      {
        id: 34,
        word: 'měsíc',
        language: Language.cz,
        description: 'časová jednotka odpovídající přibližně 30 nebo 31 dnům'
      },
      {
        id: 34,
        word: 'mánuður',
        language: Language.is,
        description: 'tímaeining sem samsvarar um þrjátíu eða þrjátíu og einni dögum'
      },
      {
        id: 35,
        word: 'year',
        language: Language.eng,
        description: 'a unit of time corresponding to approximately 365 or 366 days'
      },
      {
        id: 35,
        word: 'év',
        language: Language.hu,
        description: 'időegység, ami körülbelül 365 vagy 366 napnak felel meg'
      },
      {
        id: 35,
        word: 'rok',
        language: Language.sk,
        description: 'časová jednotka zodpovedajúca približne 365 alebo 366 dňom'
      },
      {
        id: 35,
        word: 'rok',
        language: Language.cz,
        description: 'časová jednotka odpovídající přibližně 365 nebo 366 dnům'
      },
      {
        id: 35,
        word: 'ár',
        language: Language.is,
        description: 'tímaeining sem samsvarar um þrjátíu og fimm eða þrjátíu og sex dögum'
      },
      {
        id: 36,
        word: 'day',
        language: Language.eng,
        description: 'a period of 24 hours'
      },
      {
        id: 36,
        word: 'nap',
        language: Language.hu,
        description: '24 órás időszak'
      },
      {
        id: 36,
        word: 'deň',
        language: Language.sk,
        description: 'obdobie trvajúce 24 hodín'
      },
      {
        id: 36,
        word: 'den',
        language: Language.cz,
        description: 'období trvající 24 hodin'
      },
      {
        id: 36,
        word: 'dagur',
        language: Language.is,
        description: 'tímabil af 24 klukkustundum'
      },
      {
        id: 37,
        word: 'hour',
        language: Language.eng,
        description: 'a unit of time equal to 60 minutes'
      },
      {
        id: 37,
        word: 'óra',
        language: Language.hu,
        description: 'az időmérték, amely 60 percet jelent'
      },
      {
        id: 37,
        word: 'hodina',
        language: Language.sk,
        description: 'časová jednotka rovná 60 minútom'
      },
      {
        id: 37,
        word: 'hodina',
        language: Language.cz,
        description: 'jednotka času rovná 60 minutám'
      },
      {
        id: 37,
        word: 'klukkustund',
        language: Language.is,
        description: 'tímiheitir sem jafngildir 60 mínútum'
      },
      {
        id: 38,
        word: 'minute',
        language: Language.eng,
        description: 'a unit of time equal to 60 seconds'
      },
      {
        id: 38,
        word: 'perc',
        language: Language.hu,
        description: 'az időmérték, amely 60 másodpercet jelent'
      },
      {
        id: 38,
        word: 'minúta',
        language: Language.sk,
        description: 'časová jednotka rovná 60 sekundám'
      },
      {
        id: 38,
        word: 'minuta',
        language: Language.cz,
        description: 'jednotka času rovná 60 sekundám'
      },
      {
        id: 38,
        word: 'mínúta',
        language: Language.is,
        description: 'tímiheitir sem jafngildir 60 sekúndum'
      },
      {
        id: 39,
        word: 'second',
        language: Language.eng,
        description: 'a unit of time'
      },
      {
        id: 39,
        word: 'másodperc',
        language: Language.hu,
        description: 'időmérték'
      },
      {
        id: 39,
        word: 'sekunda',
        language: Language.sk,
        description: 'časová jednotka'
      },
      {
        id: 39,
        word: 'sekunda',
        language: Language.cz,
        description: 'jednotka času'
      },
      {
        id: 39,
        word: 'sekúnda',
        language: Language.is,
        description: 'tímiheitir'
      },
      {
        id: 40,
        word: 'money',
        language: Language.eng,
        description: 'a medium of exchange or a financial resource'
      },
      {
        id: 40,
        word: 'pénz',
        language: Language.hu,
        description: 'az eladásra szolgáló közvetítőeszköz vagy pénzügyi erőforrás'
      },
      {
        id: 40,
        word: 'peniaze',
        language: Language.sk,
        description: 'prostriedok výmeny alebo finančný zdroj'
      },
      {
        id: 40,
        word: 'peníze',
        language: Language.cz,
        description: 'prostředek směny nebo finanční zdroj'
      },
      {
        id: 40,
        word: 'peningar',
        language: Language.is,
        description: 'gjaldeyrisskipti eða fjárhagur'
      },
      {
        id: 41,
        word: 'book',
        language: Language.eng,
        description: 'a written or printed work consisting of pages'
      },
      {
        id: 41,
        word: 'könyv',
        language: Language.hu,
        description: 'írott vagy nyomtatott munka lapokból állóan'
      },
      {
        id: 41,
        word: 'kniha',
        language: Language.sk,
        description: 'písaná alebo tlačená práca pozostávajúca z strán'
      },
      {
        id: 41,
        word: 'kniha',
        language: Language.cz,
        description: 'psaný nebo tištěný text skládající se z stránek'
      },
      {
        id: 41,
        word: 'bók',
        language: Language.is,
        description: 'ritmöguleg eða prentuð verk sem samanstendur af síðum'
      },
      {
        id: 42,
        word: 'school',
        language: Language.eng,
        description: 'an institution for education'
      },
      {
        id: 42,
        word: 'iskola',
        language: Language.hu,
        description: 'oktatási intézmény'
      },
      {
        id: 42,
        word: 'škola',
        language: Language.sk,
        description: 'inštitúcia pre vzdelávanie'
      },
      {
        id: 42,
        word: 'škola',
        language: Language.cz,
        description: 'instituce pro vzdělávání'
      },
      {
        id: 42,
        word: 'skóli',
        language: Language.is,
        description: 'menntastofnun'
      },
      {
        id: 43,
        word: 'car',
        language: Language.eng,
        description: 'a road vehicle with four wheels'
      },
      {
        id: 43,
        word: 'autó',
        language: Language.hu,
        description: 'négy keréken közlekedő jármű'
      },
      {
        id: 43,
        word: 'auto',
        language: Language.sk,
        description: 'cestné vozidlo so štyrmi kolesami'
      },
      {
        id: 43,
        word: 'auto',
        language: Language.cz,
        description: 'silniční vozidlo se čtyřmi koly'
      },
      {
        id: 43,
        word: 'bíll',
        language: Language.is,
        description: 'vegferðamál með fjórum hjólum'
      },
      {
        id: 44,
        word: 'house',
        language: Language.eng,
        description: 'a building used for dwelling or living in'
      },
      {
        id: 44,
        word: 'ház',
        language: Language.hu,
        description: 'lakó- vagy élőhelyként használt épület'
      },
      {
        id: 44,
        word: 'dom',
        language: Language.sk,
        description: 'budova používaná na bývanie'
      },
      {
        id: 44,
        word: 'dům',
        language: Language.cz,
        description: 'budova používaná k obývání'
      },
      {
        id: 44,
        word: 'hús',
        language: Language.is,
        description: 'bygging notað fyrir búsetu eða bú'
      },
      {
        id: 45,
        word: 'dog',
        language: Language.eng,
        description: 'a domesticated carnivorous mammal'
      },
      {
        id: 45,
        word: 'kutya',
        language: Language.hu,
        description: 'házi ragadozó emlős'
      },
      {
        id: 45,
        word: 'pes',
        language: Language.sk,
        description: 'domestikovaný masožravý cicavec'
      },
      {
        id: 45,
        word: 'pes',
        language: Language.cz,
        description: 'domestikovaný masožravý savec'
      },
      {
        id: 45,
        word: 'hundur',
        language: Language.is,
        description: 'innri dýr sem etur kjöt'
      },
      {
        id: 46,
        word: 'cat',
        language: Language.eng,
        description: 'a small domesticated carnivorous mammal'
      },
      {
        id: 46,
        word: 'macska',
        language: Language.hu,
        description: 'kis házi ragadozó emlős'
      },
      {
        id: 46,
        word: 'mačka',
        language: Language.sk,
        description: 'malý domáci masožravý cicavec'
      },
      {
        id: 46,
        word: 'kočka',
        language: Language.cz,
        description: 'malý domácí masožravý savec'
      },
      {
        id: 46,
        word: 'köttur',
        language: Language.is,
        description: 'lítill innan- eða heimildisdýr sem etur kjöt'
      },
      {
        id: 47,
        word: 'tree',
        language: Language.eng,
        description: 'a woody perennial plant'
      },
      {
        id: 47,
        word: 'fa',
        language: Language.hu,
        description: 'fás évelő növény'
      },
      {
        id: 47,
        word: 'strom',
        language: Language.sk,
        description: 'drevená trvalka'
      },
      {
        id: 47,
        word: 'strom',
        language: Language.cz,
        description: 'dřevitá trvalka'
      },
      {
        id: 47,
        word: 'tré',
        language: Language.is,
        description: 'viðkvæmur, fjölær grænplanta'
      },
      {
        id: 48,
        word: 'flower',
        language: Language.eng,
        description: 'the reproductive structure of a flowering plant'
      },
      {
        id: 48,
        word: 'virág',
        language: Language.hu,
        description: 'a virágzó növények nemi szerve'
      },
      {
        id: 48,
        word: 'kvetina',
        language: Language.sk,
        description: 'reprodukčná štruktúra kvetinových rastlín'
      },
      {
        id: 48,
        word: 'květina',
        language: Language.cz,
        description: 'rozmnožovací orgán kvetoucích rostlin'
      },
      {
        id: 48,
        word: 'blóm',
        language: Language.is,
        description: 'kynfæri blómplanta'
      },
      {
        id: 49,
        word: 'river',
        language: Language.eng,
        description: 'a large natural stream of water'
      },
      {
        id: 49,
        word: 'folyó',
        language: Language.hu,
        description: 'nagy természetes vízfolyás'
      },
      {
        id: 49,
        word: 'rieka',
        language: Language.sk,
        description: 'veľký prírodný tok vody'
      },
      {
        id: 49,
        word: 'řeka',
        language: Language.cz,
        description: 'velký přírodní tok vody'
      },
      {
        id: 49,
        word: 'á',
        language: Language.is,
        description: 'stór náttúruleg vatnstrokur'
      },
      {
        id: 50,
        word: 'mountain',
        language: Language.eng,
        description: 'a large landform that rises above its surroundings'
      },
      {
        id: 50,
        word: 'hegy',
        language: Language.hu,
        description: 'a környezetétől magasabbra emelkedő nagy földalakzat'
      },
      {
        id: 50,
        word: 'hora',
        language: Language.sk,
        description: 'veľký pevninský útvar, ktorý sa vypína nad okolím'
      },
      {
        id: 50,
        word: 'hora',
        language: Language.cz,
        description: 'velký pevninský útvar, který se vypíná nad okolím'
      },
      {
        id: 50,
        word: 'fjall',
        language: Language.is,
        description: 'stór, yfir umhverfin rísaður jarðmyndun'
      },
      {
        id: 51,
        word: 'sun',
        language: Language.eng,
        description: 'the star at the center of the solar system'
      },
      {
        id: 51,
        word: 'nap',
        language: Language.hu,
        description: 'a Nap a Naprendszer központi csillaga'
      },
      {
        id: 51,
        word: 'slnko',
        language: Language.sk,
        description: 'hviezda v strede slnečnej sústavy'
      },
      {
        id: 51,
        word: 'slunce',
        language: Language.cz,
        description: 'hvězda uprostřed sluneční soustavy'
      },
      {
        id: 51,
        word: 'sól',
        language: Language.is,
        description: 'stjarnan í miðjunni á sólkerfinu'
      },
      {
        id: 52,
        word: 'moon',
        language: Language.eng,
        description: 'the natural satellite of the Earth'
      },
      {
        id: 52,
        word: 'hold',
        language: Language.hu,
        description: 'a Föld természetes holdja'
      },
      {
        id: 52,
        word: 'mesiac',
        language: Language.sk,
        description: 'prírodný satelit Zeme'
      },
      {
        id: 52,
        word: 'měsíc',
        language: Language.cz,
        description: 'přírodní satelit Země'
      },
      {
        id: 52,
        word: 'tungl',
        language: Language.is,
        description: 'náttúrulegur gervitungl jarðar'
      },
      {
        id: 53,
        word: 'star',
        language: Language.eng,
        description: 'a luminous celestial object'
      },
      {
        id: 53,
        word: 'csillag',
        language: Language.hu,
        description: 'egy ragyogó égitest'
      },
      {
        id: 53,
        word: 'hviezda',
        language: Language.sk,
        description: 'žiariaci nebeský objekt'
      },
      {
        id: 53,
        word: 'hvězda',
        language: Language.cz,
        description: 'zářící nebeský objekt'
      },
      {
        id: 53,
        word: 'stjarna',
        language: Language.is,
        description: 'ljómandi himintungl'
      },
      {
        id: 54,
        word: 'water',
        language: Language.eng,
        description: 'a transparent, odorless, tasteless liquid'
      },
      {
        id: 54,
        word: 'víz',
        language: Language.hu,
        description: 'átlátszó, szagtalan, íztelen folyadék'
      },
      {
        id: 54,
        word: 'voda',
        language: Language.sk,
        description: 'priehľadná, bez zápachu a chuti tekutina'
      },
      {
        id: 54,
        word: 'voda',
        language: Language.cz,
        description: 'průhledná, bez zápachu a chuti kapalina'
      },
      {
        id: 54,
        word: 'vatn',
        language: Language.is,
        description: 'gegnsær, óþekkur og bragðlaus vökvi'
      },
      {
        id: 55,
        word: 'fire',
        language: Language.eng,
        description: 'the rapid oxidation of a material'
      },
      {
        id: 55,
        word: 'tűz',
        language: Language.hu,
        description: 'anyag gyors oxidációja'
      },
      {
        id: 55,
        word: 'oheň',
        language: Language.sk,
        description: 'rýchle oxidovanie materiálu'
      },
      {
        id: 55,
        word: 'oheň',
        language: Language.cz,
        description: 'rychlá oxidace materiálu'
      },
      {
        id: 55,
        word: 'eldur',
        language: Language.is,
        description: 'hraður bruna efna'
      },
      {
        id: 56,
        word: 'earth',
        language: Language.eng,
        description: 'the third planet from the Sun'
      },
      {
        id: 56,
        word: 'föld',
        language: Language.hu,
        description: 'a Nap harmadik bolygója'
      },
      {
        id: 56,
        word: 'zem',
        language: Language.sk,
        description: 'tretia planéta od Slnka'
      },
      {
        id: 56,
        word: 'zem',
        language: Language.cz,
        description: 'třetí planeta od Slunce'
      },
      {
        id: 56,
        word: 'jörð',
        language: Language.is,
        description: 'þriðja reikistjarnan frá sólu'
      },
      {
        id: 57,
        word: 'air',
        language: Language.eng,
        description: 'the invisible gaseous substance surrounding the Earth'
      },
      {
        id: 57,
        word: 'levegő',
        language: Language.hu,
        description: 'az Földet körülvevő láthatatlan gáz halmazállapotú anyag'
      },
      {
        id: 57,
        word: 'vzduch',
        language: Language.sk,
        description: 'neviditeľná plynná látka obklopujúca Zem'
      },
      {
        id: 57,
        word: 'vzduch',
        language: Language.cz,
        description: 'neviditelná plynná látka obklopující Zemi'
      },
      {
        id: 57,
        word: 'loft',
        language: Language.is,
        description: 'ósýnilegt loftkennd efni sem umlykur jörðina'
      },
      {
        id: 58,
        word: 'time',
        language: Language.eng,
        description: 'a measurable period during which an action, process, or condition exists'
      },
      {
        id: 58,
        word: 'idő',
        language: Language.hu,
        description: 'egy mérhető időszak, amely alatt egy cselekvés, folyamat vagy állapot fennáll'
      },
      {
        id: 58,
        word: 'čas',
        language: Language.sk,
        description: 'merateľné obdobie, počas ktorého existuje činnosť, proces alebo stav'
      },
      {
        id: 58,
        word: 'čas',
        language: Language.cz,
        description: 'měřitelné období, během něhož existuje činnost, proces nebo stav'
      },
      {
        id: 58,
        word: 'tími',
        language: Language.is,
        description: 'mælanlegt tímabil þar sem aðgerð, ferli eða ástand er til staðar'
      },
      {
        id: 59,
        word: 'love',
        language: Language.eng,
        description: 'an intense feeling of deep affection'
      },
      {
        id: 59,
        word: 'szeretet',
        language: Language.hu,
        description: 'mély szeretet intenzív érzése'
      },
      {
        id: 59,
        word: 'láska',
        language: Language.sk,
        description: 'intenzívny pocit hlbokého citu'
      },
      {
        id: 59,
        word: 'láska',
        language: Language.cz,
        description: 'intenzivní pocit hluboké náklonnosti'
      },
      {
        id: 59,
        word: 'ást',
        language: Language.is,
        description: 'sterkur tilfinning djúpserðar ást'
      },
      {
        id: 60,
        word: 'friend',
        language: Language.eng,
        description: 'a person with whom one has a bond of mutual affection'
      },
      {
        id: 60,
        word: 'barát',
        language: Language.hu,
        description: 'olyan személy, akivel kölcsönös szeretetszál köti össze'
      },
      {
        id: 60,
        word: 'priateľ',
        language: Language.sk,
        description: 'osoba, s ktorou má človek vzájomný citový vzťah'
      },
      {
        id: 60,
        word: 'přítel',
        language: Language.cz,
        description: 'osoba, se kterou má člověk vzájemný citový vztah'
      },
      {
        id: 60,
        word: 'vinur',
        language: Language.is,
        description: 'sá sem maður á sameiginlega ástríðu við'
      },
      {
        id: 61,
        word: 'family',
        language: Language.eng,
        description: 'a group of individuals living together'
      },
      {
        id: 61,
        word: 'család',
        language: Language.hu,
        description: 'együtt élő egyének csoportja'
      },
      {
        id: 61,
        word: 'rodina',
        language: Language.sk,
        description: 'skupina jednotlivcov žijúcich spolu'
      },
      {
        id: 61,
        word: 'rodina',
        language: Language.cz,
        description: 'skupina jednotlivců žijících spolu'
      },
      {
        id: 61,
        word: 'fjölskylda',
        language: Language.is,
        description: 'hópur einstaklinga sem búa saman'
      },
      {
        id: 62,
        word: 'love',
        language: Language.eng,
        description: 'an intense feeling of affection or deep attachment'
      },
      {
        id: 62,
        word: 'szeretet',
        language: Language.hu,
        description: 'erős érzelmi kötődés vagy mély ragaszkodás'
      },
      {
        id: 62,
        word: 'láska',
        language: Language.sk,
        description: 'intenzívne pocity náklonnosti alebo hlboké puto'
      },
      {
        id: 62,
        word: 'láska',
        language: Language.cz,
        description: 'intenzivní pocit náklonnosti nebo hluboká připoutanost'
      },
      {
        id: 62,
        word: 'ást',
        language: Language.is,
        description: 'sterk tilfinning fyrir kærleika eða djúpt tengsl'
      },
      {
        id: 63,
        word: 'pen',
        language: Language.eng,
        description: 'a writing instrument used to apply ink to a surface'
      },
      {
        id: 63,
        word: 'toll',
        language: Language.hu,
        description: 'íráshoz használt eszköz, amellyel tintát visznek fel egy felületre'
      },
      {
        id: 63,
        word: 'pero',
        language: Language.sk,
        description: 'písací nástroj používaný na nanášanie atramentu na povrch'
      },
      {
        id: 63,
        word: 'pero',
        language: Language.cz,
        description: 'psací nástroj používaný k nanášení inkoustu na povrch'
      },
      {
        id: 63,
        word: 'penni',
        language: Language.is,
        description: 'skriftatæki sem notað er til að setja blek á yfirborð'
      },
      {
        id: 64,
        word: 'pencil',
        language: Language.eng,
        description: 'a narrow cylindrical instrument used for writing'
      },
      {
        id: 64,
        word: 'ceruza',
        language: Language.hu,
        description: 'keskeny henger alakú írószer'
      },
      {
        id: 64,
        word: 'ceruzka',
        language: Language.sk,
        description: 'úzky valcovitý nástroj na písanie'
      },
      {
        id: 64,
        word: 'tužka',
        language: Language.cz,
        description: 'úzký válcovitý nástroj na psaní'
      },
      {
        id: 64,
        word: 'blýantur',
        language: Language.is,
        description: 'þunnur sylindrískur skrifstofutoll'
      },
      {
        id: 65,
        word: 'table',
        language: Language.eng,
        description: 'a piece of furniture with a flat top and one or more legs'
      },
      {
        id: 65,
        word: 'asztal',
        language: Language.hu,
        description: 'lapos tetejű bútordarab, egy vagy több lábbal'
      },
      {
        id: 65,
        word: 'stôl',
        language: Language.sk,
        description: 'nábytok s rovnou vrchnou časťou a jednou alebo viacerými nohami'
      },
      {
        id: 65,
        word: 'stůl',
        language: Language.cz,
        description: 'nábytek s rovnou deskou a jednou nebo více nohami'
      },
      {
        id: 65,
        word: 'borð',
        language: Language.is,
        description: 'mæbli með flatri toppi og einni eða fleiri fótum'
      },
      {
        id: 66,
        word: 'chair',
        language: Language.eng,
        description: 'a piece of furniture with a raised surface'
      },
      {
        id: 66,
        word: 'szék',
        language: Language.hu,
        description: 'egy bútordarab emelt felülettel'
      },
      {
        id: 66,
        word: 'stolička',
        language: Language.sk,
        description: 'nábytok s vystúpeným povrchom'
      },
      {
        id: 66,
        word: 'židle',
        language: Language.cz,
        description: 'nábytek s vyvýšeným povrchem'
      },
      {
        id: 66,
        word: 'stóll',
        language: Language.is,
        description: 'mæbli með upphæðum yfirborði'
      },
      {
        id: 67,
        word: 'computer',
        language: Language.eng,
        description: 'an electronic device for processing data'
      },
      {
        id: 67,
        word: 'számítógép',
        language: Language.hu,
        description: 'elektronikai eszköz adatfeldolgozásra'
      },
      {
        id: 67,
        word: 'počítač',
        language: Language.sk,
        description: 'elektronické zariadenie na spracovanie údajov'
      },
      {
        id: 67,
        word: 'počítač',
        language: Language.cz,
        description: 'elektronické zařízení pro zpracování dat'
      },
      {
        id: 67,
        word: 'tölva',
        language: Language.is,
        description: 'rafmagnstæki til að vinna með gögn'
      },
      {
        id: 68,
        word: 'phone',
        language: Language.eng,
        description: 'a device used for communication'
      },
      {
        id: 68,
        word: 'telefon',
        language: Language.hu,
        description: 'kommunikációra használt eszköz'
      },
      {
        id: 68,
        word: 'telefón',
        language: Language.sk,
        description: 'zariadenie používané na komunikáciu'
      },
      {
        id: 68,
        word: 'telefon',
        language: Language.cz,
        description: 'zařízení používané pro komunikaci'
      },
      {
        id: 68,
        word: 'sími',
        language: Language.is,
        description: 'tæki sem notað er til samskipta'
      },
      {
        id: 69,
        word: 'music',
        language: Language.eng,
        description: 'an artistic form of auditory expression'
      },
      {
        id: 69,
        word: 'zene',
        language: Language.hu,
        description: 'a hallásos kifejezés művészi formája'
      },
      {
        id: 69,
        word: 'hudba',
        language: Language.sk,
        description: 'umelecká forma zvukovej expresie'
      },
      {
        id: 69,
        word: 'hudba',
        language: Language.cz,
        description: 'umělecká forma zvukového vyjádření'
      },
      {
        id: 69,
        word: 'tónlist',
        language: Language.is,
        description: 'listræn tegund hljóðhæðni'
      },
      {
        id: 70,
        word: 'art',
        language: Language.eng,
        description: 'the expression or application of human creative skill'
      },
      {
        id: 70,
        word: 'művészet',
        language: Language.hu,
        description: 'az emberi alkotókészség kifejezése vagy alkalmazása'
      },
      {
        id: 70,
        word: 'umenie',
        language: Language.sk,
        description: 'vyjadrenie alebo uplatnenie ľudskej tvorivej zručnosti'
      },
      {
        id: 70,
        word: 'umění',
        language: Language.cz,
        description: 'vyjádření nebo uplatnění lidské tvůrčí dovednosti'
      },
      {
        id: 70,
        word: 'list',
        language: Language.is,
        description: 'tilraun til að tjá eða nota mannlega sköpunarhæfileika'
      },
      {
        id: 71,
        word: 'sport',
        language: Language.eng,
        description: 'physical activity involving skill and competition'
      },
      {
        id: 71,
        word: 'sport',
        language: Language.hu,
        description: 'képességet és versenyt igénylő testmozgás'
      },
      {
        id: 71,
        word: 'šport',
        language: Language.sk,
        description: 'fyzická aktivita zahŕňajúca zručnosť a súťaž'
      },
      {
        id: 71,
        word: 'sport',
        language: Language.cz,
        description: 'fyzická aktivita vyžadující dovednost a soutěž'
      },
      {
        id: 71,
        word: 'íþrótt',
        language: Language.is,
        description: 'hreyfing sem felur í sér hæfni og keppni'
      },
      {
        id: 72,
        word: 'work',
        language: Language.eng,
        description: 'activity involving mental or physical effort'
      },
      {
        id: 72,
        word: 'munka',
        language: Language.hu,
        description: 'szellemi vagy fizikai erőfeszítést igénylő tevékenység'
      },
      {
        id: 72,
        word: 'práca',
        language: Language.sk,
        description: 'činnosť vyžadujúca mentálnu alebo fyzickú námahu'
      },
      {
        id: 72,
        word: 'práce',
        language: Language.cz,
        description: 'činnost vyžadující duševní nebo fyzické úsilí'
      },
      {
        id: 72,
        word: 'vinna',
        language: Language.is,
        description: 'starfsemi sem felur í sér andlega eða líkamlega áreynslu'
      },
      {
        id: 73,
        word: 'study',
        language: Language.eng,
        description: 'the acquisition of knowledge through learning'
      },
      {
        id: 73,
        word: 'tanulás',
        language: Language.hu,
        description: 'ismeretek elsajátítása tanulás által'
      },
      {
        id: 73,
        word: 'štúdium',
        language: Language.sk,
        description: 'osvojovanie vedomostí prostredníctvom učenia sa'
      },
      {
        id: 73,
        word: 'studium',
        language: Language.cz,
        description: 'získávání znalostí prostřednictvím učení'
      },
      {
        id: 73,
        word: 'nám',
        language: Language.is,
        description: 'öðun þekkingar með lærdómi'
      },
      {
        id: 74,
        word: 'play',
        language: Language.eng,
        description: 'engaging in an activity for enjoyment and recreation'
      },
      {
        id: 74,
        word: 'játék',
        language: Language.hu,
        description: 'belefoglalódás egy tevékenységbe a szórakozás és kikapcsolódás céljából'
      },
      {
        id: 74,
        word: 'hra',
        language: Language.sk,
        description: 'zúčastňovanie sa činnosti pre zábavu a rekreáciu'
      },
      {
        id: 74,
        word: 'hra',
        language: Language.cz,
        description: 'účast v činnosti pro zábavu a rekreaci'
      },
      {
        id: 74,
        word: 'leikur',
        language: Language.is,
        description: 'þátttaka í athöfn fyrir skemmtun og afþreyingu'
      },
      {
        id: 75,
        word: 'sleep',
        language: Language.eng,
        description: 'a natural state of rest for the body and mind'
      },
      {
        id: 75,
        word: 'alvás',
        language: Language.hu,
        description: 'a test és az elme természetes pihenőállapota'
      },
      {
        id: 75,
        word: 'spánok',
        language: Language.sk,
        description: 'prirodzený stav odpočinku pre telo a myseľ'
      },
      {
        id: 75,
        word: 'spánek',
        language: Language.cz,
        description: 'přirozený stav odpočinku pro tělo a mysl'
      },
      {
        id: 75,
        word: 'svefn',
        language: Language.is,
        description: 'náttúruleg hvíldarstig líkamans og hugans'
      },
      {
        id: 76,
        word: 'eat',
        language: Language.eng,
        description: 'to consume food by mouth'
      },
      {
        id: 76,
        word: 'enni',
        language: Language.hu,
        description: 'ételt fogyasztani a szájjal'
      },
      {
        id: 76,
        word: 'jesť',
        language: Language.sk,
        description: 'konzumovať jedlo ústami'
      },
      {
        id: 76,
        word: 'jíst',
        language: Language.cz,
        description: 'konzumovat jídlo ústy'
      },
      {
        id: 76,
        word: 'borða',
        language: Language.is,
        description: 'að neyta fæðu með munni'
      },
      {
        id: 77,
        word: 'drink',
        language: Language.eng,
        description: 'to consume a liquid through the mouth'
      },
      {
        id: 77,
        word: 'inni',
        language: Language.hu,
        description: 'folyadékot fogyasztani a szájjal'
      },
      {
        id: 77,
        word: 'piť',
        language: Language.sk,
        description: 'konzumovať tekutinu ústami'
      },
      {
        id: 77,
        word: 'pít',
        language: Language.cz,
        description: 'konzumovat tekutinu ústy'
      },
      {
        id: 77,
        word: 'drekka',
        language: Language.is,
        description: 'að drekka vökva með munni'
      },
      {
        id: 78,
        word: 'run',
        language: Language.eng,
        description: 'to move swiftly on foot'
      },
      {
        id: 78,
        word: 'futni',
        language: Language.hu,
        description: 'gyorsan mozogni gyalog'
      },
      {
        id: 78,
        word: 'bežať',
        language: Language.sk,
        description: 'rýchlo sa pohybovať pešo'
      },
      {
        id: 78,
        word: 'běhat',
        language: Language.cz,
        description: 'rychle se pohybovat pěšky'
      },
      {
        id: 78,
        word: 'hlaupa',
        language: Language.is,
        description: 'að hreyfa sig fljótt á fótum'
      },
      {
        id: 79,
        word: 'swim',
        language: Language.eng,
        description: 'to move through water using limbs'
      },
      {
        id: 79,
        word: 'úszni',
        language: Language.hu,
        description: 'mozogni a vízben végtagok segítségével'
      },
      {
        id: 79,
        word: 'plávať',
        language: Language.sk,
        description: 'pohybovať sa vo vode pomocou končatín'
      },
      {
        id: 79,
        word: 'plavat',
        language: Language.cz,
        description: 'pohybovat se ve vodě pomocí končetin'
      },
      {
        id: 79,
        word: 'synda',
        language: Language.is,
        description: 'að hreyfast í gegnum vatn með útlimum'
      },
      {
        id: 80,
        word: 'jump',
        language: Language.eng,
        description: 'to propel oneself upward into the air'
      },
      {
        id: 80,
        word: 'ugrani',
        language: Language.hu,
        description: 'magasba lökni magát a levegőben'
      },
      {
        id: 80,
        word: 'skákať',
        language: Language.sk,
        description: 'vystrelit sa samého do vzduchu'
      },
      {
        id: 80,
        word: 'skákat',
        language: Language.cz,
        description: 'vystřelit sebe nahoru do vzduchu'
      },
      {
        id: 80,
        word: 'hoppa',
        language: Language.is,
        description: 'að hrifsa sig sjálfan upp í loftið'
      },
      {
        id: 81,
        word: 'laugh',
        language: Language.eng,
        description: 'to express amusement or joy with sound'
      },
      {
        id: 81,
        word: 'nevetni',
        language: Language.hu,
        description: 'szórakozottságot vagy örömöt kifejezni hanggal'
      },
      {
        id: 81,
        word: 'smiať sa',
        language: Language.sk,
        description: 'vyjadrovať zábavu alebo radosť zvukom'
      },
      {
        id: 81,
        word: 'smát se',
        language: Language.cz,
        description: 'vyjádřit pobavení nebo radost zvukem'
      },
      {
        id: 81,
        word: 'hlæja',
        language: Language.is,
        description: 'að tjá gleði eða gaman með hljóði'
      },
      {
        id: 82,
        word: 'cry',
        language: Language.eng,
        description: 'to shed tears as an expression of emotion'
      },
      {
        id: 82,
        word: 'sírni',
        language: Language.hu,
        description: 'könnyeket hullatni érzelem kifejezésére'
      },
      {
        id: 82,
        word: 'plakať',
        language: Language.sk,
        description: 'prehodiť slzy ako prejav emócií'
      },
      {
        id: 82,
        word: 'plakat',
        language: Language.cz,
        description: 'prolít slzy jako vyjádření emocí'
      },
      {
        id: 82,
        word: 'gráta',
        language: Language.is,
        description: 'að sleikja tár sem tilfinninga yfirlýsingu'
      },
      {
        id: 83,
        word: 'it',
        language: Language.eng,
        description: 'the third-person singular pronoun (neuter)'
      },
      {
        id: 83,
        word: 'az',
        language: Language.hu,
        description: 'a harmadik személy egyes számú névmás (semleges nem)'
      },
      {
        id: 83,
        word: 'to',
        language: Language.sk,
        description: 'zámeno tretie osoby jednotného čísla (stredný rod)'
      },
      {
        id: 83,
        word: 'to',
        language: Language.cz,
        description: 'zájmeno třetí osoby jednotného čísla (střední rod)'
      },
      {
        id: 83,
        word: 'það',
        language: Language.is,
        description: 'persónulegt fornafn í eintölu (hvættkyn)'
      }
    ];

    const existingWords = await prisma.words.findMany();

    const newWords = wordList.filter((word) => {
      const exists = existingWords.some(
          (existingWord: Words) =>
              existingWord.word === word.word && existingWord.language === word.language
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
        },
      });
      console.log(`Word created with id: ${createdWord.id}`);
    }
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();