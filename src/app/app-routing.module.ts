import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwesomeToolComponent } from './presentation/awesome-tool/awesome-tool.component';
import { ManualComponent } from './presentation/manual/manual.component';
import { MaturityComponent } from './presentation/maturity/maturity.component';
import { MobileComponent } from './presentation/mobile/mobile.component';
import { PatternComponent } from './presentation/pattern/pattern.component';
import { PractiseComponent } from './presentation/practise/practise.component';
import { ReporterComponent } from './presentation/reporter/reporter.component';
import { ResourcesComponent } from './presentation/resources/resources.component';
import { SolutionComponent } from './presentation/solution/solution.component';
import { ThinkTankComponent } from './presentation/think-tank/think-tank.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'case-study',
    loadChildren: () =>
      import('./presentation/case-study/case-study.module').then(
        (m) => m.CaseStudyModule
      ),
  },
  {
    path: 'pattern',
    component: PatternComponent,
  },
  {
    path: 'practise',
    component: PractiseComponent,
  },
  {
    path: 'manual',
    component: ManualComponent,
  },
  {
    path: 'maturity',
    component: MaturityComponent,
  },
  {
    path: 'resources',
    component: ResourcesComponent,
  },
  {
    path: 'report',
    component: ReporterComponent,
  },
  {
    path: 'tool',
    component: AwesomeToolComponent,
  },
  {
    path: 'mobile',
    component: MobileComponent,
  },
  {
    path: 'think-tank',
    component: ThinkTankComponent,
  },
  {
    path: 'solution',
    component: SolutionComponent,
  },
  {
    path: 'design',
    loadChildren: () =>
      import('./presentation/design/design.module').then((m) => m.DesignModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./presentation/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'helper',
    loadChildren: () =>
      import('./presentation/ledge-helper/ledge-helper.module').then(
        (m) => m.LedgeHelperModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
