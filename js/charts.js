window.FreshGuardCharts = {
  instances:{},
  baseOptions(){return {responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{backgroundColor:"#142438",padding:10,titleFont:{family:"DM Sans"},bodyFont:{family:"DM Sans"}}},scales:{x:{grid:{display:false},ticks:{color:"#9aa5b1",font:{size:9}}},y:{grid:{color:"#eef1f3"},ticks:{color:"#9aa5b1",font:{size:9}}}}};},
  draw(id,config){const canvas=document.getElementById(id);if(!canvas||!window.Chart)return;if(this.instances[id])this.instances[id].destroy();this.instances[id]=new Chart(canvas,config);},
  temperature(id="temperatureChart"){
    const labels=["06:00","08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00","00:00","02:00","04:00"];
    this.draw(id,{type:"line",data:{labels,datasets:[
      {label:"Warehouse A",data:[4.5,4.7,4.8,5.1,5.2,5.1,5.0,5.2,5.1,5.0,5.2,5.2],borderColor:"#27966b",backgroundColor:"#27966b",tension:.35,pointRadius:0,borderWidth:2},
      {label:"Transit truck",data:[7,8,10,14,18,23,27,25,21,18,16,14],borderColor:"#e6a04a",backgroundColor:"#e6a04a",tension:.35,pointRadius:0,borderWidth:2},
      {label:"Warehouse B",data:[7.2,7.4,7.5,7.7,7.8,8,8.1,8.2,8.3,8.2,8.4,8.4],borderColor:"#5793d1",backgroundColor:"#5793d1",tension:.35,pointRadius:0,borderWidth:2}
    ]},options:{...this.baseOptions(),scales:{...this.baseOptions().scales,y:{...this.baseOptions().scales.y,title:{display:true,text:"Temperature (°C)",color:"#8b96a3",font:{size:9}}}}}});
  },
  monitor(){const labels=Array.from({length:12},(_,i)=>`${String(i*2).padStart(2,"0")}:00`);this.draw("monitorChart",{type:"line",data:{labels,datasets:[{label:"Temperature",data:[5,5.2,5.1,5.4,6,7,8,7.6,8.1,8.3,8.4,8.4],borderColor:"#25885f",tension:.35,pointRadius:2}]},options:this.baseOptions()});},
  analytics(batches){
    this.draw("lifeChart",{type:"bar",data:{labels:batches.map(b=>b.name),datasets:[{data:batches.map(b=>Math.max(0,ShelfLifeEngine.calculate(b).remaining)),backgroundColor:"#30966c",borderRadius:5}]},options:{...this.baseOptions(),indexAxis:"y"}});
    this.draw("exposureChart",{type:"doughnut",data:{labels:["Reference / cooler","Above reference"],datasets:[{data:[68,32],backgroundColor:["#30966c","#e6a04a"],borderWidth:0}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:"bottom",labels:{boxWidth:9,font:{size:9},color:"#7e8997"}}}}});
  }
};