declare module "ctgs.js" {
    export default class shortener {
        constructor() {}
        async new(slug: string, redirect_url: string)
        async get(slug: string)
    }
}