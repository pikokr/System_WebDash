import Router from 'koa-router'

const router = new Router()

router.get('/', (ctx) => {
  ctx.body = { happy: 'hacking' }
})

export default router
