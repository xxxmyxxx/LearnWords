export interface FlashCard {
  word: string;
  translation: string;
  translationNative: string;
  hint: {
    target: string;
    native: string;
  };
  language: {
    target: string;
    native: string;
  };
  level: string;
}

export const englishTurkishCards: FlashCard[] = [
  {
    word: "spelling",
    translation: "spelling",
    translationNative: "yazım",
    hint: {
      target: "Can you check the spelling of this word?",
      native: "Bu kelimenin yazımını kontrol edebilir misiniz?"
    },
    language: {
      target: "English",
      native: "Türkçe"
    },
    level: "Beginner"
  },
  {
    word: "approval",
    translation: "approval",
    translationNative: "onay",
    hint: {
      target: "I need your approval for this project.",
      native: "Bu proje için onayınıza ihtiyacım var."
    },
    language: {
      target: "English",
      native: "Türkçe"
    },
    level: "Beginner"
  },
  {
    word: "musical",
    translation: "musical",
    translationNative: "müzikal",
    hint: {
      target: "We went to see a musical at the theater.",
      native: "Tiyatroda bir müzikal izlemeye gittik."
    },
    language: {
      target: "English",
      native: "Türkçe"
    },
    level: "Beginner"
  }
];

export const germanTurkishCards: FlashCard[] = [
  {
    word: "Apfel",
    translation: "apple",
    translationNative: "elma",
    hint: {
      target: "Ich esse einen Apfel.",
      native: "Bir elma yiyorum."
    },
    language: {
      target: "German",
      native: "Türkçe"
    },
    level: "Beginner"
  },
  {
    word: "Haus",
    translation: "house",
    translationNative: "ev",
    hint: {
      target: "Das ist mein Haus.",
      native: "Bu benim evim."
    },
    language: {
      target: "German",
      native: "Türkçe"
    },
    level: "Beginner"
  },
  {
    word: "Buch",
    translation: "book",
    translationNative: "kitap",
    hint: {
      target: "Ich lese ein Buch.",
      native: "Bir kitap okuyorum."
    },
    language: {
      target: "German",
      native: "Türkçe"
    },
    level: "Beginner"
  }
];

export const japaneseTurkishCards: FlashCard[] = [
  {
    word: "水",
    translation: "water",
    translationNative: "su",
    hint: {
      target: "水を飲みます。",
      native: "Su içiyorum."
    },
    language: {
      target: "Japanese",
      native: "Türkçe"
    },
    level: "Beginner"
  },
  {
    word: "猫",
    translation: "cat",
    translationNative: "kedi",
    hint: {
      target: "私は猫が好きです。",
      native: "Kedileri severim."
    },
    language: {
      target: "Japanese",
      native: "Türkçe"
    },
    level: "Beginner"
  },
  {
    word: "本",
    translation: "book",
    translationNative: "kitap",
    hint: {
      target: "これは本です。",
      native: "Bu bir kitaptır."
    },
    language: {
      target: "Japanese",
      native: "Türkçe"
    },
    level: "Beginner"
  }
];

export const availableCardSets = {
  "English-Türkçe": englishTurkishCards,
  "German-Türkçe": germanTurkishCards,
  "Japanese-Türkçe": japaneseTurkishCards
};
