import { BiEdit, BiTrashAlt } from 'react-icons/bi';

export default function Table(){
    return(
        <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-800">
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Judul</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Deskripsi</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Batas waktu</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Status</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Aksi</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
                <tr className="bg-gray-50 text-center">
                    <td className="px-16 py-2 flex-row items-center">
                        <span className="text-center ml-2 font-semibold">Berita harian</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>Catatan kecil</span>
                    </td>
                    <td className="px-16 py-2">
                        <span>12-12-2012</span>
                    </td>
                    <td className="px-16 py-2">
                        <button className="cursor"><span className="bg-green-500 text-white px-5 py-1 rounded-md">Selesai</span></button>
                    </td>
                    <td className='px-16 py-2 flex justify-around gap-5'>
                        <button className='cursor'><BiEdit size={25} color={"rgb(34,197,94"}></BiEdit></button>
                        <button className='cursor'><BiTrashAlt size={25} color={"rgb(244,63,94"}></BiTrashAlt></button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}