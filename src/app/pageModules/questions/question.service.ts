import { Injectable } from '@angular/core';

@Injectable()
export class QuestionService {
  questions = [
    {
      question_id: 1,
      createdAt: new Date(),
      title: 'Who is greatest king of Gupta Dynesty?',
      subject: 'History',
      level: 1,
      division: '9',
      insitution: 'Pragatisheel',
      createdBy: 'mritunjay@gmail.com',
      no_correct_answer: 1,
      options: [
        {
          option_id: 1,
          text: 'Vikramaditya',
          correct: true,
        },
        {
          option_id: 2,
          text: 'Samudra Gupta',
          correct: false,
        },
        {
          option_id: 3,
          text: 'Chandra Gupta',
          correct: false,
        },
        {
          option_id: 1,
          text: 'Ashok',
          correct: false,
        },
      ],
      status: {
        valid: true,
        reason: '',
      }
    },
    {
      question_id: 2,
      createdAt: new Date(),
      title: 'Who introduce Mansabdaari system?',
      subject: 'History',
      level: 2,
      division: '9',
      insitution: 'Pragatisheel',
      no_correct_answer: 1,
      createdBy: 'mritunjay@gmail.com',
      options: [
        {
          option_id: 1,
          text: 'Vikramaditya',
          correct: false,
        },
        {
          option_id: 2,
          text: 'Akbar',
          correct: true,
        },
        {
          option_id: 3,
          text: 'Chandra Gupta',
          correct: true,
        },
        {
          option_id: 1,
          text: 'Ashok',
          correct: false,
        },
      ],
      status: {
        valid: false,
        reason: 'This question have more than one correct answer',
      }
    }
  ];

  getQuestion() {
    return [...this.questions];
  }

  editQuestion(id: string) {
  }

  deleteQuestion(id: string) {
  }
}
