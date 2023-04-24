import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public image?: string;
public Titulo: string ="Test";
@Input() dataEntrante: any;
constructor(){}
ngOnInit(){
this.image= "https://hampiyuracbd.com/wp-content/uploads/2020/06/cropped-Hampi-Yura-4.png";
}
}

