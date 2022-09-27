import { Controller,Post,Get,Put,Delete,Param,Body } from '@nestjs/common';
import { CreateItemDto } from './dto/createItem.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/items.interface';
@Controller('items')
export class ItemsController {
  constructor(private readonly itemService:ItemsService){}
  //   @Get()
  //   getItems():string{
  //       return 'Get all items';

  // }
  @Get()
  getAll():Item[]{
    return this.itemService.findAll();
  }
  // @Get(':id')
  // getItemById(@Param('id') id):string{
  //   return `id is :${id}`
  // }
  @Get(':id')
  getItemById(@Param('id') id):Item{
    return this.itemService.getOneById(id); 

  }
@Delete(':id')
deleteItem(@Param('id') id):string{
  return `Item deleted is ${id}`
}
@Put(':id')
updatetItem(@Body() updateItemDto:CreateItemDto, @Param('id') id):string{
  return `item updated with name ${updateItemDto.name} and description:${updateItemDto.description}`
}
  @Post()
  createItem(@Body() createItemDto:CreateItemDto):string{
    return `Name:${createItemDto.name} description:${createItemDto.description}`
  }
  
}
