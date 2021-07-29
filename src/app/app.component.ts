import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'udemy-angular-course';

  constructor(private toastr: ToastrService, private spinner: NgxSpinnerService) { }
  ngOnInit() {
    this.showSuccess();
    this.spinnerShow();
  }

  showSuccess() {
    this.toastr.success('This is a example toastr, dont you think its beautiful too?', 'Example Toastr!!!');
  }

  spinnerShow() {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);

  }
}
