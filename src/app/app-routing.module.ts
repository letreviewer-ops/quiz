import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: 'home', 
    loadChildren: () => import('./pages/home/home.module')
    .then( m => m.HomePageModule)
  },
  {
    path: 'examinee-login',
    loadChildren: () => import('./pages/examinee-login/examinee-login.module')
    .then( m => m.ExamineeLoginPageModule)
  },
  {
    path: 'admin-login',
    loadChildren: () => import('./pages/admin-login/admin-login.module')
    .then( m => m.AdminLoginPageModule)
  },
  {
    path: 'add-examinee',
    loadChildren: () => import('./pages/add-examinee/add-examinee.module')
    .then( m => m.AddExamineePageModule)
  },
  {
    path: 'examinee-menu',
    loadChildren: () => import('./pages/examinee-menu/examinee-menu.module')
    .then( m => m.ExamineeMenuPageModule)
  },
  {
    path: 'admin-menu',
    loadChildren: () => import('./pages/admin-menu/admin-menu.module')
    .then( m => m.AdminMenuPageModule)
  },
  {
    path: 'examinee-list',
    loadChildren: () => import('./pages/examinee-list/examinee-list.module')
    .then( m => m.ExamineeListPageModule)
  },
  {
    path: 'examinee-scores-stats',
    loadChildren: () => import('./pages/examinee-scores-stats/examinee-scores-stats.module')
    .then( m => m.ExamineeScoresStatsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module')
    .then( m => m.AboutPageModule)
  },
  {
    path: 'instructions',
    loadChildren: () => import('./pages/instructions/instructions.module')
    .then( m => m.InstructionsPageModule)
  },
  {
    path: 'update-examinee/:id',
    loadChildren: () => import('./pages/update-examinee/update-examinee.module')
    .then( m => m.UpdateExamineePageModule)
  },
  {
    path: 'examinee-details/:id',
    loadChildren: () => import('./pages/examinee-details/examinee-details.module')
    .then( m => m.ExamineeDetailsPageModule)
  },
  {
    path: 'take-test',
    loadChildren: () => import('./pages/take-test/take-test.module')
    .then( m => m.TakeTestPageModule)
  },
  {
    path: 'start-exam-english-subject',
    loadChildren: () => import('./pages/start-exam-english-subject/start-exam-english-subject.module')
    .then( m => m.StartExamEnglishSubjectPageModule)
  },
  {
    path: 'start-exam-filipino-subject',
    loadChildren: () => import('./pages/start-exam-filipino-subject/start-exam-filipino-subject.module')
    .then( m => m.StartExamFilipinoSubjectPageModule)
  },
  {
    path: 'start-exam-math-subject',
    loadChildren: () => import('./pages/start-exam-math-subject/start-exam-math-subject.module')
    .then( m => m.StartExamMathSubjectPageModule)
  },
  {
    path: 'start-exam-science-subject',
    loadChildren: () => import('./pages/start-exam-science-subject/start-exam-science-subject.module')
    .then( m => m.StartExamScienceSubjectPageModule)
  },
  {
    path: 'start-exam-social-studies-subject',
    loadChildren: () => import('./pages/start-exam-social-studies-subject/start-exam-social-studies-subject.module')
    .then( m => m.StartExamSocialStudiesSubjectPageModule)
  },
  {
    path: 'score-result',
    loadChildren: () => import('./pages/score-result/score-result.module')
    .then( m => m.ScoreResultPageModule)
  },
  {
    path: 'select-subject-qa',
    loadChildren: () => import('./pages/select-subject-qa/select-subject-qa.module')
    .then( m => m.SelectSubjectQaPageModule)
  },
  {
    path: 'english-question-answer-list',
    loadChildren: () => import('./pages/english-question-answer-list/english-question-answer-list.module')
    .then( m => m.EnglishQuestionAnswerListPageModule)
  },
  {
    path: 'filipino-question-answer-list',
    loadChildren: () => import('./pages/filipino-question-answer-list/filipino-question-answer-list.module')
    .then( m => m.FilipinoQuestionAnswerListPageModule)
  },
  {
    path: 'math-question-answer-list',
    loadChildren: () => import('./pages/math-question-answer-list/math-question-answer-list.module')
    .then( m => m.MathQuestionAnswerListPageModule)
  },
  {
    path: 'science-question-answer-list',
    loadChildren: () => import('./pages/science-question-answer-list/science-question-answer-list.module')
    .then( m => m.ScienceQuestionAnswerListPageModule)
  },
  {
    path: 'social-studies-question-answer-list',
    loadChildren: () => import('./pages/social-studies-question-answer-list/social-studies-question-answer-list.module')
    .then( m => m.SocialStudiesQuestionAnswerListPageModule)
  },
  {
    path: 'update-english-question/:id',
    loadChildren: () => import('./pages/update-english-question/update-english-question.module').then( m => m.UpdateEnglishQuestionPageModule)
  },
  {
    path: 'details-english-question/:id',
    loadChildren: () => import('./pages/details-english-question/details-english-question.module').then( m => m.DetailsEnglishQuestionPageModule)
  },
  {
    path: 'add-english-question',
    loadChildren: () => import('./pages/add-english-question/add-english-question.module').then( m => m.AddEnglishQuestionPageModule)
  },
  {
    path: 'scores',
    loadChildren: () => import('./pages/scores/scores.module').then( m => m.ScoresPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, 
      { 
        preloadingStrategy: PreloadAllModules 
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
