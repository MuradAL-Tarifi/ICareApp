import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DrugComponent } from '../drug/drug.component';
import { HomeService } from '../home.service';
import { Home2Component } from '../home2.component';
import { CategoryModel } from '../models/Category.model';
import { DrugModel } from '../models/Drug.model';

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.css']
})
export class DrugsComponent implements OnInit {
  
  DrugList:DrugModel[];
  CategoryName:string;
  CategoryId:number;
  Categories: CategoryModel[];
  constructor(
    private homeServices:HomeService,
    private router:Router,
    private homComponent:Home2Component,
    private Toastr:ToastrService
  ) { }

  async ngOnInit() {
    this.getDrugs();
    this.CategoryName = this.homeServices.CategoryName;
    this.CategoryId = this.homeServices.CategoryId;
    await this.getAllCategories();
  }

  public goToCategoryDrugs(id: number) {
    this.homeServices.CategoryId = id;
    this.homeServices.CategoryName = this.Categories.find(
      (c) => c.id == id
    ).name;
    this.ngOnInit();
  }

  async getAllCategories() {
    await this.homeServices
      .GetAllCategory()
      .toPromise()
      .then((response) => {
        this.Categories = response.data['categories'];
      });
  }


  public async getDrugs(){
    if(this.homeServices.CategoryId == -1)
    {
        this.router.navigate(['Home/main']);
    }
    return await this.homeServices.GetAllCategoryDrugs().toPromise()
    .then(
      (response=>{
        this.DrugList = response.data
      })
    );

  }

  public GoToDrug(id:number){
    this.homeServices.DrugId = id;
    this.router.navigate(['Home/Drug']);
  }

  async CheckItemIfInCart(id:number){
    await this.homeServices.CheckItemIfInCart(id).toPromise()
    .then(
      (response)=>{
        if(response.success == true)
        {
          this.addToCart(id);
        }else{
          this.Toastr.warning(response.errors[0], '',{
            timeOut: 2000,
          });
        }
      }
    )
  }



  addToCart(id:number)
  {
      console.log(id)
      this.homeServices.AddToCart(id,1).subscribe(
        (data)=>{
        this.homComponent.ngOnInit();
        if(data.success ==true)
        this.Toastr.success('Item added successfully', '',{
          timeOut: 2000,
        });
        }
      );
    
  }



}
