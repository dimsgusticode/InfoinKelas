import { useReducer } from 'react';
import { BiPlus } from 'react-icons/bi';
import Success from '../components/success';
import Bug from '../components/bug';

const formReducer = (state: any, event: any)=>{
    return{
        ...state,
        [event.target.name]:event.target.value
    }
}

export default function AddNews(){

    const [formData, setFormData] = useReducer(formReducer, {})

    const handleSubmit = (e: any) =>{
        e.preventDefault();
        if(Object.keys(formData).length == 0)return console.log("Don't have Form Data")
        console.log(formData)
    }

    if(Object.keys(formData).length > 0) return <Bug message={"Error"}></Bug>

    return(
        <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="title" className="border w-full px-5 py-3 focus:outline-none round-md" placeholder="Judul" />
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="description" className="border w-full px-5 py-3 focus:outline-none round-md" placeholder="Deskripsi" />
            </div>
            <div className="input-type">
                <input type="date" onChange={setFormData} name="duedate" className="border px-5 py-3 focus:outline-none rounded-md" placeholder="Batas waktu" />
            </div>
            <div className="flex gap-10 items-center">
                <div className="form-check">
                    <input type="radio" onChange={setFormData} value="active" id="radioDefault1" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                    <label htmlFor="radioDefault1" className="inline-block tet-gray-800">Aktif</label>
                </div>
                <div className="form-check">
                    <input type="radio" onChange={setFormData} value="inactive" id="radioDefault2" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                    <label htmlFor="radioDefault2" className="inline-block tet-gray-800">Nonaktif</label>
                </div>
            </div>
            <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">Tambah<span className='px-1'><BiPlus size={24}></BiPlus></span></button>
        </form>
    )
}