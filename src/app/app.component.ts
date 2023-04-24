import { Component } from '@angular/core';

interface Tarjeta{
  titulo: string;
  subtitulo: string;
  image: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Encuentra Guias';
  public ArregloTarjetas: Tarjeta[]=[]
  ngOnInit(): void{
    this.ArregloTarjetas =[
      {titulo: "video 1", subtitulo: "Subtitulo 1", image:"https://media.licdn.com/dms/image/C5603AQEDZ3Qpe76lhg/profile-displayphoto-shrink_800_800/0/1661611814280?e=2147483647&v=beta&t=Q8KO4qdaOM2MledoaigBruRfroTiutLcwL4Sej43qZg"},
      {titulo: "video 1", subtitulo: "Subtitulo 2", image:"https://media.licdn.com/dms/image/C5603AQEDZ3Qpe76lhg/profile-displayphoto-shrink_800_800/0/1661611814280?e=2147483647&v=beta&t=Q8KO4qdaOM2MledoaigBruRfroTiutLcwL4Sej43qZg"},
      {titulo: "video 1", subtitulo: "Subtitulo 3", image:"https://media.licdn.com/dms/image/C5603AQEDZ3Qpe76lhg/profile-displayphoto-shrink_800_800/0/1661611814280?e=2147483647&v=beta&t=Q8KO4qdaOM2MledoaigBruRfroTiutLcwL4Sej43qZg"},
      {titulo: "video 1", subtitulo: "Subtitulo 3", image:"https://media.licdn.com/dms/image/C5603AQEDZ3Qpe76lhg/profile-displayphoto-shrink_800_800/0/1661611814280?e=2147483647&v=beta&t=Q8KO4qdaOM2MledoaigBruRfroTiutLcwL4Sej43qZg"}
      
      
    ]
  }
}