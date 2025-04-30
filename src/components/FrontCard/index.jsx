import { FcSimCardChip } from "react-icons/fc";
import { LuNfc } from "react-icons/lu";

export default function CardFront({nome, numero}){
    return (
        <div className="w-[500px] h-[300px] bg-black rounded-xl">
            <div className="w-full h-[30%] flex ">
                <div className="w-[50%] h-full flex items-center pl-4 gap-2">
                    <div className="w-[55px] h-[55px] rounded-full bg-white"></div>
                    <div className="w-[40px] h-[40px] rounded-full bg-white"></div>
                </div>
                <div className="w=[50%] h-full flex p-4 justify-end">
                    <p className="text-[20px] text-white">Nome do Banco</p>
                </div>
            </div>
            <div className="w-full h-[40%] flex flex-col">
                <div className="w-full h-[60%] flex">
                    <FcSimCardChip size={60} />
                    <LuNfc size={60} color="#fff"/>

                </div>
                <div className="w-full h-[40%] pl-4">
                    <p className="text-[30px] text-gray-500">{numero || "0000 0000 0000 0000"}</p>
                </div>
            </div>
            <div className="w-full h-[30%] pl-4">
                <p className="text-white text-[30px]">{nome || "Nome no Cartão"}</p>
            </div>
        </div>
    )
}