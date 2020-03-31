import {NgModule, SecurityContext} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownRenderComponent } from './components/markdown-render/markdown-render.component';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { CustomMaterialModule } from './custom-material.module';
import { MarkdownRadarChartComponent } from './components/markdown-radar-chart/markdown-radar-chart.component';
import { MarkdownRatingComponent } from './components/markdown-radar-chart/markdown-rating/markdown-rating.component';
import { MarkdownRatingItemComponent } from './components/markdown-radar-chart/markdown-rating-item/markdown-rating-item.component';
import { ProcessTableComponent } from './components/process-table/process-table.component';
import { LedgeRenderComponent } from './components/ledge-render/ledge-render.component';
import { MarkdownChartComponent } from './components/markdown-chart/markdown-chart.component';
import { MarkdownTreeComponent } from './components/markdown-tree/markdown-tree.component';
import Tocify from './components/markdown-render/tocify';
import { MobileComponent } from '../presentation/mobile/mobile.component';
import { ToolsetComponent } from './toolset/toolset.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          breaks: false,
          pedantic: false,
          smartLists: true,
          smartypants: false,
          langPrefix: 'language-',
          headerPrefix: '',
          headerIds: true,
        },
      }
    })
  ],
  declarations: [
    MarkdownRenderComponent,
    MarkdownRatingComponent,
    MarkdownRatingItemComponent,
    MarkdownRadarChartComponent,
    ProcessTableComponent,
    LedgeRenderComponent,
    MarkdownChartComponent,
    MarkdownTreeComponent,

    ToolsetComponent
  ],
  providers: [
    Tocify,
  ],
  exports: [
    MarkdownRenderComponent,
    MarkdownRatingComponent,
    MarkdownRatingItemComponent,
    MarkdownRadarChartComponent,
    ProcessTableComponent,
    LedgeRenderComponent,
    MarkdownChartComponent,
    MarkdownTreeComponent,

    ToolsetComponent
  ],
  entryComponents: []
})
export class SharedModule {
}
