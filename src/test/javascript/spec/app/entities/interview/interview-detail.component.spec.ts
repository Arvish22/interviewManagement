/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { InterviewManagementTestModule } from '../../../test.module';
import { InterviewDetailComponent } from 'app/entities/interview/interview-detail.component';
import { Interview } from 'app/shared/model/interview.model';

describe('Component Tests', () => {
    describe('Interview Management Detail Component', () => {
        let comp: InterviewDetailComponent;
        let fixture: ComponentFixture<InterviewDetailComponent>;
        const route = ({ data: of({ interview: new Interview(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [InterviewManagementTestModule],
                declarations: [InterviewDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(InterviewDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(InterviewDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.interview).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
