import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'All fields are required!' })
  @IsNotEmpty({ message: 'All fields are required!' })
  username: string;

  @IsNotEmpty({ message: 'All fields are required!' })
  @IsUrl(undefined, { message: 'All fields are required!' })
  avatar: string;
}
