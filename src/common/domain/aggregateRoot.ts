import { UniqueId } from "./uniqueId";



export abstract class AggregateRoot<T>{

    protected readonly id: UniqueId;
    props: T;

    constructor(props: T, id: UniqueId){
        this.id = id;
        this.props = props;
    }

    get getId(): UniqueId{
        return this.id;
    }


}