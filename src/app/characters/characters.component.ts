import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters:any = null;
  pages = 34;
  pageRandom = Math.trunc(Math.random() * this.pages) + 1;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get("https://rickandmortyapi.com/api/character?page="+this.pageRandom)
      .subscribe(
        result =>{
          this.characters = result;
          },
        error => {
          console.log('problems');
        }
      )
  }
}
