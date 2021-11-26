import { Component, Input } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent{
 @Input() titulo:string = "ventas";

  @Input('labels1') doughnutChartLabels: Label[] = ['Label1', 'Label2', 'Label3'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];

public colors: Color[] = 
[
  {
    backgroundColor: ['#6857e6', '#009fee', '#f02059']
  }
]

}




