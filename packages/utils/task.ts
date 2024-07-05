// 分时函数
export const performChunk = (
  params: any,
  taskHandler: Function,
  scheduler: Function
) => {
  if (params.length === 0) {
    return;
  }
  // 参数归一化
  if (typeof params === 'number') {
    params = {
      length: params,
    };
  }
  let i = 0;
  // 开启下一次分片的执行
  const _run = () => {
    if (i >= params.length) {
      return;
    }
    // 一个渲染帧中，空闲时间开启分片执行
    scheduler((goOn: Function) => {
      while (goOn() > 0 && i < params.length) {
        taskHandler(params[i], i)();
        i++;
      }
      // 此次分片完成
      _run();
    });
  };

  _run();
};

// 浏览器分时函数
export const browserPerformChunk = (params: any, taskHandler: Function) => {
  const scheduler = (task: Function) => {
    requestIdleCallback((idle) => {
      task(() => idle.timeRemaining());
    });
  };
  performChunk(params, taskHandler, scheduler);
};

// 使用分时函数
// const taskHandler = (_,i)=>{
//     const div = document.createElement('div');
//     div.innerHTML = i;
//     document.body.appendChild(div)
// }
// // 调度器
// const scheduler = (task) => {
//   //   每一秒钟执行一次
//   setTimeout(() => {
//     const now = performance.now();
//     task(() => performance.now() - now <= 10);
//   }, 1000);
// };
//// node环境调用方法
// performChunk(100000, taskHandler, scheduler);
//// 浏览器环境调用方法
// browserPerformChunk(100000, taskHandler)

// 任务执行洋葱模型
export class TaskPro {
  _taskList: Function[] = [];
  _isRunning = false;
  _currentIndex: number = 0;

  addTask(task: Function) {
    this._taskList.push(task);
  }

  async run() {
    if (this._isRunning) {
      return;
    }
    this._isRunning = true;
    await this._runTask();
  }

  async _runTask() {
    if (this._currentIndex >= this._taskList.length) {
      this._isRunning = false;
      this._currentIndex = 0;
      this._taskList = [];
      return;
    }
    const task = this._taskList[this._currentIndex];
    const i = this._currentIndex;
    await task(this._next.bind(this));
    const j = this._currentIndex;

    if (i === j) {
      await this._next();
    }
  }

  _next() {
    this._currentIndex++;
    this._runTask();
  }
}

// 使用任务执行洋葱模型
// const t = new TaskPro();
// t.addTask(async (next) => {
//   console.log(1, 'start');
//   await next();
//   console.log(1, 'end');
// });
// t.addTask(() => {
//   console.log(2);
// });
// t.addTask(() => {
//   console.log(3);
// });
// t.run(); //1 start,2,3,1 end
