import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly role: string;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  readonly createdAt: Date;

  @ApiProperty()
  @IsDate()
  readonly updatedAt: Date;
}

export class UpdateUserDTO extends PartialType(CreateUserDTO) {}
