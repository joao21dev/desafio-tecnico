import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'bigint' })
  public cnpj: string;

  @Column()
  public fantasyName: string;

  @Column()
  public socialName: string;

  @Column()
  public description: string;

  @Column()
  public storeEmail: string;

  @Column()
  public storePhone: string;

  @Column()
  public ownerName: string;

  @Column()
  public ownerEmail: string;

  @Column()
  public ownerPhone: string;

  @Column()
  public ownerSecondaryPhone: string;
}
