import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { MarketplaceComponent } from '../../marketplace/marketplace.component';
import { ForumsComponent } from '../../forums/forums.component';
import { ResourcehubComponent } from '../../resourcehub/resourcehub.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      
      component: DashboardComponent,
      children: [
        { path: 'marketplace',    component: MarketplaceComponent },
        { path: 'forums',         component: ForumsComponent },  
        { path: 'resourcehub',    component: ResourcehubComponent },
        { path: 'user-profile',   component: UserProfileComponent },
        { path: 'table-list',     component: TableListComponent },
        { path: 'typography',     component: TypographyComponent },
        { path: 'icons',          component: IconsComponent },
        { path: 'maps',           component: MapsComponent },
        { path: 'notifications',  component: NotificationsComponent },
      ]},
];
