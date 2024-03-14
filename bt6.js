function findMST(graph) {
    const edges = [];
    for (let i = 0; i < graph.length; i++) {
      for (let j = i + 1; j < graph.length; j++) {
        if (graph[i][j] > 0) {
          edges.push({
            source: i,
            destination: j,
            weight: graph[i][j],
          });
        }
      }
    }
  
    edges.sort((a, b) => a.weight - b.weight);
  
    const unionFind = new UnionFind(graph.length);
  
    const mst = [];
    for (const edge of edges) {
      if (!unionFind.connected(edge.source, edge.destination)) {
        mst.push(edge);
        unionFind.union(edge.source, edge.destination);
      }
    }
  
    return mst;
  }
  
  class UnionFind {
    constructor(n) {
      this.parents = Array(n);
      this.ranks = Array(n);
  
      for (let i = 0; i < n; i++) {
        this.parents[i] = i;
        this.ranks[i] = 0;
      }
    }
  
    find(x) {
      if (this.parents[x] !== x) {
        this.parents[x] = this.find(this.parents[x]);
      }
  
      return this.parents[x];
    }
  
    union(x, y) {
      const xRoot = this.find(x);
      const yRoot = this.find(y);
  
      if (xRoot === yRoot) {
        return;
      }
  
      if (this.ranks[xRoot] < this.ranks[yRoot]) {
        this.parents[xRoot] = yRoot;
      } else if (this.ranks[xRoot] > this.ranks[yRoot]) {
        this.parents[yRoot] = xRoot;
      } else {
        this.parents[yRoot] = xRoot;
        this.ranks[xRoot]++;
      }
    }
  
    connected(x, y) {
      return this.find(x) === this.find(y);
    }
  }
  
  // Ví dụ sử dụng
  const graph = [
    [0, 4, 8, 0, 0],
    [4, 0, 6, 2, 0],
    [8, 6, 0, 0, 0],
    [0, 2, 0, 0, 7],
    [0, 0, 0, 7, 0],
  ];
  
  const mst = findMST(graph);
  
  console.log(mst);
  