import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[appIfRoute]',
  standalone: false
})
export class IfRoute implements OnInit, OnDestroy {
  @Input('appIfRoute') routeFragment: string = '';
  private sub: Subscription | undefined;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this.updateView());

    this.updateView(); // Evaluar la ruta actual al iniciar
  }

  private updateView() {
    const url = this.router.url;
    if (url.includes(this.routeFragment)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
