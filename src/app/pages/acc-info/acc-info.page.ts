import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-acc-info',
  templateUrl: './acc-info.page.html',
  styleUrls: ['./acc-info.page.scss'],
})
export class AccInfoPage implements OnInit {
  userAccount;
  userName;
  userPhone
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.account()
  }
  
  account() {
    this.authService.getTheUserIDFromStorage().then(id => {
      this.authService.getUser(id).subscribe((data) => {
        data.data.forEach(element => {
          this.userName = element.name
          this.userPhone = element.phone
        });
      })
    })
  }

}
