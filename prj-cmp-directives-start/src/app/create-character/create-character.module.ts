import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CreateCharacterComponent } from './create-character.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CreateCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: CreateCharacterComponent}
    ])
  ]
})
export class CreateCharacterModule{ }
