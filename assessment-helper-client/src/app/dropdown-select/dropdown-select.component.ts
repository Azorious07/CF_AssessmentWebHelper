import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { Group } from '../classes/Group';
import { OnInit } from '@angular/core';

@Component({
    selector: 'app-dropdown-select',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dropdown-select.component.html',
    styleUrl: './dropdown-select.component.css'
})
export class GroupDropdownSelectComponent implements OnInit {
    @Input() items: Group[] = [];
    @Input() placeholder = 'Выберите группу';
    @Output() selected = new EventEmitter<Group>();

    isOpen = false;
    selectedItem: Group | null = null;

    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {
        this.selectedItem = new Group(-1, this.placeholder);
    }

    toggle() {
        this.isOpen = !this.isOpen;
    }

    select(item: Group) {
        this.selectedItem = item;
        this.selected.emit(item);
        this.isOpen = false;
    }

    @HostListener('document:click', ['$event'])
    clickOutside(event: MouseEvent) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.isOpen = false;
        }
    }
}
