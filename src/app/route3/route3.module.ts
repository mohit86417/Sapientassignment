import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { Route3RoutingModule } from './route3-routing.module';
import { Route3Component } from './route3.component';

const materialModules = [
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
];

@NgModule({
  declarations: [Route3Component],
  imports: [
    CommonModule,
    Route3RoutingModule,
    ...materialModules
  ],
  exports: [
    ...materialModules
  ]
})
export class Route3Module { }
