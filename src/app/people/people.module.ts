import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleRoutingModule } from './people-routing.module';

import { PeopleFormComponent } from './people-form/people-form.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleViewComponent } from './people-view/people-view.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PeopleFormComponent,
    PeopleListComponent,
    PeopleViewComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    SharedModule
  ]
})
export class PeopleModule { }
