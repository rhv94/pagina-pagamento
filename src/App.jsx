import { useState } from "react";
import BackCard from "./components/BackCard";
import CardFront from "./components/FrontCard";

export default function App(){
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");
  const [cvv, setCvv] = useState("");
  const [senha, setSenha] = useState("");  
  
  function pagar(){
    console.log(nome)
    console.log(numero)
    console.log(mes)
    console.log(ano)
    console.log(cvv)
    console.log(senha)
  }

  return(
    <div className="w-full h-screen flex">
      <div className="w-[40%] relative h-full bg-[#271540]">
        <div className="absolute top-10 left-40">
          <CardFront />
        </div>
        <div className="absolute top-95 left-70">
          <BackCard />
        </div>
      </div>
      <div className="w-[60%] h-full flex items-end p-[40px] flex-col">
        <h1 className="text-[45px] w-[70%] h-[150px] font-bold">Preencha os campos para concluir o pagamento!</h1>
        <div className="w-[65%] h-auto min-h-[200px] flex flex-col gap-4">
          <div className="w-full flex flex-col">
            <label htmlFor="nome" className="text-[20px]">Nome no Cartão</label>
            <input
             onChange={(event) => setNome(event.target.value)}
             type="text" className="w-full h-[40px] rounded-md bg-[#d9d9d9]"/>
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="numero" className="text-[20px]">Número do Cartão</label>
            <input
             onChange={(event) => setNumero(event.target.value)}
             type="text" className="w-full h-[40px] rounded-md bg-[#d9d9d9]"/>
          </div>
          <div className="flex">
            <div className="w-[70%] flex flex-col">
              <label htmlFor="data" className="text-[20px]">Data de expiração</label>
              <div className="w-full flex gap-2">
                <input type="number"
                onChange={(event) => setMes(event.target.value)}
                placeholder="MM"
                className="w-[50%] pl-2 h-[40px] rounded-md bg-[#d9d9d9]" />
                <input type="number"
                onChange={(event) => setAno(event.target.value)}
                placeholder="AA"
                className="w-[50%] pl-2 h-[40px] rounded-md bg-[#d9d9d9]"/>
              </div>
            </div>
            <div className="w-[30%] pl-2 flex flex-col">
              <label htmlFor="" className="text-[20px]">CVV</label>
              <input type="number"
              onChange={(event) => setCvv(event.target.value)}
              className="w-full h-[40px] rounded-md bg-[#d9d9d9]" />
            </div>
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="" className="text-[20px]">Senha do cartão</label>
            <input type="password"
            onChange={(event) => setSenha(event.target.value)}
            className="w-full h-[40px] rounded-md pl-2 bg-[#d9d9d9]" />
          </div>
          <button
          onClick={pagar}
          className="w-full h-[50px] rounded-md bg-[#271540] text-white font-bold">Pagar</button>
        </div>
      </div>
    </div>
  )
}