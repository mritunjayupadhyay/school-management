import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class QuestionListService {
  questions = [
    {
      question_id: 1,
      title: 'Who is greatest king of Gupta Dynesty. Who is greatest king of Gupta Dynesty.Who is greatest king of Gupta Dynesty.Who is greatest king of Gupta Dynesty.Who is greatest king of Gupta Dynesty.Who is greatest king of Gupta Dynesty.Who is greatest king of Gupta Dynesty.Who is greatest king of Gupta Dynesty?',
      subject: 'History',
      level: 1,
      division: '9',
      institution: 'Pragatisheel',
      options: [
        {
          option_id: 1,
          text: 'Vikramaditya.Who is greatest king of Gupta Dynesty. Who is greatest king of Gupta DynestyWho is greatest king of Gupta DynestyWho is greatest king of Gupta DynestyWho is greatest king of Gupta Dynesty',
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
    },
    {
      question_id: 2,
      title: 'Who introduce Mansabdaari system?',
      subject: 'History',
      level: 2,
      division: '9',
      institution: 'Pragatisheel',
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
          correct: false,
        },
        {
          option_id: 4,
          text: 'Ashok. Vikramaditya.Who is greatest king of Gupta Dynesty. Who is greatest king of Gupta DynestyWho is greatest king of Gupta DynestyWho is greatest king of Gupta DynestyWho is greatest king of Gupta Dynesty',
          correct: false,
        },
      ],
    },
  ];

  getQuestion() {
    return [...this.questions];
  }
}
