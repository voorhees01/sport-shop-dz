let selectedProduct = "";

function orderProduct(product) {
  selectedProduct = product;
  document.getElementById("orderForm").classList.remove("hidden");
}

function submitOrder() {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const phone = document.getElementById("phone").value;

  if (!name || !surname || !phone) {
    alert("Remplir tous les champs !");
    return;
  }

  const message = `📦 Nouvelle commande:
Produit: ${selectedProduct}
Nom: ${name} ${surname}
Téléphone: ${phone}
Pays: Algérie`;

  const whatsappNumber = "213XXXXXXXXX"; // 🔴 PUT YOUR NUMBER HERE

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
