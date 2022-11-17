// sk_test_YN9UsbApVJ3UIIz13skDhdL500gihX6LEi;
// coffee: price_1M4tUtJcbczduCCc6z2a9f14
// Tea: price_1M4tYgJcbczduCCcrOZzmguv
// Chocolate: price_1M4tZhJcbczduCCc9Ln9uHF7

const express = require("express");
var cors = require("cors");
const stripe = require("stripe")("sk_test_YN9UsbApVJ3UIIz13skDhdL500gihX6LEi");

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.session.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => console.log("Listening on port 4000"));
