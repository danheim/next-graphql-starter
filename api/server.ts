import path from 'path'
import 'module-alias/register'
import dotenv from 'dotenv'

import { startServer } from '@/server/startServer'

dotenv.config({ path: path.join(__dirname, '..', '.env') })

const port = process.env.API_PORT

startServer().then(({ server }) => {
  server.listen({ port }, () => {
    // eslint-disable-next-line no-console
    console.log(
      ' 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀\n',
      `Server is ready on http://localhost:${port}/\n`,
      '🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀',
    )
  })
})
