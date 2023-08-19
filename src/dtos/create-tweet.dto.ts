import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTweetDto {
  @IsString({ message: 'All fields are required!' })
  @IsNotEmpty({ message: 'All fields are required!' })
  username: string;
  @IsString({ message: 'All fields are required!' })
  @IsNotEmpty({ message: 'All fields are required!' })
  tweet: string;
}
