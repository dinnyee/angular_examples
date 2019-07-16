import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'componentCommunication',
        loadChildren: './component-communication/component-communication.module/#ComponentCommunicationModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
