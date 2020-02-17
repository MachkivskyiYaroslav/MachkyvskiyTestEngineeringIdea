import {Component, Input, OnInit} from '@angular/core';
import {CocktailListService} from '../../services';
import {ICocktailModel} from '../../models';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() requestData: string;
  result: ICocktailModel[] = [];
  params = ['Shot'];
  p = 1;

  constructor(private getList: CocktailListService) {
  }


  ngOnInit() {
    this.fn();

  }

  fn() {
    this.getList.getAll(this.requestData).subscribe(data => this.result = data);
  }

  myObj(i) {
    console.log(i.children.length);
  }
}

// = Object.values(res).map(v => Object.values(v))
