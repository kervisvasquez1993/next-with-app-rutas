import notFound from "../not-found";

interface Props {
    params : {
        id : string
    }
}
export default function({params } : Props) {
    const {id} = params;
    if(id == "kids"){
        return  notFound();
    }
    return (
        <div>
            <h2>Category page {id} </h2>
        </div>
    )
}