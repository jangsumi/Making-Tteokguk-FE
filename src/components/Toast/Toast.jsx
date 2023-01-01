import React, { useEffect } from "react";
import * as styled from "./styles";

const Toast = ({ message, isActive, setIsActive }) => {
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
              <>
                {msg}
                <br />
              </>
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
