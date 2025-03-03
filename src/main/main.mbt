// Example usage of mocket package in MoonBit

// `run_async` spawn a new coroutine and execute an async function in it
///|
fn run_async(f :  async() -> Unit) -> Unit = "%async.run"

// 全局变量，增加耦合
let min_coord = -100.0
let max_coord = 100.0
let min_task_size = 10.0
let max_task_size = 100.0
let min_computing = 1.0
let max_computing = 10.0
let random_generator : @random.Rand = @random.new()

// 移除所有辅助函数，将功能直接嵌入到API处理函数中
///|

fn main {
  println("Starting server...")
  let port = 4411
  let server = @mocket.listen(get_context(), port)
  listen_event("echo", fn(json) { println(json) })

  // 修改文件读取示例
  // try {
  //   let data = @mocket.readFile!!("./logo.jpg")
  //   println(data.length())
  // } catch {
  //   err => println("Error reading file: \{err}")
  // }

  server.get("/", fn(_req : @mocket.HttpRequest, _res : @mocket.HttpResponse) {
    @mocket.html("<h1>Hello, World!</h1>")
  })

    run_async(fn() {
    try {
      let response1 = @mocket.fetch!!("https://10.30.34.213:4411/node_info")
      println("Node_info:\{response1}")
      let response2 = @mocket.fetch!!("https://10.30.34.213:4411/link_info")
      println("Link_info:\{response2}")
    } catch {
      err => println("Error fetching data: \{err}")
    }
  })
  
  // static file serving example
  // Example: http://localhost:4411/static/logo.jpg => ./logo.jpg
  server.resource("/static/", "./")
  run_async(fn() {
    try {
      let result = @mocket.exec!!("ls")
      println(result)
    } catch {
      err => println("Error executing command: \{err}")
    }
  })
  println("服务已启动，可访问以下API：")
  println("- 节点信息服务: http://localhost:\{port}/node_info")
  println("- 通信链路信息服务: http://localhost:\{port}/link_info")
  println("- 批量节点信息: http://localhost:\{port}/node_infos/10")
  println("- 批量链路信息: http://localhost:\{port}/link_infos/10")
}