import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Group } from '../classes/Group';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { GroupService } from '../classes/GroupService';
import { Dialog } from '@angular/cdk/dialog';
import { CreateGroupDialog } from '../create-group-dialog/create-group-dialog';

@Component({
    selector: 'app-student-groups',
    templateUrl: './group-list.component.html',
    imports: [RouterModule, CommonModule, SelectButtonModule, FormsModule, CreateGroupDialog],
    styleUrl: './group-list.component.css'
})
export class GroupListComponent implements OnInit {
    groups$: BehaviorSubject<Group[]> = new BehaviorSubject<Group[]>([]);
    private dialog = inject(Dialog);
    constructor(private groupService: GroupService, private router: Router) { }

    ngOnInit(): void {
        this.getGroups();
    }

    getGroups() {
        this.groupService.getGroupsList().subscribe((value) => {
            this.groups$.next(value);
        });
    }

    deleteGroup(id: number) {
        this.groupService.deleteGroup(id).subscribe(() => {
                    this.groupService.getGroupsList().subscribe((value) => {
                        this.groups$.next(value);
                    });
                });
    }

    openCreateDialog() {
        this.dialog.open(CreateGroupDialog);
    }

    trackByFn(index: number, item: any) {
        return item.id;
    }
}
