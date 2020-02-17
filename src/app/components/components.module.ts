import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentsRoutingModule} from './components-routing.module';
import {HeaderComponent} from './header';
import {MainComponent} from './main';
import {SidebarModule} from 'ng-sidebar';
import { HamburgerDirective} from '../directives';
import {ReactiveFormsModule} from '@angular/forms';
import {FilterListService, CocktailListService} from '../services';
import {MyPipe} from '../pipes';
import {MatCheckboxModule, MatPaginatorModule} from '@angular/material';
import {ContentCardComponent} from './content-card';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [HeaderComponent, MainComponent, HamburgerDirective, MyPipe, ContentCardComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SidebarModule.forRoot(),
    ReactiveFormsModule,
    MatCheckboxModule,
    MatPaginatorModule,
    NgxPaginationModule,
  ],
  exports: [],
  providers: [FilterListService, CocktailListService]
})
export class ComponentsModule {
}
