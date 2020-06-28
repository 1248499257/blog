# axios封装(Promise版本)

```js
import * as stringify from 'qs/lib/stringify';

/**
 * ajax 请求封装-axios版
 * @param  { object } options
 *
 * options 参数说明
 *
 * [required] base_url 接口地址
 * [optional] method  请求方法，默认四种 'get', 'delete', 'post', 'put'
 * [vm] 这里的vm 根据自己的ui框架去分别做处理
 */

export default class {
    constructor(prefix = '') {
        this.base_url = prefix;
        this.http = axios.create({
            baseURL: this.base_url,
            withCredentials: true,
            // 序列化传参
            paramsSerializer(params) {
                return stringify(params, { arrayFormat: 'repeat' });
            },
        });
        // 头部config配置
        this.http.interceptors.request.use((config) => {
            config.headers.authorization = `Bearer ${sessionStorage.getItem('token')}`;
            return config;
        });
        // 响应数据处理
        this.http.interceptors.response.use(
            (response) => {
                if (response.data.status === 'success') {
                    return response.data.data;
                }
                if (!this.show_error) return Promise.reject(response.data);
                if (response.data.code) {
                    this.httpErrorHandle(response.data);
                    return Promise.reject(response.data);
                }
                if (response.data.message) {
                    vm.$createToast({
                        txt: response.data.message,
                    }).show();
                    return Promise.reject(response.data);
                }
            },
            (error) => {
                if (!this.show_error) return Promise.reject(error);
                vm.$createToast({
                    txt: error.message,
                }).show();
                return Promise.reject(error);
            },
        );
        const methods = ['get', 'delete', 'post', 'put'];
        methods.map((i) => {
            this[i] = this.http[i];
            return i;
        });
        this.canShowError();
    }

    httpErrorHandle(error) {
        switch (error.code) {
        case 401:
            // vm.$router.push({path: '/'});
            break;
        default:
            if (error.message) {
                vm.$createToast({
                    txt: error.message,
                }).show();
            }
            break;
        }
        return Promise.reject(error);
    }

    canShowError() {
        this.show_error = true;
    }

    cantShowError() {
        this.show_error = false;
    }
}

```
