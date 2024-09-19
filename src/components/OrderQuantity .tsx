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
    <div className="flex items-center gap-3 p-2 justify-evenly rounded-xl bg-thridColor">
      <Button
        className="!border-none bg-transparent text-2xl"
        onClick={() => handleAction("minus")}
      >
        -
      </Button>
      <Typography.Text>{quantitiy}</Typography.Text>
      <Button
        className="!border-none bg-transparent text-2xl"
        onClick={() => handleAction("plus")}
      >
        +
      </Button>
    </div>
  );
}

export default OrderQuantity;
