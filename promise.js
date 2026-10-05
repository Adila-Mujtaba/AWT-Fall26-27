function processOrder(){
    return new Promise ((resolve, reject) =>{
        console.log("processing order");

        setTimeout(() => {
            const success = true;

            if (success){
                resolve({
                    orderId: 42017,
                    customer: "adila",
                    item: "chicken burger",
                    quantity: 2,
                    total: 500
                });
            } else {
                reject("failed to process the order");
            }
        },3000);
    });
}

processOrder()
    .then(order =>{
        console.log("Order received");
        console.log("Order id: " + order.orderId);
        console.log("Customer name: " + order.customer);
        console.log("Selected item: " + order.item);
        console.log("Quantity: " + order.quantity);
        console.log("Total Amount: " + order.total);
    })
    .catch(error =>{
        console.log("error: " + error)
    })
    .finally(msg => {
        console.log("Order Processing completed.")
    })