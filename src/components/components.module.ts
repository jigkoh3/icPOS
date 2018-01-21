import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { GridComponent } from './grid/grid';
import { RightSideOrderComponent } from './right-side-order/right-side-order';
import { RightSideEditComponent } from './right-side-edit/right-side-edit';
import { PreloadImageComponent } from './preload-image/preload-image';
import { ItemGridComponent } from './item-grid/item-grid';
@NgModule({
	declarations: [FooterComponent,
    GridComponent,
    RightSideOrderComponent,
    RightSideEditComponent,
    PreloadImageComponent,
    ItemGridComponent],
	imports: [],
	exports: [FooterComponent,
    GridComponent,
    RightSideOrderComponent,
    RightSideEditComponent,
    PreloadImageComponent,
    ItemGridComponent]
})
export class ComponentsModule {}
