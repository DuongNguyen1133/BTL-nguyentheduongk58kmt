function dfs(graph, start) {
    const visited = new Set();
    const stack = [start];
  
    while (stack.length > 0) {
      const u = stack.pop();
  
      if (visited.has(u)) {
        continue;
      }
  
      visited.add(u);
  
      // Thực hiện các thao tác cần thiết với đỉnh u
  
      for (const v of graph[u]) {
        if (!visited.has(v)) {
          stack.push(v);
        }
      }
    }
  
    return visited;
  }
  
  // Ví dụ sử dụng
  const graph = [
    [1, 2],
    [0, 3, 5],
    [0, 4],
    [1, 5],
    [2, 3],
    [1, 4],
  ];
  
  const visited = dfs(graph, 0);
  
  console.log(visited);
  