import {
  IsInt,
  Length,
  IsUrl,
  IsDate,
  Min,
  Max,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  isNotEmpty,
} from 'class-validator';
import { IProduct } from '../../databases/postgresql/model/product.model';

export class CreateProductValidationSchema implements IProduct {
  @Length(3, 50)
  @IsNotEmpty()
  name!: string;

  @Length(0, 300)
  @IsOptional()
  description?: string;

  @IsNumber()
  @Min(0)
  @Max(1000_000)
  @IsOptional()
  price?: number;

  @IsUrl()
  @IsOptional()
  image?: string;

  @IsDate()
  @IsOptional()
  datePublished!: string;
}

export class UpdateProductValidationSchema extends CreateProductValidationSchema {
  @Length(3, 50)
  @IsOptional()
  name!: string;
}

export class GetProductIdValidationSchema {
  @IsInt()
  @Min(1)
  id!: number;
}
