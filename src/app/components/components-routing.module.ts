import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main';
import {ContentCardComponent} from './content-card';


const routes: Routes = [
  {path: '', component: MainComponent, children: [{path: '', component: ContentCardComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {
}
