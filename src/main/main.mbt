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
  // string response example
  server.get("/text", fn(
    _req : @mocket.HttpRequest,
    _res : @mocket.HttpResponse
  ) {
    String("<h1>Hello, World!</h1>")
  })
  // async json data example
  server.get("/async_data", async fn(
    _req : @mocket.HttpRequest,
    _res : @mocket.HttpResponse
  ) {
    { "name": "John Doe", "age": 30, "city": "New York" }
  })
  // json data example
  server.get("/data", fn(
    _req : @mocket.HttpRequest,
    _res : @mocket.HttpResponse
  ) {
    { "name": "John", "age": 30, "city": "New York" }
  })
  
  // 服务一：产生节点信息API - 高耦合版本
  server.get("/node_info", fn(
    _req : @mocket.HttpRequest,
    _res : @mocket.HttpResponse
  ) {
    // 直接在函数内部生成所有数据，不使用独立函数
    let random_x1 = min_coord + random_generator.double() * (max_coord - min_coord)
    let random_y1 = min_coord + random_generator.double() * (max_coord - min_coord)
    let random_x2 = min_coord + random_generator.double() * (max_coord - min_coord)
    let random_y2 = min_coord + random_generator.double() * (max_coord - min_coord)
    let task_size = min_task_size + random_generator.double() * (max_task_size - min_task_size)
    let computing_capacity = min_computing + random_generator.double() * (max_computing - min_computing)
    
    // 硬编码生成ID，重复逻辑
    let user_id = "user_\{@math.floor(random_generator.double() * 9000.0 + 1000.0).to_int()}"
    let device_id = "device_\{@math.floor(random_generator.double() * 9000.0 + 1000.0).to_int()}"
    
    {
      "user_id": user_id.to_json(),
      "user_coordinates": {
        "x": random_x1.to_json(),
        "y": random_y1.to_json()
      },
      "task_size": task_size.to_json(),
      "device_id": device_id.to_json(),
      "device_coordinates": {
        "x": random_x2.to_json(),
        "y": random_y2.to_json()
      },
      "computing_capacity": computing_capacity.to_json()
    }
  })
  
  // 服务二：产生通信链路信息API - 高耦合版本
  server.get("/link_info", fn(
    _req : @mocket.HttpRequest,
    _res : @mocket.HttpResponse
  ) {
    // 直接在函数中创建通信链路数据，不使用辅助函数
    // 复制大量代码增加耦合
    let channel_matrix = [
      [
        0.1 + random_generator.double() * 0.8,
        0.1 + random_generator.double() * 0.8
      ],
      [
        0.1 + random_generator.double() * 0.8,
        0.1 + random_generator.double() * 0.8
      ]
    ]
    
    let transmit_power = 0.1 + random_generator.double() * 0.9
    let noise_power = 0.001 + random_generator.double() * 0.009
    let bandwidth = 1.0 + random_generator.double() * 19.0
    
    // 重复用户ID生成逻辑
    let source_id = "user_\{@math.floor(random_generator.double() * 9000.0 + 1000.0).to_int()}"
    let target_id = "device_\{@math.floor(random_generator.double() * 9000.0 + 1000.0).to_int()}"
    
    {
      "channel_matrix": channel_matrix.to_json(),
      "transmit_power": transmit_power.to_json(),
      "noise_power": noise_power.to_json(),
      "bandwidth": bandwidth.to_json(),
      "source_id": source_id.to_json(),
      "target_id": target_id.to_json()
    }
  })
  
  // 批量生成节点信息API - 高耦合版本
  server.get("/node_infos/:count", fn(
    req : @mocket.HttpRequest,
    _res : @mocket.HttpResponse
  ) {
    match req.body {
      Some(count_str) => {
        let count = count_str.as_number()
        let count = @math.minimum(100, @math.maximum(1, count.unwrap().to_int()))
        let nodes = []
        
        // 重复实现节点生成逻辑
        for i = 0; i < count; i = i + 1 {
          // 复制上面函数的逻辑，增加耦合
          let random_x1 = min_coord + random_generator.double() * (max_coord - min_coord)
          let random_y1 = min_coord + random_generator.double() * (max_coord - min_coord)
          let random_x2 = min_coord + random_generator.double() * (max_coord - min_coord)
          let random_y2 = min_coord + random_generator.double() * (max_coord - min_coord)
          let task_size = min_task_size + random_generator.double() * (max_task_size - min_task_size)
          let computing_capacity = min_computing + random_generator.double() * (max_computing - min_computing)
          
          let user_id = "user_\{@math.floor(random_generator.double() * 9000.0 + 1000.0).to_int()}"
          let device_id = "device_\{@math.floor(random_generator.double() * 9000.0 + 1000.0).to_int()}"
          
          nodes.push({
            "user_id": user_id.to_json(),
            "user_coordinates": {
              "x": random_x1.to_json(),
              "y": random_y1.to_json()
            }.to_json(),
            "task_size": task_size.to_json(),
            "device_id": device_id.to_json(),
            "device_coordinates": {
              "x": random_x2.to_json(),
              "y": random_y2.to_json()
            },
            "computing_capacity": computing_capacity.to_json()
          })
        }
        { "nodes": nodes.to_json() }
      }
      None => { "error": "Count parameter is required" }
    }
  })
  
  // 批量生成链路信息API - 高耦合版本
  server.get("/link_infos/:count", fn(
    req : @mocket.HttpRequest,
    _res : @mocket.HttpResponse
  ) {
    match req.body {
      Some(count_str) => {
        let count = count_str.as_number().unwrap().to_int()
        let count = @math.minimum(100, @math.maximum(1, count))
        let links = []
        
        // 重复实现链路生成逻辑
        for i = 0; i < count; i = i + 1 {
          // 复制通信链路生成代码
          let channel_matrix = [
            [
              0.1 + random_generator.double() * 0.8,
              0.1 + random_generator.double() * 0.8
            ],
            [
              0.1 + random_generator.double() * 0.8,
              0.1 + random_generator.double() * 0.8
            ]
          ]
          
          let transmit_power = 0.1 + random_generator.double() * 0.9
          let noise_power = 0.001 + random_generator.double() * 0.009
          let bandwidth = 1.0 + random_generator.double() * 19.0
          let source_id = "user_\{@math.floor(random_generator.double() * 9000.0 + 1000.0).to_int()}"
          let target_id = "device_\{@math.floor(random_generator.double() * 9000.0 + 1000.0).to_int()}"
          
          links.push({
            "channel_matrix": channel_matrix.to_json(),
            "transmit_power": transmit_power.to_json(),
            "noise_power": noise_power.to_json(),
            "bandwidth": bandwidth.to_json(),
            "source_id": source_id.to_json(),
            "target_id": target_id.to_json()
          })
        }
        { "links": links.to_json() }
      }
      None => { "error": "Count parameter is required" }
    }
  })
  
  // echo server example
  server.post("/echo", fn(
    req : @mocket.HttpRequest,
    _res : @mocket.HttpResponse
  ) {
    match req.body {
      Some(data) => data
      _ => String("No data received")
    }
  })
  // file serving example
  server.get("/image", fn(
    _req : @mocket.HttpRequest,
    _res : @mocket.HttpResponse
  ) {
    @mocket.file("logo.jpg")
  })

  // buffer serving example
  server.get("/buffer", fn(
    _req : @mocket.HttpRequest,
    _res : @mocket.HttpResponse
  ) {
    @mocket.buffer(
      [
        72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33, 32, 84, 104, 105,
        115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116, 32, 115, 116, 114, 105,
        110, 103, 32, 102, 111, 114, 32, 116, 101, 115, 116, 105, 110, 103, 32, 112,
        117, 114, 112, 111, 115, 101,
      ].map(fn(x) { x.to_byte() })
      |> Bytes::from_array,
    )
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