import { Volume2, Lightbulb, Eye, Shuffle, ArrowRight, ArrowLeft } from 'lucide-react';

export const flashcards = [
  {
    id: "1",
    question: "Comment t’appelles-tu?",
    hintText: "What is your name?",
    answer: "Je m’appelle Tim.",
    answerEnglish: "My name is Tim."
  },
  {
    id: "2",
    question: "Quelle est la date aujourd’hui?",
    hintText: "What is the date today?",
    answer: "Aujourd’hui c’est le 8 Juin 2026.",
    answerEnglish: "Today is June 8, 2026."
  },
  {
    id: "3",
    question: "Quel est le jour aujourd’hui ?",
    hintText: "What day is it today?",
    answer: "C’est lundi.",
    answerEnglish: "It is Monday."
  },
  {
    id: "4",
    question: "Quelle heure est-il?",
    hintText: "What time is it?",
    answer: "Il est neuf heures / Il est midi / (State the current time).",
    answerEnglish: "It is nine o'clock / It is noon / (State the current time)."
  },
  {
    id: "5",
    question: "Quand est ton anniversaire?",
    hintText: "When is your birthday?",
    answer: "Mon anniversaire est le 2 août.",
    answerEnglish: "My birthday is August 2nd."
  },
  {
    id: "6",
    question: "Est-ce que tu as des frères ou des soeurs ?",
    hintText: "Do you have brothers or sisters?",
    answer: "Oui, j’ai une sœur... / Non, je suis enfant unique.",
    answerEnglish: "Yes, I have a sister... / No, I am an only child."
  },
  {
    id: "7",
    question: "Tu es d’où ?",
    hintText: "Where are you from?",
    answer: "Je suis du Canada.",
    answerEnglish: "I am from Canada."
  },
  {
    id: "8",
    question: "Quelle est ta nationalité ?",
    hintText: "What is your nationality?",
    answer: "Je suis Canadien.",
    answerEnglish: "I am Canadian."
  },
  {
    id: "9",
    question: "Quel temps fait-il?",
    hintText: "What is the weather like?",
    answer: "Il fait beau. / Il fait soleil. / Il pleut.",
    answerEnglish: "The weather is nice. / It is sunny. / It is raining."
  },
  {
    id: "10",
    question: "Est-ce que tu as des animaux domestiques? Comment s’appelle-t-il?",
    hintText: "Do you have pets? What is their name?",
    answer: "Oui, j’ai un chien qui s’appelle... / Non, je n’ai pas d’animaux domestiques.",
    answerEnglish: "Yes, I have a dog named... / No, I do not have pets."
  },
  {
    id: "11",
    question: "Qu’est-ce que tu aimes manger pour le petit déjeuner ?",
    hintText: "What do you like to eat for breakfast?",
    answer: "Pour le déjeuner, j’aime manger des céréales.",
    answerEnglish: "For breakfast, I like to eat cereal."
  },
  {
    id: "12",
    question: "Quelle est ta couleur préférée?",
    hintText: "What is your favorite color?",
    answer: "Ma couleur préférée est le bleu/rouge/vert.",
    answerEnglish: "My favorite color is blue/red/green."
  },
  {
    id: "13",
    question: "Quelles activités est-ce que tu aimes faire ?",
    hintText: "What activities do you like to do?",
    answer: "J’aime jouer aux jeux vidéo / au tennis.",
    answerEnglish: "I like playing video games / tennis."
  },
  {
    id: "14",
    question: "Où est-ce que tu habites ?",
    hintText: "Where do you live?",
    answer: "J’habite à Markham.",
    answerEnglish: "I live in Markham."
  },
  {
    id: "15",
    question: "De quel instrument joues-tu?",
    hintText: "What instrument do you play?",
    answer: "Je joue du piano / de la guitare. (Ou: Je ne joue pas d'un instrument)",
    answerEnglish: "I play the piano / the guitar. (Or: I don't play an instrument)"
  },
  {
    id: "16",
    question: "À quels sports joues-tu?",
    hintText: "What sports do you play?",
    answer: "Je joue au tennis... / Je ne joue pas aux sports.",
    answerEnglish: "I play tennis... / I don't play sports."
  },
  {
    id: "17",
    question: "De quelle couleur sont tes cheveux?",
    hintText: "What color is your hair?",
    answer: "Mes cheveux sont bruns / blonds / noirs.",
    answerEnglish: "My hair is brown / blond / black."
  },
  {
    id: "18",
    question: "De quelle couleur sont tes yeux?",
    hintText: "What color are your eyes?",
    answer: "Mes yeux sont bruns / bleus / verts.",
    answerEnglish: "My eyes are brown / blue / green."
  },
  {
    id: "19",
    question: "Quelle est ta saison préférée?",
    hintText: "What is your favorite season?",
    answer: "Ma saison préférée est l'été / l’hiver / l'automne / le printemps.",
    answerEnglish: "My favorite season is summer / winter / fall / spring."
  },
  {
    id: "20",
    question: "Quel est ton animal préféré?",
    hintText: "What is your favorite animal?",
    answer: "Mon animal préféré est le chien / le chat.",
    answerEnglish: "My favorite animal is the dog / the cat."
  },
  {
    id: "21",
    question: "Quel est ton goûter préféré?",
    hintText: "What is your favorite snack?",
    answer: "Mon goûter préféré c’est les croustilles.",
    answerEnglish: "My favorite snack is chips."
  },
  {
    id: "22",
    question: "Est-ce que tu aimes la natation ?",
    hintText: "Do you like swimming?",
    answer: "Oui, j’aime la natation. / Non, je n’aime pas la natation.",
    answerEnglish: "Yes, I like swimming. / No, I do not like swimming."
  },
  {
    id: "23",
    question: "Quel est ton passe-temps préféré?",
    hintText: "What is your favorite hobby?",
    answer: "Mon passe-temps préféré c’est les jeux vidéo / les randonnées.",
    answerEnglish: "My favorite hobby is video games / hiking."
  },
  {
    id: "24",
    question: "Où est la poubelle?",
    hintText: "Where is the garbage can?",
    answer: "La poubelle est à côté de la porte.",
    answerEnglish: "The garbage can is next to the door."
  },
  {
    id: "25",
    question: "Où est l’ordinateur?",
    hintText: "Where is the computer?",
    answer: "L’ordinateur est au devant de la classe.",
    answerEnglish: "The computer is at the front of the class."
  },
  {
    id: "26",
    question: "Où est l’étagère?",
    hintText: "Where is the bookshelf?",
    answer: "L’étagère est à gauche du tableau.",
    answerEnglish: "The bookshelf is to the left of the board."
  },
  {
    id: "27",
    question: "Où est ton sac à dos?",
    hintText: "Where is your backpack?",
    answer: "Mon sac à dos est sous le pupitre.",
    answerEnglish: "My backpack is under the desk."
  },
  {
    id: "28",
    question: "Comment ça va?",
    hintText: "How are you doing/feeling?",
    answer: "Ça va bien. / J’ai chaud. / J’ai soif.",
    answerEnglish: "I am doing well. / I am hot. / I am thirsty."
  },
  {
    id: "29",
    question: "Quel âge as-tu?",
    hintText: "How old are you?",
    answer: "J’ai 14 ans.",
    answerEnglish: "I am 14 years old."
  },
  {
    id: "30",
    question: "Est-ce que tu as un crayon, un stylo, du papier, une gomme ?",
    hintText: "Do you have a pencil, a pen, paper, an eraser?",
    answer: "Oui, j’ai un crayon. / Non, je n’ai pas de stylo.",
    answerEnglish: "Yes, I have a pencil. / No, I don't have a pen."
  },
  {
    id: "31",
    question: "Est-ce que tu as un stylo rouge ?",
    hintText: "Do you have a red pen?",
    answer: "Oui, tiens. / Non, je n’ai pas de stylo rouge.",
    answerEnglish: "Yes, here you go. / No, I do not have a red pen."
  }
];
