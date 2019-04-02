import Router from 'koa-router'
import axios from './utils/axios'
import config from '../dbs/config'

let router = new Router({ prefix: '/geo' })

const sign = config.sign;

router.get('/getPosition', async ctx => {
    let { status, data: { province, city } } = await axios.get(`${config.requestUrl}/geo/getPosition?sign=${sign}`)
    if (status === 200) {
        ctx.body = {
            province,
            city
        }
    } else {
        ctx.body = {
            province: '',
            city: ''
        }
    }
})

export default router;