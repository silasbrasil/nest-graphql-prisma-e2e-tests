import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
  @IsEmail({}, { message: "O campo email deve ser um email válido" })
  email: string;

  @IsOptional()
  @IsNotEmpty({ message: "O campo name não pode ser vazio" })
  @IsString({ message: "O campo name dever uma String" })
  name: string;
}