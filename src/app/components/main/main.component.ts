import {Component, ComponentFactoryResolver, ComponentRef, HostListener, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {FilterListService} from '../../services';
import {transformData} from '../../helpers';
import {map} from 'rxjs/operators';
import {IListCocktailModel} from '../../models';
import {ContentCardComponent} from '../content-card';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('content', {static: true, read: ViewContainerRef}) VCR: ViewContainerRef;
  myFormArray = [];
  filterList$: IListCocktailModel;
  opened = true;
  sidebarForm: FormGroup;

  @HostListener('window:resize') fm() {
    this.opened = window.innerWidth > 1032;
  }

  constructor(private getFilterListService: FilterListService,
              private formBuilder: FormBuilder,
              private CFR: ComponentFactoryResolver,
  ) {
    this.sidebarForm = this.formBuilder.group({
      checkBoxes: new FormArray([])
    });
  }

  createFormGroup() {
    if (this.filterList$) {
      this.myFormArray = transformData(this.filterList$);
      this.myFormArray.forEach(checkBoxName => {
        this.sidebarForm.addControl(checkBoxName, new FormControl(checkBoxName));
      });
    }
  }

  createComponent() {
    this.VCR.clear();
    for (let i = 0; i < this.myFormArray.length; i++) {
      const componentFactory = this.CFR.resolveComponentFactory(ContentCardComponent);
      const componentRef: ComponentRef<ContentCardComponent> = this.VCR.createComponent(componentFactory);
      const currentComponent = componentRef.instance.requestData = this.myFormArray[i];
    }
  }

  onCheckBoxChecked(event, value) {
    if (event.checked) {
      this.myFormArray.push(value);
    }
    if (!event.checked) {
      const index = this.myFormArray.indexOf(value);
      if (index > -1) {
        this.myFormArray.splice(index, 1);
      }
    }
  }

  ngOnInit() {
    this.onResize();
    this.getFilterListService.getFilterList().pipe(map(el => {
      this.filterList$ = el;
      this.createFormGroup();
    })).subscribe();
  }

  onClick() {
    this.opened = !this.opened;
  }

  onResize() {
    this.opened = window.innerWidth > 993;
  }
}
