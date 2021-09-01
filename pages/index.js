import React, { useState, useCallback } from "react";
import {
  GeralContainer,
  CardContainer,
  TitleCard,
  InputCard,
  ButtonCard,
  TitleButtonCard,
} from "./styles";
import emailjs from "emailjs-com";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const code = Math.random().toFixed(6) * 1000000;
  const id = Math.random().toFixed(11) * 100000000000;

  const sendEmail = useCallback(() => {
    try {
      emailjs
        .send
        //coloque suas credenciais
        ();
      router.push(`/user/${id}`);
      localStorage.setItem(`${id}`, code);
    } catch (err) {
      console.log(err);
    }
  }, [email, code, router, id]);
  return (
    <GeralContainer>
      <CardContainer>
        <TitleCard>Digite seu email</TitleCard>
        <InputCard onChange={(item) => setEmail(item.target.value)} />
        <ButtonCard onClick={sendEmail}>
          <TitleButtonCard>Enviar</TitleButtonCard>
        </ButtonCard>
      </CardContainer>
    </GeralContainer>
  );
}
