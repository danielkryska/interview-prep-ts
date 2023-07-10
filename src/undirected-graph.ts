import { Map } from './map';
 
interface Vertex<DataType> {
    key: string;
    data: DataType;
}

export class UndirectedGraph<DataType> {
    _vertexes: Map<string, Vertex<DataType>> = new Map();
    _graph: Map<string, string[]> = new Map();

    addVertex(vertex: Vertex<DataType>): boolean {
        if (this._vertexes.has(vertex.key)) {
            return false;
        }

        this._vertexes.set(vertex.key, vertex);
        this._graph.set(vertex.key, []);
        return true;
    }
    removeVertex(key: string): void {
        if (!this._vertexes.has(key)) {
            return;
        }

        this._vertexes.delete(key);
        this._graph.delete(key);
        this._graph.forEach((edges, graphKey) => {
            this._graph.set(graphKey, edges.filter(edgeKey => edgeKey !== key));
        });
    }
    addEdge(vertexKey1: string, vertexKey2: string): boolean {
        if (!this._vertexes.has(vertexKey1) || !this._vertexes.has(vertexKey2)) {
            return false;
        }

        this._graph.set(vertexKey1, [...new Set([...this._graph.get(vertexKey1) as string[], vertexKey2])]);
        return true;
    }
    removeEdge(vertexKey1: string, vertexKey2: string): void {
        if (!this._vertexes.has(vertexKey1) || !this._vertexes.has(vertexKey2)) {
            return;
        }

        this._graph.set(vertexKey1, (this._graph.get(vertexKey1) as string[]).filter((key) => key !== vertexKey2));
        this._graph.set(vertexKey2, (this._graph.get(vertexKey2) as string[]).filter((key) => key !== vertexKey1));
    }
}