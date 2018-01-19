import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { GridComponent } from './grid/grid';
import { RightSideOrderComponent } from './right-side-order/right-side-order';
import { RightSideEditComponent } from './right-side-edit/right-side-edit';
@NgModule({
	declarations: [FooterComponent,
    GridComponent,
    RightSideOrderComponent,
    RightSideEditComponent],
	imports: [],
	exports: [FooterComponent,
    GridComponent,
    RightSideOrderComponent,
    RightSideEditComponent]
})
export class ComponentsModule {}
