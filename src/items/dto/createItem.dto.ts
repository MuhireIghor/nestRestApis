export class CreateItemDto {
    readonly name: string;
    readonly description:string;
    readonly qty :number;
    color:[string];
    readonly price:number;
}