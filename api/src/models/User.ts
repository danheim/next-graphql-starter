// modules
import {
  Table,
  Model,
  Index,
  Column,
  NotEmpty,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  DataType,
} from 'sequelize-typescript'
import { UserInputError } from 'apollo-server-express'

@Table({
  tableName: 'users',
})

export class User extends Model<User> {
  @Index({
    name: 'index_users_on_email',
    type: 'UNIQUE',
  })

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
      async isUnique(value: string, next: Function) {
        const user: User | null = await User.findOne({
          where: { email: value },
          attributes: ['id'],
        })

        if (user) {
          return next(new UserInputError('register_email_already_taken'))
        }
        return next()
      },
    },
  })
  set email(value: string) {
    this.setDataValue('email', value)
  }

  @NotEmpty
  @Column
  password: string;

  @CreatedAt
  @AllowNull(false)
  @Column({
    field: 'created_at',
  })
  createdAt: Date;

  @UpdatedAt
  @AllowNull(false)
  @Column({
    field: 'updated_at',
  })
  updatedAt: Date;
}
