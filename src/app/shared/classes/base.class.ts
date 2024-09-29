export class BaseClass {
    private url: string;
    private name: string;
    constructor(data: {url: string, name: string}) {
        this.url = data.url;
        this.name = data.name;
    }
    
    public getUrl(): string {
        return this.url;
    }

    public getName(): string {
        return this.name;
    }
    
    public setName(name: string): void {
        this.name = name;
    }

    public setUrl(url: string): void {
        this.url = url;
    }
}

export interface IBaseClassType {
    name: string,
    url: string
}