import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { ListComponent } from './list.component';
import { FieldResolver } from '../core/resolver/fieldsResolver'
import { PostsResolver } from '../core/resolver/posts.resolver';
import { PostResolver } from '../core/resolver/post.resolver';
import { ProductDetailsResolver } from "../core/resolver/productdetails.resolver"
const routes: Routes = [
    {
        path: '',
        component: ListComponent,
        resolve: {posts: ProductDetailsResolver,field: FieldResolver}
    },
    { 
        path: ':id', 
        component: CustomersComponent,
        resolve: {post: PostResolver,field: FieldResolver}
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
