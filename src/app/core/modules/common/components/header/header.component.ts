import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/Auth.model';
import { AuthService } from 'src/app/modules/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  userDetail!:User | null;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.authService.userValue;
    this.userDetail = this.authService.userValue;
    
  }

  onLogout(){
    this.authService.logout();
  }

}
