import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private route : ActivatedRoute) {
    this.route.params.subscribe(response =>{
      console.info(response.name)
    })
   }

  ngOnInit() {
  }

}
