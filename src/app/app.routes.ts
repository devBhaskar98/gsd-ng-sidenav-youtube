import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContentsComponent } from './pages/contents/contents.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { CommentsComponent } from './pages/comments/comments.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'content',
        component: ContentsComponent
    },
    {
        path: 'analytics',
        component: AnalyticsComponent
    },
    {
        path: 'comments',
        component: CommentsComponent
    },
    
];
