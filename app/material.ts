import {MatButtonModule, MatToolbarModule,MatTabsModule,MatCardModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule,MatTabsModule,MatCardModule],
  exports: [MatButtonModule, MatToolbarModule,MatTabsModule,MatCardModule],
})
export class MaterialModule { }