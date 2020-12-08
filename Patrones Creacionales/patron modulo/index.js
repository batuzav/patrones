const module = {
    prop: "miprop",
    config: {
        lenguaje: "es",
        cache: true
    },
    setConfig: conf => {
        module.config = conf;
    },
    isCacheEnabled: () => {
        console.log(module.config.cache ? "si" : "no");
    }
}