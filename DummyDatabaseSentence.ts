/*export const DummyDatabaseSentence: { id: number; english_sentence: object; german_sentence: object[] }[] = [
    { id: 1,
        english_sentence: [
            {
                id:1,
                word: "I"
            },
            {
                id:2,
                word:"love"
            },
            {
                id:3,
                word: "you"
            }
        ],
        german_sentence: [
            {
                id:1,
                word: "Ich"
            },
            {
                id:2,
                word:"liebe"
            },
            {
                id:3,
                word: "dich"
            }
        ],
    },
    { id: 2,
        english_sentence: [
            {
                id:1,
                word: "Do you"
            },
            {
                id:2,
                word:"speak"
            },
            {
                id:3,
                word: "english?"
            }
        ],
        german_sentence: [
            {
                id:1,
                word: "Sprechen"
            },
            {
                id:2,
                word:"Sie"
            },
            {
                id:3,
                word: "Deutsch?"
            }
        ],
    },

];*/

export const DummyDatabaseSentence: {id: number, english_sentence: string, german_sentence: string}[] = [
    {
        id: 1,
        english_sentence: "I love you",
        german_sentence: "Ich liebe dich"
    },
    {
        id: 2,
        english_sentence: "Do/you speak english?",
        german_sentence: "Sprechen Sie Deutsch?"
    },
    {
        id: 3,
        english_sentence: "Good morning",
        german_sentence: "Guten Tag"
    },
    {
        id: 4,
        english_sentence: "I/am come from London",
        german_sentence: "Ich komme aus London",
    }
]