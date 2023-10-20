import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  category: any[] = [];
  
  prdData={
   pname:'',
   cname:'',
   pprice:'',
   pqty:'',
   pdesc:'',
   pimg:'',
 };
 selectedFile: File | undefined;
 selectedFileName: string | undefined;
 onFileSelect(event: any): void {
   this.selectedFile = event.target.files[0];
   // Extract and store only the filename
   if (this.selectedFile) {
     // Remove the "C:\\fakepath\\" prefix to get only the filename
     this.selectedFileName = this.selectedFile.name;
   } else {
     this.selectedFileName = undefined;
   }
 }

 constructor(private http: HttpClient,private route: ActivatedRoute) { }
 formdata:any={};
  select:string='';

 ngOnInit() {
   this.http.get('http://localhost:8080/productinsert').subscribe((response: any) => {
     this.category = response;
     console.log(response)
   });
   this.route.params.subscribe(params => {
    var id = params['id']; // 'id' should match the parameter name in your route definition
    // Now you can use this.id as needed in your component
    console.log(id)
    this.http.get(`http://localhost:8080/edit/${id}`).subscribe((response: any) => {
    this.formdata = response;
    this.select=this.formdata.Category
    // console.log(this.data)
})
  });
 }
 onSubmit()
 {
   this.prdData.pimg=this.selectedFile ? this.selectedFile.name : '';
   // console.log(this.selectedFileName)
   this.http.post('http://localhost:8080/insert',this.prdData).subscribe((response)=>{
   })
   console.log(this.prdData)
 }

}
