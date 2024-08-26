import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SolutionComponent } from './solution/solution.component';
import { StockpileManagementSystemComponent } from './stockpile-management-system/stockpile-management-system.component';
import {QRCodeModule} from "angularx-qrcode";
import { ChatbotComponent } from './chatbot/chatbot.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ConditionMonitoringSystemComponent } from './condition-monitoring-system/condition-monitoring-system.component';
import { ShiploadingAutomationComponent } from './shiploading-automation/shiploading-automation.component';
import { QualityIdentifierComponent } from './quality-identifier/quality-identifier.component';
import { SolutionHeaderComponent } from './solution-header/solution-header.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { ProcessImageComponent } from './process-image/process-image.component';
import {IntegratedControlSystemComponent} from "./integration-control-system/integration-control-system.component";
import { RouteManagementSystemComponent } from './route-management-system/route-management-system.component';
import { Header2Component } from './header2/header2.component';
import { LaserRadarComponent } from './laser-radar/laser-radar.component';
import { AutomaticSamplingSystemComponent } from './automatic-sampling-system/automatic-sampling-system.component';
import { ColorAnalyzerSystemComponent } from './color-analyzer-system/color-analyzer-system.component';
import { FlapsLoadGuidesAutomationComponent } from './flaps-load-guides-automation/flaps-load-guides-automation.component';
import { TripperCarAutomationComponent } from './tripper-car-automation/tripper-car-automation.component';
import { ScrapperAutomationComponent } from './scrapper-automation/scrapper-automation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SolutionComponent,
    StockpileManagementSystemComponent,
    ChatbotComponent,
    ConditionMonitoringSystemComponent,
    ShiploadingAutomationComponent,
    QualityIdentifierComponent,
    SolutionHeaderComponent,
    ContactUsComponent,
    ProcessImageComponent,
    IntegratedControlSystemComponent,
    RouteManagementSystemComponent,
    Header2Component,
    LaserRadarComponent,
    AutomaticSamplingSystemComponent,
    ColorAnalyzerSystemComponent,
    FlapsLoadGuidesAutomationComponent,
    TripperCarAutomationComponent,
    ScrapperAutomationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
