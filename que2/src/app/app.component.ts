import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'quq2';
  data: any[] = [];

  constructor(private http: HttpClient,private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/').subscribe((response: any) => {
      this.data = response;
    });
  }

  OnDelete()
  {
    this.route.params.subscribe(params => {
      var id = params['id']; // 'id' should match the parameter name in your route definition
      // Now you can use this.id as needed in your component
      console.log(id)
    this.http.get(`http://localhost:8080/delete/${id}`).subscribe((response: any) => {
      // console.log("deleted")
      alert("deleted")
  })
})
  }
}
