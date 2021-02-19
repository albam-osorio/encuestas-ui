import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { BlockUIModule } from 'primeng/blockui';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncuestaService } from './services/encuesta.service';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { MarcaComponent } from './components/marca/marca.component';
import { MarcaService } from './services/marca.service';
import { LoginComponent } from './components/login/login.component';
import { AppService } from './services/app.service';
import { XhrInterceptor } from './config/interceptor';
import { HomeComponent } from './components/home/home.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { EncuestaAddComponent } from './components/encuesta-add/encuesta-add.component';

@NgModule({
  declarations: [
    AppComponent,
    EncuestaComponent,
    MarcaComponent,
    LoginComponent,
    HomeComponent,
    TopBarComponent,
    UnauthorizedComponent,
    ForbiddenComponent,
    EncuestaAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,

    ButtonModule,
    BlockUIModule,
    CheckboxModule,
    ConfirmDialogModule,
    DropdownModule,
    InputTextModule,
    MessageModule,
    MessagesModule,
    PanelModule,
    PasswordModule,
    TableModule,
    TooltipModule,

    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [MessageService, ConfirmationService, EncuestaService, MarcaService, AppService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
