import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {
  RotatingPlaneComponent,
  DoubleBounceComponent,
  WaveComponent,
  WanderingCubesComponent,
  PulseComponent,
  ChasingDotsComponent,
  CircleComponent,
  ThreeBounceComponent,
  CubeGridComponent,
  WordPressComponent,
  FadingCircleComponent,
  FoldingCubeComponent
} from './spinners';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    RotatingPlaneComponent,
    DoubleBounceComponent,
    WaveComponent,
    WanderingCubesComponent,
    PulseComponent,
    ChasingDotsComponent,
    CircleComponent,
    ThreeBounceComponent,
    CubeGridComponent,
    WordPressComponent,
    FadingCircleComponent,
    FoldingCubeComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
