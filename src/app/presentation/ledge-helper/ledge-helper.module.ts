import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LedgeRenderModule } from '@ledge-framework/render';
import { SharedModule } from '../../shared/shared.module';
import { LedgeHelperComponent } from './ledge-helper.component';
import { AngularSplitModule } from 'angular-split';

@NgModule({
  declarations: [LedgeHelperComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    LedgeRenderModule,
    AngularSplitModule.forRoot(),
    RouterModule.forChild([{ path: '', component: LedgeHelperComponent }]),
  ],
})
export class LedgeHelperModule {}
