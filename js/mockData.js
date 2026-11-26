// All values below are fictional demonstration data.
window.FreshGuardData = {
  batches: [
    {id:"TOM-1024",name:"Tomatoes",type:"Vegetable",emoji:"🍅",quantity:420,temperature:15,humidity:82,location:"Warehouse B",shelfLife:10,referenceTemp:20,q10:2,age:2.8,created:"2026-11-22",journey:[{place:"Warehouse A",temp:20,humidity:78,hours:24,note:"Initial storage and quality intake."},{place:"Transit truck",temp:28,humidity:70,hours:8,note:"Temperature excursion during transportation."},{place:"Warehouse B",temp:15,humidity:82,hours:24,note:"Transferred to destination cold storage."}]},
    {id:"APP-2081",name:"Apples",type:"Fruit",emoji:"🍎",quantity:650,temperature:4,humidity:88,location:"Warehouse A",shelfLife:30,referenceTemp:4,q10:2,age:8,created:"2026-11-18",journey:[{place:"Warehouse A",temp:4,humidity:88,hours:48,note:"Stable refrigerated storage."}]},
    {id:"BAN-3310",name:"Bananas",type:"Fruit",emoji:"🍌",quantity:280,temperature:19,humidity:84,location:"Transit truck",shelfLife:7,referenceTemp:14,q10:2,age:5.4,created:"2026-11-20",journey:[{place:"Warehouse A",temp:14,humidity:85,hours:20,note:"Initial ripening-room storage."},{place:"Transit truck",temp:19,humidity:84,hours:12,note:"Warm transport conditions."}]},
    {id:"POT-4112",name:"Potatoes",type:"Vegetable",emoji:"🥔",quantity:900,temperature:12,humidity:90,location:"Warehouse B",shelfLife:45,referenceTemp:10,q10:2,age:12,created:"2026-11-10",journey:[{place:"Warehouse A",temp:10,humidity:90,hours:48,note:"Bulk storage."},{place:"Transit truck",temp:16,humidity:75,hours:6,note:"Short transfer."},{place:"Warehouse B",temp:12,humidity:90,hours:24,note:"Destination storage."}]},
    {id:"STR-5510",name:"Strawberries",type:"Fruit",emoji:"🍓",quantity:120,temperature:8,humidity:86,location:"Warehouse A",shelfLife:5,referenceTemp:2,q10:2.2,age:3.1,created:"2026-11-24",journey:[{place:"Warehouse A",temp:2,humidity:90,hours:12,note:"Received chilled."},{place:"Transit truck",temp:11,humidity:75,hours:5,note:"Cold-chain interruption."}]},
    {id:"CUC-6102",name:"Cucumbers",type:"Vegetable",emoji:"🥒",quantity:310,temperature:11,humidity:91,location:"Warehouse B",shelfLife:12,referenceTemp:10,q10:2,age:3.2,created:"2026-11-23",journey:[{place:"Warehouse A",temp:10,humidity:90,hours:24,note:"Initial storage."},{place:"Warehouse B",temp:11,humidity:91,hours:24,note:"Stable destination storage."}]},
    {id:"MAN-7118",name:"Mangoes",type:"Fruit",emoji:"🥭",quantity:190,temperature:22,humidity:80,location:"Warehouse A",shelfLife:9,referenceTemp:20,q10:2,age:2.1,created:"2026-11-24",journey:[{place:"Warehouse A",temp:20,humidity:82,hours:24,note:"Ripening and holding."}]},
    {id:"CAR-8120",name:"Carrots",type:"Vegetable",emoji:"🥕",quantity:500,temperature:5,humidity:93,location:"Warehouse B",shelfLife:25,referenceTemp:4,q10:2,age:6,created:"2026-11-19",journey:[{place:"Warehouse A",temp:4,humidity:92,hours:36,note:"Chilled storage."},{place:"Transit truck",temp:7,humidity:88,hours:4,note:"Short refrigerated transit."}]}
  ],
  locations:[
    {name:"Warehouse A",temperature:5.2,humidity:88,capacity:78,status:"Optimal"},
    {name:"Transit truck",temperature:18.6,humidity:76,capacity:54,status:"Warning"},
    {name:"Warehouse B",temperature:8.4,humidity:89,capacity:86,status:"Optimal"}
  ],
  activities:[
    {title:"Temperature excursion detected",detail:"Transit truck crossed its configured demo threshold.",time:"12 minutes ago",color:"orange"},
    {title:"Batch TOM-1024 received",detail:"420 kg of tomatoes logged at Warehouse B.",time:"48 minutes ago",color:"green"},
    {title:"Strawberries flagged for inspection",detail:"Remaining-life estimate moved into watch range.",time:"2 hours ago",color:"red"},
    {title:"Daily inventory simulation refreshed",detail:"Mock sensor readings generated successfully.",time:"4 hours ago",color:"green"}
  ]
};