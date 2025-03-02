// Example usage of mocket package in MoonBit

// `run_async` spawn a new coroutine and execute an async function in it
///|
fn run_async(f :  async() -> Unit) -> Unit = "%async.run"
struct Coordinates {
   x : Float
   y : Float 
}
struct NodeInfo {
  user_id : String
  user_coordinates : Coordinates
  task_size : Float
  device_id : String
  device_coordinates : Coordinates
  computing_capacity : Float
}

// 通信链路信息数据结构
struct LinkInfo {
  channel_matrix : Array[Array[Float]];
  transmit_power : Float
  noise_power : Float
  bandwidth : Float
  source_id : String
  target_id : String
}
fn random_float(min : Float, max : Float) -> Float {
  let random = @random.new().float()
  min + random * (max - min)
}

// 生成随机坐标
fn generate_coordinates() -> Coordinates {
  {
    x: random_float(-100.0, 100.0), 
    y: random_float(-100.0, 100.0)
  }
}

// 生成随机节点信息
fn generate_node_info() -> NodeInfo {
  let user_id = "user_\{@math.floor(random_float(1000,9999).to_double())}"
  let device_id = "device_\{@math.floor(random_float(1000.0,9999.0).to_double())}"
  
  {
    user_id,
    user_coordinates: generate_coordinates(),
    task_size: random_float(10.0, 100.0),
    device_id,
    device_coordinates: generate_coordinates(),
    computing_capacity: random_float(1.0, 10.0)
  }
}

// 生成随机通信链路信息
fn generate_link_info() -> LinkInfo {
  // 简单的 2x2 信道矩阵
  let channel_matrix = [
    [random_float(0.1, 0.9), random_float(0.1, 0.9)],
    [random_float(0.1, 0.9), random_float(0.1, 0.9)]
  ]
  
  {
    channel_matrix,
    transmit_power: random_float(0.1, 1.0),
    noise_power: random_float(0.001, 0.01),
    bandwidth: random_float(1.0, 20.0),
    source_id: "user_\{@math.floor(random_float(1000.0,9999.0).to_double()).to_int()}",
    target_id: "device_\{@math.floor(random_float(1000.0,9999.0).to_double()).to_int()}"
  }
}
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
    { "name": "John Doe", "age": 30, "city": "New York" }
  })
  
  // 服务一：产生节点信息API
  server.get("/node_info", fn(
    _req : @mocket.HttpRequest,
    _res : @mocket.HttpResponse
  ) {
    let node = generate_node_info()
    {
      "user_id": node.user_id.to_json(),
      "user_coordinates": {
        "x": node.user_coordinates.x.to_json(),
        "y": node.user_coordinates.y.to_json()
      },
      "task_size": node.task_size.to_json(),
      "device_id": node.device_id.to_json(),
      "device_coordinates": {
        "x": node.device_coordinates.x.to_json(),
        "y": node.device_coordinates.y.to_json()
      },
      "computing_capacity": node.computing_capacity.to_json()
    }
  })
  
  // 服务二：产生通信链路信息API
  server.get("/link_info", fn(
    _req : @mocket.HttpRequest,
    _res : @mocket.HttpResponse
  ) {
    let link = generate_link_info()
    {
      "channel_matrix": link.channel_matrix.to_json(),
      "transmit_power": link.transmit_power.to_json(),
      "noise_power": link.noise_power.to_json(),
      "bandwidth": link.bandwidth.to_json(),
      "source_id": link.source_id.to_json(),
      "target_id": link.target_id.to_json()
    }
  })
  
  // 批量生成节点信息API
  server.get("/node_infos/:count", fn(
    req : @mocket.HttpRequest,
    _res : @mocket.HttpResponse
  ) {
    match req.body {
      Some(count_str) => {
        let count = count_str.as_number()
        let count = @math.minimum(100, @math.maximum(1, count.unwrap().to_int()))
        let nodes = []
        for i = 0; i < count; i = i + 1 {
          let node = generate_node_info()
          nodes.push({
            "user_id": node.user_id.to_json(),
            "user_coordinates": {
              "x": node.user_coordinates.x.to_json(),
              "y": node.user_coordinates.y.to_json()
            }.to_json(),
            "task_size": node.task_size.to_json(),
            "device_id": node.device_id.to_json(),
            "device_coordinates": {
              "x": node.device_coordinates.x.to_json(),
              "y": node.device_coordinates.y.to_json()
            },
            "computing_capacity": node.computing_capacity.to_json()
          })
        }
        { "nodes": nodes.to_json() }
      }
      None => { "error": "Count parameter is required" }
    }
  })
  
  // 批量生成链路信息API
  server.get("/link_infos/:count", fn(
    req : @mocket.HttpRequest,
    _res : @mocket.HttpResponse
  ) {
    match req.body {
      Some(count_str) => {
        let count =count_str.as_number().unwrap().to_int()
        let count = @math.minimum(100, @math.maximum(1, count))
        let links = []
        for i = 0; i < count; i = i + 1 {
          let link = generate_link_info()
          links.push({
            "channel_matrix": link.channel_matrix.to_json(),
            "transmit_power": link.transmit_power.to_json(),
            "noise_power": link.noise_power.to_json(),
            "bandwidth": link.bandwidth.to_json(),
            "source_id": link.source_id.to_json(),
            "target_id": link.target_id.to_json()
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
  run_async(fn() {
    try {
      let response = @mocket.fetch!!("https://api64.ipify.org/")
      println(response)
    } catch {
      err => println("Error fetching data: \{err}")
    }
  })
  
  println("服务已启动，可访问以下API：")
  println("- 节点信息服务: http://localhost:\{port}/node_info")
  println("- 通信链路信息服务: http://localhost:\{port}/link_info")
  println("- 批量节点信息: http://localhost:\{port}/node_infos/10")
  println("- 批量链路信息: http://localhost:\{port}/link_infos/10")
}