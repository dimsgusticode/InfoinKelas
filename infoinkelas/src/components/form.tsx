import AddNews from '../components/addNews';
import UpdateNews from './updateNews';

export default function Form(){

    const flag = true;

    return(
        <div className="container mx-auto py-5">
            {flag ? <AddNews /> : <UpdateNews />}
        </div>
    )
}