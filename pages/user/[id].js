import { useRouter, useCallback } from "next/router";
import React, { useEffect, useState } from "react";
import {
  GeralContainer,
  CardContainer,
  TitleCard,
  InputCard,
  ButtonCard,
  TitleButtonCard,
} from "../styles";

export default function User() {
  const { query } = useRouter();
  const [code, setCode] = useState();
  const [input, setInput] = useState("");
  const [isCorrect, setIsCorrect] = useState("");

  useEffect(() => {
    setCode(localStorage.getItem(`${query.id}`));
  }, [query]);

  function validationCode() {
    if (input === code) {
      setIsCorrect("yes");
    } else {
      setIsCorrect("no");
    }
  }

  return (
    <GeralContainer>
      <CardContainer>
        <TitleCard>Digite o código que você recebeu no email</TitleCard>
        <InputCard onChange={(item) => setInput(item.target.value)} />
        <ButtonCard>
          <TitleButtonCard onClick={validationCode}>
            Esse é o meu código
          </TitleButtonCard>
        </ButtonCard>

        {isCorrect === "yes" ? (
          <TitleCard style={{ color: `green` }}>
            Seu código está correto!
          </TitleCard>
        ) : (
          isCorrect === "no" && (
            <TitleCard style={{ color: `red` }}>
              Seu código está incorreto!
            </TitleCard>
          )
        )}
      </CardContainer>
    </GeralContainer>
  );
}
