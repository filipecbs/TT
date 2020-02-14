import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './slide/slide.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';

@NgModule({
    declarations: [SlideComponent, AvaliacaoComponent],
    imports: [IonicModule, CommonModule],
    exports: [SlideComponent, AvaliacaoComponent]
})

export class ComponentsModule {}
