import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;  // `!` で初期化保証

  @Column()
  title!: string;

  @Column({ default: false })
  completed!: boolean;

  @Column({ nullable: true })
  category?: string; // `?` で任意に
}
