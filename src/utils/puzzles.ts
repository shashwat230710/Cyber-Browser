export interface Puzzle {
  id: string;
  type: 'html' | 'css' | 'regex' | 'binary';
  question: string;
  options: string[];
  correctAnswer: number;
}

export const hackPuzzles: Puzzle[] = [
  {
    id: 'p1',
    type: 'html',
    question: 'Fix the broken tag: <a href="http://example.com" Click Here </a>',
    options: [
      '<a href="http://example.com"> Click Here </a>',
      '<a href="http://example.com"> Click Here <a/>',
      '<a link="http://example.com"> Click Here </a>'
    ],
    correctAnswer: 0
  },
  {
    id: 'p2',
    type: 'css',
    question: 'Make the text bold in CSS:',
    options: [
      'text-weight: bold;',
      'font-weight: bold;',
      'text-style: bold;'
    ],
    correctAnswer: 1
  },
  {
    id: 'p3',
    type: 'binary',
    question: 'What is 0101 in decimal?',
    options: ['4', '5', '6'],
    correctAnswer: 1
  },
  {
    id: 'p4',
    type: 'html',
    question: 'Which tag creates a table row?',
    options: ['<td>', '<table>', '<tr>'],
    correctAnswer: 2
  },
  {
    id: 'p5',
    type: 'regex',
    question: 'Match exactly three digits:',
    options: ['\\d{3}', '\\d*', '\\D{3}'],
    correctAnswer: 0
  }
  // Will be expanded with more puzzles
];
