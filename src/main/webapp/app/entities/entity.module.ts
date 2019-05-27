import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'candidate',
                loadChildren: './candidate/candidate.module#InterviewManagementCandidateModule'
            },
            {
                path: 'interview',
                loadChildren: './interview/interview.module#InterviewManagementInterviewModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InterviewManagementEntityModule {}
