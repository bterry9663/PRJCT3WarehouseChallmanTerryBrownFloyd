import { Component } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
localCategory: any = [];

chosenCategoryId: number = 0;
formNomenclature: string = '';
formSize: string = '';
formDanger: string = '';


canDelete: boolean = false;

constructor(private backendService: BackendService) {
  this.getAllCategories();
}

getAllCategories(): void {
  this.localCategory = [];
  this.backendService.getAllCategories().subscribe(
      
    {  
      
      next: data => {

        for (let category of data.body) {
          this.localCategory.push(new Category(category.categoryId,
                                            category.Nomenclature,
                                            category.Size,
                                            category.Danger));

                                           
                                            
        }
      },

      
      error: errData => {
        console.log(errData)
      },

      
      complete: () => console.log('Complete! All categories returned.')
    
    }
  
  );
}

addNewCategory(): void {
  this.backendService
      .addNewCategory(new Category(0, this.formNomenclature, this.formSize, this.formDanger))
      .subscribe(() => this.getAllCategories());
  this.clearForm();
}



updateCategory(): void {
  this.backendService.updateCategory(new Category(this.chosenCategoryId, 
                                              this.formNomenclature,
                                              this.formSize,
                                              this.formDanger))
                     .subscribe(() => this.getAllCategories());

  this.clearForm();
}


deleteCategory(): void {
 
  const categoryToDelete: Category = 
      this.localCategory.filter((category: Category) => {
        return category.categoryId === this.chosenCategoryId;
      } )[0];

  this.backendService.deleteCategoryInBody(categoryToDelete)
      .subscribe(() => this.getAllCategories());

  this.clearForm();
}


chooseCategory(category: Category): void {
  this.backendService.getAllArtifacts().subscribe(data => {
    for (let artifact of data.body) {
      if (artifact.category.categoryId === category.categoryId) {
        this.canDelete = false;
        break;
      } else {
        this.canDelete = true;
      }
    }
  });


  this.chosenCategoryId = category.categoryId;
  this.formNomenclature = category.nomenclature;
  this.formSize = category.size;
  this.formDanger = category.danger;
}

clearForm(): void {
  this.chosenCategoryId = 0;
  this.formNomenclature = '';
  this.formSize = '';
  this.formDanger = '';
}

}


