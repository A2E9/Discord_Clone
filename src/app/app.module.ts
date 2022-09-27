import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DownloadComponent } from './components/pages/download/download.component';
import { NitroComponent } from './components/pages/nitro/nitro.component';
import { DiscoverComponent } from './components/pages/discover/discover.component';
import { XboxComponent } from './components/xbox/xbox.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/pages/error/error.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'nitro', component: NitroComponent },
  { path: 'discover', component: DiscoverComponent },
  // { path: '', redirectTo: "home", pathMatch: "full" },
  { path: '', component: HomeComponent },
  { path: '**', component: ErrorComponent },
];

// Language: typescript
// Path: src\app\app-routing.module.ts
// Compare this snippet from src\app\app.

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    DownloadComponent,
    NitroComponent,
    DiscoverComponent,
    XboxComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
