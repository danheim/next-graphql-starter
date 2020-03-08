import { UserServices } from '@/modules/User/user.services'

export const UserResolvers = {
  Query: {
    user: () => UserServices.user(),
  },
}
