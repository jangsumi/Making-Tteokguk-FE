import React, { useEffect, useMemo } from "react";
import * as styled from "./styles";

const Toast = ({ message, isActive, setIsActive }) => {
  const bgColor = useMemo(() => ({ backgroundColor: "#ffffff" }), [])
  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setIsActive(false);
      }, 2000);
    }
  });
  return (
    <>
      {isActive ? (
        <styled.ToastBox show={true}>
          {message.split(
            "\n").map((msg) => (
              <div style={bgColor} key={msg}>
                {msg}
                <br />
              </div>
            )
          )}
        </styled.ToastBox>
      ) : (
        <styled.ToastBox show={false} />
      )}
    </>
  );
};

export default Toast;
