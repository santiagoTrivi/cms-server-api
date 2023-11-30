

export class Name{


    private value: string;

    constructor(value: string){
        this.value = value;
    }

    public static create = (value: string) => {
        return new Name(value);
    }

    get getValue(): string{
        return this.value
    }

}