import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'fooooooo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  supposedlySafeUrl: SafeResourceUrl = '';
  constructor(private domSanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.supposedlySafeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('foo.html');
  }
}
