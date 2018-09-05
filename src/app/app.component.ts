import { Component, OnInit, OnDestroy, AfterViewInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute, NavigationCancel, NavigationError } from "@angular/router";
import { ApplicationContextService } from './core/app.context.service';
import { Context } from "./core/app.context";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public context: Context;
  @ViewChild('pageContent') pageContent: ElementRef;
  @ViewChild('pageHeader') pageHeader: ElementRef;
  @ViewChild('pageFooter') pageFooter: ElementRef;

  private applicationContextService: ApplicationContextService
  // constructor(private renderer: Renderer, private applicationContextService: ApplicationContextService,){
  //   this.context = this.applicationContextService.getContext();
  // }
  constructor(private router: Router,private renderer: Renderer){
    debugger;
    this.applicationContextService = new ApplicationContextService();
    this.context = this.applicationContextService.getContext();
  }
  onResize(event: any) {
    this.setContentHeight();
}

ngOnInit() {

  var a : string ="hello";
  var b : string = "how are you?"
  var c : string = a+ b;
  alert(c);
  alert(this.context.isShowSidebar);
}

  title = 'A3';
  private _isShowSidebar: boolean = true;
  public isSidebarToggled: boolean = false;
  public pinSwitched: boolean = false;
  public showBreadcrumb: boolean = false;
  

  get isShowSidebar(): boolean {
    return this._isShowSidebar;
  }

set isShowSidebar(value: boolean) {
    this._isShowSidebar = value;
  }
  isTablet() {
    return false;
  }
toggleMenu() {
  this.isSidebarToggled = !this.isSidebarToggled;
}
homeClicked() {
  this.pinSwitched = false;
  //this.navigationService.navigateHome();
}
onBodyClick() {
  this.isSidebarToggled = false;
}

public setContentHeight() {

  const pageContentHeight = this.pageContent.nativeElement.offsetHeight;
  const pageHeaderHeight = this.pageHeader ? this.pageHeader.nativeElement.offsetHeight : 0;
  const pageFooterHeight = this.pageFooter ? this.pageFooter.nativeElement.offsetHeight : 0;
  const pageContentWrapper = this.pageContent.nativeElement.getRootNode().querySelector("[id$='page-content-wrapper']");
  const breadcrumbTag = this.pageContent.nativeElement.getRootNode().querySelector("[id$='breadcrumbSelector']");
  const devWrapper = this.pageContent.nativeElement.getRootNode().querySelector("[id$='env-notice']");
  let pageHeight: number = 0;
  const envNoticeHeight: number = (devWrapper) ? devWrapper.offsetHeight : 0;
  if (this.showBreadcrumb) {
      let breadcrumbHeight: number;
      breadcrumbHeight = (breadcrumbTag) ? breadcrumbTag.offsetHeight : 48; // To calculate teh breadcrumb height.
      pageHeight = pageContentHeight - (pageHeaderHeight + pageFooterHeight + breadcrumbHeight + envNoticeHeight);
      this.renderer.setElementStyle(pageContentWrapper, 'height', 'calc(100vh - ' + pageHeaderHeight + 'px - ' + pageFooterHeight + 'px - ' + breadcrumbHeight + 'px)'); // Used to assign the page container height.
      this.renderer.setElementStyle(pageContentWrapper, 'margin-top', breadcrumbHeight + 'px');
  } else {
      pageHeight = pageContentHeight - (pageHeaderHeight + pageFooterHeight + envNoticeHeight);
      this.renderer.setElementStyle(pageContentWrapper, 'height', 'calc(100vh - ' + pageHeaderHeight + 'px - ' + pageFooterHeight + 'px)'); // Used to assign the page container height.
      this.renderer.setElementStyle(pageContentWrapper, 'margin-top', '0px');
  }
  //this.applicationContextService.setPageContentHeight(pageHeight);
}

}
