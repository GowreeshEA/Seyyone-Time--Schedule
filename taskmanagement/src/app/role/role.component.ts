// src/app/role-management/role-management.component.ts
import { Component, OnInit } from '@angular/core';

type RoleDescriptions = {
  [key: string]: string;
};

interface AclData {
  role: string;
  permissions: { [key: string]: string[] };
}

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roles = ['Trainer', 'TL', 'Senior Dev', 'Junior Dev'];
  roleDescriptions: RoleDescriptions = {
    'Trainer': 'Role for training purposes',
    'TL': 'Team Lead role',
    'Senior Dev': 'Senior Developer ',
    'Junior Dev': 'Junior Developer '
  };

  permissions = ['Project', 'Task', 'Team'];

  selectedRole: string = '';

  aclData: AclData[] = [];
  defaultAclData: AclData = {
    role: 'Trainer',
    permissions: {
      'Project': ['create', 'assign', 'edit', 'view'],
      'Task': ['create', 'view'],
      'Team': ['edit', 'delete', 'view']
    }
   
  };

  constructor() { }

  ngOnInit() {
    // Assuming aclData is fetched from the database or API
    // This is a mock example; replace it with actual data fetching logic
    this.aclData = [
      {
        role: 'Trainer',
        permissions: {
          'Project': ['create', 'assign', 'edit', 'view'],
          'Task': ['create', 'view'],
          'Team': ['edit', 'delete', 'view']
        }
      },
      
      // Add more entries as needed
    ];
  }

  getAclForSelectedRole(): { [key: string]: string[] } {
    // Implement your logic to get the ACL data for the selected role
    // Here, I'm returning the default ACL data for demonstration purposes
    return this.defaultAclData.permissions;
  }
}
