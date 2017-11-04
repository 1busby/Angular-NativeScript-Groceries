import { NgModule } from "@angular/core";
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    NativeScriptHttpModule,
    NativeScriptModule,
    NativeScriptFormsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
