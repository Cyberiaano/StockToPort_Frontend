import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StockpileManagementSystemComponent} from "./stockpile-management-system/stockpile-management-system.component";
import {HomeComponent} from "./home/home.component";
import {IntegratedControlSystemComponent} from "./integration-control-system/integration-control-system.component";
import {ChatbotComponent} from "./chatbot/chatbot.component";

import { ConditionMonitoringSystemComponent } from './condition-monitoring-system/condition-monitoring-system.component';
import { ShiploadingAutomationComponent } from './shiploading-automation/shiploading-automation.component';
import { QualityIdentifierComponent } from './quality-identifier/quality-identifier.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {RouteManagementSystemComponent} from "./route-management-system/route-management-system.component";
import {LaserRadarComponent} from "./laser-radar/laser-radar.component";
import {$locationShim} from "@angular/common/upgrade";
import {AutomaticSamplingSystemComponent} from "./automatic-sampling-system/automatic-sampling-system.component";
import {ColorAnalyzerSystemComponent} from "./color-analyzer-system/color-analyzer-system.component";
import {
  FlapsLoadGuidesAutomationComponent
} from "./flaps-load-guides-automation/flaps-load-guides-automation.component";
import {TripperCarAutomationComponent} from "./tripper-car-automation/tripper-car-automation.component";
import {ScrapperAutomationComponent} from "./scrapper-automation/scrapper-automation.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'stockpile-management', component: StockpileManagementSystemComponent },
  { path: 'integrated-control', component: IntegratedControlSystemComponent},
  { path: 'chatbot', component: ChatbotComponent},
  // Add other routes here
  { path: 'condition-monitoring-system', component: ConditionMonitoringSystemComponent },
  { path: 'shiploading-automation', component: ShiploadingAutomationComponent },
  { path: 'quality-identifier', component: QualityIdentifierComponent },
  { path: 'contact-us', component: ContactUsComponent },
  {path: 'route-management', component : RouteManagementSystemComponent},
  {path: 'laser-radar',component:LaserRadarComponent},
  {path: 'automatic-sampling',component: AutomaticSamplingSystemComponent},
  {path: 'color-analyzer', component: ColorAnalyzerSystemComponent},
  {path: 'flap-load',component:FlapsLoadGuidesAutomationComponent},
  {path: 'tripper-car',component : TripperCarAutomationComponent},
  {path: 'scrapper-automation',component:ScrapperAutomationComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
