import { UndirectedGraph } from "./undirected-graph";

describe('Undirected graph', () => {
    it('should add vertex', () => {
        const undirectedGraph = new UndirectedGraph();
        const vertex = { key: 'test', data: 1 };
        undirectedGraph.addVertex(vertex);

        expect(undirectedGraph._graph.get(vertex.key)).toStrictEqual([]);
        expect(undirectedGraph._vertexes.get(vertex.key)).toStrictEqual(vertex);
    });
    it('should add edge', () => {
        const undirectedGraph = new UndirectedGraph();
        const vertex = { key: 'test', data: 1 };
        undirectedGraph.addVertex(vertex);
        const vertex2 = { key: 'test2', data: 2 };
        undirectedGraph.addVertex(vertex2);
        undirectedGraph.addEdge(vertex.key, vertex2.key);

        expect(undirectedGraph._graph.get(vertex.key)).toStrictEqual([vertex2.key]);
        expect(undirectedGraph._vertexes.get(vertex.key)).toStrictEqual(vertex);
        expect(undirectedGraph._vertexes.get(vertex2.key)).toStrictEqual(vertex2);
    });
    it('should remove edge', () => {
        const undirectedGraph = new UndirectedGraph();
        const vertex = { key: 'test', data: 1 };
        undirectedGraph.addVertex(vertex);
        const vertex2 = { key: 'test2', data: 2 };
        undirectedGraph.addVertex(vertex2);
        undirectedGraph.addEdge(vertex.key, vertex2.key);
        undirectedGraph.removeEdge(vertex.key, vertex2.key);

        expect(undirectedGraph._graph.get(vertex.key)).toStrictEqual([]);
        expect(undirectedGraph._vertexes.get(vertex.key)).toStrictEqual(vertex);
        expect(undirectedGraph._vertexes.get(vertex2.key)).toStrictEqual(vertex2);
    });
    it('should remove vertex', () => {
        const undirectedGraph = new UndirectedGraph();
        const vertex = { key: 'test', data: 1 };
        undirectedGraph.addVertex(vertex);
        undirectedGraph.removeVertex(vertex.key);

        expect(undirectedGraph._graph.get(vertex.key)).toStrictEqual(undefined);
        expect(undirectedGraph._vertexes.get(vertex.key)).toStrictEqual(undefined);
    });
})