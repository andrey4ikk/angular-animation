import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,query,stagger,group } from '@angular/animations';
import "snapsvg-cjs";
declare var Snap: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('sectionAnimation', [
      transition(':enter', group([
        query('.leftSliderSection', style({ transform: 'scale(0.5)'})), 
        query('.centerSliderSection, .rightSliderSection', style({ opacity: 0, transform: 'scale(0.6)'})), 
        query('.rightSliderSectionTwo', style({ opacity: 0, transform: 'scale(0.9)'})),
        query('.leftSliderSection, .centerSliderSection, .rightSliderSectionTwo, .rightSliderSection', [ stagger(800, [
        animate('0.8s ease-out')
          ]),
        ]),
      ]))
    ])
  ],
})
export class AppComponent implements OnInit {
 
  ngOnInit() {    

    var dashedLine = Snap("#dashed-line");

    var Line = dashedLine.path("M1.232,118.572S139.088,148.9,264.414,60.433C360.027-7.058,546.826-24.425,679.551,74.06c123.255,91.458,207.507,53.453,238.95,34.7");
    Line.attr({
        stroke: "#fff",
        fill: "none",
        strokeWidth: 3,
        strokeDasharray: 1000,
        strokeDashoffset: 1000
    });
    
   setTimeout(function(){
    Line.animate({
      strokeDashoffset: 0 },
      600, mina.linear);
   },1100);
     
    var Line2 = dashedLine.path("M1.232,118.572S139.088,148.9,264.414,60.433C360.027-7.058,546.826-24.425,679.551,74.06c123.255,91.458,207.507,53.453,238.95,34.7");
    Line2.attr({
        stroke: "#1a3151",
        fill: "none",
        strokeWidth: 4,
        strokeDasharray: 4
    });
  }
}