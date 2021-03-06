import React, { useState } from "react";
import { Mode } from "./Constants";

type ToggleButtonProps = {
  labels: string[];
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
};

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  labels,
  setMode,
}) => {
  const [value, setValue] = useState<number>(0);

  const onClick = (num: number) => {
    setValue(num);
  };

  const getLabelStyle = (num: number) => {
    let style: React.CSSProperties = DefaultButtonStyle;
    if (num === value) {
      style = { ...style, ...CheckedButtonStyle };
    }
    if (num === 0) {
      style = { ...style, ...FirstButtonStyle };
    } else if (num === labels.length - 1) {
      style = { ...style, ...LastButtonStyle };
    }
    return style;
  };

  return (
    <div style={ToggleButtonStyle}>
      {labels.map((label, i) => {
        return (
          <div
            key={"Button_" + String(i)}
            style={getLabelStyle(i)}
            onClick={() => {
              onClick(i);
              setMode(label as Mode);
            }}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
};

const ToggleButtonStyle: React.CSSProperties = {
  display: "flex",
};

const DefaultButtonStyle: React.CSSProperties = {
  display: "block",
  float: "left",
  cursor: "pointer",
  width: 80,
  margin: 0,
  marginLeft: "-1px",
  padding: "12px 5px",
  border: "solid 1px #aaa",
  backgroundColor: "#fff",
  color: "#aaa",
  fontSize: "20px",
  textAlign: "center",
  lineHeight: "1",
  transition: ".2s",
};

const CheckedButtonStyle: React.CSSProperties = {
  backgroundColor: "#F2F6FC",
  border: "solid 1px #497EDB",
  color: "#497EDB",
};

const FirstButtonStyle: React.CSSProperties = {
  borderRadius: "10px 0 0 10px",
};

const LastButtonStyle: React.CSSProperties = {
  borderRadius: "0 10px 10px 0",
};
