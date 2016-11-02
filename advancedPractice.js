var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
{
  name: "Telus",
  province: "BC",
  sales: [ 100, 200, 400 ]
},
{
  name: "Bombardier",
  province: "AB",
  sales: [ 80, 20, 10, 100, 90, 500 ]
},
{
  name: "Telus",
  province: "SK",
  sales: [ 500, 100 ]
}
];

var results = {};
salesTaxReport(companySalesData);
console.log(results);

function salesTaxReport(salesData){
  for (var i = 0 ; i < salesData.length ; i ++){
    if (!results.hasOwnProperty(salesData[i].name)) {
      results[salesData[i].name] = {
        totalSales : calculateCompanySales(salesData[i]),
        totalTax : calculateTax(salesData[i])
      }
    }
    else{
      results[salesData[i].name].totalTax += calculateTax(salesData[i]);
      results[salesData[i].name].totalSales += calculateCompanySales(salesData[i]);
    }
  }
}

function calculateTax(salesData){
  return calculateCompanySales(salesData) * determineTaxRate(salesData);
}

function determineTaxRate(company) {
 if (salesTaxRates.hasOwnProperty(company.province)){
  return salesTaxRates[company.province];
  }
}

function calculateCompanySales(company){
  newCompany = company;
  var total = 0;
  for (var i = 0 ; i < company.sales.length ; i++){
    total += company.sales[i];
  }
  return total;
}
