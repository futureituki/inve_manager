import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class TaskDto {
  @IsNotEmpty()
  @IsString()
  counterparty:string

  @IsNotEmpty()
  capital:number

  @IsNotEmpty()
  period:number

  @IsNotEmpty()
  rate:number

  @IsNotEmpty()
  transactionDate:Date
}