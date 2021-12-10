import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-contact-profile',
  templateUrl: './contact-profile.page.html',
  styleUrls: ['./contact-profile.page.scss'],
})
export class ContactProfilePage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) 
  {
    this.route.queryParams.subscribe(params => {
      console.log(params.special)
      console.log(params)
      if (params && params.special) {
        console.log(params.special)
      }
    });

  }

  ngOnInit() {
  }

}
