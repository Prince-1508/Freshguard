window.FreshGuardRecommendations = {
  forBatch(batch) {
    const p = ShelfLifeEngine.calculate(batch);
    const days = Math.max(0, p.remaining);
    if (days < 1) return { level:"critical", title:`Urgent quality inspection: ${batch.name}`, detail:`${batch.id} has approximately ${days.toFixed(1)} days of estimated shelf life remaining. Hold the batch for a physical quality check. If it passes the organisation's quality criteria, evaluate immediate sale or an approved processing route.`, action:"Inspect before any dispatch", icon:"!", window:"Under 1 day" };
    if (days < 3) return { level:"high", title:`Prioritise immediate dispatch: ${batch.name}`, detail:`${batch.id} has approximately ${days.toFixed(1)} days remaining. Move it to the front of the dispatch queue, target the nearest suitable market and complete a quality check before release.`, action:"Sell / dispatch first", icon:"↗", window:"1–3 days" };
    if (days < 7) return { level:"medium", title:`Plan priority sale: ${batch.name}`, detail:`${batch.id} has approximately ${days.toFixed(1)} days remaining. Schedule dispatch ahead of healthier stock, avoid unnecessary storage and monitor temperature until delivery.`, action:"Priority dispatch", icon:"◷", window:"3–7 days" };
    if (p.currentRate > 1.3) return { level:"watch", title:`Review storage conditions: ${batch.name}`, detail:`${batch.id} has approximately ${days.toFixed(1)} days remaining, but its estimated deterioration rate is ${p.currentRate.toFixed(2)}× the reference rate. Check the storage set point and reduce avoidable temperature exposure.`, action:"Storage review", icon:"⌁", window:"7+ days · elevated rate" };
    return { level:"good", title:`Maintain conditions: ${batch.name}`, detail:`${batch.id} has approximately ${days.toFixed(1)} days remaining. Continue the configured storage routine, monitor the environment and dispatch according to the normal plan.`, action:"Continue monitoring", icon:"✓", window:"7+ days" };
  },
  all(batches) { return batches.map(batch => ({ batch, ...this.forBatch(batch), prediction:ShelfLifeEngine.calculate(batch) })).sort((a,b)=>a.prediction.remaining-b.prediction.remaining); }
};
