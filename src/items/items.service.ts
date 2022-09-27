import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/items.interface';

@Injectable()

export class ItemsService {
    private readonly items:Item[]=[
        {
            id:'a0681d1a441c58016bdb70424cf5ee6e',
            name:'Vodka',
            qty:12,
            description:'Beer one'

        },
        {
            id:'a0681d1a441c58016bdb70424cf5ee6e',
            name:'Vodka',
            qty:12,
            description:'Beer one'

        }
    ];
    findAll():Item[]{
        return this.items;
    }
}
