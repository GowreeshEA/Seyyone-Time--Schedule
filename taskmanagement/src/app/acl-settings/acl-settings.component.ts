// acl-settings.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acl-settings',
  templateUrl: './acl-settings.component.html',
  styleUrls: ['./acl-settings.component.css']
})
export class AclSettingsComponent implements OnInit {
  roles = ['Senior Developer', 'Junior Developer', 'Team Leader', 'Software Training'];
  permissions = ['Project', 'Team', 'Task'];
  actions = ['Create', 'Assign', 'View', 'Delete', 'Edit'];
  showAlert: boolean = false;
  roleActionsMap: { [key: string]: string[] } = {};

  constructor(private router: Router) {}

  ngOnInit() {
  
    this.roles.forEach(role => {
      this.roleActionsMap[role] = [];
      this.permissions.forEach(permission => {
        this.actions.forEach(action => {
          this.roleActionsMap[role].push(`${permission}_${action}`);
        });
      });
    });
  }

  updateRoleActions(role: string, permission: string, action: string, event: any) {
    const key = `${permission}_${action}`;
    if (event.target.checked) {
      this.roleActionsMap[role].push(key);
    } else {
      const index = this.roleActionsMap[role].indexOf(key);
      if (index !== -1) {
        this.roleActionsMap[role].splice(index, 1);
      }
    }

    console.log(`Admin set actions for ${role}:`, this.roleActionsMap[role]);
  }

  saveAclData() {
  
    console.log('Acl data saved successfully.');
    this.showAlert = true;

    setTimeout(() => {
      this.showAlert = false;
      this.router.navigate(['/home']);
    }, 3000);
  }
}
