import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { PrecisaEstarLogadoGuard } from '../guards/precisaEstarLogado/precisa-estar-logado.guard';
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule),
              canActivate: [PrecisaEstarLogadoGuard]
            }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule),
              canActivate: [PrecisaEstarLogadoGuard]
          }
        ]
      },
      {
        path: 'livro/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./livro/livro.module').then(m => m.LivroPageModule),
          }
        ]
      },

      {
        path: 'oferta',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./oferta/oferta.module').then(m => m.OfertaPageModule)
          }
        ]
      },
      {
        path: 'historico',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./historico/historico.module').then(m => m.HistoricoPageModule)
          }
        ]
      },
      {
        path: 'livro/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./livro/livro.module').then(m => m.LivroPageModule)
          }
        ]
      },
      {
        path: 'historico',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./historico/historico.module').then(m => m.HistoricoPageModule)
          }
        ]
      },
      {
        path: 'list-perfil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./list-perfil/list-perfil.module').then(m => m.ListPerfilPageModule)
          }
        ]
      },
      {
        path: 'perfil/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./perfil/perfil.module').then(m => m.PerfilPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab2',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab2',
    pathMatch: 'full'
  },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule { }
