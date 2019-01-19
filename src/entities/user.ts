import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { IsNotEmpty, IsString, IsBoolean, Min } from 'class-validator';
@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn() id: number;

  @IsNotEmpty()
  @IsString()
  @Column("varchar", { length: 80 }) usuario: string;

  @IsNotEmpty()
  @IsString()
  @Column("varchar", { length: 80 }) senha: string;

  @IsNotEmpty()
  @IsString()
  @Column("varchar", { length: 80 }) email: string;

  @IsNotEmpty()
  @IsString()
  @Column("varchar", { length: 80 }) cargo: string;

  @IsNotEmpty()
  @IsBoolean()
  @Column("boolean") ativo: boolean;
  
  @CreateDateColumn() created_at: Date;
  @UpdateDateColumn() updated_at: Date;

}
