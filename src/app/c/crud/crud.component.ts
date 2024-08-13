import { Component } from '@angular/core';

interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  items: Item[] = [];
  newItem: string = '';
  editItemName: string = '';
  editItemId: number | null = null;

  createItem() {
    if (this.newItem) {
      const newId = this.items.length + 1;
      this.items.push({ id: newId, name: this.newItem });
      this.newItem = '';
    }
  }

  editItem(item: Item) {
    this.editItemName = item.name;
    this.editItemId = item.id;
  }

  updateItem() {
    if (this.editItemId !== null) {
      const item = this.items.find(i => i.id === this.editItemId);
      if (item) {
        item.name = this.editItemName;
        this.editItemName = '';
        this.editItemId = null;
      }
    }
  }

  deleteItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
  }
}
