import { Component } from '@angular/core';

@Component({
  selector: 'app-condition-monitoring-system',
  templateUrl: './condition-monitoring-system.component.html',
  styleUrl: './condition-monitoring-system.component.css'
})
export class ConditionMonitoringSystemComponent {
  public qrCodeData : string ='http://192.168.1.8:4200/condition-monitoring-system';

  downloadDescription() {

  }
}
