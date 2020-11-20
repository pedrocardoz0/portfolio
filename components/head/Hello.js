import * as React from "react";

import { useDencrypt } from "use-dencrypt-effect";

const values = ["Hello i'm", "Oi eu sou o", "Mon nom est", "Il mio nome é "];

export const Example = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 4000);

    return () => clearInterval(action);
  }, []);

  return <>{result}</>;
};