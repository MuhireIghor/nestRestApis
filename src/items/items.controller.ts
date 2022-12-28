import { Controller,Post,Get,Put,Delete,Param,Body, Req, Query, Res, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dto/createItem.dto';
import { ItemsService } from './items.service';
import  {Pricedto} from './dto/price.dto'
import { Item } from './interfaces/items.interface';
import { query } from 'express';
import { log } from 'console';
@Controller('items')
export class ItemsController {
  constructor(private readonly itemService:ItemsService){}
  @Get()
  getAll():Promise<Item[]>{
    return  this.itemService.findAll();
  }
  @Get('price')
  getByPrice(@Query() query:{price:string},@Res() res:Response):Promise<Item[]|Item >|any{
    const price2 = Number(query.price) ;
    try{
  return this.itemService.getItemByPrice(price2).then(val=>{
    if(val.length ==0){
  console.log("No items found");
    
    }
  });

    }
    catch(err){
      return new NotFoundException("Object not found","no item with the required price");

    }
  
  }
  @Get(':id')
    getById(@Param('id') id):Promise<Item>{  
    return  this.itemService.findOne(id);
  }

  @Post()
  createItem(@Body() createItemDto:CreateItemDto):Promise<Item>{
      return this.itemService.create(createItemDto);
    }
    @Delete(':id')
    deleteItem(@Param('id') id):Promise<Item>{
      return this.itemService.deleteItem(id);
    }
    @Put(':id')
    updateItem(@Body() updateItemDto:CreateItemDto,@Param('id') id):Promise<Item>{
      return this.itemService.updateItem(id,updateItemDto)
    }

    
  }
  
  //   @Get()
  //   getItems():string{
    //       return 'Get all items';
    
    // }
    // @Get(':id')
    // getItemById(@Param('id') id):string{
      //   return `id is :${id}`
      // }
      // @Get(':id')
      // getItemById(@Param('id') id):Item{
        //   return this.itemService.getOneById(id); 
        
        // }
        // @Post()
        // createItem(@Body() createItemDto:CreateItemDto):string{
        //   return `Name:${createItemDto.name} description:${createItemDto.description}`
        // }
          // @Delete(':id')
          // deleteItem(@Param('id') id):string{
          //   return `Item deleted is ${id}`
          // }
          // @Put(':id')
          //   updatetItem(@Body() updateItemDto:CreateItemDto, @Param('id') id):string{
          //     return `item updated with name ${updateItemDto.name} and description:${updateItemDto.description}`
          //   }