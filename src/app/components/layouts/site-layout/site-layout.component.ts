import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent {
  constructor(private authService: AuthService){
  }

  title='stopwatch';

  ms: any = '0'+ 0;
  sec: any = '0'+ 0;
  min: any = '0'+ 0;
  hr: any = '0'+ 0;

  startTimer:any;
  running=false;

  start(): void {
    if (!this.running){
      this.running=true;
      this.startTimer = setInterval(()=>{
        this.ms++;
        this.ms= this.ms < 10 ? '0' + this.ms : this.ms;

        if (this.ms === 100) {
          this.sec ++;
          this.sec= this.sec < 10 ? '0' + this.sec : this.sec;
          this.ms='0'+ 0;
        }

        if (this.sec === 60){
          this.min++;
          this.min= this.min < 10 ? '0' + this.min : this.min;
          this.sec='0'+ 0;
        }

        if (this.min === 60){
          this.hr++;
          this.hr= this.hr < 10 ? '0' + this.hr : this.hr;
          this.min='0'+ 0;
        }

      },10);
    } else {
      this.stop();
    }

  }

  stop(): void {
    clearInterval(this.startTimer);
    this.running=false;
  };

  reset(): void {
    clearInterval(this.startTimer);
    this.running=false;
    this.hr = this.min = this.sec = this.ms = '0'+ 0;
  };


  logout(){
    this.authService.logout();

  }

}
