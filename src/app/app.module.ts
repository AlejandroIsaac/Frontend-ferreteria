import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
;
import { HeaderComponent } from './components/header/header.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { MainResultComponent } from './components/main-result/main-result.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ImgComponent } from './components/img/img.component';
import { CreateEntityComponent } from './components/create-entity/create-entity.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BuscadorComponent,
    CategoriasComponent,
    MainResultComponent,
    FooterComponent,
    ProductoComponent,
    ImgComponent,
    CreateEntityComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
