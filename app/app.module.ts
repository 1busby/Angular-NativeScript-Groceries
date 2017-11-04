import { NgModule } from "@angular/core";
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { routes, navigatableComponents } from "./app.routing";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    NativeScriptHttpModule,
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
