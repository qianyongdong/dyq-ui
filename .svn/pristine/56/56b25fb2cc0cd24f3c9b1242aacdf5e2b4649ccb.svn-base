import type { Indexable } from './types';
// fetch 增加超时
export const createFetchWithTimeout = (timeout = 3000) => {
  return (url: string, options: Indexable) => {
    return new Promise((resolve, reject) => {
      // 中断请求
      const abort = new AbortController();
      options = options || {};
      // 保留参数
      if (options.signal) {
        options.signal.addEventListener('abort', () => {
          abort.abort();
        });
      }
      options.signal = abort.signal;
      const timer = setTimeout(() => {
        reject(new Error('timeout'));
      }, timeout);
      fetch(url, options)
        .then((res) => {
          clearTimeout(timer);
          resolve(res);
          abort.abort();
        })
        .catch((err) => {
          clearTimeout(timer);
          reject(err);
        });
    });
  };
};
