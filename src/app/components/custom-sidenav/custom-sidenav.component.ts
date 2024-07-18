import { Component, computed, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
};

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  template: `
    <div class="sidenav-header">
      <img
        [width]="profilePicSize()"
        [height]="profilePicSize()"
        src="/assets/profile-pic.png"
      />
      <div class="header-text" [class.hide-header-text]="sideNavCollapsed()">
        <h2>Your channel</h2>
        <p>Bhaskar Dixit</p>
      </div>
    </div>
    <mat-nav-list>
      <a
        mat-list-item
        *ngFor="let item of menuItems()"
        [routerLinkActive]="'selected-menu-item'"
        [routerLink]="item.route"
        #rla="routerLinkActive"
        [activated]="rla.isActive"
      >
        <mat-icon  [fontSet] = "rla.isActive ? 'material-icons' : 'material-icons-outlined'" matListItemIcon> {{ item.icon }} </mat-icon>
        <span matListItemTitle *ngIf="!sideNavCollapsed()">
          {{ item.label }}
        </span>
      </a>
    </mat-nav-list>
  `,
  styles: [
    `
      // :host * {
      //   transition: all 500ms ease-in-out;
      // }
      .sidenav-header {
        padding-top: 24px;
        text-align: center;

        > img {
          border-radius: 100%;
          object-fit: cover;
          margin-botton: 10px;
        }

        .header-text {
          > h2 {
            margin: 0;
            font-size: 1rem;
            line-height: 1.5 rem;
          }

          > p {
            margin: 0;
            font-size: 0.8 rem;
          }
        }

        .hide-header-text {
          opacity: 0;
          height: 0;
        }

        .selected-menu-item {
          border-left: 5px solid;
          border-left-color: blue;
          background: rgba(0,0,0,0.10)
        }
      }
    `,
  ],
})
export class CustomSidenavComponent {
  sideNavCollapsed = signal(false);

  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard',
    },
    {
      icon: 'video_library',
      label: 'Content',
      route: 'content',
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics',
    },
    {
      icon: 'comments',
      label: 'Comments',
      route: 'comments',
    },
  ]);

  profilePicSize = computed(() => (this.sideNavCollapsed() ? '32' : '100'));
}
