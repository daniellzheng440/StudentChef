import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule } from '@angular/material';

const materialModules = [
	MatCardModule,
	MatButtonModule
];

@NgModule({
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [
  	...materialModules
  ],
  declarations: []
})
export class AppMaterialModule { }
