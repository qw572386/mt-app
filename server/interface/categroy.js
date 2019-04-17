import Router from "koa-router";
import axios from "./utils/axios";
import config from "../dbs/config";

let router = new Router({ prefix: "/categroy" });

const sign = config.sign;
router.get('/crumbs', async ctx => {
    let { status, data: { areas, types } } = await axios.get(`${config.requestUrl}/categroy/crumbs`, {
        params: {
            city: ctx.query.city.replace('市', '') || '北京',
            sign
        }
    })
    ctx.body = {
        areas: status === 200 ? areas : [],
        types: status === 200 ? types : []
    }
})


export default router;