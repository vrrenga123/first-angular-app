import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FieldResolver } from './core/resolver/fieldsResolver'
import { CanActivateApp } from './app.authguard';
// RouterModule.forRoot([
//     { path: '', redirectTo: '/home', pathMatch: 'full' },
//     { path: 'home',  component: HomeComponent, resolve: { field: FieldResolver } },
//     { path: 'customers', component: ListComponent, resolve: {posts: PostsResolver, field: FieldResolver} },
//     { path: 'customers/:id', component: CustomersComponent, resolve: {post: PostResolver,field: FieldResolver} },
//     { path: 'peoples', component: PeopleListComponent, resolve: {peop: PeoplesResolver, field: FieldResolver} },
//     { path: 'peoples/:id', component: PeopleListComponent, resolve: {peop: PeoplesResolver, field: FieldResolver} },
//     { path: 'emitter', component: EmitterComponent, resolve: {field: FieldResolver} },
//     { path: 'products', component: ProductsComponent, resolve: {field: FieldResolver} },
//     { path: 'categories', loadChildren: './category/category.module#CategoryModule', resolve: {field: FieldResolver} }
//   ])
 
const routes: Routes = [
    
    {
        path:'',
        redirectTo:'/login',
        pathMatch:'full'
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        resolve: { field: FieldResolver } 
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
        resolve: { field: FieldResolver } , canActivate: [CanActivateApp]
    },
    {
            path: 'customers',
            loadChildren: './customers/customers.module#CustomersModule', canActivate: [CanActivateApp]
    },
    {
            path: 'customers/:id',
            loadChildren: './customers/customers.module#CustomersModule', canActivate: [CanActivateApp]
    },
    {
            path: 'emitter',
            loadChildren: './emitters/emitters.module#EmittersModule', canActivate: [CanActivateApp]
    },
    {
            path: 'peoples',
            loadChildren: './peoples/peoples.module#PeopleModule', canActivate: [CanActivateApp]
    },
    {
            path: 'categories',
            loadChildren: './category/category.module#CategoryModule', canActivate: [CanActivateApp]
    },
    {
            path: 'products',
            loadChildren: './products/products.module#ProductsModule', canActivate: [CanActivateApp]
    },
    {
            path: 'products',
            loadChildren: './products/products.module#ProductsModule', canActivate: [CanActivateApp]
    },
    {
            path: 'blogs',
            loadChildren: './blogs/blogs.module#BlogsModule', canActivate: [CanActivateApp]
    },
    {
        path: 'todos',
        loadChildren: './todos/todos.module#TodosModule', canActivate: [CanActivateApp]
    },
    {
        path: 'obs',
        loadChildren: './obs/obs.module#ObsModule', canActivate: [CanActivateApp]
    },
    {
        path: 'employees',
        loadChildren: './employees/employees.module#EmployeesModule', canActivate: [CanActivateApp]
    },
    {
        path: 'todo',
        loadChildren: './todo/todo.module#TodoModule', canActivate: [CanActivateApp]
    },
    {
        path: 'directive',
        loadChildren: './directivee/directive.module#DirectiveModule', canActivate: [CanActivateApp]
    },
    {
        path: 'pipes',
        loadChildren: './pipes/pipes.module#PipesModule', canActivate: [CanActivateApp]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
