var vg_1 = "js/payment_methods_by_customers.json";
var vg_2 = "js/Payment_method_according_to_gender.json";
var vg_3 = "js/Complaints_by_providers.json";

//Embed the fouth visualization
vegaEmbed("#pie_chart", vg_1).then(function(result) {
   
}).catch(console.error);

//Embed the fifth visualization
vegaEmbed("#simple_bar_chart", vg_2).then(function(result) {
   
}).catch(console.error);

// Embed the second visualization
vegaEmbed("#stacked_bar_chart", vg_3).then(function(result) {
   
}).catch(console.error);