import { User } from '@/models/User'

export const UserServices = {
  user: () => User.findAll(),
}
