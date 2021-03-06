import { Component, OnInit, } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';
import { AdCarsService } from 'src/app/cars/ad-cars.service';
import { ICar } from 'src/app/shared/car';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  get isLogged() { return this.userService.isLogged; }
  get userEmail() { return this.userService.currentUser.email }
  get userId() { return this.userService.currentUser._id}

  // searchResult: any;
  // resulr: [];
  // isSearch: boolean

  constructor( private userService: UserService, private router: Router,
    private adCarsService: AdCarsService) { }

  ngOnInit() {

  }

  logout() {
    this.userService.logout().subscribe(() => {

      this.router.navigate(['user/singin']);

    });
  }

  // search(query) {
  //   if (query.search === '') {
      
  //     return 
  //   } else {
  //     this.resulr = [];
  //     this.adCarsService.fineAdCars(query.search)
  //     .subscribe((data) => {
  //       this.searchResult = data;
  //       this.resulr = this.searchResult.articles;
  //       this.isSearch = true;
        

  //     })
  //   }
  // }

}
