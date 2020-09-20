module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = process.env.VUE_APP_SITE_NAME;
                return args
            })
    }
}