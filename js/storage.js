window.FreshGuardStorage = {
  key:"freshguard_batches_v1",
  load(){
    try {
      const saved=localStorage.getItem(this.key);
      return saved ? JSON.parse(saved) : structuredClone(window.FreshGuardData.batches);
    } catch(e) { return window.FreshGuardData.batches.map(x=>({...x})); }
  },
  save(batches){ try{localStorage.setItem(this.key,JSON.stringify(batches));}catch(e){console.warn("Local storage unavailable",e);} },
  reset(){localStorage.removeItem(this.key);}
};