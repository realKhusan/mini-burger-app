import { Button, Typography } from "antd";
import { useState } from "react";

function OrderQuantity({ count }: { count?: number }) {
  const [quantitiy, setQuantity] = useState(count ? count : 0);
  function handleAction(action: "minus" | "plus") {
    if (action === "plus") {
      setQuantity(quantitiy + 1);
    } else if (action === "minus" && quantitiy > 0) {
      setQuantity(quantitiy - 1);
    }
  }
  return (
    <Button.Group>
      <Button className="text-2xl " onClick={() => handleAction("minus")}>
        -
      </Button>
      <Button disabled>{quantitiy}</Button>
      <Button className="text-2xl " onClick={() => handleAction("plus")}>
        +
      </Button>
    </Button.Group>
  );
}

export default OrderQuantity;
