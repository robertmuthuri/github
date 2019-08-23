import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoClassComponent } from './repo-class.component';

describe('RepoClassComponent', () => {
  let component: RepoClassComponent;
  let fixture: ComponentFixture<RepoClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
