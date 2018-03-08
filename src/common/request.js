export function request({ commit }, params) {
    return new Promise((resolve, reject) => {
        if (params.event) {
            commit(params.event + '_ON', { param: params.data || {} });
        }

        let config = {
            url: params.url,
            method: params.method || 'get',
            data: params.data || {},
        };
        if (('get' === config.method.toLowerCase()) && config.data) {
            config.params = config.data;
            delete config.data;
        }

        axios(config).then((data) => {
            if (params.event) {
                commit(params.event + '_SUCCESS', {
                    data: data.data ? data.data.data || data.data.result || {} : {},
                    param: params.data || {},
                    opts: params.opts
                });
            }
            // 返回码上报
            resolve(data.data || {});
        }).catch((e) => {
            if (params.event) {
                commit(params.event + '_ERROR', {
                    data: {},
                    e: e,
                    param: params.data || {},
                    opts: params.opts
                });
            }
            // 返回码上报
            reject(e);
        });
    });
};
